import React, { useState } from "react";
import Logo from "../../images/mainLogo.svg";
import CardBase from "../../images/CardBase3.png";
import { Link, useNavigate, useParams } from "react-router-dom";

const Password = () => {
  const host = "http://localhost:5000";
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/signup');
  }
  
  const { email } = useParams();
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");

  const handleBack = () => {
    navigate(-1);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === cPassword) {
        const response = await fetch(`${host}/api/auth/setpassword`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
          const json = await response.json();
          if (json.success) {

            navigate(`/`);
          }

    } else {
      alert("Passwords do not match.");
    }
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
                <div className="verification-2 ">
                  <div className="py-4">
                    <h1 className="text-2xl font-semibold tracking-wider text-syellow py-4">
                      Create Password
                    </h1>
                    <p className="text-xs">Enter a strong Password</p>
                    <div className="py-4 space-y-4">
                      <div className="password">
                        <label
                          className="text-sm font-light"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          className="w-full bg-transparent focus:outline-none focus:ring-0 border-t-0 border-l-0 border-r-0 border-b-2 focus:border-syellow px-2"
                          type="password"
                          name="password"
                          id="password"
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="off"
                          autoFocus
                        />
                      </div>
                      <div className="confirm-password">
                        <label
                          className="text-sm font-light"
                          htmlFor="cpassword"
                        >
                          Confirm Password
                        </label>
                        <input
                          className="w-full bg-transparent focus:outline-none focus:ring-0 border-t-0 border-l-0 border-r-0 border-b-2 focus:border-syellow px-2"
                          type="password"
                          name="cpassword"
                          id="cpassword"
                          onChange={(e) => setcPassword(e.target.value)}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-x-2 flex">
                <button
                  type="submit"
                  className="text-center cursor-pointer text-sm px-4 py-2 font-bold border-2 border-syellow bg-syellow text-black rounded-md hover:bg-yellow-500 uppercase w-[60%]"
                >
                  Sign up
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
                <a
                  href="signin.html"
                  className="border-b border-gray-500 text-syellow hover:border-syellow"
                >
                  Sign In
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
