//import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function Buttons() {
 // const history = useHistory();
 // history.push("/hlist");

  // const Navigate1 = () => {
  //   console.log("Buttoon clicked");
  //   history.push("/hlist");
    
  // }
    
    return (
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
       <Button variant='danger' href="/hlist" size='lg' style={{ marginRight: "60px" }}>Donar</Button>
       

        <Button variant='danger' href="/bloodbank" size="lg" style={{ marginRight: "60px" }}>
          BloodBank
        </Button>
      </div>
    );
  };

export default Buttons;
