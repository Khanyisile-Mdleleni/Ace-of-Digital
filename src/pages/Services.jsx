import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Services = () => {
  return (
    <div>
      <h1 className="title">Our Services</h1>
      <h3 className="subtitle-c">What we offer</h3> <br />
      <br />
      <div className="services">
        <Container>
          <Row>
            <Col>
              {" "}
              <div className="service">
                <h2>Website Development and Design</h2>
                <p>Description of Service 1.</p>
              </div>
            </Col>
            <Col>
              {" "}
              <div className="service">
                <h2>Content Writing</h2>
                <p>Description of Service 2.</p>
              </div>
            </Col>
          </Row>
        </Container>{" "}
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              {" "}
              <div className="service">
                <h2>Logo and Business Card Design</h2>
                <p>Description of Service 1.</p>
              </div>
            </Col>
            <Col>
              {" "}
              <div className="service">
                <h2>Social Media Marketing</h2>
                <p>Description of Service 2.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
