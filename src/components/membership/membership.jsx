import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./membership.css";
const memebershipData = [
  {
    plan: "Basic",
    color: "red",
    text1:
      "Access 500+ yoga, meditation and movement classes from our extensive library",
    text2: "Access 1st two classes released by new teachers to DYWM",
    price: "Free",
  },
  {
    plan: "Annual",
    text1: "Access 1000s of AD-FREE yoga, meditation and movement classes",
    text2: "Exclusive access to all new releases and premium content",
    text3: "Access our complete collection of curated programs & challenges",
    text4: "25% off livestream events",
    text5: "Follow your favorite teachers",
    text6: "Curate your own collection of favorite classes",
    text7: "Access to our Mobile and TV app",
    price: "$108.99 / Year ( $9.08 / Month )",
  },
  {
    plan: "Monthly",
    text1: "Access 1000s of AD-FREE yoga, meditation and movement classes",
    text2: "Exclusive access to all new releases and premium content",
    text3: "Access our complete collection of curated programs & challenges",
    text4: "25% off livestream events",
    text5: "Follow your favorite teachers",
    text6: "Curate your own collection of favorite classes",
    text7: "Curate your own collection of favorite classes",
    price: "$13.99 / Month ",
  },
];

const Membership = () => {
  return (
    <>
      <Container>
        <div className="header-container">
          <h1 className=" header-text">
            Choose a membership to fit your needs
          </h1>
        </div>
        <Row className="mt-5 mb-5">
          {memebershipData.map((membership, index) => (
            <Col md={4} key={index}>
              <div className="p-3 border text-center rounded shadow container1">
                <h3 style={{ color: `crimson` }}>{membership.plan}</h3>
                <p>{membership.text1}</p>
                <p>{membership.text2}</p>
                <p>{membership.text3}</p>
                <p>{membership.text4}</p>
                <p>{membership.text5}</p>
                <p>{membership.text6}</p>
                <p>{membership.text7}</p>
                <button className="member-btn">{membership.price}</button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Membership;
