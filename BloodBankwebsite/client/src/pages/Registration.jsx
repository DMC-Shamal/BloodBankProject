// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [address, setAddress] = useState('');

//   const handleRegister = () => {
//     console.log('Name:', name);
//     console.log('Mobile:', mobile);
//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Address:', address);

//     // Redirect to the login page after successful registration
//     window.location.href = '/login';
//   };

//   const handleSkip = () => {
//     // Redirect to the homepage
//     window.location.href = '/';
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center mt-5">
//         <Col xs={12} md={6}>
//           <h1 className="mb-4" style={{ color: "#832729", fontWeight: "bold", textAlign: "center" }}>Register</h1>
//           <Form>
//             <Form.Group className="mb-3" controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 placeholder="Enter name" 
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Form.Group>

//             {/* Other form fields */}

//             <Button 
//               style={{backgroundColor: "#832729"}} 
//               type="button" 
//               onClick={handleRegister} 
//               className="mb-3"
//               block
//             >
//               Register
//             </Button>
//           </Form>
//           <p>Have got an account? <Link to="/login">Login now</Link></p>
//           <p>Go to homepage.. <Button variant="link" onClick={handleSkip}>Skip</Button></p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Register;
