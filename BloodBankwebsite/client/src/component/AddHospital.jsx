import React  from "react";
import Box from '@mui/material/Box';
import AddHospitals from "../services/AddHospital";


function AddHospital()
{
    return(
        <>   
            <Box height = {100}/>
            <div><AddHospitals /></div>
        </>
     
    )
}
export default AddHospital;