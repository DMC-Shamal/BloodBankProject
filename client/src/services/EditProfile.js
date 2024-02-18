import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function EditProfile() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
        window.location.href = '/';
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#F9787F' }}>
            <div>
                <h1 className="text-center mb-4">Edit Profile</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter your mobile number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
}

export default EditProfile;
