import React from "react";
import Layout from "./../component1/Layout/Layout";
import Bloodbank from "../images/new.jpeg";
import "../styles/HomeStyles.css";

const Home = () => {
  const handleLogin = () => {
    // Redirect to the login page
    window.location.href = "/login";
  };

  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Bloodbank})` }}>
        <div className="headerContainer">
         <br/>
         <br/>
          <h1>Blood Bank</h1><h1>Website</h1>
        <br/>
        <h3>Your Health Is Our Priority</h3>
          <button onClick={handleLogin}>Login Now</button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
