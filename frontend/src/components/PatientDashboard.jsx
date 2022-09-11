import React from "react";
import "../css/patientdashboard.css";

function PatientDashboard(props) {
  return (
    <>
      <section className="patientDashboardSection">
        <div className="container-fluid d-flex align-items-center" id="userDisplay">
          <div className="row w-100">
            <div className="col-md-2 p-2 d-flex justify-content-center align-items-center">
              <svg height="150" width="150">
                <circle cx="70" cy="70" r="55" fill="grey" />
              </svg>
            </div>
            <div className="col-md-10 p-2 d-flex flex-column justify-content-center align-items-start">
              <h3 id="profileName">{props.name}Nachiket Dodia</h3>
              <h4 className="text-muted">
                {props.email}nachiketdodia33@gmail.com
              </h4>
            </div>
          </div>
        </div>
        <div className="row" id="renderingWindow"></div>
      </section>
    </>
  );
}

export default PatientDashboard;
