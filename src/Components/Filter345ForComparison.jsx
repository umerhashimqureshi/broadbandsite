import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

// import { Animated } from "react-animated-css";

const Filter345ForComparison = () => {
  //   const [iconSelect, setIconSelect] = useState(false);
  //   const [dis, setDis] = useState("none");
  //   const [backClr1, setBackClr1] = useState("transparent");
  //   const [backClr2, setBackClr2] = useState("transparent");
  //   const [backClr3, setBackClr3] = useState("treansparent");
  //   const [backClr4, setBackClr4] = useState("transparent");

  //   function handleDropdown() {
  //     setIconSelect(!iconSelect);
  //     if (iconSelect === false) {
  //       setDis("inline");
  //     } else if (iconSelect === true) {
  //       setDis("none");
  //     }
  //   }

  //   function handleSelect(name) {
  //     if (name === "pre") {
  //       setBackClr1("#e8e8e8");
  //       setBackClr2("transparent");
  //       setBackClr3("transparent");
  //       setBackClr4("transparent");
  //     } else if (name === "post") {
  //       setBackClr1("transparent");
  //       setBackClr2("#e8e8e8");
  //       setBackClr3("transparent");
  //       setBackClr4("transparent");
  //     } else if (name === "bus") {
  //       setBackClr1("transparent");
  //       setBackClr2("transparent");
  //       setBackClr3("#e8e8e8");
  //       setBackClr4("transparent");
  //     } else if (name === "vis") {
  //       setBackClr1("transparent");
  //       setBackClr2("transparent");
  //       setBackClr3("transparent");
  //       setBackClr4("#e8e8e8");
  //     }
  //   }

  return (
    <div>
      {/* NATIONAL MIN */}
      <div
        className="d-flex flex-wrap flex-column "
        style={{ cursor: "pointer" }}
      >
        <span
          style={{
            backgroundColor: "black",
            border: "1px solid transparent",
            borderTopColor: "white",
            color: "white",
            // height: "60px",
            padding: 10,
            fontSize: "15px",
            textAlign: "left",
            fontWeight: "bold"
          }}
        >
          National Min
        </span>
      </div>
      <div style={{ padding: 20, textAlign: "center" }}>
        <TextField id="standard-basic" label="National Min" />
      </div>
      <div
        className="d-flex flex-wrap flex-column "
        style={{ cursor: "pointer" }}
      >
        <span
          style={{
            backgroundColor: "black",
            border: "1px solid transparent",
            borderTopColor: "white",
            color: "white",
            // height: "60px",
            padding: 10,
            fontSize: "15px",
            textAlign: "left",
            fontWeight: "bold"
          }}
        >
          International Min
        </span>
      </div>
      <div style={{ padding: 20, textAlign: "center" }}>
        <TextField id="standard-basic" label="Interational Min" />
      </div>
      <div
        className="d-flex flex-wrap flex-column "
        style={{ cursor: "pointer" }}
      >
        <span
          style={{
            backgroundColor: "black",
            border: "1px solid transparent",
            borderTopColor: "white",
            color: "white",
            // height: "60px",
            padding: 10,
            fontSize: "15px",
            textAlign: "left",
            fontWeight: "bold"
          }}
        >
          Flexible Min
        </span>
      </div>
      <div style={{ padding: 20, textAlign: "center" }}>
        <TextField id="standard-basic" label="Flexible Min" />
      </div>
    </div>
  );
};

export default Filter345ForComparison;
