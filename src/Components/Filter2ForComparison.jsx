import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";

const Filter2ForComparison = () => {
  const [iconSelect, setIconSelect] = useState(false);
  const [dis, setDis] = useState("none");
  const [backClr1, setBackClr1] = useState("transparent");
  const [backClr2, setBackClr2] = useState("transparent");
  const [backClr3, setBackClr3] = useState("treansparent");
  const [backClr4, setBackClr4] = useState("transparent");
  const [backClr5, setBackClr5] = useState("transparent");
  const [backClr6, setBackClr6] = useState("transparent");
  const [backClr7, setBackClr7] = useState("transparent");
  const [backClr8, setBackClr8] = useState("transparent");
  const [backClr9, setBackClr9] = useState("transparent");

  function handleDropdown() {
    setIconSelect(!iconSelect);
    if (iconSelect === false) {
      setDis("inline");
    } else if (iconSelect === true) {
      setDis("none");
    }
  }

  function handleSelect(name) {
    if (name === "50mb") {
      setBackClr1("#e8e8e8");
      setBackClr2("transparent");
      setBackClr3("transparent");
      setBackClr4("transparent");
      setBackClr5("transparent");
      setBackClr6("transparent");
      setBackClr7("transparent");
      setBackClr8("transparent");
      setBackClr9("transparent");
    } else if (name === "100mb") {
      setBackClr1("transparent");
      setBackClr2("#e8e8e8");
      setBackClr3("transparent");
      setBackClr4("transparent");
      setBackClr5("transparent");
      setBackClr6("transparent");
      setBackClr7("transparent");
      setBackClr8("transparent");
      setBackClr9("transparent");
    } else if (name === "200mb") {
      setBackClr1("transparent");
      setBackClr2("transparent");
      setBackClr3("#e8e8e8");
      setBackClr4("transparent");
      setBackClr5("transparent");
      setBackClr6("transparent");
      setBackClr7("transparent");
      setBackClr8("transparent");
      setBackClr9("transparent");
    } else if (name === "500mb") {
      setBackClr1("transparent");
      setBackClr2("transparent");
      setBackClr3("transparent");
      setBackClr4("#e8e8e8");
      setBackClr5("transparent");
      setBackClr6("transparent");
      setBackClr7("transparent");
      setBackClr8("transparent");
      setBackClr9("transparent");
    } else if (name === "1gb") {
      setBackClr1("transparent");
      setBackClr2("transparent");
      setBackClr3("transparent");
      setBackClr4("transparent");
      setBackClr5("#e8e8e8");
      setBackClr6("transparent");
      setBackClr7("transparent");
      setBackClr8("transparent");
      setBackClr9("transparent");
    } else if (name === "5gb") {
      setBackClr1("transparent");
      setBackClr2("transparent");
      setBackClr3("transparent");
      setBackClr4("transparent");
      setBackClr5("transparent");
      setBackClr6("#e8e8e8");
      setBackClr7("transparent");
      setBackClr8("transparent");
      setBackClr9("transparent");
    } else if (name === "50gb") {
      setBackClr1("transparent");
      setBackClr2("transparent");
      setBackClr3("transparent");
      setBackClr4("transparent");
      setBackClr5("transparent");
      setBackClr6("transparent");
      setBackClr7("#e8e8e8");
      setBackClr8("transparent");
      setBackClr9("transparent");
    } else if (name === "100gb") {
      setBackClr1("transparent");
      setBackClr2("transparent");
      setBackClr3("transparent");
      setBackClr4("transparent");
      setBackClr5("transparent");
      setBackClr6("transparent");
      setBackClr7("transparent");
      setBackClr8("#e8e8e8");
      setBackClr9("transparent");
    } else if (name === "unl") {
      setBackClr1("transparent");
      setBackClr2("transparent");
      setBackClr3("transparent");
      setBackClr4("transparent");
      setBackClr5("transparent");
      setBackClr6("transparent");
      setBackClr7("transparent");
      setBackClr8("transparent");
      setBackClr9("#e8e8e8");
    }
  }

  return (
    <div>
      <div
        onClick={handleDropdown}
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
          Data
          <span className="m-auto">
            <CaretDownOutlined />
          </span>
        </span>
      </div>
      <div
        style={{
          width: "60%",
          textAlign: "center",
          margin: "auto"
        }}
        className="d-flex flex-wrap flex-column"
      >
        <div
          onClick={() => {
            handleSelect("50mb");
          }}
          style={{
            backgroundColor: backClr1,
            display: dis,
            cursor: "pointer",
            border: "1px solid black",
            padding: 5,
            marginBottom: 10,
            marginTop: 10
            // textAlign: "center"
          }}
        >
          50MB
        </div>
        <div
          onClick={() => {
            handleSelect("100mb");
          }}
          style={{
            backgroundColor: backClr2,
            cursor: "pointer",
            display: dis,
            border: "1px solid black",
            padding: 5,
            // textAlign: "center",
            marginBottom: 10
          }}
        >
          100MB
        </div>
        <div
          onClick={() => {
            handleSelect("200mb");
          }}
          style={{
            backgroundColor: backClr3,
            cursor: "pointer",
            display: dis,
            border: "1px solid black",
            padding: 5,
            // textAlign: "center",
            marginBottom: 10
          }}
        >
          200MB
        </div>
        <div
          onClick={() => {
            handleSelect("500mb");
          }}
          style={{
            backgroundColor: backClr4,
            cursor: "pointer",
            display: dis,
            border: "1px solid black",
            padding: 5,
            // textAlign: "center",
            marginBottom: 10
          }}
        >
          500MB
        </div>
        <div
          onClick={() => {
            handleSelect("1gb");
          }}
          style={{
            backgroundColor: backClr5,
            cursor: "pointer",
            display: dis,
            border: "1px solid black",
            padding: 5,
            // textAlign: "center",
            marginBottom: 10
          }}
        >
          1GB
        </div>
        <div
          onClick={() => {
            handleSelect("5gb");
          }}
          style={{
            backgroundColor: backClr6,
            cursor: "pointer",
            display: dis,
            border: "1px solid black",
            padding: 5,
            // textAlign: "center",
            marginBottom: 10
          }}
        >
          5GB
        </div>
        <div
          onClick={() => {
            handleSelect("50gb");
          }}
          style={{
            backgroundColor: backClr7,
            cursor: "pointer",
            display: dis,
            border: "1px solid black",
            padding: 5,
            // textAlign: "center",
            marginBottom: 10
          }}
        >
          50GB
        </div>
        <div
          onClick={() => {
            handleSelect("100gb");
          }}
          style={{
            backgroundColor: backClr8,
            cursor: "pointer",
            display: dis,
            border: "1px solid black",
            padding: 5,
            // textAlign: "center",
            marginBottom: 10
          }}
        >
          100GB
        </div>
        <div
          onClick={() => {
            handleSelect("unl");
          }}
          style={{
            backgroundColor: backClr9,
            cursor: "pointer",
            display: dis,
            border: "1px solid black",
            padding: 5,
            // textAlign: "center",
            marginBottom: 10
          }}
        >
          Unlimited
        </div>
      </div>
    </div>
  );
};

export default Filter2ForComparison;
