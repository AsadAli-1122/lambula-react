import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Discover from './discover/Discover'
import MyBookings from './bookings/MyBookings'
import TourPackages from './tour/TourPackages'
import AboutUs from './footer pages/AboutUs'
import ContactUs from './footer pages/ContactUs'
import Blogs from './footer pages/Blogs'

const Home = () => {
  
return (
<div>
    <Header />
        
    <Routes>
      <Route path='' element={<Discover />} />
      <Route path='discover' element={<Discover />} />
      <Route path='my-bookings' element={<MyBookings />} />
      <Route path='tour-packages' element={<TourPackages />} />
      <Route path='aboutus' element={<AboutUs />} />
      <Route path='contactus' element={<ContactUs />} />
      <Route path='blogs' element={<Blogs />} />

    </Routes>
    <Footer />
</div>
)
}

export default Home
