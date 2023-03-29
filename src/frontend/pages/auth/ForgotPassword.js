import React, { useState } from 'react';
import MainLogo from '../../images/mainLogo.svg';
import queenImg from '../../images/queen@2x.png';
import CardBase from '../../images/CardBase.png';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    
  const host = "http://localhost:5000";
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${host}/api/auth/forgotpassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess(
          `Email sent to ${email}. Check your inbox and follow the instructions to reset your password.`
        );
        setError('');
      } else {
        const errorData = await response.json();
        setError(errorData.error);
        setSuccess('');
      }
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
    setEmail('');
  };


    return (
        <>
            <div className="bg-dark-gray">
                <div className=" w-[100%] min-h-[100vh] bg-cover bg-center opacity-0 sm:opacity-50" style={{ backgroundImage: `url(${queenImg})`, }} >
                </div>
            </div>
            <div className=" absolute top-[0] left-[0] w-[100%] min-h-[100vh] sm:px-12 md:px-20 sm:py-20 flex justify-center items-center">
                <div className="lg:flex flex-row-reverse bg-dark-gray justify-between text-white sm:rounded-lg overflow-hidden w-[900px] max-w-[400px] lg:max-w-5xl">
                    <div className="hidden lg:block w-[50%] bg-black">
                        <div className="w-full h-full bg-cover bg-center opacity-0 sm:opacity-50" style={{ backgroundImage: `url(${CardBase})`, }}></div>
                    </div>
                    <div className="w-[100%] lg:w-[50%] px-8 sm:px-12 py-20 space-y-4">
                        <div className="w-full  flex justify-center items-center">
                            <Link to="/"><img src={MainLogo} alt="MainLogo" /></Link>
                        </div>
                        <form className="w-full space-y-3" onSubmit={handleSubmit}>
                            <h1 className="text-syellow font-bold text-2xl tracking-wider">Forgot Password</h1>
                            <div>
                                <label className="text-sm font-light" htmlFor="email" >Email </label>
                                <input className="w-full bg-transparent focus:outline-none focus:ring-0 border-t-0 border-l-0 border-r-0 border-b-2 focus:border-syellow px-2" type="email" name="email" id="email" autoComplete="nope" value={email} onChange={handleEmailChange} />
                            </div>
                            <div className="text-center space-y-2">
                                {success && <div className="text-green-500 text-center my-2">{success}</div>}
                                {error && <div className="text-red-500 text-center my-2">{error}</div>}
                                <p className="text-center"><Link to="/login" className="text-xs hover:text-syellow">Login?</Link></p>
                                <button disabled={!email} type="submit" className="w-fit px-12 py-2 font-bold bg-syellow text-black rounded-md hover:bg-yellow-500 disabled:bg-xl-yellow">Confirm</button>
                                <p className="text-center text-xs">Don,t Have An Account? <Link to="/signup" className="border-b border-gray-500 text-syellow hover:border-syellow">Create Account</Link></p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ForgotPassword
