import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import serv1 from "../assets/img/serv-1.jpg";
import serv2 from "../assets/img/serv-2.jpg";
import serv3 from "../assets/img/serv-3.jpg";

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
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={serv1} />
                <Card.Body>
                  <Card.Title>Website Development and Design</Card.Title>
                  <Card.Text>
                    We specialize in creating stunning websites tailored to your
                    needs. From concept to completion, our team of designers and
                    developers work closely with you to bring your vision to
                    life. Whether you need a simple portfolio site or a complex
                    e-commerce platform, we've got you covered.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={serv2} />
                <Card.Body>
                  <Card.Title>Content Writing</Card.Title>
                  <Card.Text>
                    Compelling content is essential for engaging your audience
                    and driving conversions. Our experienced content writers
                    craft high-quality copy that resonates with your target
                    audience and helps you achieve your business goals. From
                    blog posts to product descriptions, we deliver content that
                    captivates and converts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={serv3} />
                <Card.Body>
                  <Card.Title>Logo and Business Card Design</Card.Title>
                  <Card.Text>
                    Your brand's identity is crucial for making a lasting
                    impression. Our talented designers create custom logos and
                    business card designs that reflect your brand's personality
                    and values. Whether you're launching a new business or
                    rebranding an existing one, we'll help you stand out from
                    the crowd.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
