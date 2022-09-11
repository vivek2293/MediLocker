import React from "react";
import "../css/carousel.css"
import lock from '../resources/images/lock.jpg'
import ipad from '../resources/images/ipad.jpg'
import connecth from '../resources/images/connect.jpg'
import docphone from '../resources/images/docphone.jpg'
import patient from '../resources/images/patient.jpg'

function Carousel() {
    return (
        <>
            <section id="carouselExampleCaptions" className="carousel slide carousel-fade p-carousel" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1" id="change"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1000">
                        <img src={ipad} className="d-block w-100 i-carousel" alt="1"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Access to doctors</h5>
                                <p>Medical history easily accessible.</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src={docphone}  className="d-block w-100 i-carousel" alt="2"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Data on fingertips</h5>
                                <p>Data can be accesses on any device.</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src={lock}  className="d-block w-100 i-carousel" alt="3"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Fully Authenticated</h5>
                                <p>No one can Trespass through the system .</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src={connecth}  className="d-block w-100 i-carousel" alt="4"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Ease of access</h5>
                                <p>Data can be acceses even in case of any disaster.</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src={patient}  className="d-block w-100 i-carousel" alt="5"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Digitized Prescription</h5>
                                <p>Prescription can be accessed and uploaded digitally.</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </section>

        </>
    );
}

export default Carousel;