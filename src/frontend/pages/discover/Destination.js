import React from 'react'
import '../../css/destination.css'
import Safari from '../../images/safari.png'
import People from '../../images/people.png'
import Mountains from '../../images/mountains.png'
import Lakes from '../../images/Lakes.png'
import RoadTrip from '../../images/RoadTrip.png'
import NightLife from '../../images/NightLife.png'

const Destination = () => {
  return (
    <div>
       <div>
    <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-bold text-syellow w-2/3 py-8 mx-auto">Our Top Destination</h1>
  <p className="text-base xl:text-xl text-center tracking-wider w-2/3 mx-auto">Discovering Africa, choose the best Tour destination, Tour Operator and budget friendly trips</p>
  </div>
  
  <div className="max-w-5xl min-h-[500px] grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 grid-flow-row mx-auto justify-center my-4 gap-y-3 gap-x-3 px-4">
      <div className="inset-shadow bg-scale min-h-[250px] flex items-end overflow-hidden p-4 rounded-2xl text-xl font-semibold tracking-wider bg-cover bg-center cursor-pointer" style={{ backgroundImage: `url(${Safari})` }}> Safari</div>
      <div className="inset-shadow bg-scale min-h-[250px] flex items-end overflow-hidden p-4 rounded-2xl text-xl font-semibold tracking-wider bg-cover bg-center cursor-pointer row-span-2" style={{ backgroundImage: `url(${People})` }} >People & Cluture</div>
      <div className="inset-shadow bg-scale min-h-[250px] flex items-end overflow-hidden p-4 rounded-2xl text-xl font-semibold tracking-wider bg-cover bg-center cursor-pointer row-span-2 lg:row-span-1"  style={{ backgroundImage: `url(${Mountains})` }}>Mountains</div>
      <div className="inset-shadow bg-scale min-h-[250px] flex items-end overflow-hidden p-4 rounded-2xl text-xl font-semibold tracking-wider bg-cover bg-center cursor-pointer lg:row-span-2 "  style={{ backgroundImage: `url(${Lakes})` }}>Lakes & Rivers</div>
      <div className="inset-shadow bg-scale min-h-[250px] flex items-end overflow-hidden p-4 rounded-2xl text-xl font-semibold tracking-wider bg-cover bg-center cursor-pointer lg:row-span-2" style={{ backgroundImage: `url(${RoadTrip})` }} >Road Trips</div>
      <div className="inset-shadow bg-scale min-h-[250px] flex items-end overflow-hidden p-4 rounded-2xl text-xl font-semibold tracking-wider bg-cover bg-center cursor-pointer col-span-1"  style={{ backgroundImage: `url(${NightLife})` }}>Night Life</div>
    </div>
    </div>
  )
}

export default Destination
