import React from "react";
import SingleRecord from "./SingleRecord.jsx";

function RenderingWindow(records) {
  return (
    <>
        <section>
            {records.props.map((patient) => <SingleRecord props={ patient } />)}
        </section>
    </>
  );
}

export default RenderingWindow;
