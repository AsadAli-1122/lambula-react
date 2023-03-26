import React from 'react'
import Filter from './filter/Filter';
import queenImg from "../../images/queen@2x.png";
import Operators from './operator/Operators';

const TourPackages = () => {


    function clearRadioButtons() {
        var ele = document.querySelectorAll("input[type=radio]");
        for (var i = 0; i < ele.length; i++) {
            ele[i].checked = false;
        }
    }

    return (
        <>
            <div className="bg-black w-[100%] h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] absolute -z-50">
                <div
                    className="w-[100%] h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] bg-cover bg-center opacity-0 sm:opacity-50"
                    style={{ backgroundImage: `url(${queenImg})` }}
                ></div>
            </div>
            <div className="w-[100%] h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] flex flex-col justify-center">
                <div className="text-white w-[90%] max-w-6xl mx-auto flex flex-col justify-center items-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 ">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center">Our <span className="text-syellow">Travel Champions</span><br /> Are waiting for you</h1>
                    <p className="text-md md:text-xl">Find a new tour operator</p>
                    <div className="w-full xl:max-w-5xl xl: lg:max-w-4xl md:max-w-3xl sm:max-w-2xl max-w-xl flex items-center border border-syellow rounded-xl overflow-hidden bg-white bg-opacity-40">
                        <input type="search" name="" id="" className="w-[100%] bg-transparent border-none placeholder:text-gray-300 placeholder:text-opacity-50 text-sm sm:text-lg md:text-xl xl:text-2xl placeholder:text-sm sm:placeholder:text-lg md:placeholder:text-xl xl:placeholder:text-2xl sm:py-1 md:py-2 lg:py-3 px-8" placeholder="Search Categories, Packages" />
                        <Filter />


                        <i className="fa-solid fa-search text-sm sm:text-lg md:text-xl lg:text-2xl  text-black h-full px-8 md:px-10 lg:px-12 bg-syellow flex items-center justify-center cursor-pointer"></i>
                    </div>
                    <div className="flex flex-wrap items-center space-x-2 space-y-3 justify-start text-[8px] sm:text-xs md:text-sm md:flex-nowrap whitespace-nowrap">
                        <input type="radio" name="cat" id="small" className="hidden" />
                        <label htmlFor="small" className="small border-2 border-syellow rounded-xl px-4 py-1 bg-l-yellow text-black font-bold cursor-pointer">Small Groups (1-8 people)</label>
                        <input type="radio" name="cat" id="large" className="hidden" />
                        <label htmlFor="large" className="large border-2 border-syellow rounded-xl px-4 py-1 bg-l-yellow text-black font-bold cursor-pointer">Large Groups (10,50-100 people)</label>
                        <input type="radio" name="cat" id="cooperate" className="hidden" />
                        <label htmlFor="cooperate" className="cooperate border-2 border-syellow rounded-xl px-4 py-1 bg-l-yellow text-black font-bold cursor-pointer">Cooperate Travel</label>
                        <button type="button" className="bg-transparent py-1 px-4 font-semibold tracking-wider text-sm" onClick={clearRadioButtons}>Clear filters</button>
                    </div>
                </div>
            </div>
            <div className='w-full bg-dark-gray flex'>
        <Operators />
            </div>

        </>
    )
}

export default TourPackages;