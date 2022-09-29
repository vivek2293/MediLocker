import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/patientdashboard.css";
import RenderingWindow from "./RenderingWindow";

function PatientDashboard() {
  const [userEmail, setUserEmail] = useState("vivek22935@gmail.com");
  const [userName, setUserName] = useState("");
  const [userRecord,setUserRecord] = useState([{ }]);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const data = await axios.post("http://localhost:5000/user", { "Patemail" : userEmail});
        console.log(data);
        const userInfo = data.data.task;
        setUserEmail(userInfo[0].Patemail);
        setUserName(userInfo[0].Patname);
        setUserRecord(userInfo);
      }
      catch(error){
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  
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
            <div className="col-md-10 p-2 d-flex flex-column justify-content-center align-items-start">
              <h3 id="profileName">{userName}</h3>
              <h4 className="text-muted">
                {userEmail}
              </h4>
            </div>
          </div>
        </div>
        <div className="row" id="renderingWindow">
          <RenderingWindow props={userRecord}/>
        </div>
      </section>
    </>
  );
}

export default PatientDashboard;
