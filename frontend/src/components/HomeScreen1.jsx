import React from "react";
import { Background } from "tsparticles-engine";
const headStyle = {
  fontFamily: "Serif",
  borderRadius: "1rem"
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
          MediLocker
        </h3>
        <p className="w-75 p-3" style={(headStyle, paraStyle)}>
          Medical History On Finger Tips
        </p>
      </div>
    </>
  );
}

export default HomeScreen1;
