import React from "react";
import { Link } from "react-router-dom";
import '../css/loginoption.css'
function LoginOption(props) {
  const sectionStyle = {
    height: "100vh",
  };
  const address=props.message;
  const patientURL = `/${address.toLowerCase()}/patient`;
  const doctorURL = `/${address.toLowerCase()}/doctor`;
  console.log(address);
  return (
    <>
      <section className="loginOption mt-md-3 py-md-5 d-flex flex-column justify-content-center"  id = "login-option" style={sectionStyle}>
        <div
          className="container d-flex justify-content-center align-items-center"
           id="option-box"
        >
          <div className="card py-md-3 py-sm-2 px-4 mt-4" id="optcard">
            <h3 id = "whomsg" className="text-center display-md-6">
              Who Do You Want To {props.message} As?
            </h3>
            <hr id="card-line"/>
            <div className="row">
            <div className="col-md-6 my-1 btnLayout d-flex p-md-5 justify-content-center align-items-center">
              <Link to={patientURL}>
                <button
                  type="button"
                  className="mx-md-5  display-5 text-center" id ="option-btn"
                >
                  Patient
                </button>
              </Link>
              </div>
              <div className="col-md-6 my-1 btnLayout d-flex p-md-5 justify-content-center align-items-center">
              <Link to={doctorURL}>
                <button
                  type="button"
                  className="mx-md-5  display-5 text-center" id ="option-btn"
                >
                  Doctor
                </button>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginOption;
