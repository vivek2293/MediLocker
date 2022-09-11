import React from "react";
import "../css/review.css"


function Review() {
    return (
        <>

            <section className="py-3 mb-0">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                        <div className="card" style={{borderRadius: "15px"}}>
                            <div className="card-body px-3 py-4">

                                {/* <div className="text-center mb-4 pb-2">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp" alt="Bulb"
                                        width="100"/>
                                </div> */}

                                <figure className="text-center mb-0">
                                    <blockquote className="blockquote">
                                        <p className="pb-3">
                                            <i className="fa fa-quote-left fa-xs text-primary"></i>
                                            <span className="lead font-italic" id="demo">In food world, there is no fear or guilt, only joy and
                                                balance.</span>
                                            <i className="fa fa-quote-right fa-xs text-primary"></i>
                                        </p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer mb-0">
                                        Sanjeev Kapoor
                                    </figcaption>
                                </figure>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Review;