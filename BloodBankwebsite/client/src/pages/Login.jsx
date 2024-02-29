import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../component1/Layout/Layout";
import { useState } from "react";
import axios from "axios";

import { brown } from "@mui/material/colors";

const Login = () => {
  const [user, setuser] = useState([]);
  const [credentials, setcredentials] = useState({
    Email: "",
    Password: "",
  });

  const OnTextChange = (args) => {
    var copyOfCredentials = { ...credentials };
    copyOfCredentials[args.target.name] = args.target.value;
    setcredentials(copyOfCredentials);
  };

  const DoLogin = () => {
    var copyOfCredentials = { ...credentials };
    //copyOfCredentials.Password = window.btoa(copyOfCredentials.Password);
    axios
      .get("http://127.0.0.1:9898/login", copyOfCredentials)
      .then((response) => {
        // console.log(response.data);
        setuser(response.data);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });

      axios.post("http://127.0.0.1:9898/login", copyOfCredentials)
  .then((response) => {
    const data = response.data; // Data returned from the server
    console.log("data",data)

    // Check if the login was successful
    if (data && data.Token) {
      // Store user information in session storage
      sessionStorage.setItem("Email", credentials.Email);
      sessionStorage.setItem("Token", data.Token);

      // Determine the redirect URL based on the user's email
      const redirectUrl = credentials.Email === "John@gmail.com" ? "/MiniDrawer" : "/navbar";

      // Redirect the user to the appropriate page
      window.location.href = redirectUrl;
    } else {
      // Alert the user if something went wrong during login
      alert("Login failed. Please check your credentials.");
    }
  })
  .catch((error) => {
    // Handle any errors that occurred during the login process
    console.error("An error occurred during login:", error);
    alert("An error occurred during login. Please try again later.");
  });


    // axios
    //   .post("http://127.0.0.1:9898/login", copyOfCredentials)
    //   .then((result) => {
    //     console.log(result.data);
    //     console.log(result.data.Email);
    //     console.log(result.data.U_Id);
    //     if (credentials.Email === "John@gmail.com") {
    //       if (result.data.Token !== undefined) {
    //         sessionStorage.setItem("Email", credentials.Email);
    //         sessionStorage.setItem("Token", result.data.Token);
    //         console.log("login successfuly");
    //         window.location.href = "/MiniDrawer";
    //       } else {
    //         alert("something went wrong for john!");
    //       }
    //     } else {
    //       if (result.data.Token !== undefined) {
    //         sessionStorage.setItem("Email", credentials.Email);
    //         sessionStorage.setItem("Token", result.data.Token);
    //         console.log("login successfuly");
    //         window.location.href = "/User";
    //       } else {
    //         alert("something went wrong!");
    //       }
    //     }
    //   });
  };
  return (
    <Layout>
      <div>
        <br />
        <br />
        <br />
        <br />
        <center>
          <h1>Login</h1>
        </center>

        <div className="table-responsive">
          <table class="table table-striped">
            <center>
              Email :{" "}
              <input
                type="text"
                value={credentials.Email}
                name="Email"
                onChange={OnTextChange}
              />
              <br />
              <br />
              Password :{" "}
              <input
                type="password"
                value={credentials.Password}
                name="Password"
                onChange={OnTextChange}
              />
              <br />
              <br />
              <button onClick={DoLogin}>Login</button>
            </center>
          </table>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default Login;

// import "bootstrap/dist/css/bootstrap.min.css"
// import { useState } from "react";
// import axios from "axios";
// import Layout from "./../component1/Layout/Layout";
// import { Link, useNavigate} from "react-router-dom";
// import { toast } from 'react-toastify'

// function Login() {

//     const [credentials,setcredentials] = useState({"Email":"","Password":""});
//     const [isChecked,setIsChecked] = useState(false)
//     const navigate = useNavigate();
//    const OnTextChange = (args)=>{
//         var inputDataCopy = {...credentials};
//         inputDataCopy[args.target.name]=args.target.value
//         //console.log(inputDataCopy.Email)
//        // console.log(inputDataCopy.Password)
//         setcredentials(inputDataCopy)
//     }

//     const OnCheckboxChange = ()=>{
//         setIsChecked(!isChecked)
//     }
//    const onLogin = (e)=>
//    {
//     e.preventDefault()
//     //alert(credentials.Email+"  "+credentials.Password+"  "+isChecked)
//     var copyofInput = {...credentials}
//     try{
//         axios.post("http://localhost:9898/login",copyofInput).then((result)=>{
//           //console.log(result.data);
//           //console.log(result.data.status);
//           if(result.data.status=="success")
//           {
//             toast.success("User Login Successfully")
//             navigate("/MiniDrawer")
//           }
//           else if (result.data.status=="error")
//           {
//             toast.error("Username or Password is incorrect")
//           }
//           else
//           {
//             toast.error("Something went wrong")
//           }
//     })
//     }
//     catch(ex)
//     {
//         toast.error("Something went wrong")
//     }
//    }

//     return (
//         <>
//           <Layout>
//           <div className="d-flex justify-content-center align-items-center">
//           <center>
//            <h1> Login</h1>
//                 <form className="">
//                 <div className="LoginBox">
//                     <div className="field">
//                         <h2>Candidate</h2>
//                             <div className="">
//                                 <input type="text"
//                                 placeholder="Enter Your Email"
//                                 value={credentials.Email}
//                                 name="Email"
//                                 onChange={OnTextChange}/>
//                                 <span></span>
//                             </div>

//                             <div className="">
//                                 <input type="password"
//                                 placeholder="Enter Your Password"
//                                 value={credentials.Password}
//                                 name="Password"
//                                 autoComplete="current-password"
//                                 onChange={OnTextChange}/>
//                                 <span></span>
//                             </div>

//                             <input
//                                     id="rememberMe"
//                                     type="checkbox"
//                                     name="checkbox"
//                                     checked={isChecked}
//                                     onChange={OnCheckboxChange}/>
//                             <div className="">

//                             </div>
//                                 <label class="" for="rememberMe">Remember Me</label>

//                             <div className="form-group">
//                             <button onClick={onLogin} className="maroon-button">Login</button> <br/> <br/>
//                             <Link to="/register">Register Here</Link>
//                             <br/> <br/>
//                             <Link to="/forgetpassword">Forget Password</Link>
//                             </div>
//                     </div>
//                     </div>

//                 </form>
//            </center>
//           </div>
//           </Layout>
//         </>
//     );
// }

// export default Login;
