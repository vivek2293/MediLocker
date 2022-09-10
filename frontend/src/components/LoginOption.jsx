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
      <section className="loginOption d-flex"  id = "login-option" style={sectionStyle}>
        <div
          className="container d-flex justify-content-center "
          style={{ height: "100vh" }} id="option-box"
        >
          <div className="card py-5 px-5 mt-5 justify-content-around" id="optcard">
            <h3 id = "whomsg" className="text-center display-6">
              {" "}
              Who Do You Want To {props.message} As?
            </h3>
            <hr id="card-line"/>
            <div className="row">
            <div className="col-md-6 btnLayout d-flex p-3 justify-content-center align-items-center">
              <Link to={patientURL}>
                <button
                  type="button"
                  className="mx-5 rounded-pill display-4 text-center" id ="option-btn"
                >
                  Patient
                </button>g
              </Link>
              </div>
              <div className="col-md-6 btnLayout d-flex p-3 justify-content-center align-items-center">
              <Link to={doctorURL}>
                <button
                  type="button"
                  className="mx-5 rounded-pill display-4 text-center" id ="option-btn"
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
