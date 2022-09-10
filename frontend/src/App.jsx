import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LoginOption from "./components/LoginOption";
import Register from "./components/Register";
import AdminRegister from "./components/AdminRegister";
import Login from './components/Login'
import AdminLogin from './components/AdminLogin'
import SingleRecord from "./components/SingleRecord";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<><Navbar /><Home /></>} />
        <Route exact path="/check" element={<><SingleRecord disease="Fever" date="30/09/2003" remarks="High blood pressure and Low blood glucose levels. Chances of Stroke." prescribedDrugs="Crocin, Iboobprufen, Vitamin E tablets, Crocin, Iboobprufen, Vitamin E tablets, Crocin, Iboobprufen, Vitamin E tablets" doctor="Vivek Kumar"/></>} />
        <Route exact path="/about" element={<><Navbar /><About /></>} />
        <Route exact path="/login" element={<><Navbar /><LoginOption message="Login" /></>} />
        <Route exact path="/login/patient" element={<><Navbar /><Login /></>} />
        <Route exact path="/login/doctor" element={<><Navbar /><AdminLogin /></>} />
        <Route exact path="/register" element={<><Navbar /><LoginOption message="Register" /></>} />
        <Route exact path="/register/patient" element={<><Navbar /><Register /></>} />
        <Route exact path="/register/doctor" element={<><Navbar /><AdminRegister /></>} />
      </Routes>
    </>
  );
}

export default App;
