import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";
//import HospitalRegistration from './services/HospitalRegistration';
import NavBar from './pages/NavBar';
import Landing from "./Landing";
import RegistrationConfirmation from "./pages/RegistrationConfirmation";
//import { BrowserRouter } from "react-router-dom";
import HospitalList from './services/HospitalList';
import EditProfile from "./services/EditProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
     
    </BrowserRouter> */}
    {/* <NavBar /> */}
    {/* <EditProfile /> */}
    <App />
   
     {/* <RegistrationConfirmation /> */}
    {/* <HospitalRegistration /> */}
    {/* <HospitalList /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
