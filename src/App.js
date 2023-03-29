import React from "react";
import Home from "./frontend/pages/Home";
import Login from "./frontend/pages/auth/Login";
import Signup from "./frontend/pages/auth/Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from "./frontend/pages/auth/ForgotPassword";
import ResetPassword from "./frontend/pages/auth/ResetPassword";



function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="resetpassword/:resetToken" element={<ResetPassword />} />
          <Route path="signup/*" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
