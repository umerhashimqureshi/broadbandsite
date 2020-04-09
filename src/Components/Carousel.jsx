import React from "react";
import { Carousel } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import BGImage from "../Images/slide-banner.jpg";
import DatePickers from "./DatePicker";
import Input from "./Input";

const Carousal = () => {
  return (
    <div style={{}}>
      <Carousel>
        <div>
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 20,
              width: "100%",
              textAlign: "left",
              margin: "auto",
              overflow: "auto"
            }}
          >
            <Container
              style={{
                color: "white",
                margin: "auto",
                width: "auto"
              }}
            >
              <b
                style={{
                  fontSize: 30,
                  width: "auto",
                  height: "auto"
                }}
              >
                Compare Broadband Deals
              </b>
              <br />
              <b
                style={{ fontSize: 40, width: "auto", height: "auto" }}
                className="ml-auto"
              >
                Best Broadband
              </b>
              <Container
                style={{
                  backgroundColor: "#f8f8f8",
                  color: "black",
                  borderRadius: "10px",
                  height: "auto"
                }}
              >
                <h2 style={{ padding: 5 }}>Get Best Package</h2>

                <Row className="m-auto" style={{ padding: "1%" }}>
                  Type:
                  <Col className="m-auto">
                    <input type="checkbox" id="prepaidCheck" />
                    &nbsp;Prepaid
                  </Col>
                  <Col className="m-auto">
                    <input type="checkbox" id="postpaidCheck" />
                    &nbsp;Postpaid
                  </Col>
                  <Col className="m-auto">
                    <input type="checkbox" id="businessCheck" />
                    &nbsp;Business
                  </Col>
                  <Col className="m-auto">
                    <input type="checkbox" id="visitorCheck" />
                    &nbsp;Visitor
                  </Col>
                </Row>
                <Row className="m-auto" style={{ padding: "1%" }}>
                  <Col>
                    <Input
                      label="National Min"
                      type="number"
                      style={{ borderRadius: "4px" }}
                    />
                  </Col>
                  <Col>
                    <Input
                      style={{ borderRadius: "4px" }}
                      label="Intermediate Min"
                      type="number"
                    />
                  </Col>
                  <Col>
                    <DatePickers
                      style={{
                        borderRadius: "4px",
                        backgroundColor: "#dcdcdc"
                      }}
                    />
                  </Col>
                  <Col>
                    <Input style={{ borderRadius: "4px" }} label="SMS" />
                  </Col>
                </Row>
                <Row className="m-auto" style={{ padding: "1%" }}>
                  <Col>
                    <Input
                      label="National Min"
                      style={{ borderRadius: "4px" }}
                    />
                  </Col>
                  <Col>
                    <Input
                      style={{ borderRadius: "4px" }}
                      label="Intermediate Min"
                    />
                  </Col>
                  <Col>
                    <DatePickers
                      style={{
                        borderRadius: "4px",
                        backgroundColor: "#dcdcdc"
                      }}
                    />
                  </Col>
                  <Col>
                    <button
                      style={{
                        width: "80%",
                        backgroundColor: "#00004c",
                        color: "white",
                        borderRadius: "4px",
                        height: "40px"
                      }}
                    >
                      Search
                    </button>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <img
            alt=""
            style={{
              width: "100%",

              height: "500px"
              //   maxHeight: "2000px"
            }}
            src={BGImage}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousal;
