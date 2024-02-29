import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../images/image3.jpg'; // Import your background image

function HospitalRegistration() {
    const [formData, setFormData] = useState({
        Blood_Type: '',
        Hospital_Reciept: '',
        Age: '',
        Gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:9898/doners', formData)
            .then(response => {
                // Handle successful registration
                console.log('Registration successful:', response.data);
                window.location.href='/registration-confirmation';
            })
            .catch(error => {
                // Handle registration error
                console.error('Registration failed:', error);
            });
    };

    const handleCancel = () => {
        window.location.href='/hlist'
        // Logic to handle cancellation, if needed
        console.log('Registration cancelled');
    };

    const handleRegister = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        handleSubmit(e); // Pass the event object to handleSubmit
        console.log('Registration successful');
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="card p-4" style={{ maxWidth: '450px' }}>
                <h1 className="text-center mb-4"><strong>Hospital Registration Form</strong></h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Blood_Type" className="form-label">Blood Type</label>
                        <input type="text" className="form-control" id="Blood_Type" name="Blood_Type" value={formData.Blood_Type} onChange={handleChange} placeholder="Enter blood type" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Hospital_Reciept" className="form-label">Hospital Receipt</label>
                        <input type="text" className="form-control" id="Hospital_Reciept" name="Hospital_Reciept" value={formData.Hospital_Reciept} onChange={handleChange} placeholder="Enter hospital receipt" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Age" className="form-label">Age</label>
                        <input type="number" className="form-control" id="Age" name="Age" value={formData.Age} onChange={handleChange} placeholder="Enter age" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Gender" className="form-label">Gender</label>
                        <input type="text" className="form-control" id="Gender" name="Gender" value={formData.Gender} onChange={handleChange} placeholder="Enter gender" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary" onClick={handleRegister}>Register</button>
                        <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default HospitalRegistration;
