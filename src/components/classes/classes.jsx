import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const classData = [
  {
    title: "Class 1",
    description: "Description of class 1...",
    videoUrl: "https://www.youtube.com/embed/RWotxGf4JUc?si=9uBsDsEV1gwc_wGX",
  },
  {
    title: "Class 2",
    description: "Description of class 2...",
    videoUrl: "https://www.youtube.com/embed/3lfBP1OdoG0?si=_j_JfCSfF-lqB-AX",
  },
  {
    title: "Class 3",
    description: "Description of class 3...",
    videoUrl: "https://www.youtube.com/embed/brjAjq4zEIE?si=2VosU1sDW5sd3MaA",
  },
  {
    title: "Class 4",
    description: "Description of class 4...",
    videoUrl: "https://www.youtube.com/embed/3lOhth5-c6M?si=LdU_D8qV6HzMKnsX",
  },
  {
    title: "Class 5",
    description: "Description of class 5...",
    videoUrl: "https://www.youtube.com/embed/RWotxGf4JUc?si=9uBsDsEV1gwc_wGX",
  },
  {
    title: "Class 6",
    description: "Description of class 6...",
    videoUrl: "https://www.youtube.com/embed/3lfBP1OdoG0?si=_j_JfCSfF-lqB-AX",
  },
  {
    title: "Class 7",
    description: "Description of class 7...",
    videoUrl: "https://www.youtube.com/embed/brjAjq4zEIE?si=2VosU1sDW5sd3MaA",
  },
  {
    title: "Class 8",
    description: "Description of class 8...",
    videoUrl: "https://www.youtube.com/embed/3lOhth5-c6M?si=LdU_D8qV6HzMKnsX",
  },
];

const Classes = () => {
  return (
    <section id="classes">
      <Container fluid className="mt-5">
        <div className="header-container">
          <h1 className=" header-text">Yoga Classes</h1>
        </div>
        <Row className="mt-5">
          {classData.map((classItem, index) => (
            <Col md={3} key={index}>
              <div className="class-item p-3 border rounded shadow mb-5">
                <h3 className="mb-3">{classItem.title}</h3>
                <p>{classItem.description}</p>
                <iframe
                  width="100%"
                  height="200"
                  src={classItem.videoUrl}
                  title={classItem.title + " Video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Classes;
