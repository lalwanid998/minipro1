import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate();

    const [input,setInput] = useState({
        oldpassword:"",
        newpassword:"",
        confirmpassword:"",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.oldpassword !== loggeduser.oldpassword && input.newpassword !== loggeduser.newpassword){
          localStorage.setItem("user", JSON.stringify(input));
          navigate("/login");
        }
        else{
          alert("Wrong Password");
        }
    };
  return(
    <>
  <div className="wrapper">
    <h2>ResetPassword</h2>
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <input type="text" placeholder="Old Password" name="oldpassword" defaultValue={input.oldpassword} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            } />
      </div>
      <div className="input-box">
        <input type="text" placeholder="New Password" name="newpassword" defaultValue={input.newpassword} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })} />
      </div>
      <div className="input-box">
        <input type="password" placeholder="Confirm Password" name="confirmpassword" defaultValue={input.confirmpassword} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })} />
      </div>
      <div className="input-box button">
        <input type="Submit" defaultValue="ResetPassword" />
      </div>
      <p>Already have an account? <Link to="/login"><u>Login Now</u></Link></p>
    </form>
  </div>
    </>
    );
};

export default ResetPassword;