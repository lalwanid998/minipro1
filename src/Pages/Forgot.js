import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email:"",
  });

  const handleFP = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email){
      localStorage.setItem("loggedin",true);
      navigate("/resetpassword");
    }else{
      alert("Wrong Email");
    }
  };
  

  return(
    <>
      <div className="wrapper">
    <h2>ForgotPassword</h2>
    <form onSubmit={handleFP}>
      <div className="input-box">
        <input type="text" placeholder="Enter your email" name="email" defaultValue={input.email} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })} />
      </div>
      <div className="input-box button">
        <input type="Submit" defaultValue="Submit" />
      </div>
    </form>
  </div>
    </>
    );
};

export default Forgot;