import React  from "react";
import Box from '@mui/material/Box';
import Hospitals from "../services/Hospitals";

function Hospital()
{
    return(
        <>   
            <Box height = {100}/>
            <div><Hospitals /></div>
        </>
     
    )
}
export default Hospital;