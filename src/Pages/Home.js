import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  }

  return (
  <div>
    <h2>Welcome to Home Page {userName.name}</h2>
    <button onClick={handleLogout} type="button" defaultValue="submit" name="Submit">Logout</button>
  </div>
  );
};

export default Home;