import React from "react";
import Layout from "./../component1/Layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Bloodbank from "../images/Blood-Bank.jpg";
import "../styles/AboutStyles.css";

const About = () => {
  return (
    <Layout>
      <Container>
        <Row className="align-items-center">
          <Col xs={6}>
            <div className="text-content">
              <h4>ABOUT US</h4>
              <p>
                We, Safe Life Blood Banks at Pune, Maharashtra, aim to provide
                prompt, economical, and reliable services of the safest blood.
                Offering the industry-leading, advanced technology and
                well-equipped inventory, we make all types of blood available
                for the patients and many hospitals. We contribute to saving
                many lives in the time of need or in an emergency.
              </p>
            </div>
          </Col>
          <Col xs={6}>
            <div
              className="about-image"
              style={{ backgroundImage: `url(${Bloodbank})` }}
            ></div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default About;
