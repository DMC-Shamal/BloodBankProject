import { useEffect, useState } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

function Dashboard() 
{
    const [users,setusers] =useState([]);
    const [user,setuser] =useState( {D_Id:"",  First_Name :"", Last_Name :"", Email :"",Mobile:"", Blood_Type :"",Hospital_Reciept :"",Age :"", Gender :"", Role  :"", Hospital_Name :"",Hospital_Number :"",
});
    const [message,setmessage] =useState("");

    useEffect(()=>{
        GetAll();
    }, [])
   
    const GetAll=()=>
    {
        axios.get("http://127.0.0.1:9898/doners")
        .then(response =>{
            console.log(response.data);
            setusers(response.data)
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const SetMessage=(messageToBeSet)=>{
         setmessage(messageToBeSet);
         setTimeout(() => {
                             setmessage("");
                        }, 5000);
    }

    const RemoveRecord=(D_Id)=>{
        
        axios.post('http://127.0.0.1:9898/hospitals', user)
        .then(response => {
        if (response.data.affectedRows !== undefined && response.data.affectedRows > 0) {
        SetMessage("Record added.");
        GetAll();
        } else {
        SetMessage("Some problem!");
        }
    })
        .catch(error => {
        console.error('Error:', error);
    });

    }

    const AcceptRecord=(D_Id)=>{
        axios.put("http://127.0.0.1:9898/actionaccept/" + D_Id)
        .then(response => {
        if (response.data.affectedRows !== undefined && response.data.affectedRows > 0) {
            SetMessage("Accepted successfully");
            GetAll();
        } else {
            SetMessage("Some problem!");
        }
    })
        .catch(error => {
        console.error("Error:", error);
    });

    }
  
     return (<div >
                   <center> <div className='table-responsive'>
                        {
                           <h1> <strong>Doners List</strong></h1>
                        }
                    </div>
                    </center>
                    <hr/>
                    <div className='table-responsive'>
                    <table class="table table-striped">
                    <thead>
                            <tr>
                                <th>No</th>
                                <th >First_Name</th>
                                <th >Last_Name</th>
                                <th >Email</th>
                                <th >Mobile</th>
                                <th >Blood_Type</th>
                                <th >Hospital_Reciept</th>
                                <th >Age</th>
                                <th>Gender</th>
                                <th >Role</th>
                                <th >Hospital_Name</th>
                                <th >Hospital_Number</th>
                                <th colSpan={2}><center>Action</center></th>
                             </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user=>{
                                    return <tr key={user.D_Id}>
                                            <td>{user.D_Id}</td>
                                            <td>{user.First_Name}</td>
                                            <td>{user.Last_Name}</td> 
                                            <td>{user.Email}</td> 
                                            <td>{user.Mobile}</td> 
                                            <td>{user.Blood_Type}</td> 
                                            <td>{user.Hospital_Reciept}</td> 
                                            <td>{user.Age}</td> 
                                            <td>{user.Gender}</td> 
                                            <td>{user.Role}</td> 
                                            <td>{user.Hospital_Name}</td> 
                                            <td>{user.Hospital_Number}</td> 
                                            <td>
                                            <button className='btn btn-success' 
                                            onClick={
                                                ()=>
                                                {
                                                AcceptRecord(user.D_Id)
                                                }
                                            }>
                                               Accept
                                            </button>
                                            </td>

                                            <td>
                                            <button className='btn btn-danger' 
                                            onClick={
                                                ()=>
                                                {
                                                RemoveRecord(user.D_Id)
                                                }
                                            }>
                                                Reject
                                            </button>
                                            </td>
                                        </tr>
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                    <center>
                       <div className='alert alert-success' 
                            style={{color: "black"}}>
                             {message}
                       </div>
                    </center>
                 </div>);
}
 
export default Dashboard;