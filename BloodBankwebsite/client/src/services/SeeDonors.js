import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SeeDonors = () => {
  const [donors, setDonors] = useState([]);


  useEffect(() => {

    axios.get('http://127.0.0.1:9898/bloodbank')
      .then(response => {
        setDonors(response.data);
      })
      .catch(error => {
        console.error('Error fetching donor data:', error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: '#CD5C5C', minHeight: '100vh', padding: '20px' }}>
      <Container className="mt-4">
        <h2 className="text-center mb-4">List of Donors</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {donors.map((donor, index) => (
            <Col key={donor.D_Id || index}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Text>
                    <strong>Blood Type:</strong> {donor.Blood_Type}
                    <br />
                    <strong>Hospital Receipt:</strong> {donor.Hospital_Reciept}
                    <br />
                    <strong>Age:</strong> {donor.Age}
                    <br />
                    <strong>Gender:</strong> {donor.Gender}
                    <br />
                    <strong>Hospital Name</strong> {donor.Hospital_Name}
                    <br />
                    <strong>Hospital Address</strong> {donor.Hospital_Address}
                    <br />
                    <strong>Hospital Number</strong> {donor.Hospital_Number}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SeeDonors;
