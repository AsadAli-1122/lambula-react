import React from "react";
import empty from '../../images/Group 10122.svg'



const MyBookings = () => {

 
  return (
    <>
    
    <div className="w-full bg-dark-gray pt-36 pb-8">
        <div className=" flex flex-col items-center lg:items-start lg:flex-row w-[90%] lg:w-full mx-auto h-full max-w-7xl lg:space-x-10 space-y-8 lg:space-y-0">
            <div className="flex flex-col justify-between bg-white text-white bg-opacity-20 rounded-3xl lg:w-[53%] px-6 py-5 min-h-[600px] max-w-[600px]">
                <div className="w-full list-none flex justify-between px-4 pb-2 border-b-2">
                    <div className="flex space-x-8">
                        <li>Status</li>
                        <li>Payment ID</li>
                    </div>
                    <div>
                        <li>More Details</li>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center text-center">
                    <h1 className="uppercase font-semibold text-2xl tracking-wide">Previous bookings</h1>
                    <div>
                        <img src={empty} alt="Group" className="" />
                    </div>
                    <div>
                        <h1 className="uppercase font-semibold text-2xl tracking-wide text-syellow">No data to show</h1>
                        <p className="mx-auto w-[70%] text-gray-400">If you seeing this by mistake please contact customer support <span className="text-syellow underline underline-offset-4 cursor-pointer">here</span></p>
                    </div>
                </div>
                <div></div>
            </div>
    
    
            <div className="flex flex-col justify-evenly bg-white text-white bg-opacity-20 rounded-3xl lg:w-[46%] px-6 py-5 min-h-[600px] max-w-[600px]">
                <div className="w-full h-full flex flex-col justify-evenly items-center text-center">
                    <div>
                        <h1 className="uppercase font-semibold text-2xl tracking-wide text-syellow">No data to show</h1>
                        <p className="mx-auto w-[70%] text-gray-400">If you seeing this by mistake please contact customer support <span className="text-syellow underline underline-offset-4 cursor-pointer">here</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default MyBookings;




