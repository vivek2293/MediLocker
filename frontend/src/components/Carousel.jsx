import React from "react";
import "../css/carousel.css"
import loginImage from '../resources/images/login.png'

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
                        <img src={loginImage} className="d-block w-100 i-carousel" alt="1"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Bon Appétit</h5>
                                <p>Special flavors forged from Chef's Hand.</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src={loginImage}  className="d-block w-100 i-carousel" alt="2"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Cherishing Food</h5>
                                <p>Tantalize your taste buds with Delicious Indian Cuisine.</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src={loginImage}  className="d-block w-100 i-carousel" alt="3"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Romaticizing experience</h5>
                                <p>Blend yourself with Meticulous and Romantic ambience.</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src={loginImage}  className="d-block w-100 i-carousel" alt="4"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Heavenly Satisfaction</h5>
                                <p>Pipin' hot food to satisy your tastebuds.</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src={loginImage}  className="d-block w-100 i-carousel" alt="5"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Leisurely Brunch</h5>
                                <p>Delicious Brunch served all day long.</p>
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