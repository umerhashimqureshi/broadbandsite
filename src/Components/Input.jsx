import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function BasicTextFields(props) {
  return (
    <TextField
      style={{ backgroundColor: "white" }}
      id="outlined-number"
      placeholder={props.label}
      type={props.type}
      variant="outlined"
      size="small"
    />
  );
}
