import React from "react";
import SingleRecord from "./SingleRecord.jsx";

function RenderingWindow(records) {
  if(Object.keys(records.props[0]).length){
    return (
      <>
          <section>
              {records.props.map((patient) =>
               <SingleRecord props={ patient } />
              )}
          </section>
      </>
    );
  };
  return <></>
}

export default RenderingWindow;
