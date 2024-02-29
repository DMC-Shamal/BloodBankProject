import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
//import { useHistory } from "react-router-dom"; // Import useHistory hook for redirection
import backgroundImage from '../images/image3.jpg';

function EditProfile({ match }) {
  const [formData, setFormData] = useState({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Mobile: "",
    Password: "",
    Address: ""
  });

  

  useEffect(() => {
    // Fetch user data from backend when component mounts
    axios.get(`http://localhost:9898/users/${match.params.U_Id}`)
      .then(response => {
        setFormData(response.data); // Assuming response.data is an object containing user data
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, [match.params.U_Id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to the backend
    axios.put(`http://localhost:9898/users/${match.params.U_Id}`, formData)
      .then(response => {
        console.log(response.data); // Handle response from backend
        // Redirect to the navbar page upon successful submission
        window.location.href="/navbar";
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };


  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundImage: `url(${backgroundImage})`, // Replace 'path_to_your_image' with the actual path to your image
      backgroundSize: "cover",
    },
    formContainer: {
      width: "400px",
      padding: "20px",
      background: "rgba(255, 255, 255, 0.8)", // Adjust the opacity as needed
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add shadow effect
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="First_Name"
              value={formData.First_Name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="Last_Name"
              value={formData.Last_Name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Mobile"
              name="Mobile"
              value={formData.Mobile}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Address"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EditProfile;
