import React, { useState, useRef } from "react";
import { Form, Input, Button, message } from "antd";
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, FacebookOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import ReCAPTCHA from "react-google-recaptcha";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { TextArea } = Input;

const Contact = () => {
  const [verified, setVerified] = useState(false);
  const recaptchaRef = useRef();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    message.success("Message sent successfully");
    form.resetFields(); // Reset the form fields
    recaptchaRef.current.reset(); // Reset the reCAPTCHA
  };

  const formItemLayout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  return (
    <>
      <div>
        <h1 className="title">Contact Us</h1>
        <h3 className="subtitle-c">Get in touch</h3> <br /> <br />
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              {" "}
              <div className="contacts">
                <ul>
                  <li>
                    {" "}
                    <PhoneOutlined /> 068 607 6036{" "}
                  </li>
                  <li>
                    {" "}
                    <MailOutlined /> aceofdigital@gmail.com
                  </li>
                  <li>
                    {" "}
                    <EnvironmentOutlined /> Cape Town, 8001
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <Form
                form={form}
                name="register"
                onFinish={onFinish}
                style={{ maxWidth: 400 }}
              >
                <Form.Item
                  {...formItemLayout}
                  label="E-mail"
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Please enter a valid email address.",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  {...formItemLayout}
                  label="Message"
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: "Please input your message.",
                    },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                  <br />
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeEh4wpAAAAAM_h5MFPPXwIza_hqO0T4BFalRKL"
                    onChange={value => setVerified(value)}
                  />
                  <br />
                  <Button type="primary" htmlType="submit" disabled={!verified}>
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Container>
        {/* ---------------------------------------Footer-------------------------------------------- */}
        <footer>
          <div id="footer-content">
            <div className="footer_title">
              <div id="icons">
                <a
                  href="https://github.com/Khanyisile-Mdleleni"
                  target="_blank"
                >
                  <FacebookOutlined />
                </a>
                <a href="https://twitter.com/kay_mdleleni/" target="_blank">
                  <TwitterOutlined />
                </a>
                <a
                  href="https://www.linkedin.com/in/khanyisile-mdleleni-b77691250/"
                  target="_blank"
                >
                  <LinkedinOutlined />
                </a>
              </div>
            </div>
            <div className="footer_title">
              <p>&#169; Ace of Digital 2023. All right reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
