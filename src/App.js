import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ProtectedRoutes from "./Services/ProtectedRoutes";
import Forgot from "./Pages/Forgot";
import ResetPassword from "./Pages/ResetPassword";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/protectedroutes" element={<ProtectedRoutes />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;