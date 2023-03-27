import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();
    const subscribe = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          e.target.reset();
        }, (error) => {
          console.log(error.text);
        });
    }

    const Subscribe = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID, 
            process.env.REACT_APP_TEMPLATE_SUBSCRIBE_ID, 
            subscribe.current, 
            process.env.REACT_APP_PUBLIC_KEY)
              .then((result) => {
                console.log(result.text);
                e.target.reset();
              }, (error) => {
                console.log(error.text);
              });
        }
    
  return (
    <div>
      
    <div className="bg-dark-gray text-white pt-32 sm:px-2 py-12">
        <div className="max-w-5xl mx-auto bg-white bg-opacity-10 sm:rounded-xl space-y-4 px-6 py-4">
            <div className="border-b border-gray-400 py-2 space-y-2">
                <h1 className="text-lg font-extrabold tracking-wide text-syellow">Customer Support</h1>
                <p className="text-xs font-semibold">Do you need help?</p>
            </div>
            <div className="flex flex-col space-y-4">
                <p>Hello there, Are experiencing trouble using our service, kindly choose how you would love to contact us</p>
                <p><i className="fa-solid fa-phone-volume mr-4"></i> +256 700 100 100</p>
                <p><i className="fa-solid fa-paper-plane mr-4"></i> support@lamubla.co.uk</p>
                <p><i className="fa-solid fa-comment-dots mr-4"></i> Click to start a live Chat</p>
                <h1 className="text-lg font-extrabold tracking-wide text-syellow">Write to us here</h1>
    <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col p-2 space-y-1 rounded-xl">
        
      <label htmlFor="name" className="text-base font-semibold">Name</label>
        <input type="text" id="name" name="user_name" className="w-full px-4 py-2 border-none focus:ring-1 focus:ring-syellow focus:outline-none rounded-md bg-white bg-opacity-10 placeholder:text-gray-400" placeholder="Andrew Mukuye" autoComplete="off" required />
        <small></small>
      </div>
      <div className="flex flex-col p-2 space-y-1 rounded-xl">
                    <label htmlFor="email" className="text-base font-semibold">Email Address</label>
        <input type="email" id="email" name="user_email" className="w-full px-4 py-2 border-none focus:ring-1 focus:ring-syellow focus:outline-none rounded-md bg-white bg-opacity-10 placeholder:text-gray-400" placeholder="Andrew@lumbula.co.uk" autoComplete="off" required />
        <small></small>
      </div>
      <div className="flex flex-col p-2 space-y-1 rounded-xl">
                    <label htmlFor="message" className="text-base font-semibold">Type your Messgae here</label>
      <textarea name="message" id="message" cols="30" rows="5" placeholder="Message" className="w-full px-4 py-2 border-none focus:ring-1 focus:ring-syellow focus:outline-none rounded-md bg-white bg-opacity-10 resize-none"></textarea>
      <small></small>
    </div>
    <button type="submit" value="Send" className="text-black bg-syellow px-20 py-1 rounded-md text-base font-bold tracking-wider w-fit mx-auto focus:ring-1 focus:ring-syellow hover:bg-yellow-400 cursor-pointer">Submit</button>
  </form>
    
            </div>
        </div>
        
        
        
    </div>
    
    <div className="bg-syellow text-dark-gray tracking-wide font-semibold">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl font-bold tracking-wider">Stay in the know</h1>
            <p className="w-[70%] mx-auto text-gray-400 my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, consequuntur et earum, ipsum quos necessitatibus perspiciatis.</p>
            <form ref={subscribe} onSubmit={Subscribe} className="mx-auto md:max-w-[60%] bg-dark-gray p-2 rounded-md flex flex-col md:flex-row justify-between items-center my-2">
                <input type="email" name="user_email2" id="user_email2" className="w-full focus:outline-none focus:ring-0 rounded-lg border-none placeholder:text-gray-600 text-gray-600 bg-transparent" placeholder="Enter Your email address" />
                <button type='submit' className="py-2 px-4 md:w-[30%] uppercase border border-black rounded-md bg-syellow hover:bg-yellow-400">Subscribe</button>
            </form>

        </div>
    </div>
    </div>
  )
}

export default ContactUs
