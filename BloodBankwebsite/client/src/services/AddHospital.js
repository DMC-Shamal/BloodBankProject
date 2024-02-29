import { useEffect, useState } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

function AddHospitals() 
{
    const [users,setusers] =useState([]);
    const [user,setuser] =useState( {Hospital_Name: "", Hospital_Number:"", Hospital_Email:"", Hospital_Address:""});
    const [message,setmessage] =useState("");

    useEffect(()=>{
        GetAll();
    }, [])
   
    const GetAll=()=>
    {
        axios.get('http://127.0.0.1:9898/hospitals')
        .then(response => {
            setusers(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    }

    const OnTextChanged =(args)=>{

        var copyOfUser = {...user};
        copyOfUser[args.target.name] = args.target.value;
       setuser(copyOfUser);

    }

    const SetMessage=(messageToBeSet)=>{
         setmessage(messageToBeSet);
         setTimeout(() => {
                             setmessage("");
                        }, 5000);
    }

    const AddRecord=()=>{
        
        axios.post("http://127.0.0.1:9898/hospitals", user)
        .then(response => {
        debugger;
        var result = response.data;
        if (result.affectedRows !== undefined && result.affectedRows > 0) {
        SetMessage("Record added.");
        GetAll();
        } else {
        SetMessage("Some problem!.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
    }

    const ClearBoxes=()=>{
        setuser({Hospital_Name: "", Hospital_Number:"",Hospital_Email:"",Hospital_Address:""});
    }
 
return (
    <div className='container'>
        <center>
            <h1><strong>Add Hospitals</strong></h1>
       
        <div className='form-inline'>
            <div className='form-group mr-3'>
                <label className='mr-2'>Hospital Name:</label>{"       "}
                <input type="text" className="form-control" value={user.Hospital_Name} name='Hospital_Name' onChange={OnTextChanged} />
            </div>
            
            <br/><br/>
            <div className='form-group mr-3'>
                <label className='mr-2'>Hospital Number:</label>{"       "}
                <input type="text" className="form-control" value={user.Hospital_Number} name='Hospital_Number' onChange={OnTextChanged} />
            </div>
            <br/><br/>
            <div className='form-group mr-3'>
                <label className='mr-2'>Hospital Email:</label>{"       "}
                <input type="text" className="form-control" value={user.Hospital_Email} name='Hospital_Email' onChange={OnTextChanged} />
            </div>
            <br/><br/>
            <div className='form-group mr-3'>
                <label className='mr-2'>Hospital Address:</label>{"       "}
                <input type="text" className="form-control" value={user.Hospital_Address} name='Hospital_Address' onChange={OnTextChanged} />
            </div>
            <br/><br/>
            <div>
                <button className='btn btn-primary mr-2' onClick={AddRecord}>Add Record</button>
                {" "}
                <button className='btn btn-info' onClick={ClearBoxes}>Clear</button>
            </div>
        </div>
        <hr />
        
            <div className='alert alert-success' style={{ color: "black" }}>
                {message}
            </div>
        </center>
    </div>
);
};
export default AddHospitals;