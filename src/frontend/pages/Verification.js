import React, { useState, useRef } from "react";
import Logo from "../images/mainLogo.svg";
import CardBase from "../images/CardBase2.png";
import { Link, useNavigate ,useParams} from "react-router-dom";

const Verification = () => {
  const host = "http://localhost:5000";
  const { email } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/signup');
  }

  const handleBack = () => {
    navigate(`/signup`);
  };

  const [values, setValues] = useState(["", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value && index < refs.length - 1) {
      refs[index + 1].current.focus();
    }
  };
  const code = parseInt(values.join(""));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${host}/api/auth/confirmcode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, code }),
    });
    const json = await response.json();
    if (json.success) {
      // save the auth token redirect
       
      navigate(`/signup/password/${email}`);
    } else {
      alert('Invalid verification code');
    }


    
    // console.log(email, code, json);
  };

  return (
    <>
      <div className=" absolute top-[0] left-[0] w-[100%] min-h-[100vh] px-2 sm:px-12 md:px-20 flex justify-center items-center">
        <div className="lg:flex flex-row-reverse bg-dark-gray justify-between text-white rounded-lg overflow-hidden w-[900px] max-w-[400px] lg:max-w-5xl">
          <div className="hidden lg:block w-[50%] bg-black">
            <div
              className="w-full h-full bg-cover bg-center opacity-50"
              style={{ backgroundImage: `url(${CardBase})` }}
            ></div>
          </div>
          <div className="w-[100%] lg:w-[50%] px-8 sm:px-12 py-20 space-y-4">
            <div className="w-full  flex justify-center items-center">
              <Link href="">
                <img src={Logo} alt="MainLogo" />
              </Link>
            </div>
            <form className="w-full space-y-3" onSubmit={handleSubmit}>
              <h1 className="font-bold text-xl tracking-wider">
                Create Account
              </h1>
              <div className="flex space-x-2 py-4">
                <div className="tracking-wide border-b-2 w-full text-center">
                  Personal Info
                </div>
                <div className="tracking-wide border-b-2 w-full text-center border-syellow text-syellow">
                  Verification
                </div>
              </div>

              <div className="veification ">
                <div className="verification-1">
                  <div className="py-4">
                    <h1 className="text-3xl font-bold tracking-wider text-syellow py-4">
                      OTP Vevify!
                    </h1>
                    <p className="text-xs">
                      Enter 4-digit code we have send to{" "}
                      <span className="whitespace-nowrap">
                        <span className="text-syellow border-b border-syellow inline">
                          {email}
                        </span>
                        <Link to="" className="text-syellow ml-2">
                          <i className="fa-solid fa-pen cursor-pointer border-b border-dark-gray hover:border-syellow py-1"></i>
                        </Link>
                      </span>
                    </p>
                    <div className="otp-num-div flex items-center justify-center py-4">
                      <input
                        className="opt-digit bg-transparent w-10 h-10 border-2 border-gray-600 text-2xl rounded-lg text-center m-1 outline-none focus:border-black focus:ring-0 focus:bg-yellow-200 focus:border-syellow focus:text-black"
                        type="number"
                        autoFocus
                        value={values[0]}
                        onChange={(e) => handleInputChange(0, e)}
                        maxLength={1}
                        ref={refs[0]}
                      />
                      <input
                        className="opt-digit bg-transparent w-10 h-10 border-2 border-gray-600 text-2xl rounded-lg text-center m-1 outline-none focus:border-black focus:ring-0 focus:bg-yellow-200 focus:border-syellow focus:text-black"
                        type="number"
                        value={values[1]}
                        onChange={(e) => handleInputChange(1, e)}
                        maxLength={1}
                        ref={refs[1]}
                      />
                      <input
                        className="opt-digit bg-transparent w-10 h-10 border-2 border-gray-600 text-2xl rounded-lg text-center m-1 outline-none focus:border-black focus:ring-0 focus:bg-yellow-200 focus:border-syellow focus:text-black"
                        type="number"
                        value={values[2]}
                        onChange={(e) => handleInputChange(2, e)}
                        maxLength={1}
                        ref={refs[2]}
                      />
                      <input
                        className="opt-digit bg-transparent w-10 h-10 border-2 border-gray-600 text-2xl rounded-lg text-center m-1 outline-none focus:border-black focus:ring-0 focus:bg-yellow-200 focus:border-syellow focus:text-black"
                        type="number"
                        value={values[3]}
                        onChange={(e) => handleInputChange(3, e)}
                        maxLength={1}
                        ref={refs[3]}
                      />
                    </div>
                    <p className="text-xs">
                      This season will end in 60 seconds. Didn't receive code?{" "}
                      <br />
                      <button className="py-1 border-b border-syellow text-syellow">
                        Resend code
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-x-2 flex">
                <button
                  type="submit"
                  disabled={values.some((value) => !value)}
                  className="text-center text-sm px-4 py-2 font-bold border-2 border-syellow bg-syellow text-black rounded-md hover:bg-yellow-500 uppercase w-[60%] disabled:bg-yellow-200"
                >
                  Continue
                </button>
                <span
                  onClick={handleBack}
                  className="text-center text-sm px-4 py-2 font-bold border-2 border-white bg-white bg-opacity-20 text-white rounded-md hover:bg-opacity-100 hover:text-black uppercase w-[40%]"
                >
                  Back
                </span>
              </div>
              <p className="text-center text-xs">
                Already Have An Account?{" "}
                <Link
                  to="/login"
                  className="border-b border-gray-500 text-syellow hover:border-syellow"
                >
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
