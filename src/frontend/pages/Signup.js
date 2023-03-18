import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom'
import queenImg from "../images/queen@2x.png";
import Password from "./Password";
import PersonalInfo from "./PersonalInfo";
import Verification from "./Verification";

const Signup = () => {

  const token = localStorage.getItem('token');
  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <div className="bg-dark-gray">
        <div
          className=" w-[100%] min-h-[100vh] bg-cover bg-center opacity-0 sm:opacity-50"
          style={{ backgroundImage: `url(${queenImg})` }}
        ></div>
      </div>
    <Routes>
      <Route path='' element={<PersonalInfo />} />
      <Route path='verification/:email' element={<Verification />} />
      <Route path='password/:email' element={<Password />} />
    </Routes>
      
    </>
  );
};

export default Signup;
