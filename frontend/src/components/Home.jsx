import React from "react";
import "../css/home.css";
import HomeScreen1 from "./HomeScreen1";
import ParticlesBg from "./ParticlesBg";
function Home() {
  return (
    <>
      <div className="snapContainer">
        <section className="snapSection ">
          <ParticlesBg className="particleScreen" />
          <div className="coverScreen d-flex justify-content-center align-items-center">
            <HomeScreen1 />
          </div>
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
