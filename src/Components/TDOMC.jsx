import React, { useState } from "react";

const TDMOC = props => {
  const [hover, setHover] = useState(false);
  function toggleHover() {
    setHover(!hover);
  }
  var linkStyle;
  if (hover) {
    linkStyle = {
      width: "auto",
      borderRadius: "24px",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      padding: 20,
      transition: "transform .2s",
      transform: "scale(1.02)"
    };
  } else {
    linkStyle = {
      width: "auto",
      borderRadius: "24px",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      padding: 20
    };
  }

  return (
    <>
      <div
        className="container"
        style={linkStyle}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <p style={{ color: "#555", textAlign: "center" }}>
          <b>{props.tier}</b>
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            style={{ width: "100px", height: "50px" }}
            src={require("../Images/" + props.img + ".png")}
          />
          <h2>
            ${props.price}
            <p style={{ fontSize: 10 }}>/month</p>
          </h2>
        </div>
        <hr />
        <div>
          <div style={{ padding: 5, fontSize: 15 }}>
            <li style={{ color: props.clr, padding: 8 }}>Single User</li>
            <li style={{ color: props.clr, padding: 8 }}>5GB Storage</li>
            <li style={{ color: props.clr, padding: 8 }}>
              Unlimited Public Projects
            </li>
            <li style={{ color: props.clr, padding: 8 }}>Community Access</li>
            <li style={{ color: props.clr5, padding: 8 }}>
              Unlimited Private Projects
            </li>
            <li style={{ color: props.clr6, padding: 8 }}>
              Dedicated Phone Support
            </li>
            <li style={{ color: props.clr7, padding: 8 }}>Free Subdomain</li>
            <li style={{ color: props.clr8, padding: 8 }}>
              Monthly Status Report
            </li>
          </div>
        </div>
        <button
          style={{
            backgroundColor: "#00004c",
            marginTop: 10,
            width: "100%",
            height: "50px",
            color: "white",
            borderRadius: "24px"
          }}
        >
          View More
        </button>
      </div>
    </>
  );
};

export default TDMOC;
