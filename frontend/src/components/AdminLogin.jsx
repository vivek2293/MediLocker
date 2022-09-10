import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./css/login.css";
import loginImage from "../Resource/img/login.png";

function Login() {
  const checkStatus = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const data = {
      email: email,
      password: password,
    };

    console.log(data);

    const verification = async () => {
      try {
        const result = await axios.post("http://localhost:5000/login", data);
        if (result.status === "ok") {
          alert("Success");
        } else {
          alert("Failed");
        }
      } catch (error) {
        console.log(error);
      }
    };

    verification();
  };
  return (
    <>
      <section className="p-3" id="loginSection">
        <div className="d-flex justify-content-end px-3">
        <Link className="nav-link active" aria-current="page" to="/"><span class="fa fa-close fa-2x"></span></Link>
        </div>
        <div className="container w-75" id="customLogin">
          <div className="card mb-3" id="card">
          <div className="row g-0">
                <div className="col-md-7">
                    <div className="card-body">
                    <h5 className="card-title text-center py-4 display-6 fw-bold">
                        ADMIN LOGIN
                    </h5>
                    <div className="row g-3 d-flex justify-content-center">
                        <div className="col-md-8 py-1">
                        <label htmlFor="email" className="form-label">
                            Email ID
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                        />
                        </div>
                        <div className="col-md-8 py-1">
                        <label htmlFor="docId" className="form-label">
                            Your ID
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="docId"
                            required
                        />
                        </div>
                        <div className="col-md-8">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            required
                        />
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                        </div>
                        <div className="col-12 my-4 d-flex justify-content-center">
                        <button
                            className="btn btn-outline-primary"
                            onClick={checkStatus}
                        >
                            Login
                        </button>
                        <button className="btn btn-outline-secondary mx-3">
                            Sign Up
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <img
                    src={loginImage}
                    className="img-fluid rounded-start "
                    alt="..."
                    />
                </div>
                </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
