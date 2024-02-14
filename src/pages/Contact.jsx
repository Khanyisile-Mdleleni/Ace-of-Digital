import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useRef } from "react";
import { Form, Input, Button, message } from "antd";
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";
import ReCAPTCHA from "react-google-recaptcha";

const { TextArea } = Input;
const Contact = () => {
  //------------------------------------------Ref for Recaptcha--------------

  const recaptchaRef = useRef();

  function handleRecaptchaChange(value) {
    console.log("Captcha value:", value);
    setVerified(value); // Update the verified state with the reCAPTCHA value
  }

//-------------------------------Recaptcha Verification---------------

const [verified, setVerified] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    message.success("Message sent successfully");
    form.resetFields(); // Reset the form fields
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
        <h3 className="subtitle-c">Get in touch</h3> <br />
        <br />
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
                    <MailOutlined /> artsofdigital@gmail.com
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
                    sitekey="6LdbpW8pAAAAAMOCJpnuJ1Rv4Ido5eR6sMkNRQFB"
                    onChange={handleRecaptchaChange}
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
      </div>
    </>
  );
};

export default Contact;
