import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [input,setInput] = useState({
        name:"",
        email:"",
        password:"",
        mobile:""
    });

    

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    };
  return(
    <>
  <div className="wrapper">
    <h2>Signup</h2>
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <input type="text" placeholder="Enter your name" name="name" defaultValue={input.name} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            } />
      </div>
      <div className="input-box">
        <input type="text" placeholder="Enter your email" name="email" defaultValue={input.email} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })} />
      </div>
      <div className="input-box">
        <input type="password" placeholder="Create password" name="password" defaultValue={input.password} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })} />
      </div>
      <div className="input-box">
        <input type="number" placeholder="Mobile" name="mobile" defaultValue={input.name} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })} />
      </div>
      <div className="input-box button">
        <input type="Submit" defaultValue="Signup" />
      </div>
      <p>Already have an account? <Link to="/login"><u>Login Now</u></Link></p>
    </form>
  </div>
    </>
    );
};

export default Signup;