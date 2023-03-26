import React from 'react'
import luggage from '../../images/luggage.svg'
import addGroup from '../../images/add-group.svg'
import creditCard from '../../images/credit-card.svg'

const DiscoverCards = () => {

  return (
    <>
      <div className="w-full bg-dark-gray text-white">
  <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-bold text-syellow w-2/3 py-8 mx-auto">Why Choose us</h1>
  <p className="text-base xl:text-xl text-center tracking-wider w-2/3 mx-auto">Discovering Africa, choose the best Tour destination, Tour Operator and budget friendly trips</p>
  <div className="max-w-7xl mx-auto my-8 flex flex-col lg:flex-row justify-center items-center px-8">
    <div className="flex flex-col justify-between card p-4 bg-white bg-opacity-20 rounded-2xl min-h-[200px] max-w-sm lg:w-[32%] m-4">
      <div className="flex justify-between items-center text-2xl space-x-4">
        <h1 className="font-semibold tracking-wider text-syellow">Discover</h1>
        <img src={luggage} alt="luggage" />
      </div>
      <p className="text-sm my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur vitae quae.
      </p>
      <p className="text-sm font-bold text-syellow pb-1 border-b-4 border-syellow w-fit px-1">Select Destination</p>
    </div>
    <div className="flex flex-col justify-between card p-4 bg-white bg-opacity-20 rounded-2xl min-h-[200px] max-w-sm lg:w-[32%] m-4">
      <div className="flex justify-between items-center text-2xl space-x-4">
        <h1 className="font-semibold tracking-wider text-syellow">Select Tour Package</h1>
        <img src={addGroup} alt="add-group" />
      </div>
      <p className="text-sm my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur vitae quae.</p>
      <p className="text-sm font-bold text-syellow pb-1 border-b-4 border-syellow w-fit px-1">Select Destination</p>
    </div>
    <div className="flex flex-col justify-between card p-4 bg-white bg-opacity-20 rounded-2xl min-h-[200px] max-w-sm lg:w-[32%] m-4">
      <div className="flex justify-between items-center text-2xl space-x-4">
        <h1 className="font-semibold tracking-wider text-syellow">Quick Payment</h1>
        <img src={creditCard} alt="" />
      </div>
      <p className="text-sm my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur vitae quae.</p>
      <p className="text-sm font-bold text-syellow pb-1 border-b-4 border-syellow w-fit px-1">Select Destination</p>
    </div>
  </div>
        </div>
    </>
  )
}

export default DiscoverCards
