import React from "react";
import Home from "./frontend/pages/Home";
import Login from "./frontend/pages/Login";
import Signup from "./frontend/pages/Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup/*" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
