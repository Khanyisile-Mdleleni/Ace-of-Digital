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
                <p>
                  {" "}
                  We specialize in creating stunning websites tailored to your
                  needs. From concept to completion, our team of designers and
                  developers work closely with you to bring your vision to life.
                  Whether you need a simple portfolio site or a complex
                  e-commerce platform, we've got you covered.
                </p>
              </div>
            </Col>
            <Col></Col>
            <Col>
              {" "}
              <div className="service">
                <h2>Content Writing</h2>
                <p>
                  {" "}
                  Compelling content is essential for engaging your audience and
                  driving conversions. Our experienced content writers craft
                  high-quality copy that resonates with your target audience and
                  helps you achieve your business goals. From blog posts to
                  product descriptions, we deliver content that captivates and
                  converts.
                </p>
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
                <p>
                  {" "}
                  Your brand's identity is crucial for making a lasting
                  impression. Our talented designers create custom logos and
                  business card designs that reflect your brand's personality
                  and values. Whether you're launching a new business or
                  rebranding an existing one, we'll help you stand out from the
                  crowd.
                </p>
              </div>
            </Col>
            <Col></Col>
            <Col>
              {" "}
              <div className="service">
                <h2>Social Media Marketing</h2>
                <p>
                  Harness the power of social media to grow your business and
                  connect with your audience. Our social media marketing experts
                  develop tailored strategies to increase brand awareness, drive
                  website traffic, and generate leads. From content creation to
                  community management, we'll help you build a strong presence
                  on platforms like Facebook, Instagram, and Twitter.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
