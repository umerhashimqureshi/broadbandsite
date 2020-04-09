import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Animated } from "react-animated-css";

const Filter1ForComparison = () => {
  const [iconSelect, setIconSelect] = useState(false);
  const [dis, setDis] = useState("none");
  const [backClr1, setBackClr1] = useState("transparent");
  const [backClr2, setBackClr2] = useState("transparent");
  const [backClr3, setBackClr3] = useState("treansparent");
  const [backClr4, setBackClr4] = useState("transparent");

  function handleDropdown() {
    setIconSelect(!iconSelect);
    if (iconSelect === false) {
      setDis("inline");
    } else if (iconSelect === true) {
      setDis("none");
    }
  }

  function handleSelect(name) {
    if (name === "pre") {
      setBackClr1("#e8e8e8");
      setBackClr2("transparent");
      setBackClr3("transparent");
      setBackClr4("transparent");
    } else if (name === "post") {
      setBackClr1("transparent");
      setBackClr2("#e8e8e8");
      setBackClr3("transparent");
      setBackClr4("transparent");
    } else if (name === "bus") {
      setBackClr1("transparent");
      setBackClr2("transparent");
      setBackClr3("#e8e8e8");
      setBackClr4("transparent");
    } else if (name === "vis") {
      setBackClr1("transparent");
      setBackClr2("transparent");
      setBackClr3("transparent");
      setBackClr4("#e8e8e8");
    }
  }
  // const useStyles = makeStyles(theme => ({
  //   formControl: {
  //     margin: theme.spacing(1),
  //     minWidth: 120
  //   },
  //   selectEmpty: {
  //     marginTop: theme.spacing(2)
  //   }
  // }));
  // const classes = useStyles();
  // const [age, setAge] = React.useState("");

  // const handleChange = event => {
  //   setAge(event.target.value);
  // };
  // const [filter1ForSim, setFilter1ForSim] = useState("inline");
  // const [filter1ForPhone, setFilter1ForPhone] = useState("inline");
  // const [filter1ForBroadband, setFilter1ForBroadband] = useState("inline");
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
          Package Type{" "}
          <span className="m-auto">
            <CaretDownOutlined />
          </span>
        </span>
      </div>
      <Animated animationIn="fadeIn" animationOut="fadeOut">
        <div
          style={{
            width: "60%",
            textAlign: "center",
            margin: "auto"
            // padding: 20
          }}
          className="d-flex flex-wrap flex-column"
        >
          <div
            onClick={() => {
              handleSelect("pre");
            }}
            style={{
              cursor: "pointer",
              backgroundColor: backClr1,
              display: dis,
              border: "1px solid black",
              padding: 5,
              marginBottom: 10,
              marginTop: 10
              // textAlign: "center"
            }}
          >
            Prepaid
          </div>
          <div
            onClick={() => {
              handleSelect("post");
            }}
            style={{
              cursor: "pointer",

              backgroundColor: backClr2,
              display: dis,
              border: "1px solid black",
              padding: 5,
              // textAlign: "center",
              marginBottom: 10
            }}
          >
            Postpaid
          </div>
          <div
            onClick={() => {
              handleSelect("bus");
            }}
            style={{
              cursor: "pointer",
              backgroundColor: backClr3,
              display: dis,
              border: "1px solid black",
              padding: 5,
              // textAlign: "center",
              marginBottom: 10
            }}
          >
            Business
          </div>
          <div
            onClick={() => {
              handleSelect("vis");
            }}
            style={{
              cursor: "pointer",
              backgroundColor: backClr4,
              display: dis,
              border: "1px solid black",
              padding: 5,
              // textAlign: "center",
              marginBottom: 10
            }}
          >
            Visitor
          </div>
        </div>
      </Animated>
      {/* <div style={{ display: filter1ForSim }}>
        <span
          style={{
            backgroundColor: "black",
            color: "white",
            // height: "60px",
            padding: 10,
            fontSize: "15px",
            textAlign: "left",
            fontWeight: "bold"
          }}
        >
          COST DETAILS
        </span>
        <FormControl
          style={{ width: "80%", margin: "auto", padding: 20 }}
          className={classes.formControl}
        >
          <InputLabel style={{ padding: 20 }} id="demo-simple-select-label">
            Select Cost Details
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={0}>Any monthly cost</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div> */}
    </div>
  );
};

export default Filter1ForComparison;
