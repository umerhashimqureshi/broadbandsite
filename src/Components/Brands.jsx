import React from "react";
import BrandCard from "./BrandCard";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const Brands = () => {
  var cardDesign;
  if (isBrowser) {
    cardDesign = {
      display: "flex",
      justifyContent: "space-evenly",
      textAlign: "center",
      padding: 20,
      margin: "auto",
      marginTop: 50
    };
  } else if (isMobile) {
    cardDesign = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      textAlign: "center",
      padding: 20,
      margin: "auto",
      marginTop: 50
    };
  }

  return (
    <>
      <div style={{ margin: "auto", width: "60%", marginTop: 40 }}>
        <h2 style={{ textAlign: "center" }}>
          Compare deals from the UAE leading providers
          <hr
            style={{
              width: "5%",
              border: "2px solid red",
              borderRadius: "4px"
            }}
          />
        </h2>
        <div style={cardDesign}>
          <BrandCard img="sky" />
          <BrandCard img="EE" />
          <BrandCard img="TalkTalk" />
          <BrandCard img="Plusnet" />
          <BrandCard img="VirginMedia" />
          <BrandCard img="BT" />
        </div>
      </div>
    </>
  );
};

export default Brands;
