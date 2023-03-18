import React, { useState } from 'react';
import MainLogo from '../images/mainLogo.svg'
import queenImg from '../images/queen@2x.png';
import CardBase from '../images/CardBase.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate();
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({email: "", password: ""}) 
  const [error, setError] = useState("");




  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if user exists
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json();

    if (json.success){
      localStorage.setItem('token', json.authtoken); 
      navigate('/');
    }
    else{
      setError("Email or password is incorrect");
    }
  }
    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
      }
  return (
    <>
<div className="bg-dark-gray">
  <div className=" w-[100%] min-h-[100vh] bg-cover bg-center opacity-0 sm:opacity-50" style={{backgroundImage: `url(${queenImg})`,}} >
  </div>
</div>
<div className=" absolute top-[0] left-[0] w-[100%] min-h-[100vh] sm:px-12 md:px-20 sm:py-20 flex justify-center items-center">
    <div className="lg:flex flex-row-reverse bg-dark-gray justify-between text-white sm:rounded-lg overflow-hidden w-[900px] max-w-[400px] lg:max-w-5xl">
        <div className="hidden lg:block w-[50%] bg-black">
            <div className="w-full h-full bg-cover bg-center opacity-0 sm:opacity-50" style={{backgroundImage: `url(${CardBase})`,}}></div>
        </div>
        <div className="w-[100%] lg:w-[50%] px-8 sm:px-12 py-20 space-y-4">
            <div className="w-full  flex justify-center items-center">
                <Link to="/"><img src={MainLogo} alt="MainLogo" /></Link>
            </div>
            <form onSubmit={handleSubmit}  className="w-full space-y-3">
                <h1 className="text-syellow font-bold text-2xl tracking-wider">Log In</h1>
                <div>
                    <label className="text-sm font-light" htmlFor="email" >Email </label>
                    <input className="w-full bg-transparent focus:outline-none focus:ring-0 border-t-0 border-l-0 border-r-0 border-b-2 focus:border-syellow px-2" type="text" name="email" id="email" autoComplete="nope" value={credentials.email} onChange={handleChange} />
                </div>
                <div>
                    <label className="text-sm font-light" htmlFor="password">Password</label>
                    <input className="w-full bg-transparent focus:outline-none focus:ring-0 border-t-0 border-l-0 border-r-0 border-b-2 focus:border-syellow px-2" type="password" name="password" id="password" autoComplete="nope" value={credentials.password} onChange={handleChange} />
                </div>
                <div className="text-center space-y-2">
                    {error && <div className="text-red-500 text-center my-2">{error}</div>}
                    <p className="text-center"><a href="/" className="text-xs">Forgot Password?</a></p>
                    <button  disabled={ !credentials.email || !credentials.password }  type="submit" className="w-fit px-12 py-2 font-bold bg-syellow text-black rounded-md hover:bg-yellow-500 disabled:bg-xl-yellow">Login</button>
                    <p className="text-center text-xs">Don,t Have An Account? <Link to="/signup" className="border-b border-gray-500 text-syellow hover:border-syellow">Create Account</Link></p>
                </div>
            </form>
        </div>
    </div>

</div>
      {/* <div className='w-full min-h-screen bg-cover bg-fixed bg-center' style={{backgroundImage: `url(${queenImg})`,}}> */}
        {/* <div className='w-full min-h-screen flex justify-center items-center space-x-8' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)',}}>
          <form onSubmit={handleSubmit} className="bg-dark-gray w-full sm:max-w-sm py-6 px-4 sm:px-8 sm:rounded-2xl flex flex-col justify-center text-white">
            <h1 className='text-3xl text-syellow text-center'>Log in</h1>
            <div className='signup-input-div flex flex-col py-2 w-full'>
              <label>Email :</label>
              <input type="email" className='w-full px-2 py-1 bg-transparent border rounded-md focus:ring-0 focus:outline-none focus:border-syellow text-gray-300' name="email" value={credentials.email} onChange={handleChange}/>
            </div>
            <div>
              <label>Password :</label>
              <input type="password" className='w-full px-2 py-1 bg-transparent border rounded-md focus:ring-0 focus:outline-none focus:border-syellow text-gray-300' name="password" value={credentials.password} onChange={handleChange} />
            </div>
            {error && <div className="text-red-500 text-center my-2">{error}</div>}
            <button disabled={ !credentials.email || !credentials.password } type="submit" className='py-2 px-6 bg-syellow disabled:bg-yellow-200 hover:bg-yellow-400 text-b font-bold tracking-wider rounded w-fit mx-auto mt-4'>Login</button>
            <p className='text-center text-sm py-4'>If you don't have a Account <Link className='text-base font-semibold tracking-wider text-syellow hover:text-yellow-400 hover:underline underline-offset-2' to="/Signup">Sign up</Link></p>
          </form>
        </div> */}
      {/* </div> */}
    </>
  )
}

export default Login
