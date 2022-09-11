import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom'
import registerCardImg from "../resources/images/registerCardImg.png";
import "../css/register.css";

const AdminRegister = () => {
  
  const handleSubmit = () => {
    const name = document.getElementById("name").value.trim().toUpperCase();
    const docRegistration = document
      .getElementById("docRegistration")
      .value.trim();
    const email = document.getElementById("email").value.trim();
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    if (password1 !== password2 || password1.length < 1) {
      document.getElementById("password1").style.borderColor = "red";
      document.getElementById("password2").style.borderColor = "red";
      return;
    }

    const validateDoctor = async () => {
      try {
        const getURL = `https://www.nmc.org.in/MCIRest/open/getPaginatedData?service=getPaginatedDoctor&start=0&length=500&search%5Bvalue%5D=&search%5Bregex%5D=false&registrationNo=${docRegistration}&name=${name}`;
        console.log(getURL);

        const result = await axios.get(getURL, "");
        const list = await result.data.data;
        console.log(list);

        if (result.status === 200 && result.data.recordsFiltered >= 1) {
          for (let item = 0; item < list.length; item++) {
            if (list[item][2] === docRegistration) {
              alert("verified doctor");
              postEmail();
              break;
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    validateDoctor();


    const postEmail = async () => {
      try {
        const result = await axios
          .post("http://localhost:5000/signup/otp", {email : email})
        document.getElementById("password1").style.borderColor = "#D3D3D3";
        document.getElementById("password2").style.borderColor = "#D3D3D3";
        console.log(result);

        if(result.status === 200){
          document.getElementById("otpRow").style.visibility = "visible";
          document.getElementById("btnSubmit").style.display = "none";
          document.getElementById("verifyOTP").style.display = "block";
        }
        else{
          alert('Error');
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

  const verifyOtp = () => {
    const name = document.getElementById("name").value.trim().toUpperCase();
    const docRegistration = document
      .getElementById("docRegistration")
      .value.trim();
    const email = document.getElementById("email").value.trim();
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const otp = document.getElementById("otp").value; 

    if (password1 !== password2 || password1.length < 1) {
      document.getElementById("password1").style.borderColor = "red";
      document.getElementById("password2").style.borderColor = "red";
      return;
    }

    const info = {
      name: name,
      docRegistration: docRegistration,
      email: email,
      password: password1,
      otp: otp
    };
    console.log(info);

    const validateDoctor = async () => {
      try {
        const getURL = `https://www.nmc.org.in/MCIRest/open/getPaginatedData?service=getPaginatedDoctor&start=0&length=500&search%5Bvalue%5D=&search%5Bregex%5D=false&registrationNo=${docRegistration}&name=${name}`;

        const result = await axios.get(getURL, "");
        const list = await result.data.data;

        if (result.status === 200 && result.data.recordsFiltered >= 1) {
          for (let item = 0; item < list.length; item++) {
            console.log(list[item][2]);
            console.log(docRegistration);
            console.log(list[item][2] === docRegistration);
            if (list[item][2] === docRegistration) {
              postInfo();
              break;
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    validateDoctor();

    const postInfo = async () => {
      try {
        await axios
          .post("http://localhost:5000/signup/dr", info)
          .then(() => {
            console.log("success");
            window.location.replace("http://localhost:3000/login/doctor");
          });
      } catch (error) {
        console.log(error);
      }
    };
  }

  return (
    <>
      <section className="p-3" id="registerSection">
        <div className="d-flex justify-content-end">
        <Link className="nav-link active" aria-current="page" to="/"><span className="fa fa-close fa-2x"></span></Link>
        </div>
        <div className="container" id="customRegister">
          <div className="card mb-3" id="card">
            <div className="row g-0">
              <div className="d-none d-md-block col-md-5 align-self-center">
                <img
                  src={registerCardImg}
                  className="img-fluid rounded-start"
                  alt="RegisterCardImg"
                />
              </div>
              <div className="d-none d-md-flex justify-content-center align-items-center col-md-1">
                <hr id="vr" width="2px" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <div className="row my-1">
                    <div className="d-flex justify-content-center align-items-center my-2">
                      <div className="fa fa-user-plus fa-2x me-2"></div>DOCTOR
                      Sign-up
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <hr className="w-100" />
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-10 my-2">
                      <label htmlFor="name" className="form-label">
                        Your name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="(As per IMR register)"
                        required
                      />
                    </div>
                    <div className="col-md-10 my-2">
                      <label htmlFor="docRegistration" className="form-label">
                        Registration No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="docRegistration"
                        placeholder="(As per IMR register)"
                        required
                      />
                    </div>
                    <div className="col-md-10 my-2">
                      <label htmlFor="email" className="form-label">
                        Enter your Email
                      </label>
                      <input
                        id="email"
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="col-md-10 my-2">
                      <label htmlFor="password1" className="form-label">
                        Password
                      </label>
                      <input
                        id="password1"
                        className="form-control"
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="col-md-10 my-2">
                      <label htmlFor="password2" className="form-label">
                        Confirm your Password
                      </label>
                      <input
                        id="password2"
                        className="form-control"
                        name="password"
                        type="password"
                        placeholder="Re-enter your password"
                        required
                      />
                    </div>
                    <div className="col-md-10 my-3" id="otpRow" style={{visibility: "hidden",}}>
                      <div className="row">
                        <label
                          htmlFor="otp"
                          className="col-lg-2 col-sm-3 col-form-label"
                        >
                          OTP:
                        </label>
                        <div className="col-5">
                          <input
                            type="text"
                            className="form-control"
                            id="otp"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 my-1 d-flex justify-content-around">
                      <button
                        className="btn btn-secondary" type="button" id="btnSubmit"
                        onClick={handleSubmit}
                        >
                        Register
                      </button>
                    </div>
                    <div className="col-12 my-1 d-flex justify-content-around">
                      <button
                        className="btn btn-secondary" type="button"
                        onClick={verifyOtp} id="verifyOTP" style={{display : "none"}}
                      >
                        Verify OTP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminRegister;
