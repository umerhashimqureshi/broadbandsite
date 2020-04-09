import React from "react";
import { Link } from "react-router-dom";
import "./QuickLinks.css";

const QuickLinks = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ff7b08", color: "#fff" }}>
        <div
          className="container"
          style={{
            width: "100%",
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            marginLeft: "auto"
          }}
        >
          <div className="row">
            <div className="col-md-6">
              <nav className="nav nav-pills flex-column flex-sm-row float-left">
                <a className="flex-sm-fill text-sm-center nav-link" href="/">
                  Home
                </a>
                <a className="flex-sm-fill text-sm-center nav-link" href="/">
                  Mobile
                </a>
                <a className="flex-sm-fill text-sm-center nav-link" href="/">
                  Help &amp; Guides
                </a>
                <Link
                  to="/compare-page"
                  className="flex-sm-fill text-sm-center nav-link"
                  href="/"
                >
                  Compare Deals
                </Link>
              </nav>
            </div>
            <div className="col-md-6">
              <nav className="nav nav-pills flex-column flex-sm-row float-right">
                <a className="flex-sm-fill text-sm-center nav-link" href="/">
                  Help &amp; services
                </a>
                <a className="flex-sm-fill text-sm-center nav-link" href="/">
                  Popular brand
                </a>
                <a
                  style={{ backgroundColor: "#00004c" }}
                  className="flex-sm-fill text-sm-center nav-link"
                  href="/"
                >
                  Deals &amp; Offer
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickLinks;
