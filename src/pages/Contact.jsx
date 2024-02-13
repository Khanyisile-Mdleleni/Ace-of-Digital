import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <>
      <div>
        <h1 className="title">Contact Us</h1>
        <h3 className="subtitle-c">Get in touch</h3>
      </div>
      <div>
        <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
