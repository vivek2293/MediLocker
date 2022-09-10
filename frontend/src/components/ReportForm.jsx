// import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import registerCardImg from "../resources/images/registerCardImg.png";
import "../css/register.css";

const ReportForm = () => {
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
                          class="form-control"
                          placeholder="Leave a comment here"
                          id="prescription"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label for="prescription">Prescription</label>
                      </div>
                    </form>
                    <div className="col-12 my-1 d-flex justify-content-around">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        id="btnSubmit"
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
