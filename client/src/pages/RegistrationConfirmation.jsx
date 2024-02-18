import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import successCheck from "../images/successCheck.webp";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom/cjs/react-router-dom";

function RegistrationConfirmation() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container>
        <div style={{ textAlign: "center" }}>
          <Image
            src={successCheck}
            roundedCircle
            style={{ width: "171px", height: "180px", marginBottom: "20px" }}
          />
          <h1>Registration Successful</h1>
          <p>Your registration has been successfully submitted.</p>
          <p>To see status <a href="/notification">Click here</a></p>
        </div>
      </Container>
    </div>
  );
}

export default RegistrationConfirmation;
