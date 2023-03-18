import React from 'react'

const Destination = () => {
  return (
    <div>
       <div>
    <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-bold text-syellow w-2/3 py-8 mx-auto">Our Top Destination</h1>
  <p className="text-base xl:text-xl text-center tracking-wider w-2/3 mx-auto">Discovering Africa, choose the best Tour destination, Tour Operator and budget friendly trips</p>
  </div>
  
  <div className="max-w-7xl min-h-[600px] grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 grid-flow-row mx-auto justify-center  my-4 gap-y-3 gap-x-3">
  <div className="inset-shadow h-64 md:h-80 lg:h-96 min-h-[250px] flex items-end overflow-hidden p-4 rounded-2xl text-xl font-semibold tracking-wider bg-cover bg-center">Safari</div>

      <div className=" inset-shadow min-h-[250px] flex items-end overflow-hidden p-4 rounded-2xl text-xl font-semibold tracking-wider bg-cover bg-center row-span-2" >People & Cluture</div>
      <div className="inset-shadow min-h-[250px] flex items-end overflow-hidden p-4 rounded-2xl text-xl font-semibold tracking-wider bg-cover bg-center row-span-2 lg:row-span-1" >Mountains</div>
      <div className="inset-shadow min-h-[250px] flex items-end overflow-hidden p-4 rounded-2xl text-xl font-semibold tracking-wider bg-cover bg-center lg:row-span-2 " >Lakes & Rivers</div>
      <div className="inset-shadow min-h-[250px] flex items-end overflow-hidden p-4 rounded-2xl text-xl font-semibold tracking-wider bg-cover bg-center lg:row-span-2" >Road Trips</div>
      <div className="inset-shadow min-h-[250px] flex items-end overflow-hidden p-4 rounded-2xl text-xl font-semibold tracking-wider bg-cover bg-center col-span-1" >Night Life</div>
    </div>
    </div>
  )
}

export default Destination
