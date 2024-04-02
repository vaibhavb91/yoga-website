import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import program1 from "../../assets/program1.jpeg";
import program2 from "../../assets/program2.jpg";
import program3 from "../../assets/program3.jpg";
import program4 from "../../assets/program4.jpg";
import program5 from "../../assets/program5.jpg";
import program6 from "../../assets/program6.jpg";
import "./program.css";

const yogaData = [
  {
    img: program1,
    text: "Meditations for kids ",
  },
  {
    img: program2,
    text: "Meditations for kids ",
  },
  {
    img: program3,
    text: "Meditations for kids ",
  },
  {
    img: program4,
    text: "Meditations for kids ",
  },
  {
    img: program5,
    text: "Meditations for kids ",
  },
  {
    img: program6,
    text: "Meditations for kids ",
  },
];

const Programs = () => {
  return (
    <>
      <section>
        <Container className="mt-5">
          <div className="header-container">
            <h1 className=" header-text"> Programs</h1>
          </div>
          <Row className="mt-5">
            {yogaData.map((program, index) => (
              <Col md={4} key={index}>
                <div className="class-item p-3 border rounded shadow mb-5">
                  <div className="imgContainer">
                    <img
                      src={program.img}
                      className="program-images"
                      alt="program"
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                  <h6 className="text-secondary text-center mt-3">
                    {program.text}
                  </h6>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Programs;
