import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LoginOption from "./components/LoginOption";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginOption message="Login" />} />
        <Route exact path="/register" element={<LoginOption message="Register" />} />
      </Routes>
    </>
  );
}

export default App;
