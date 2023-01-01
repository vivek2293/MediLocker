import React from "react";
import axios from "axios";
import "../css/admindashboard.css";
import { useState, useEffect } from "react";
import AdminSearch from "./AdminSearch";

function AdminDashboard() {
  const dashboardSection = {
    height: "100vh",
    width: "100%",
    margin: "0px",
    ppadding: "0px",
  };
  const docInfoSection = {
    height: "100vh",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        //NEED DATA FROM SERVER //NEED TO SET DR EMAIL ON LOGIN TO CACHE
        const data = await axios.post(
          "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
          {
            //BODY
          }
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const [name, setName] = useState("Vivek");
  const [email, setEmail] = useState("vivek@gmail.com");
  const [imr, setImr] = useState(0);
  const [prescriptionCount, setPrescriptionCount] = useState(56);

  return (
    <>
      <section
        className="dashboardSection row align-items-center"
        style={dashboardSection}
      >
        <div
          className="col-md-3 d-flex flex-column justify-content-start align-items-center"
          style={docInfoSection}
          id="profileSection"
        >
          <svg height="150" width="150">
            <circle cx="70" cy="70" r="55" fill="grey" />
          </svg>
          <h4 className="fw-bold display-6 text-center">{name}</h4>
          <h6 className="mutedInfo">{email}</h6>
          <h6 className="mutedInfo">IMR : {imr}</h6>
          <div
            id="prescriptionCard"
            className="card px-3 py-3 mt-5 d-flex flex-column justify-content-center align-item-center"
          >
            <div id="prescriptionText" className="text-center">
              No. of Prescriptions{" "}
            </div>
            <hr />
            <div className="display-3 text-center">{prescriptionCount}</div>
          </div>
        </div>
        {/* Will Toggle this window with search bar and info */}
        <AdminSearch name={name} />
      </section>
    </>
  );
}

export default AdminDashboard;
