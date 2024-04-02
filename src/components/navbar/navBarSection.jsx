import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GrYoga } from "react-icons/gr";

import "./navbar.css";
const NavBarSection = () => {
  return (
    <Navbar expand="lg" style={{ padding: 2 }} className="shadow">
      <Container>
        <Navbar.Brand href="#home">
          <GrYoga className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav style={{ paddingLeft: "180px" }}>
            <Nav.Link>
              <Nav.Link className="fw-bolder">Classes</Nav.Link>
            </Nav.Link>

            <Nav.Link>
              <Nav.Link className="fw-bolder">Programs </Nav.Link>
            </Nav.Link>

            <Nav.Link>
              <Nav.Link className="fw-bolder">Teachers </Nav.Link>
            </Nav.Link>

            <Nav.Link>
              <Nav.Link className="fw-bolder">Membership </Nav.Link>
            </Nav.Link>
            <Nav.Link>
              <Nav.Link className="fw-bolder">Reviews</Nav.Link>
            </Nav.Link>

            <Nav.Link>
              <Nav.Link className="fw-bolder">Contact</Nav.Link>
            </Nav.Link>
          </Nav>
          <button className="btns">+91 1234567999</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarSection;
