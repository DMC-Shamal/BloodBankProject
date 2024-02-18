import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaRegUser, FaRegBell } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousels from "../component/Carousels";
import Buttons from "../component/Buttons";

function NavBar() {

  const onProfileClick = () => {
    // Redirect to the registration confirmation page
    window.location.href = '/editprofile';
};

  return (
    <div>
      <Navbar className="bg-danger" variant="danger">
        <Container fluid>
          <NavDropdown title={<FaRegUser size={20}  style={{ color: "white" }} />} id="basic-nav-dropdown">
            <NavDropdown.Item href="#editprofile" onClick={onProfileClick}>Edit Profile</NavDropdown.Item>
            {/* Add more dropdown items as needed */}
          </NavDropdown>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#notifications">
                <FaRegBell size={20} style={{ color: "white" }} />
              </Nav.Link>
              <Nav.Link href="#logout">
                <FiLogOut size={20} style={{ color: "white" }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <br />
        <br />
        <Carousels />
        <br />
        <br />
        <Buttons />
      </Container>
    </div>
  );
}

export default NavBar;
