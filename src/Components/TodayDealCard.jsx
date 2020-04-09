import React from "react";
import { Row, Col } from "antd";

const TDC = props => {
  return (
    <>
      <div
        style={{
          border: "1px solid",
          borderRadius: "8px",
          borderColor: "transparent",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          marginTop: 30
        }}
      >
        <p
          style={{
            backgroundColor: "#723f89",
            color: "white",
            borderRadius: "8px 8px 0px 0px"
          }}
        >
          {props.saleDescription}
        </p>
        <Row style={{ marginTop: 5 }}>
          <Col
            span={15}
            style={{ float: "left", textAlign: "left", padding: 15 }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                alt=""
                style={{ width: "100px" }}
                src={require("../Images/" + props.img + ".png")}
              />
              <p>{props.desc}</p>
              <p>{props.package}</p>
            </div>
          </Col>
          <Col
            // className="d-flex justify-content-end"
            span={9}
            style={{
              textAlign: "left",
              //   backgroundColor: "grey"
              padding: 15
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h6 style={{ color: " #333", marginBottom: 0 }}>
                <strike>${props.prevPrice}.00</strike>
              </h6>
              <h3 style={{ color: "red", margin: 0 }}>
                ${props.currentPrice}.00
              </h3>
              <p style={{ color: " #333", margin: 0 }}>per month</p>
              <button
                style={{
                  backgroundColor: "#00004c",
                  color: "white",
                  borderRadius: "1px",
                  height: "auto",
                  maxHeight: "50px",
                  width: "100%",
                  margin: 0,
                  marginRight: 10
                }}
              >
                View Details
              </button>
              <p style={{ color: " #333", margin: 0 }}>No upfront cost</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TDC;
