import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav  id = "navbarclr" className="navbar navbar-expand-sm shadow zProp fixed-top">
        <div className="container-fluid px-4">
          <NavLink id = "navbtnclr" className="navbar-brand" to="#">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink id = "navbtnclr" className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink id = "navbtnclr" className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink id = "navbtnclr" className="nav-link" to="/faq">
                  FAQ
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link className="nav-link" to="/login">
                <button id = "loginbtnclr" className="btn btn-outline-primary rounded-pill ms-auto">
                  <i className="fa fa-sign-in me-2"></i>Login
                </button>
              </Link>
              <Link className="nav-link" to="/register">
                <button id = "loginbtnclr" className="btn btn-outline-primary rounded-pill ms-2">
                  <i className="fa fa-user-plus me-2"></i>Register
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
