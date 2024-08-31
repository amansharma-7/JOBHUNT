import React from "react";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import heroImage from "./assets/Jobs1.png"; // Replace with actual hero image path
import "./Home.css"; // Optional: For custom styling

const Home = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/home">
            <span className="d-flex align-items-center">
              <i className="bi bi-search" style={{ fontSize: "1.75rem", marginRight: "6px" }}></i>
              <h1>JOBHUNT</h1>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home">Learn</Nav.Link>
              <Nav.Link href="/home">Practice</Nav.Link>
              <Nav.Link href="/dashboard">Jobs & Internships</Nav.Link>
              <Nav.Link href="/home">Mentorship</Nav.Link>
            </Nav>
            <div className="d-flex ms-3">
              <Button variant="outline-light" href="/Login" className="me-2">
                Log in
              </Button>
              <Button variant="light" href="/Register" className="text-primary">
                Sign Up
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section bg-secondary text-white d-flex align-items-center" style={{ minHeight: "100vh", paddingTop: "80px" }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 font-weight-bold">
                "Connecting talent with opportunities"
              </h1>
              <div className="bg-success mt-3" style={{ width: "50px", height: "5px" }}></div>
              <p className="mt-4 opacity-75">
                Explore opportunities from across the globe to learn, showcase
                skills, gain CV points & get hired by your dream company.
              </p>
              <Button variant="primary" className="mt-3" href="/dashboard">
                Explore Jobs
              </Button>
            </Col>
            <Col lg={6} className="text-center">
              <img
                src={heroImage}
                alt="Hero"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
