import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from '../images/image3.jpg';

const HospitalBloodForm = () => {
    const bloodTypes = ['A-','A+', 'B+', 'AB-','AB+', 'O'];
    const [selectedBloodType, setSelectedBloodType] = useState('');
    const [selectedHospital, setSelectedHospital] = useState('');
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        // Fetch data from the database using Axios
        axios
            .get("http://127.0.0.1:9898/hospitals")
            .then((response) => {
                // Set the fetched data to the state
                setHospitals(response.data);
                console.log("data added");
            })
            .catch((error) => {
                console.error("Error fetching hospital data:", error);
            });
    }, []);

    // Define handleHospitalSelect function
    const handleHospitalSelect = (event) => {
        setSelectedHospital(event.target.value);
    };

    // Handle "See Donor" button click
    const handleSeeDonorClick = () => {
        // Implement the functionality to see donors based on the selected hospital
        // For now, let's log the selected hospital
        window.location.href = '/seedonor'
        console.log("Selected Hospital:", selectedHospital);
    };

    const handleBloodTypeSelect = (event) => {
        setSelectedBloodType(event.target.value);
    };

    return (
        <div className="container" style={{
            backgroundImage: `url(${backgroundImage})`, // Change 'your_image_url.jpg' to the actual URL of your background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh', // Ensure the container covers the full viewport height
        }}>
            <div className="text-center mt-4">
                <h3>Select Hospital and Blood Type</h3>
            </div>
            <div className="form-group">
                <select
                    className="form-select"
                    value={selectedHospital}
                    onChange={handleHospitalSelect}
                >
                    <option value="">Select Hospital</option>
                    {Array.isArray(hospitals) && hospitals.map((hospital, index) => (
                        <option key={index} value={hospital.Hospital_Name}>
                            {hospital.Hospital_Name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="bloodTypeSelect"></label>
                <select
                    className="form-select"
                    id="bloodTypeSelect"
                    value={selectedBloodType}
                    onChange={handleBloodTypeSelect}
                >
                    <option value="">Select Blood Type</option>
                    {bloodTypes.map((bloodType, index) => (
                        <option key={index} value={bloodType}>
                            {bloodType}
                        </option>
                    ))}
                </select>
            </div>
            <br /><br />
            <div className="text-center">
                <button className="btn btn-primary" onClick={handleSeeDonorClick}>
                    See Donor
                </button>
            </div>
        </div>
    );
};

export default HospitalBloodForm;
