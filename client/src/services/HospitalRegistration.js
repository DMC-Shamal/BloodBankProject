import React, { useState } from 'react';
import axios from 'axios';

function HospitalRegistration() {
    const [formData, setFormData] = useState({
        Blood_Type: '',
        Hospital_Reciept: null,
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

    const handleFileChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            Hospital_Reciept: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('Blood_Type', formData.Blood_Type);
        formDataToSend.append('Hospital_Reciept', formData.Hospital_Reciept);
        formDataToSend.append('Age', formData.Age);
        formDataToSend.append('Gender', formData.Gender);

        try {
            const response = await axios.post('http://127.0.0.1:9898/doners', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Registration successful:', response.data);
            // Redirect or display a success message
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle error
        }
    };

    const handleCancel = () => {
                // Redirect to the hospital list page
                window.location.href = '/hlist';
            };
        
            const handleRegisterClick = () => {
                handleSubmit();
                // Redirect to the registration confirmation page
                window.location.href = '/registration-confirmation';
            };

        const styles = {
        container: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "linear-gradient(rgba(255, 0, 0, 0.5), rgba(255, 255, 255, 0.5))",
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
        <div className="container d-flex justify-content-center align-items-center vh-100" >
            <div className="card p-4" style={{ maxWidth: '450px' }}>
                <h1 className="text-center mb-4"><strong>Hospital Registration Form</strong></h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Blood_Type" className="form-label">Blood Type</label>
                        <input type="text" className="form-control" id="Blood_Type" name="Blood_Type" value={formData.Blood_Type} onChange={handleChange} placeholder="Enter blood type" />
                    </div>
                    <div>
                    <label htmlFor="Hospital_Reciept">Hospital Receipt</label>
                    <input type="file" id="Hospital_Reciept" name="Hospital_Reciept" onChange={handleFileChange} />
                </div>
                    {/* <div className="mb-3">
                        <label htmlFor="Hospital_Reciept" className="form-label">Hospital Receipt</label>
                        <input type="text" className="form-control" id="Hospital_Reciept" name="Hospital_Reciept" value={formData.Hospital_Reciept} onChange={handleChange} placeholder="Enter hospital receipt" />
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="Age" className="form-label">Age</label>
                        <input type="number" className="form-control" id="Age" name="Age" value={formData.Age} onChange={handleChange} placeholder="Enter age" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Gender" className="form-label">Gender</label>
                        <input type="text" className="form-control" id="Gender" name="Gender" value={formData.Gender} onChange={handleChange} placeholder="Enter gender" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary" onClick={handleRegisterClick}>Register</button>
                        <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}


//     return (
//         <div>
//             <h1>Hospital Registration Form</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="Blood_Type">Blood Type</label>
//                     <input type="text" id="Blood_Type" name="Blood_Type" value={formData.Blood_Type} onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="Hospital_Reciept">Hospital Receipt</label>
//                     <input type="file" id="Hospital_Reciept" name="Hospital_Reciept" onChange={handleFileChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="Age">Age</label>
//                     <input type="number" id="Age" name="Age" value={formData.Age} onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="Gender">Gender</label>
//                     <input type="text" id="Gender" name="Gender" value={formData.Gender} onChange={handleChange} />
//                 </div>
//                 <button type="submit" onClick={handleRegisterClick}>Register</button>
//                 <button type="button" onClick={handleCancel}>Cancel</button>
//             </form>
//         </div>
//     );
// }

export default HospitalRegistration;


// import React, { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function HospitalRegistration() {
//     const [formData, setFormData] = useState({
//         Blood_Type: '',
//         Hospital_Reciept: '',
//         Age: '',
//         Gender: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://127.0.0.1:9898/doners', formData)
//             .then(response => {
//                 // Handle successful registration
//                 console.log('Registration successful:', response.data);
//             })
//             .catch(error => {
//                 // Handle registration error
//                 console.error('Registration failed:', error);
//             });
//     };

//     const handleCancel = () => {
//         // Redirect to the hospital list page
//         window.location.href = '/hlist';
//     };

//     const handleRegisterClick = () => {
//         // Redirect to the registration confirmation page
//         window.location.href = '/registration-confirmation';
//     };

//     const styles = {
//         container: {
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "100vh",
//           background: "linear-gradient(rgba(255, 0, 0, 0.5), rgba(255, 255, 255, 0.5))",
//         },
//         card: {
//           width: "1000px",
//           maxWidth: "1200px",
//         },
//         heading: {
//           textAlign: "center",
//           marginBottom: "20px",
//         },
//       };

//     return (
//         <div style={styles.container}>
//         <div className="container d-flex justify-content-center align-items-center vh-100" >
//             <div className="card p-4" style={{ maxWidth: '450px' }}>
//                 <h1 className="text-center mb-4"><strong>Hospital Registration Form</strong></h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="Blood_Type" className="form-label">Blood Type</label>
//                         <input type="text" className="form-control" id="Blood_Type" name="Blood_Type" value={formData.Blood_Type} onChange={handleChange} placeholder="Enter blood type" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="Hospital_Reciept" className="form-label">Hospital Receipt</label>
//                         <input type="text" className="form-control" id="Hospital_Reciept" name="Hospital_Reciept" value={formData.Hospital_Reciept} onChange={handleChange} placeholder="Enter hospital receipt" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="Age" className="form-label">Age</label>
//                         <input type="number" className="form-control" id="Age" name="Age" value={formData.Age} onChange={handleChange} placeholder="Enter age" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="Gender" className="form-label">Gender</label>
//                         <input type="text" className="form-control" id="Gender" name="Gender" value={formData.Gender} onChange={handleChange} placeholder="Enter gender" />
//                     </div>
//                     <div className="d-flex justify-content-between">
//                         <button type="submit" className="btn btn-primary" onClick={handleRegisterClick}>Register</button>
//                         <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default HospitalRegistration;
