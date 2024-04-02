import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import "./contact.css";
const socialMediaLinks = [
  {
    logo: <FaInstagram />,
    link: "https://www.google.com/",
  },
  {
    logo: <FaFacebook />,
    link: "https://www.google.com/",
  },
  {
    logo: <FaWhatsapp />,
    link: "https://www.google.com/",
  },
  {
    logo: <FaXTwitter />,
    link: "https://www.google.com/",
  },
  {
    logo: <FaYoutube />,
    link: "https://www.google.com/",
  },
];

const Contact = () => {
  return (
    <>
      <Container className="text-center mt-5">
        <div className="header-container">
          <h1 className=" header-text">Contact US</h1>
        </div>
        <Row className="mt-5">
          <Col>
            <div className="header-container">
              <h3 style={{ color: "gray", marginBottom: "40px" }}>
                yogaweb@example.com
              </h3>
            </div>
            <div className="mb-5">
              {socialMediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  className="contact-logo"
                >
                  {link.logo}
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
