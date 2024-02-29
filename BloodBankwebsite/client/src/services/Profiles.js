import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profiles = () => {
    const formStyle = {
        border: '2px solid #ccc', // Define the border properties
        padding: '20px', // Add padding to the form for better appearance
        borderRadius: '5px' // Optional: Add rounded corners
      };
  // State variables to store form data
  const [First_Name, setFirstName] = useState('');
  const [Last_Name, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Address, setAddress] = useState('');
  // Add more fields as needed

  useEffect(() => {
    // Fetch user profile data from the database
    axios.get('http://127.0.0.1:9898/admin')
      .then(response => {
        const { First_Name, Last_Name, Email,Password,Mobile,Address } = response.data;
        setFirstName(First_Name);
        setLastName(Last_Name);
        setEmail(Email);
        setPassword(Password);
        setMobile(Mobile);
        setAddress(Address);
        // Set other fields as needed
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Prepare updated profile data
    const updatedProfile = {
      First_Name,
      Last_Name,
      Email,
      Password,
      Mobile,Address
      // Add more fields as needed
    };

    // Send updated profile data to the server to be saved in the database
    axios.put('http://127.0.0.1:9898/admin', updatedProfile)
      .then(response => {
        console.log('Profile updated successfully:', response.data);
        // Optionally, redirect the user to another page or show a success message
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        // Handle error
      });
  };

  return (
    <div className='container'>
    <center>
    <h1><strong>Profile</strong></h1>
    <div className='form-inline'>
      <form onSubmit={handleSubmit} style={formStyle}>
        <table className='responsive'>
        <div className='form-group mr-3'>
                <label className='mr-2'>First Name:</label>{"       "}
                <input   
                type="text"
                value={First_Name}
                onChange={(e) => setFirstName(e.target.value)}
             />
        </div>
 
       <br/><br/>
        <div className='form-group mr-3'>
                <label className='mr-2'>Last Name:</label>{"       "}
                <input   
                 type="text"
                 value={Last_Name}
                 onChange={(e) => setLastName(e.target.value)}
             />
               
        </div>

       <br/><br/>
       <div className='form-group mr-3'>
                <label className='mr-2'> Email: </label>{"       "}
                <input   
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
             />
                
        </div>

      <br/><br/>
      <div className='form-group mr-3'>
                <label className='mr-2'>Password: </label>{"       "}
            <input
            type="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
             />
                
        </div>

        <br/><br/>
        <div className='form-group mr-3'>
                <label className='mr-2'>Mobile: </label>{"       "}
          <input
            type="number"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
             />
              
        </div>

         <br /> <br />
        <div className='form-group mr-3'>
                <label className='mr-2'> Address: </label>{"       "}
          <input
            type="text"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
             />
          
        </div>

        <br /><br />
        {/* Add more form fields as needed */}
        <button type="submit">Save Changes</button>
        </table>
      </form>
    </div>
    </center>
    </div>
  );
};

export default Profiles;
