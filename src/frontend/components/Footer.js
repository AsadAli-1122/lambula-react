import React from 'react'
import playStore from '../images/playstore.svg'
import appStore from '../images/appstore.png'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-500 p-12">
  <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 items-start justify-between pb-6">
      <ul className="space-y-3 text-sm tracking-wider font-light">
          <li className="my-4 text-base sm:text-lg md:text-xl font-semibold uppercase">Destinations</li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="index.html">Game Drive</a></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="chaimpTrekking.html">Gorilla Tracking</a></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="myblogings.html">Lakes and Rivers</a></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="Favouritetrips.html">Favourite Trips</a></li>
      </ul>
      <ul className="space-y-3 text-sm tracking-wider font-light">
          <li className="my-4 text-base sm:text-lg md:text-xl font-semibold uppercase"><a href="tour.html">Parents</a></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="tour.html">Discover Africa</a></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="index.html">Uganda Today</a></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="tour.html">WWF</a></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="blog-details.html">Vision Tours</a></li>
      </ul>
      <ul className="space-y-3 text-sm tracking-wider font-light">
          <li className="my-4 text-base sm:text-lg md:text-xl font-semibold uppercase">Home</li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="aboutus.html">About Us</a></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="contact.html">Contact Us</a></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="Blog.html">Blog</a></li>
      </ul>
      <ul className="space-y-3 text-sm tracking-wider font-light">
          <li className="my-4 text-base sm:text-lg md:text-xl font-semibold uppercase">Help Center</li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="refund policy.html">Refund Policy</a></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="frequentlyaskquestions.html">FAQ's</a></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="termsandconditions.html">Terms of Use</a></li>
          <li className="text-xs hover:text-syellow hover:cursor-pointer ease-in duration-300 hover:scale-105 hover:translate-x-4"><a href="privacyandpolicy.html">Privacy Policy</a></li>
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
