import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../Images/logo.png";
import { FiPhone, FiMail } from "react-icons/fi";

const Navb = () => {
  return (
    <>
      <Navbar
        sticky="top"
        expand="lg"
        style={{
          maxWidth: "100%",
          margin: "auto",
          textAlign: "center",
          backgroundColor: "white",
          padding: "1%"
        }}
      >
        <Nav
          style={{ width: "60%", backgroundColor: "white" }}
          className="m-auto"
        >
          <img href="#home" src={Logo} style={{ width: 250 }} />
          <div className="ml-auto mt-auto mb-auto">
            <a
              href="#home"
              style={{ color: "black", fontSize: 14, padding: 10 }}
            >
              <FiPhone /> +1(123) 423 4411
            </a>

            <a
              href="#link"
              style={{
                color: "black",
                fontSize: 14,
                padding: 10
              }}
            >
              <FiMail /> info@broadband.com
            </a>
          </div>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navb;
