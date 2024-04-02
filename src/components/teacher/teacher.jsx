import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import t1 from "../../assets/t1.jpg";
import t2 from "../../assets/t2.jpg";
import t3 from "../../assets/t3.jpg";
import t4 from "../../assets/t4.jpg";
import "./teacher.css";
const classData = [
  {
    name: "Esther Ekhart",
    description: "Description of class 1...",
    image: t1,
  },
  {
    name: "Adela serrano",
    description: "Description of class 2...",
    image: t2,
  },

  {
    name: "Anat Geiger",
    description: "Description of class 4...",
    image: t3,
  },
  {
    name: "andrew Wrenm",
    description: "Description of class 5...",
    image: t4,
  },
];

const Teacher = () => {
  return (
    <Container fluid className="mt-5" id="classes">
      <div className="header-container">
        <h1 className=" header-text"> Yoga Teacher</h1>
      </div>
      <Row className="mt-5 text-center">
        {classData.map((classItem, index) => (
          <Col md={3} key={index}>
            <div className="p-3  mb-5">
              <img
                src={classItem.image}
                alt="teachers"
                className="teacher-img"
              />

              <h3>{classItem.name}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Teacher;
