import { useEffect, useState } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

function AcceptedDoners() 
{
    const [users,setusers] = useState([]);
    const [message,setmessage] = useState("");

    useEffect(()=>{
        GetAll();
    }, [])
   
   
    
    const GetAll=()=>
    {
        axios.get('http://127.0.0.1:9898/accepteddoners')
        .then(response => {
          // Handle success
          setusers(response.data);
        })
        .catch(error => {
          // Handle error
          console.error('Error fetching data:', error);
        });
      

    }

     return (
        <div>
            <center> <div className='table-responsive'>
                        {
                           <h1> <strong>Accepted Doners</strong></h1>
                        }
                    </div>
                    </center>
            <hr/>
            <div className='table-responsive'>
            <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Register_Date</th>
                            <th>First_Name</th>
                            <th>Last_Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Blood_Type</th>
                            <th>Hospital_Reciept</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Hospital_Name</th>
                            <th>Hospital_Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.D_Id}>
                                <td>{user.D_Id}</td>
                                <td>{user.Register_Date}</td>
                                <td>{user.First_Name}</td>
                                <td>{user.Last_Name}</td> 
                                <td>{user.Email}</td> 
                                <td>{user.Mobile}</td> 
                                <td>{user.Blood_Type}</td> 
                                <td>{user.Hospital_Reciept}</td> 
                                <td>{user.Age}</td> 
                                <td>{user.Gender}</td> 
                                <td>{user.Hospital_Name}</td> 
                                <td>{user.Hospital_Number}</td> 
                                <td>{user.Action}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <center>
                <div className='alert alert-success' style={{color: "black"}}>
                    {message}
                </div>
            </center>
        </div>
    );
}
 
export default AcceptedDoners;