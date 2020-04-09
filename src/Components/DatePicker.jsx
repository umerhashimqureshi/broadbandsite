import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
import { DatePicker } from "antd";

export default function DatePickers() {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  // const useStyles = makeStyles(theme => ({
  //   container: {
  //     display: "flex",
  //     flexWrap: "wrap"
  //   },
  //   textField: {
  //     marginLeft: theme.spacing(1),
  //     marginRight: theme.spacing(1),
  //     width: 200
  //   }
  // }));
  // const classes = useStyles();

  return (
    <div>
      <DatePicker
        style={{
          width: "80%",
          height: "40px",
          borderRadius: "6px",
          borderColor: "#A9A9A9"
        }}
        onChange={onChange}
      />
    </div>
    // <form className={classes.container} noValidate>
    //   <TextField
    //     style={{ backgroundColor: "white" }}
    //     id="date"
    //     // label="Date"
    //     type="date"
    //     defaultValue="yyyy-MM-dd"
    //     className={classes.textField}
    //     InputLabelProps={{
    //       shrink: true
    //     }}
    //   />
    // </form>
  );
}
