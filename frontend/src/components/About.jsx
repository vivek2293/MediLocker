import React from "react";
import "../css/about.css";
function About() {
  return (
    <>
      <section id="aboutArea" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center">
          <h3 className="text-center w-50">
            Our Project Aims At Creating A More Efficient Communication Between
            Patient And Doctors And Also To Help People Maintain Well Documented
            Medical Records Of Their Own.
          </h3>
          <h4 className="mt-5 fw-bold" style={{color:"#DEF2F1"}}>
            OUR TEAM
            <hr />
          </h4>
          <div class="d-flex justify-content-between" style={{color:"#FEFFFF"}}>
            <h5 class="p-3 ">Vivek Kumar</h5>
            <h5 class="p-3 ">Mayur Valecha</h5>
            <h5 class="p-3 ">Shrey Shah</h5>
            <h5 class="p-3 ">Nachiket Dodia</h5>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
