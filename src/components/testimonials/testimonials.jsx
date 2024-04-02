import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa6";
import testimonial1 from "../../assets/testimonial1.png";
import testimonial2 from "../../assets/testimonial2.png";
import testimonial3 from "../../assets/testimonial3.png";
import testimonial4 from "../../assets/testimonial4.png";
import "./testimonial.css";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      star: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
      name: "Jessica Pearson",
      image: testimonial1,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 2,
      star: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
      name: "Mike Ross",
      image: testimonial2,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 3,
      star: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
      name: "Rachel Zane",
      image: testimonial3,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 4,
      star: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
      name: "Harvey Spector",
      image: testimonial4,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (
    <Container>
      <div className="header-container">
        <h1 className=" header-text">Testimonials</h1>
      </div>
      <Row className="mt-5">
        {testimonials.map((testimonial) => (
          <Col key={testimonial.id} xs={12} md={6} lg={4}>
            <Card style={{ minHeight: "200px", marginBottom: "40px" }}>
              <Card.Body>
                <Card.Text
                  style={{
                    color: "rgb(251 98 89)",
                    fontSize: "20px",
                    display: "flex",
                    gap: "7px",
                  }}
                >
                  {testimonial.star}
                </Card.Text>
                <Card.Text>{testimonial.message}</Card.Text>
                <div className="img-container">
                  <img
                    src={testimonial.image}
                    className="testimonial-image"
                    alt="image"
                  />
                  <Card.Title style={{ marginLeft: "20px" }}>
                    {testimonial.name}
                  </Card.Title>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
