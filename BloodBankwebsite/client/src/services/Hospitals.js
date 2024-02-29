import { useEffect, useState } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

function Hospitals() 
{
    const [users,setusers] =useState([]);
    const [user,setuser] =useState( {H_Id:"",  Hospital_Name :"", Hospital_Number :"", Hospital_Email :"",Hospital_Address:""
});
    const [message,setmessage] =useState("");

    useEffect(()=>{
        GetAll();
    }, [])
   
    const GetAll=()=>
    {
        axios.get("http://127.0.0.1:9898/hospitals")
        .then(response =>{
            // console.log(response.data);
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

    const RemoveRecord=(H_Id)=>{
        //XHR Call for Delete Record
        // console.log(`${No} is getting deleted..`)
        axios.delete("http://127.0.0.1:9898/hospitals/" + H_Id)
        .then(response => {
            if (response.status === 200) {
                if (response.data.affectedRows !== undefined && response.data.affectedRows > 0) {
                    SetMessage("Record Removed.");
                    GetAll();
                } else {
                    SetMessage("Some problem!.");
                }
            }
        })
        .catch(error => {
            console.error("Error:", error);
            // Handle error
        });
    }
    // const EditRecord=(H_Id)=>{
    //     //console.log(`${No} is getting edited.`);
    //     var userToEdit = null;
    //     for(var i=0;i<users.length; i++)
    //     {
    //         var currentUser = users[i];
    //         if(currentUser.H_Id === H_Id)
    //         {
    //             userToEdit = {...currentUser};
    //             break;
    //         }
    //     }

    //     if(userToEdit!==null)
    //     {
    //         setuser(userToEdit);
    //         SetMessage("Found Record!")
    //     }
    //     else
    //     {
    //         SetMessage("No Record Found !")
    //     }
    // }
     return (<div >
                      <center> <div className='table-responsive'>
                        {
                           <h1> <strong>Hospital List</strong></h1>
                        }
                    </div>
                    </center>
                    <hr/>
                    <div className='table-responsive'>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>H_Id</th>
                                <th>Hospital_Name</th>
                                <th>Hospital_Number</th>
                                <th>Hospital_Email</th>
                                <th>Hospital_Address</th>
                             </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user=>{
                                    return <tr key={user.H_Id}>
                                            <td>{user.H_Id}</td>
                                            <td>{user.Hospital_Name}</td>
                                            <td>{user.Hospital_Number}</td> 
                                            <td>{user.Hospital_Email}</td> 
                                            <td>{user.Hospital_Address}</td> 
                                            {/* <td>
                                            <button className='btn btn-warning' 
                                            onClick={
                                                ()=>
                                                {
                                                EditRecord(user.H_Id)
                                                }
                                            }>
                                               Edit
                                            </button>
                                            </td> */}
                                             <td>
                                            <button className='btn btn-danger' 
                                            onClick={
                                                ()=>
                                                {
                                                RemoveRecord(user.H_Id)
                                                }
                                            }>
                                                Delete
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
 
export default Hospitals;