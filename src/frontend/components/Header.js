import React from 'react'
import '../css/header.css'
import profilePic from '../images/Profile.png'
import mainLogo from '../images/mainLogo.svg'
import { Link, Navigate, NavLink } from 'react-router-dom'

const Header = () => {
    const auth = localStorage.getItem('token');

    function handleLogout() {
        localStorage.removeItem('token');
        // redirect the user to the login page
        Navigate('/login');
    }


    return (
        <>
            <header className="absolute top-0 left-0 right-0 z-10 bg-black bg-opacity-60">
                <div className="text-white">
                    <div className="w-full bg-transparent flex flex-wrap justify-center items-center white">
                        <p className="whitespace-nowrap hidden sm:inline-block">
                            <i className="fa-solid fa-phone text-syellow mr-4"></i>
                            Call us: +256 020 100 100
                        </p>

                        <div>
                            <select name="" id="" className="payment-box focus:ring-0 focus:outline-none border-none rounded-lg text-sm bg-transparent text-white px-4 cursor-pointer">
                                <option value="" className="bg-black">USD</option>
                                <option value="" className="bg-black">EUR</option>
                                <option value="" className="bg-black">JPY</option>
                                <option value="" className="bg-black">AUD</option>
                                <option value="" className="bg-black">CAD</option>
                            </select>
                        </div>


                    </div>

                    <div className="px-2 lg:px-10 flex justify-between items-center">
                        <div className="text-2xl whitespace-nowrap flex">
                            <div className="lg:hidden">
                                <input type="checkbox" name="side-nav-btn" id="side-nav-btn" className="hidden" />

                                <label htmlFor="side-nav-btn" className="cursor-pointer">
                                    <i className="fa-solid fa-bars text-syellow"></i>
                                </label>
                                <div className="side-nav z-30 bg-black max-w-[400px] w-full fixed top-0 bottom-0 -right-[400px]  ease-in-out duration-500">
                                    <div className="text-2xl flex px-4 py-8 justify-between items-center">
                                        <div className="lg:hidden">
                                            <label htmlFor="side-nav-btn" className="cursor-pointer">
                                                <i className="fa-solid fa-xmark text-syellow"></i>
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2 ml-5">
                                            <Link to="">
                                                <img src={mainLogo} alt="locationdot" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-white list-none" id='side-nav-link'>
                                        <li className="px-8 py-4 text-xl hover:text-syellow hover:translate-x-4 duration-300 ease-in-out"><NavLink to="discover">Dicover</NavLink></li>
                                        <li className="px-8 py-4 text-xl hover:text-syellow hover:translate-x-4 duration-300 ease-in-out"><NavLink to="my-bookings">My Bookings</NavLink></li>
                                        <li className="px-8 py-4 text-xl hover:text-syellow hover:translate-x-4 duration-300 ease-in-out"><NavLink to="tour-packages">Tour Packages</NavLink></li>
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center space-x-2 ml-5">
                                <a href="/">
                                    <img src={mainLogo} alt="Logo" />
                                </a>
                            </div>
                        </div>
                        <ul className="menu-item hidden lg:flex text-sm ml-44 whitespace-nowrap space-x-2" id='top-nav-link'>
                            <li><NavLink to="discover" className="tracking-wider px-2 hover:text-syellow hover:border-b-4 hover:border-syellow pb-3 font-bold">Discover</NavLink></li>
                            <li><NavLink to="my-bookings" className="tracking-wider px-2 hover:text-syellow hover:border-b-4 hover:border-syellow pb-3 font-bold">My Bookings</NavLink></li>
                            <li><NavLink to="tour-packages" className="tracking-wider px-2 hover:text-syellow hover:border-b-4 hover:border-syellow pb-3 font-bold">Tour Packages</NavLink></li>
                        </ul>



                        <nav className=" flex items-center space-x-12">
                            <div className="hidden sm:flex items-center w-fit bg-white bg-opacity-20 px-4 rounded-full space-x-4 h-fit focus:ring-1 focus:ring-yellow-300">
                                <input type="search" placeholder="Search" className="bg-transparent border-none h-8 pl-6 w-36 placeholder-gray-400 focus:ring-0" /><i className="fa-solid fa-search"></i>
                            </div>
                            <div className="flex flex-row justify-center items-center">
                                <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="inline-flex items-center text-sm font-medium text-center text-syellow hover:text-yellow-400 focus:outline-none" type="button">
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                                    <div className="relative flex">
                                        <div className="relative inline-flex w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-2 right-3 dark:border-gray-900"></div>
                                    </div>
                                </button>
                                <div id="dropdownNotification" className="hidden z-20 w-full max-w-sm bg-black rounded-lg shadow border border-syellow" aria-labelledby="dropdownNotificationButton">

                                    <div className="all-notifications max-h-96 overflow-y-scroll mt-10">
                                        <div className="notification flex space-x-2 mb-10 justify-between px-6">
                                            <div className="bg-[#25CD6B] w-5 h-5 rounded-full flex justify-center items-center">
                                                <div className="bg-black w-3 h-3 rounded-full"></div>
                                            </div>
                                            <div className="space-y-2">
                                                <h1 className="text-sm font-semibold max-w-[200px] truncate"> 3 Day Trip to murchison Falls 312321435432135</h1>
                                                <p className="textaaaa font-light text-xs text-gray-500 max-w-[200px] max-h-[50px] truncate">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Asperiores,Lorem ipsum dolor</p>
                                            </div>
                                            <div>
                                                <span className="block text-xs bg-syellow text-black py-1 px-3 rounded-3xl">18min.</span>
                                            </div>
                                        </div>
                                        <div className="notification flex space-x-2 mb-10 justify-between px-6">
                                            <div className="bg-[#25CD6B] w-5 h-5 rounded-full flex justify-center items-center">
                                                <div className="bg-black w-3 h-3 rounded-full"></div>
                                            </div>
                                            <div className="space-y-2">
                                                <h1 className="text-sm font-semibold max-w-[200px] truncate"> Payment Confirmed LT000000000</h1>
                                                <p className="textaaaa font-light text-xs text-gray-500 max-w-[200px] max-h-[50px] truncate">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Asperiores,Lorem ipsum dolor</p>
                                            </div>
                                            <div>
                                                <span className="block text-xs bg-syellow text-black py-1 px-3 rounded-3xl">34min.</span>
                                            </div>
                                        </div>
                                        <div className="notification flex space-x-2 mb-10 justify-between px-6">
                                            <div className="bg-[#FF3D72] w-5 h-5 rounded-full flex justify-center items-center">
                                                <div className="bg-black w-3 h-3 rounded-full"></div>
                                            </div>
                                            <div className="space-y-2">
                                                <h1 className="text-sm font-semibold max-w-[200px] truncate"> Payment Declined</h1>
                                                <p className="textaaaa font-light text-xs text-gray-500 max-w-[200px] max-h-[50px] truncate">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Asperiores,Lorem ipsum dolor</p>
                                            </div>
                                            <div>
                                                <span className="block text-xs bg-syellow text-black py-1 px-3 rounded-3xl">18min.</span>
                                            </div>
                                        </div>
                                        <div className="notification flex space-x-2 mb-10 justify-between px-6">
                                            <div className="bg-[#FFBE57] w-5 h-5 rounded-full flex justify-center items-center">
                                                <div className="bg-black w-3 h-3 rounded-full"></div>
                                            </div>
                                            <div className="space-y-2">
                                                <h1 className="text-sm font-semibold max-w-[200px] truncate"> Booking Pending</h1>
                                                <p className="textaaaa font-light text-xs text-gray-500 max-w-[200px] max-h-[50px] truncate">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Asperiores,Lorem ipsum dolor</p>
                                            </div>
                                            <div>
                                                <span className="block text-xs bg-syellow text-black py-1 px-3 rounded-3xl">18min.</span>
                                            </div>
                                        </div>
                                        <div className="notification flex space-x-2 mb-10 justify-between px-6">
                                            <div className="bg-green-700 w-5 h-5 rounded-full flex justify-center items-center">
                                                <div className="bg-black w-3 h-3 rounded-full"></div>
                                            </div>
                                            <div className="space-y-2">
                                                <h1 className="text-sm font-semibold max-w-[200px] truncate"> 3 Day Trip to murchison Falls 312321435432135</h1>
                                                <p className="textaaaa font-light text-xs text-gray-500 max-w-[200px] max-h-[50px] truncate">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Asperiores,Lorem ipsum dolor</p>
                                            </div>
                                            <div>
                                                <span className="block text-xs bg-syellow text-black py-1 px-3 rounded-3xl">18min.</span>
                                            </div>
                                        </div>
                                        <div className="notification flex space-x-2 mb-10 justify-between px-6">
                                            <div className="bg-green-700 w-5 h-5 rounded-full flex justify-center items-center">
                                                <div className="bg-black w-3 h-3 rounded-full"></div>
                                            </div>
                                            <div className="space-y-2">
                                                <h1 className="text-sm font-semibold max-w-[200px] truncate"> 3 Day Trip to murchison Falls 312321435432135</h1>
                                                <p className="textaaaa font-light text-xs text-gray-500 max-w-[200px] max-h-[50px] truncate">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Asperiores,Lorem ipsum dolor</p>
                                            </div>
                                            <div>
                                                <span className="block text-xs bg-syellow text-black py-1 px-3 rounded-3xl">18min.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <a href="notifications.html" className="my-4 py-3 px-6 rounded-full text-sm font-medium text-center bg-syellow hover:bg-yellow-400 text-black">View More</a>
                                    </div>
                                </div>



                                <div id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className=" focus:ring-0 focus:outline-none rounded-lg text-sm px-4 py-2.5 text-center items-center cursor-pointer flex flex-col justify-center w-fit min-w-fit" type="button"><img src={profilePic} alt="" className="w-8 h-8 rounded-full border border-syellow" /> <i className="fa-solid fa-chevron-down text-syellow"></i></div>
                                <div id="dropdownInformation" className="z-10 hidden rounded-lg bg-black bg-opacity-70 text-white shadow min-w-[200px] max-w-[250px] dark:bg-gray-700 border-2 border-syellow px-4 py-6 text-xs font-normal tracking-wide">
                                    {auth ? (
                                        <ul className="space-y-3" >
                                            <div className="flex justify-start items-center space-x-2">
                                                <div className="w-10 h-10 rounded-full border border-syellow overflow-hidden">
                                                    <img src={profilePic} className="w-full h-full" alt='' />
                                                </div>
                                                <div>
                                                    <p className="text-sm ">Andrew Mukuye</p>
                                                    <p className="text-xs text-gray-500">Registered 2017</p>
                                                </div>
                                            </div>
                                            <li>
                                                <p className="block ease-in-out duration-500">Manage Profile</p>
                                            </li>
                                            <hr className="" />
                                            <div className="space-y-1">
                                                <li>
                                                    <a href="editprofile&payment.html" className="block  hover:text-syellow hover:translate-x-4 ease-in-out duration-500">Edit Profile & Payments</a>
                                                </li>
                                                <li>
                                                    <a href="Favouritetrips.html" className="block  hover:text-syellow hover:translate-x-4 ease-in-out duration-500">Favourites</a>
                                                </li>
                                                <li>
                                                    <a href="frequentlyaskquestions.html" className="block  hover:text-syellow hover:translate-x-4 ease-in-out duration-500">FAQ's</a>
                                                </li>
                                                <li>
                                                    <a href="refund policy.html" className="block  hover:text-syellow hover:translate-x-4 ease-in-out duration-500">Refund Policy</a>
                                                </li>
                                                <li>
                                                    <a href="notifications.html" className="block  hover:text-syellow hover:translate-x-4 ease-in-out duration-500">Notification</a>
                                                </li>
                                            </div>
                                            <hr className="" />
                                            <li>
                                                <Link to="/login" className="block text-syellow hover:text-yellow-800 ease-in-out duration-500" onClick={handleLogout} >Log Out</Link>
                                            </li>
                                        </ul>
                                    ) : (
                                        <li className='list-none'>
                                            <Link to="/login" className="block text-syellow hover:text-yellow-800 ease-in-out duration-500 ">Log In</Link>
                                        </li>
                                    )}
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
