import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LoginOption from "./components/LoginOption";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<><Navbar /><Home /></>} />
        <Route exact path="/login" element={<><Navbar /><LoginOption message="Login" /></>} />
        <Route exact path="/register" element={<><Navbar /><LoginOption message="Register" /></>} />
        <Route exact path="/register/patient" element={<><Navbar /><Register /></>} />
      </Routes>
    </>
  );
}

export default App;
