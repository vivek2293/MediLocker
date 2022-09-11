import React from "react";
import SingleRecord from "./SingleRecord.jsx";

function RenderingWindow(props) {
  return (
    <>
        <section>
            {{ props }.map((patient) => <SingleRecord props={ patient } />)}
        </section>
    </>
  );
}

export default RenderingWindow;
