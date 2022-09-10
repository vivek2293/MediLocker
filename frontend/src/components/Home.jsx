import React from "react";
import "../css/home.css";
import ParticlesBg from "./ParticlesBg";
function Home() {
  return (
    <>
      <div className="snapContainer">
        <section className="snapSection ">
            <ParticlesBg className="particleScreen"/>
            <div className="coverScreen">One</div>
        </section>
        <section className="snapSection">
        <div className="coverScreen">Two</div>
        </section>
        <section className="snapSection">
        <div className="coverScreen">Three</div>
        </section>
      </div>
    </>
  );
}

export default Home;
