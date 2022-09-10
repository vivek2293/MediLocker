import React from "react";
import "../css/singlerecord.css";

function SingleRecord(props) {
  return (
    <>
      <div id="mainWrap">
        <div className="row justify-content-end my-2">
          <div className="col-md-8">
            <h4 className="fw-bold d-inline">Doctor : Dr. {props.doctor}</h4>
          </div>
          <div className="col-md-4">
            <h4 className="text-muted fw-bold">
              Date of Diagnosis:
              {props.date}
            </h4>
          </div>
        </div>
        <div className="row">
          <h3 className="fw-bold col-md-3">Disease :</h3>
          <h3 className="col-md-9">{props.disease}</h3>
        </div>
        <div className="row">
          <h3 className="fw-bold col-md-3">Remarks :</h3>
          <h3 className="col-md-9">{props.remarks}</h3>
        </div>
        <div className="row">
          <h3 className="fw-bold col-md-3">Prescribed Medications :</h3>
          <h3 className="col-md-9">{props.prescribedDrugs}</h3>
        </div>
      </div>
    </>
  );
}

export default SingleRecord;
