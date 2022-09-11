import React from "react";
import '../css/adminsearch.css';
function AdminSearch(props) {
    return (
        <>
            <div className="container justify-content-center col-md-9" id="srchcont">
                <div className="helloPrompt text-center d-flex flex-column align-items-center">
                    <h3 className="display-md-4 fw-bold mb-3">Hello Dr.{props.name} !</h3>
                    <p className="mx-md-5 mb-5 w-50">You can search any patient using them email id and provide them with a prescription or check their medical history.</p>
                </div>
                <div class="d-flex justify-content-center my-4">
                    <input
                        class="me-2 rounded-pill col-md-5 text-center p-2"
                        type="email"
                        placeholder="Search Patient by Email ID"
                        aria-label="Search"
                        id="email"
                    />
                    <button
                        class="btn rounded-pill col-md-2 p-2 fw-bold fs-md-5"
                        type="submit" id="srchbtnad"
                        onClick={props.searchByEmail}
                    >
                        Search
                    </button>
                </div>
            </div>
        </>
    )
}

export default AdminSearch;



