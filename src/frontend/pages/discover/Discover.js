import React from 'react'
import ContactUs from './ContactUs'
import Destination from './Destination'
import DiscoverCards from './DiscoverCards'
// import Map from '../components/Map'
// import Carasoul from '../components/Carasoul'

const Discover = () => {
  return (
    <>
      {/* <Carasoul /> */}
    <div className="w-full bg-dark-gray text-white pt-24">
        <DiscoverCards />
        <Destination />
        {/* <Map /> */}
        <ContactUs />
    </div>
    </>
  )
}

export default Discover
