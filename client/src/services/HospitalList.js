import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function HospitalList() {
  const [hospitalData, setHospitalData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // Fetch data from the database using Axios
    axios
      .get("http://127.0.0.1:9898/hospitals")
      .then((response) => {
        // Set the fetched data to the state
        setHospitalData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching hospital data:", error);
      });
  }, []);

  const handleHospitalClick = (hospitalId) => {
    // Redirect to the hospital registration page with the hospitalId
    window.location.href = `/hregister/${hospitalId}`;
};


  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(rgba(255, 0, 0, 0.6), rgba(255, 255, 255, 0.9))",
    },
    card: {
      width: "1000px",
      maxWidth: "1200px",
    },
    heading: {
      textAlign: "center",
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <div className="card p-4" style={styles.card}>
        <h1 className="mb-4" style={{ fontWeight: "bold", textAlign: "center" }}>
          Hospital List
        </h1>

        {/* Heading indicating clickability */}
        <h2 style={styles.heading}>Click on a hospital to register</h2>

        <Table striped bordered hover>
          <thead>
            <tr><th style={{textAlign: "center"}}>Hospital Name</th></tr>
          </thead>
          <tbody>
            {hospitalData.map((hospital) => (
              <tr
                key={hospital.H_Id}
                onClick={() => handleHospitalClick(hospital.H_Id)} 
                style={{ cursor: "pointer" }}
              >
                {/* <td className="font-weight-bold">
                  Hospital Name <br />
                  <br />
                </td> */}
                <td style={{textAlign: "center"}}>{hospital.Hospital_Name}</td>
                {/* <td>{hospital.Hospital_Name}</td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default HospitalList;
