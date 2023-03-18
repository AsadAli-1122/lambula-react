import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <div className="my-4">
  <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-bold text-syellow w-2/3 py-2 mx-auto">Contact Us</h1>
  <p className="text-base xl:text-xl text-center tracking-wider w-2/3 mx-auto">We are a small Team connecting the entire world to you</p>
</div>
<div className="flex flex-col md:flex-row max-w-7xl justify-between mx-auto py-12 px-8 space-y-4 md:space-y-0">
  <div className="space-y-2 mx-8 tracking-wide">
    <h1 className="text-4xl font-light my-4"><a href="index.html"><img src="assets/images/locationdot.svg" alt="" /></a></h1>
    <p className="text-base font-semibold tracking-wider my-3">Direct Channels</p>
    <p className="text-base font-light"><i className="fa-solid fa-phone text-syellow"></i> +256 1234 5678</p>
    <p className="text-base font-light"><i className="fa-solid fa-envelope text-syellow"></i> support@lambula.net</p>
    <p className="text-base font-light">Select Media</p>
    <p className="text-lg font-light space-x-4">
      <i className="fa-brands fa-facebook-f text-gray-500 cursor-pointer hover:text-syellow ease-in duration-200 hover:translate-x-1 hover:scale-105"></i>
      <i className="fa-brands fa-instagram text-gray-500 cursor-pointer hover:text-syellow ease-in duration-200 hover:translate-x-1 hover:scale-105"></i>
      <i className="fa-brands fa-twitter text-gray-500 cursor-pointer hover:text-syellow ease-in duration-200 hover:translate-x-1 hover:scale-105"></i>
    </p>
  </div>
  <form className="flex flex-col space-y-3 md:w-[50%] md:min-w-[500px]">
    <p className="text-base font-semibold tracking-wider">Feel free to send us your message</p>
    <div className="grid sm:grid-cols-2 space-y-3 sm:space-y-0 sm:space-x-3">
      <div className="">
        <input type="text" id="name" name="name" placeholder="Your name" className="bg-white bg-opacity-20 border-none rounded-md active:border-none focus:ring-1 focus:ring-syellow w-full" autoComplete="off" required />
        <small></small>
      </div>
      <div className="">
        <input type="email" id="email" name="email" placeholder="Your email" className="bg-white bg-opacity-20 border-none rounded-md focus:ring-1 focus:ring-syellow w-full" autoComplete="off" required />
        <small></small>
      </div>
    </div>
    <div>
      <input type="text" id="subject" name="subject" placeholder="Subject" className="bg-white bg-opacity-20 border-none rounded-md w-full focus:ring-1 focus:ring-syellow" />
      <small></small>
    </div>
    <div>
      <textarea name="message" id="message" cols="30" rows="5" placeholder="Message" className="w-full bg-white bg-opacity-20 border-none rounded-md p-2 focus:ring-1 focus:ring-syellow"></textarea>
      <small></small>
    </div>
    <button type="submit" className="text-black bg-syellow px-20 py-1 rounded-md text-base font-bold tracking-wider w-fit mx-auto focus:ring-1 focus:ring-syellow hover:bg-yellow-400 cursor-pointer">Submit</button>
  </form>
</div>
    </div>
  )
}

export default ContactUs
