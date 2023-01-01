import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Faq from "./components/Faq";
import { Routes, Route } from "react-router-dom";
import LoginOption from "./components/LoginOption";
import Register from "./components/Register";
import AdminRegister from "./components/AdminRegister";
import Login from './components/Login'
import AdminLogin from './components/AdminLogin'
import SingleRecord from "./components/SingleRecord";
import PatientDashboard from "./components/PatientDashboard";
import PatientView from "./components/PatientView";
import AdminDashboard from "./components/AdminDashboard";
import ReportForm from "./components/ReportForm";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <Routes>
        {/* Landing Page */}
        <Route exact path="/" element={<><Navbar /><Home /></>} />
        <Route exact path="/about" element={<><Navbar /><About/></>} />
        <Route exact path="/faq" element={<><Navbar /><Faq /></>} />
        <Route exact path="/login" element={<><Navbar /><LoginOption message="Login" /></>} />
        <Route exact path="/login/patient" element={<><Navbar /><Login /></>} />
        <Route exact path="/login/doctor" element={<><Navbar /><AdminLogin /></>} />
        <Route exact path="/register" element={<><Navbar /><LoginOption message="Register" /></>} />
        <Route exact path="/register/patient" element={<><Navbar /><Register /></>} />
        <Route exact path="/register/doctor" element={<><Navbar /><AdminRegister /></>} />

        {/* <Route exact path="/patientView" element={<><PatientView /></>} /> */}
        <Route exact path="/admin" element={<><AdminDashboard /></>} />
        {/* <Route exact path="/user" element={<><PatientDashboard/></>} /> */}
        {/* <Route exact path="/temp" element={<><SingleRecord/></>} /> */}
        {/* <Route exact path="/register/doctor/report" element={<><ReportForm /></>} /> */}
        {/* <Route exact path="/user" element={<><Protected Component= {PatientDashboard}/></>} /> */}
      </Routes>
    </>
  );
}

export default App;
