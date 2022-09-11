import React from "react";
import { Link } from "react-router-dom";
import "../css/patientview.css";
import RenderingWindow from "./RenderingWindow";

function patientView(props) {
  return (
    <>
      <section className="patientDashboardSection">
        <div
          className="container-fluid d-flex align-items-center"
          id="userDisplay"
        >
          <div className="row w-100">
            <div className="col-md-2 p-2 d-flex justify-content-center align-items-center">
              <svg height="150" width="150">
                <circle cx="70" cy="70" r="55" fill="grey" />
              </svg>
            </div>
            <div className="col-md-8 p-2 d-flex flex-column justify-content-center align-items-start">
              <h3 id="profileName">{props.name}Nachiket Dodia</h3>
              <h4 className="text-muted">
                {props.email}nachiketdodia33@gmail.com
              </h4>
            </div>
            <div className="col-md-2 d-flex align-items-center">
              <Link to="/ok">
                <div
                  className="card bg-primary px-3 py-4 d-flex flex-column justify-content-center align-items-center"
                  id="addText"
                >
                  <i className="fa fa-plus fw-bold"></i>
                  <h4 className="text-center">Add Prescription</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="row" id="renderingWindow">
          <RenderingWindow />
        </div>
      </section>
    </>
  );
}

export default patientView;
