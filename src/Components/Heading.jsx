import React from "react";

const Heading = props => {
  return (
    <div
      style={{
        // height: "100px"
        // backgroundColor: "#777"
        textAlign: "center"
      }}
    >
      <h3
        style={{ padding: 50 }}
        className="text-uppercase font-weight-bold m-auto"
      >
        Compare {props.comparison} Deals
      </h3>
    </div>
  );
};

export default Heading;
