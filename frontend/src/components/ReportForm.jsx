import React, {useState} from "react";
import {storage} from '../../src/firebase';
import {getDownloadURL, ref, uploadBytesResumable} from '@firebase/storage';
import registerCardImg from "../resources/images/registerCardImg.png";
import "../css/register.css";

const ReportForm = () => {
  const [progress ,Setprogress] = useState(0);
  
  const handleSubmit = () => {
    const file = document.getElementById('upload').files[0]
      if(!file) return;
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef,file);

      uploadTask.on("state_changed", (snapshot) => {
          const progress = Math.round(snapshot.bytesTransferred/snapshot.totalBytes)*100;
          console.log(progress)
          Setprogress(progress);
      }, (err) => console.log(err), () => {
          getDownloadURL(uploadTask.snapshot.ref)
          .then(url => console.log(url));
      });
  }

  return (
    <>
      <section className="p-3" id="registerSection">
        <div className="container" id="customRegister">
          <div className="card mb-3" id="card">
            <div className="row g-0">
              <div className="d-none d-md-block col-md-5">
                <img
                  src={registerCardImg}
                  className="img-fluid rounded-start"
                  alt="RegisterCardImg"
                />
              </div>
              <div className="d-none d-md-flex justify-content-center align-items-center col-md-1">
                <hr id="vr" width="2px" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <div className="row my-1">
                    <div className="d-flex justify-content-center align-items-center my-2">
                      <div className="fa fa-receipt fa-2x me-2">###fa-icon###</div>Report
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <hr className="w-100" />
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-10 my-2">
                      <label htmlFor="hospitalName" className="form-label">
                        Hospital name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="hospitalName"
                        required
                      />
                    </div>
                    <div className="col-md-10 my-2">
                      <label htmlFor="patientName" className="form-label">
                        Patient name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="patientName"
                        required
                      />
                    </div>
                    <div className="col-md-10 my-2">
                      <label htmlFor="email" className="form-label">
                        Patient Email
                      </label>
                      <input
                        id="email"
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="col-md-10 my-2">
                      <label htmlFor="doctorName" className="form-label">
                        Doctor name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="doctorName"
                        required
                      />
                    </div>
                    <div className="col-md-10 my-2">
                      <label htmlFor="doctorID" className="form-label">
                        Doctor ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="doctorID"
                        required
                      />
                    </div>
                    <div className="col-md-10 my-2">
                      <label htmlFor="disease" className="form-label">
                        Diagnosed Disease
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="disease"
                        required
                      />
                    </div>
                    <form className="d-flex justify-content-center">
                      <div className="form-floating col-md-10 my-2">
                        <textarea
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="prescription"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label htmlFor="prescription">Prescription</label>
                      </div>
                    </form>
                    <div className="col-md-10 my-2">
                      <label htmlFor="upload" className="form-label">
                        Report: <span className="text-muted">(if any)</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="upload"
                        required
                      />
                    </div>
                    <div className="col-md-10 my-2">
                    <span className="text-muted">Uploading {progress}%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: `${progress}%`, ariaValuenow: "0", ariaValuemin: "0", ariaValuemax: "100"}}>{progress}</div>
                    </div>
                    </div>
                    <div className="col-12 mt-3 mb-1 d-flex justify-content-around">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        id="btnSubmit"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportForm;
