import React from "react";
import "../css/patientdashboard.css";

function PatientDashboard() {
  return (
    <>
      <section className="patientDashboardSection">
        <div className="row" id="userDisplay">
          <div className="col-md-2">
          </div>
        </div>
        <div className="row" id="renderingWindow"></div>
      </section>
    </>
  );
}

export default PatientDashboard;
