import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Discover from './Discover'
import MyBookings from './MyBookings'
import TourPackages from './TourPackages'

const Home = () => {
  
return (
<div>
    <Header />
        
    <Routes>
      <Route path='' element={<Discover />} />
      <Route path='discover' element={<Discover />} />
      <Route path='my-bookings' element={<MyBookings />} />
      <Route path='tour-packages' element={<TourPackages />} />
    </Routes>
    <Footer />
</div>
)
}

export default Home
