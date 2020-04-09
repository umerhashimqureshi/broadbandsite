import React from "react";
import Filter1ForComparison from "./Filter1ForComparison";
import Filter2ForComparison from "./Filter2ForComparison";
import Filter345ForComparison from "./Filter345ForComparison";

const SidePanelForComparison = () => {
  return (
    <div
      style={{
        // width: "20%",
        maxWidth: "auto",
        border: "1px solid white",
        backgroundColor: "#f8f8f8",
        height: "100vh"
      }}
    >
      <div className="d-flex flex-wrap flex-column">
        <span
          style={{
            backgroundColor: "black",
            color: "white",
            // height: "60px",
            padding: 20,
            fontSize: "20px",
            textAlign: "center"
          }}
        >
          Filter your results
        </span>
        <span
          className="text-uppercase font-weight-bold"
          style={{ textAlign: "center", padding: 5 }}
        >
          Apply Filters
        </span>
        {/* <div style={{ textAlign: "center", padding: 20 }}>
          <button
            style={{
              width: "80%",
              borderColor: "black",
              backgroundColor: "transparent",
              color: "black",
              marginTop: 5,
              padding: 10
            }}
          >
            SIM ONLY DEALS
          </button>
          <button
            style={{
              width: "80%",
              borderColor: "black",
              backgroundColor: "transparent",
              color: "black",
              padding: 10,
              marginTop: 5
            }}
          >
            CONTRACT PHONES
          </button>
          <button
            style={{
              width: "80%",
              borderColor: "black",
              backgroundColor: "transparent",
              color: "black",
              padding: 10,
              marginTop: 5
            }}
          >
            MOBILE BROADBAND
          </button>
        </div> */}
        <Filter1ForComparison />
        <Filter2ForComparison />
        <Filter345ForComparison />
      </div>
    </div>
  );
};

export default SidePanelForComparison;
