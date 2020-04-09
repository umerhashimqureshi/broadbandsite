import React, { useState } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const BrandCard = props => {
  const [hover, setHover] = useState(false);
  function toggleHover() {
    setHover(!hover);
  }
  var linkStyle;
  if (hover) {
    linkStyle = {
      border: "1px solid #303030",
      borderRadius: "8px",
      height: "80px",
      width: "160px",
      textAlign: "center"
    };
  } else {
    linkStyle = {
      border: "1px solid #888888",
      borderRadius: "8px",
      height: "80px",
      width: "160px",
      textAlign: "center"
    };
  }
  var mainDesign;
  if (isBrowser) {
    mainDesign = {
      padding: 10
      //   width: "auto"
    };
  } else if (isMobile) {
    mainDesign = {
      padding: 10
      //   width: "auto"
    };
  }

  return (
    <>
      <div style={mainDesign}>
        <div
          style={linkStyle}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <img
            style={{ width: "80px", marginTop: 17 }}
            src={require("../Images/" + props.img + ".png")}
          />
        </div>
      </div>
    </>
  );
};

export default BrandCard;
