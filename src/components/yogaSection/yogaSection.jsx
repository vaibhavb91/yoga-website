import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import yoga from "../../assets/yoga.jpg";
import "./yoga.css";
const YogaSection = () => {
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={6}>
            <div className="mt">
              <h1 className="text-center " style={{ color: "rgb(251 98 89)" }}>
                Start A Healthy Way Of Life,Today !
              </h1>
              <h3 className="text-center" style={{ color: "#666" }}>
                Do yoga todya for better tomorrow
              </h3>
            </div>
          </Col>
          <Col md={6}>
            <img src={yoga} alt="yoga" className="yogaImg" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default YogaSection;
