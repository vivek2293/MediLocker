import React from "react";
import { Link } from "react-router-dom";

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
      <section className="loginOption" style={sectionStyle}>
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="box">
            <h3 className="text-center mb-4 display-6">
              {" "}
              Who Do You Want To {props.message} As?
            </h3>
            <div className="btnLayout d-flex justify-content-center align-items-center">
              <Link to={patientURL}>
                <button
                  type="button"
                  className="mx-5 px-4 py-2 rounded-pill display-4 text-center"
                >
                  Patient
                </button>
              </Link>
              <Link to={doctorURL}>
                <button
                  type="button"
                  className="mx-5 px-4 py-2 rounded-pill display-4 text-center"
                >
                  Doctor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginOption;
