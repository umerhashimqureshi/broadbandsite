import React, { useState } from "react";
import { Animated } from "react-animated-css";

const FilterResults = () => {
  const [disForMain, setDisForMain] = useState("inline");
  const [disForDet, setDisForDet] = useState("none");

  function handleMain() {
    setDisForDet("inline");
    setDisForMain("none");
  }
  function handleDet() {
    setDisForDet("none");
    setDisForMain("inline");
  }

  return (
    <div
      style={{
        padding: 30,
        borderRadius: "8px",
        backgroundColor: "white",
        justifyContent: "space-evenly",
        height: "100px",
        width: "100%"
      }}
    >
      <div className=" d-flex" style={{ width: "100%" }}>
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <div style={{ padding: 10, display: disForMain }}>
            <span>Dummy Main</span>

            <span>Lorem ipsum dolorsitsit</span>

            <button onClick={handleMain} className="btn btn-primary">
              Details
            </button>
          </div>
        </Animated>
      </div>
      <div className="mx-auto d-flex flex-wrap">
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <div style={{ padding: 10, display: disForDet }}>
            <span>Dummy Details</span>

            <span>
              Lorem ipsum dolorsitsitndfjnfjdknfjkaddaasdmnas d,as dljans
              dlandlnadsnfkjsnfkjsdnfkjsdnfkjsnkjs
            </span>
            <button onClick={handleDet} className="btn btn-primary">
              Main
            </button>
          </div>
        </Animated>
      </div>
    </div>
  );
};

export default FilterResults;
