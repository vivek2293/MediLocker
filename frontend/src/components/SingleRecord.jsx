import React from "react";
import "../css/singlerecord.css";

function SingleRecord(props) {
  console.log(props);
  const data = props.props;
  
  return (
    <>
      <div id="mainWrap">
        <div className="row justify-content-end my-2">
          <div className="col-md-8">
            <h4 className="fw-bold d-inline">Doctor : Dr. {data.Docname}</h4>
          </div>
          <div className="col-md-4">
            <h4 className="text-muted fw-bold">
              Date of Diagnosis:
              {data.Date}
            </h4>
          </div>
        </div>
        <div className="row">
          <h3 className="fw-bold col-md-3">Disease :</h3>
          <h3 className="col-md-9">{data.detail.Disease}</h3>
        </div>
        <div className="row">
          <h3 className="fw-bold col-md-3">Remarks :</h3>
          <h3 className="col-md-9">{data.Remarks}</h3>
        </div>
        <div className="row">
          <h3 className="fw-bold col-md-3">Prescribed Medications :</h3>
          <h3 className="col-md-9">{data.detail.Prescription}</h3>
        </div>
      </div>
    </>
  );
}

export default SingleRecord;
