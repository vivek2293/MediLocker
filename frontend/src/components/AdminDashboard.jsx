import axios from "axios";
import React from "react";
function searchByEmail(){
    const email=document.getElementById('email').value;
    try {
        axios.post('localhost:5000/report',{email_id: email});
    } catch (error){
        console.log(error);
    }
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
        <div className="container justify-content-center  col-9">
          <div className="helloPrompt text-center">
            <h3 className="display-4 fw-bold mb-3">Hello Dr.{props.name}Vivek !</h3>
            <p className="mx-5 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusamus quia eos quos corrupti quas sit! Quaerat hic aspernatur, impedit totam debitis delectus beatae accusamus atque tenetur, at, laborum ad!</p>
          </div>
          <form class="d-flex justify-content-center mt-2" role="search">
            <input
              class="me-2 rounded-pill col-5 text-center p-2"
              type="email"
              placeholder="Search Patient by Email ID"
              aria-label="Search"
              id="email"
            />
            <button
              class="btn btn-outline-success rounded-pill col-2 p-2 fw-bold fs-5"
              type="submit"
              onClick={searchByEmail}
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-3 bg-primary" style={docInfoSection}>
          {/* <button>info</button> */}

        </div>
      </section>
    </>
  );
}

export default AdminDashboard;
