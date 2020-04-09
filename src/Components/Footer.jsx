import React from "react";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import logo from "../Images/logo.png";

const Footer = () => {
  var logoSize, hyperlink, mainDesign;
  if (isBrowser) {
    logoSize = {
      width: "200px"
    };
    mainDesign = {
      width: "70%",
      margin: "auto",
      display: "flex",
      padding: 100,
      justifyContent: "space-evenly",
      textAlign: "left"
    };
    hyperlink = {
      color: "gray"
    };
  } else if (isMobile) {
    logoSize = {
      width: "100px"
    };
    mainDesign = {
      width: "100%",
      margin: "auto",
      display: "flex",
      padding: 80,
      justifyContent: "space-evenly",
      textAlign: "left"
    };
    hyperlink = {
      color: "gray"
    };
  }

  return (
    <>
      <div style={{ backgroundColor: "#e7e8ed" }}>
        <div style={mainDesign}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "grey",
              fontSize: 14
            }}
          >
            <img style={logoSize} src={logo} />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
            <p>
              Call Us: <a href="tel:344-455-711">344-455-711</a>
            </p>
            <p>
              Email: <a href="mailto:info@ftsits.com">info@ftsits.com</a>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "grey",
              fontSize: 14
            }}
          >
            <h6>Popular Category</h6>
            <a style={hyperlink} href="/">
              Link 1
            </a>
            <a style={hyperlink} href="/">
              Link 2
            </a>
            <a style={hyperlink} href="/">
              Link 3
            </a>
            <a style={hyperlink} href="/">
              Link 4
            </a>
            <a style={hyperlink} href="/">
              Link 5
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "grey",
              fontSize: 14
            }}
          >
            <h6>Our Company</h6>
            <a style={hyperlink} href="/">
              Link 1
            </a>
            <a style={hyperlink} href="/">
              Link 2
            </a>
            <a style={hyperlink} href="/">
              Link 3
            </a>
            <a style={hyperlink} href="/">
              Link 4
            </a>
            <a style={hyperlink} href="/">
              Link 5
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "grey",
              fontSize: 14
            }}
          >
            <h6>Help Support</h6>
            <a style={hyperlink} href="/">
              Link 1
            </a>
            <a style={hyperlink} href="/">
              Link 2
            </a>
            <a style={hyperlink} href="/">
              Link 3
            </a>
            <a style={hyperlink} href="/">
              Link 4
            </a>
            <a style={hyperlink} href="/">
              Link 5
            </a>
          </div>
        </div>
        <footer
          style={{
            backgroundColor: "#0c233f",
            color: "white",
            width: "100%",
            height: "80px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            fontSize: 14
          }}
        >
          <p style={{ marginTop: "1em" }}>
            © 2020{" "}
            <a style={{ color: "#ff7b08" }} href="/">
              ftfits.com
            </a>
            . All rights reserved. Created by{" "}
            <a style={{ color: "#ff7b08" }} href="github.com/umerhashimqureshi">
              umerhashimqureshi
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
