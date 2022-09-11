import React from "react";
import "../css/home.css";
import Carousel from "./Carousel";
import HomeScreen1 from "./HomeScreen1";
import ParticlesBg from "./ParticlesBg";
import Rev from "./Review";
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
          <div className="coverScreen pt-5 d-flex flex-column justify-content-center">
            <Carousel/>
          </div>
        </section>
        <section className="snapSection">
          <div className="coverScreen d-flex align-items-center py-5">
            <div className="row justify-content-around mt-5">
              <div className="col-md-5">
                <Rev.Review />
              </div>
              <div className="col-md-5">
                <Rev.Review1 />
              </div>
              <div className="col-md-5">
                <Rev.Review2 />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
