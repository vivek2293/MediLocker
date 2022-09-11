import axios from "axios";
import React from "react";
import '../css/admindashboard.css'
import AdminSearch from "./AdminSearch";
function searchByEmail() {
  const email = document.getElementById('email').value;
  try {
    axios.post('localhost:5000/report', { email_id: email });
  } catch (error) {
    console.log(error);
  }
  console.log('ho gaya')
}
function AdminDashboard(props) {
  const dashboardSection = {
    height: "100vh",
    width: "100%",
    margin: "0px",
    ppadding: "0px",
  };
  const docInfoSection = {
    height: "100vh",
  };
  return (
    <>
      <section
        className="dashboardSection row align-items-center"
        style={dashboardSection}
      >
        <div className="col-md-3 bg-primary d-flex flex-column justify-content-start align-items-center" style={docInfoSection} id='profileSection'>
          <svg height="150" width="150">
            <circle cx="70" cy="70" r="55" fill="grey" />
          </svg>
          <h4>{props.name}Vivek Kumar</h4>
          <h6 className="text-muted">{props.email}vivek_k69@gmail.com</h6>
          <h6 className="text-muted">IMR : {props.imr}104110</h6>

        </div>
        <AdminSearch name="Vivek" searchByEmail={searchByEmail}/>

      </section>
    </>
  );
}

export default AdminDashboard;
