import React from 'react'
import '../css/footer.css'
import playStore from '../images/playstore.svg'
import appStore from '../images/appstore.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-500 p-12">
  <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 items-start justify-between pb-6" id="footer-nav-links" >
      <ul className="space-y-3 text-sm tracking-wider font-light">
          <li className="my-4 text-base sm:text-lg md:text-xl font-semibold uppercase">Destinations</li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="index.html">Game Drive</NavLink></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="chaimpTrekking.html">Gorilla Tracking</NavLink></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="myblogings.html">Lakes and Rivers</NavLink></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="Favouritetrips.html">Favourite Trips</NavLink></li>
      </ul>
      <ul className="space-y-3 text-sm tracking-wider font-light">
          <li className="my-4 text-base sm:text-lg md:text-xl font-semibold uppercase">Parents</li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="tour.html">Discover Africa</NavLink></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="index.html">Uganda Today</NavLink></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="tour.html">WWF</NavLink></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="blog-details.html">Vision Tours</NavLink></li>
      </ul>
      <ul className="space-y-3 text-sm tracking-wider font-light">
          <li className="my-4 text-base sm:text-lg md:text-xl font-semibold uppercase">Home</li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="aboutus">About Us</NavLink></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="contactus">Contact Us</NavLink></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="blogs">Blog</NavLink></li>
      </ul>
      <ul className="space-y-3 text-sm tracking-wider font-light">
          <li className="my-4 text-base sm:text-lg md:text-xl font-semibold uppercase">Help Center</li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="refund policy.html">Refund Policy</NavLink></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="frequentlyaskquestions.html">FAQ's</NavLink></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="termsandconditions.html">Terms of Use</NavLink></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><NavLink to="privacyandpolicy.html">Privacy Policy</NavLink></li>
      </ul>
      </div>
      <div className="flex flex-col items-end">
      <div className="space-y-4">
          <p>NOW AVAILABLE</p>
          <div className="flex space-x-4">
              <a href="/" className="">
                  <img src={appStore} alt="" className="w-32 opacity-50 hover:opacity-100 ease-in-out duration-500 hover:scale-105" />
              </a>
              <a href="/">
                  <img src={playStore} alt="" className="w-32 opacity-50 hover:opacity-100 ease-in-out duration-500 hover:scale-105" />
              </a>
          </div>
      </div>
      </div>
      <div className="my-6 border-b border-gray-400">
      </div>
      <div className="text-center text-xs font-light tracking-wider">
      <p>Copyright &copy; 2021 lambola ALL RIGHT RESERVED</p>
      </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
