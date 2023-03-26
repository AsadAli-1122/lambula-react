import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/mainLogo.svg";
import CardBase from "../../images/CardBase.png";


const PersonalInfo = () => {
  let navigate = useNavigate();
  const host = "http://localhost:5000";

  const [credentials, setCredentials] = useState({
    fname: "",
    lname: "",
    email: "",
    vaccinated: "", 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, lname, email, vaccinated } = credentials;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fname, lname, email, vaccinated }),
    });
    const json = await response.json();
    if (json.success) {
      // save the auth token redirect
       
      localStorage.setItem("token", json.authtoken);
      navigate(`verification/${email}`);
    } else {
      alert("email already exsists");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
    <div className="bg-dark-gray sm:bg-transparent absolute top-[0] left-[0] w-[100%] min-h-[100vh] px-2 sm:px-12 md:px-20 flex justify-center items-center">
        <div className="lg:flex flex-row-reverse bg-dark-gray justify-between text-white rounded-lg overflow-hidden w-[900px] max-w-[400px] lg:max-w-5xl">
          <div className="hidden lg:block w-[50%] bg-black">
            <div
              className="w-full h-full bg-cover bg-center opacity-50"
              style={{ backgroundImage: `url(${CardBase})` }}
            ></div>
          </div>
          <div className="w-[100%] lg:w-[50%] px-8 sm:px-12 py-20 space-y-4">
            <div className="w-full  flex justify-center items-center">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <form className="w-full space-y-3" onSubmit={handleSubmit}>
              <h1 className="font-bold text-xl tracking-wider">
                Create Account
              </h1>
              <div className="personal-info">
                <div className="flex space-x-2 py-4">
                  <div className="tracking-wide border-b-2 border-syellow w-full text-syellow text-center">
                    Personal Info
                  </div>
                  <div className="tracking-wide border-b-2 w-full text-center">
                    Verification
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="flex justify-center items-center text-center text-xs w-full bg-white bg-opacity-20 py-3 px-2 rounded-lg border border-white hover:bg-opacity-100 hover:text-black hover:border-black tracking-tighter cursor-pointer">
                    <i className="fa-brands fa-google mr-2 text-base"></i>{" "}
                    Create with Google
                  </div>
                  <div className="flex justify-center items-center text-center text-xs w-full bg-white bg-opacity-20 py-3 px-2 rounded-lg border border-white hover:bg-opacity-100 hover:text-black hover:border-black tracking-tighter cursor-pointer">
                    <i className="fa-brands fa-apple mr-2 text-base"></i>Create
                    with Apple
                  </div>
                </div>
                <p className="text-center text-syellow text-base py-6">
                  <Link
                    to=""
                    className="border-b border-gray-600 hover:border-syellow py-1"
                  >
                    verify by Number
                  </Link>
                </p>
                <div className="flex space-x-2">
                  <div className="w-full">
                    <label className="text-xs font-light" htmlFor="fname">
                      First Name
                    </label>
                    <input
                      className="w-full bg-transparent focus:outline-none focus:ring-0 border-t-0 border-l-0 border-r-0 border-b-2 focus:border-syellow px-2 h-4 text-xs"
                      type="text"
                      name="fname"
                      id="fname"
                      autoComplete="off"
                      pattern="^[A-Za-z]+$"
                      value={credentials.fname}
                      onChange={onChange}
                      minLength={3}
                      maxLength={20}
                      autoFocus
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-light" htmlFor="lname">
                      Last Name
                    </label>
                    <input
                      className="w-full bg-transparent focus:outline-none focus:ring-0 border-t-0 border-l-0 border-r-0 border-b-2 focus:border-syellow px-2 h-4 text-xs"
                      type="text"
                      name="lname"
                      id="lname"
                      autoComplete="off"
                      pattern="^[A-Za-z]+$"
                      value={credentials.lname}
                      onChange={onChange}
                      minLength={3}
                      maxLength={20}
                    />
                  </div>
                </div>
                <span className="text-red-500 text-xs italic mt-1">
                  {(credentials.fname !== "" &&
                    !/^[A-Za-z]+$/.test(credentials.fname)) ||
                  (credentials.lname !== "" &&
                    !/^[A-Za-z]+$/.test(credentials.lname))
                    ? "Name must contain only alphabets"
                    : null}
                  {credentials.fname.length < 3 || credentials.lname.length < 3
                    ? "Name must be at least 3 characters long"
                    : null}
                  {credentials.fname.length > 20 ||
                  credentials.lname.length > 20
                    ? "Name cannot be more than 20 characters long"
                    : null}
                </span>
                <div>
                  <label className="text-xs font-light" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full bg-transparent focus:outline-none focus:ring-0 border-t-0 border-l-0 border-r-0 border-b-2 focus:border-syellow px-2 h-4 text-xs"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={credentials.email}
                    onChange={onChange}
                  />
                </div>

                <div className="flex flex-col py-2 space-y-2">
                  <div className="flex">
                    <input
                      type="radio"
                      name="vaccinated"
                      value="true"
                      onChange={onChange}
                      checked={credentials.vaccinated === "true"}
                      id="vaccinated"
                      className="mr-4 focus:ring-1 focus:ring-syellow focus:border-none bg-black border-syellow cursor-pointer appearance-none checked:bg-syellow"
                    />
                    <label
                      htmlFor="vaccinated"
                      className="text-xs font-light cursor-pointer"
                    >
                      I am Vaccinated
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      type="radio"
                      name="vaccinated"
                      value="false"
                      onChange={onChange}
                      checked={credentials.vaccinated === "false"}
                      id="not-vaccinated"
                      className="mr-4 focus:ring-1 focus:ring-syellow focus:border-none bg-black border-syellow cursor-pointer appearance-none checked:bg-syellow"
                    />
                    <label
                      htmlFor="not-vaccinated"
                      className="text-xs font-light cursor-pointer"
                    >
                      I am Not Vaccinated
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-x-2 flex">
                <button
                  type="submit"
                  disabled={
                    !credentials.fname ||
                    !credentials.lname ||
                    !credentials.email ||
                    !credentials.vaccinated
                  }
                  className="text-center text-sm px-4 py-2 font-bold border-2 border-syellow bg-syellow text-black rounded-md hover:bg-yellow-500 uppercase w-[60%] disabled:bg-yellow-200"
                >
                  Continue
                </button>

                <Link
                  to="/"
                  className="text-center text-sm px-4 py-2 font-bold border-2 border-white bg-white bg-opacity-20 text-white rounded-md hover:bg-opacity-100 hover:text-black uppercase w-[40%]"
                >
                  Cancel
                </Link>
              </div>
              <p className="text-center text-xs">
                Already Have An Account?{" "}
                <Link
                  to="/login"
                  className="border-b border-gray-500 text-syellow hover:border-syellow"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalInfo
