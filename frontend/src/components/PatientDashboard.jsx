import React from "react";
import "../css/patientdashboard.css";

function PatientDashboard() {
  return (
    <>
      <section className="patientDashboardSection">
        <div className="row" id="userDisplay">
          <div className="col-md-2 d-flex justify-content-center align-items-center">
            <svg height='150' width='150'>
              <circle
                cx="70"
                cy="70"
                r="55"
                fill="grey"
              />
            </svg>
          </div>
          <div className="col-md-10"></div>
        </div>
        <div className="row" id="renderingWindow"></div>
      </section>
    </>
  );
}

export default PatientDashboard;
