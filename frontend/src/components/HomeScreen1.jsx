import React from "react";
import { Background } from "tsparticles-engine";
const headStyle = {
  fontFamily: "Serif",
};
const paraStyle = {
  fontSize: "1.5rem",
};

function HomeScreen1() {
  return (
    <>
      <div className="container text-center d-flex flex-column align-items-center">
        <h3
          className="display-3 mt-md-4 mb-md-2 bg-danger py-2 px-4"
          style={headStyle}
        >
          MedILocker
        </h3>
        <p className="w-75 p-3" style={(headStyle, paraStyle)}>
          Medical History On Finger Tips
        </p>
        <p className="d-none">Hello Girls</p>
      </div>
    </>
  );
}

export default HomeScreen1;
