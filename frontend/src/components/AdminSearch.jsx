import React from "react";

function AdminSearch(props) {
    return (
        <>
            <div className="container justify-content-center col-md-9">
                <div className="helloPrompt text-center">
                    <h3 className="display-md-4 fw-bold mb-3">Hello Dr.{props.name} !</h3>
                    <p className="mx-md-5 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusamus quia eos quos corrupti quas sit! Quaerat hic aspernatur, impedit totam debitis delectus beatae accusamus atque tenetur, at, laborum ad!</p>
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
                        class="btn btn-outline-success rounded-pill col-md-2 p-2 fw-bold fs-md-5"
                        type="submit"
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



