import Card from "react-bootstrap/Card";

function About() {
  return (
    <>
      <div>
        <h1 className="title">About Us</h1>
      </div>
      <div className="cards">
        <div className="card">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Vision</Card.Header>
            <Card.Body>
              <Card.Text>
                Our vision is to establish ourselves as the leading provider of
                web development and design, content writing, SEO optimization,
                social media marketing, and logo and business card design
                services in Cape Town. We aim to be the go-to agency for
                businesses and individuals seeking exceptional digital solutions
                that drive their online presence and business growth.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="card">
          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Header>Mission</Card.Header>
            <Card.Body>
              <Card.Text>
                Our utmost priority is to provide high-quality products and
                services that consistently surpass our customers' expectations.
                We achieve this by adhering to strict quality standards and
                continuously improving our processes. Our dedicated team of
                experts works tirelessly to develop and deliver innovative
                solutions that address our customers' needs effectively. We
                conduct thorough market research and customer feedback analysis
                to gain deep insights into their preferences, challenges, and
                aspirations. 
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="card">
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Our Values</Card.Header>
            <Card.Body>
              <Card.Text>
                Integrity: At our business, integrity is the cornerstone of our
                operations. It means conducting ourselves with honesty,
                transparency, and ethical behavior in all aspects of our work. 
                Honesty: Honesty is ingrained in
                our business culture. We believe in open and transparent
                communication with our stakeholders. We provide accurate and
                truthful information about our product and services.
                Respect: Respect is at the heart of how we treat
                our clients, employees, and partners.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default About;
