import React from "react";
import TDMOC from "./TDOMC";

// import { Card } from "antd";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import { Container } from "react-bootstrap";

var cardStyle;
var mainDesign;
if (isBrowser) {
  cardStyle = {
    width: "auto",
    padding: 20,
    display: "flex",
    justifyContent: "space-evenly",
    width: "auto"
  };
  mainDesign = {
    margin: "auto",
    width: "auto",
    maxWidth: "80%",
    marginTop: 20
  };
} else if (isMobile) {
  cardStyle = {
    width: "auto",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  };
  mainDesign = {
    margin: "auto",
    maxWidth: "90%",
    marginTop: 20
  };
}

const TopDealsOfMonth = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#f8f8f8" }}>
      <div style={mainDesign}>
        <div style={{ marginTop: 40, padding: 50 }}>
          <h2 style={{ textAlign: "center" }}>
            Top broadband deals for January
            <hr
              style={{
                width: "5%",
                border: "2px solid red",
                borderRadius: "4px"
              }}
            />
          </h2>
        </div>

        <Container style={cardStyle}>
          <TDMOC
            tier="FREE"
            img="sky"
            price="0"
            clr="black"
            clr5="grey"
            clr6="grey"
            clr7="grey"
            clr8="grey"
          />
          <div>
            <hr />
          </div>
          <TDMOC
            tier="PLUS"
            img="VirginMedia"
            price="9"
            clr="black"
            clr5="black"
            clr6="black"
            clr7="black"
            clr8="grey"
          />
          <div>
            <hr />
          </div>
          <TDMOC
            tier="PRO"
            img="EE"
            price="49"
            clr="black"
            clr5="black"
            clr6="black"
            clr7="black"
            clr8="black"
          />
        </Container>
      </div>
    </div>
  );
};

export default TopDealsOfMonth;
