import React from 'react'
import aboutimg from '../../images/IMG_20180329_100748@2x.png'
import phillip from '../../images/philipp-pilz-iQRKBNKyRpo-unsplash.jpg'
import kevin from '../../images/kevin-mueller-aeNg4YA41P8-unsplash.jpg'
import motu from '../../images/motu.webp'
import patlu from '../../images/pngegg.png'
import lambu from '../../images/lambu.webp'
import { Link } from 'react-router-dom'

//

const AboutUs = () => {
    
    return (
        <div>
            <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] bg-cover bg-center flex flex-col justify-center text-white border-b-[6px] border-black" style={{ backgroundImage: `url(${aboutimg})` }}>
                <div className="ml-[10%] space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-5">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase">About us</h1>
                    <p className=" max-w-3xl w-[70%] text-xs lg:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, asperiores quo. Ut corporis vero fugiat blanditiis culpa saepe molestias, placeat aut velit dolore incidunt rem aliquam nobis. Dicta, vel atque.</p>
                </div>
            </div>

            <div className="bg-dark-gray text-white">
        <div className="max-w-5xl mx-auto space-y-4 px-4">
            <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-bold text-syellow py-4 mx-auto">Our Story</h1>
            <p className="text-sm md:text-base text-left tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi cumque iure placeat repellendus saepe, iusto libero odio pariatur culpa vel magnam sit eius optio minus ab quod eaque. Cumque rerum, eum nam, repellendus velit eligendi soluta reiciendis illo quia debitis error excepturi. Tenetur quisquam eum sint libero sequi itaque amet.</p>
            <p className="text-sm md:text-base text-left tracking-wide">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi illo maiores dolorem consequuntur numquam necessitatibus aliquam labore, harum dolorum deleniti aliquid nulla atque eligendi error quam eveniet suscipit id hic!</p>
        </div>
        <div className="flex w-fit max-w-5xl mx-auto px-4 py-12 justify-center items-center border-b-2 border-gray-500">
            <div className="sm:max-w-lg h-[270px] flex justify-center items-center overflow-hidden rounded-xl z-0 shadow-lg shadow-black">
                <img src={phillip}  alt="phillip" />
            </div>
            <div className="-ml-60 sm:-ml-52 md:-ml-32 min-w-[300px] w-[400px] h-[200px] overflow-hidden rounded-md bg-white text-gray-600 z-10 shadow-lg shadow-gray-900 flex flex-col justify-evenly px-4 py-8 cursor-pointer hover:scale-95 ease-in duration-300 hover:shadow-gray-500" >
                <h1 className="text-lg font-extrabold tracking-wide">Our Vision</h1>
                <p className="text-xs font-semibold" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eos voluptatem mollitia culpa consectetur id magni magnam, assumenda nulla ullam quis temporibus non error corrupti dolorum. Dignissimos nobis.</p>
            </div>
        </div>
        <div className="flex w-fit max-w-5xl mx-auto px-4 py-12 justify-center items-center">
            <div className="-mr-60 sm:-mr-52 md:-mr-32 min-w-[300px] w-[400px] h-[200px] overflow-hidden rounded-md bg-white text-gray-600 z-10 shadow-lg shadow-gray-900 flex flex-col justify-evenly px-4 py-8 cursor-pointer hover:scale-95 ease-in duration-300 hover:shadow-gray-500" >
                <h1 className="text-lg font-extrabold tracking-wide">Our Vision</h1>
                <p className="text-xs font-semibold" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eos voluptatem mollitia culpa consectetur id magni magnam, assumenda nulla ullam quis temporibus non error corrupti dolorum. Dignissimos nobis.</p>
            </div>
            <div className="sm:max-w-lg h-[270px] flex justify-center items-center overflow-hidden rounded-xl z-0 shadow-lg shadow-black">
                <img src={kevin} alt="kevin" />
            </div>
            
        </div>
        <div className="bg-syellow text-black tracking-wide font-semibold">
            <div className="max-w-5xl mx-auto px-4 py-12 space-y-8 text-center">
                <p>We design and develop mobile apps that delight your users and grow your business.</p>
                <Link to="/contactus" className="mt-6 py-2 px-12 inline-block uppercase border border-black rounded-md bg-syellow hover:shadow-lg hover:shadow-yellow-500 hover:bg-yellow-400 hover:scale-105 ease-in-out duration-300">Contact us</Link>
            </div>
        </div>
        <div className="max-w-5xl mx-auto space-y-4 px-4 py-8">
            <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-bold text-syellow py-4 mx-auto">Our Team</h1>
            <p className="text-sm md:text-base max-w-3xl mx-auto text-center tracking-wide">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dolorum dolores placeat mollitia laudantium unde.</p>
            <div className="flex justify-around flex-wrap"> 
                <div className="m-3 flex items-end w-60 h-80 rounded-lg bg-contain bg-no-repeat bg-center bg-black bg-opacity-50 overflow-hidden cursor-pointer hover:scale-95 ease-in duration-300 hover:shadow-lg hover:shadow-yellow-400" style={{ backgroundImage: `url(${motu})` }}>
                    <div className="w-full bg-syellow text-black text-center font-bold tracking-wide py-2">
                        <h1>Andrew Mukuye</h1>
                        <p className="text-xs font-normal">Co-Founder, UI/UX Designer</p>
                        <p className="text-lg font-light space-x-4">
                            <i className="fa-brands fa-facebook-f text-gray-500 cursor-pointer hover:text-black ease-in duration-200 hover:translate-x-1 hover:scale-105"></i>
                            <i className="fa-brands fa-instagram text-gray-500 cursor-pointer hover:text-black ease-in duration-200 hover:translate-x-1 hover:scale-105"></i>
                            <i className="fa-brands fa-twitter text-gray-500 cursor-pointer hover:text-black ease-in duration-200 hover:translate-x-1 hover:scale-105"></i>
                        </p>
                    </div>
                </div>
                <div className="m-3 flex items-end w-60 h-80 rounded-lg bg-contain bg-no-repeat bg-center bg-black bg-opacity-50 overflow-hidden cursor-pointer hover:scale-95 ease-in duration-300 hover:shadow-lg hover:shadow-yellow-400" style={{ backgroundImage: `url(${lambu})` }}>
                    <div className="w-full bg-syellow text-black text-center font-bold tracking-wide py-2">
                        <h1>Andrew Mukuye</h1>
                        <p className="text-xs font-normal">Co-Founder, UI/UX Designer</p>
                        <p className="text-lg font-light space-x-4">
                            <i className="fa-brands fa-facebook-f text-gray-500 cursor-pointer hover:text-black ease-in duration-200 hover:translate-x-1 hover:scale-105"></i>
                            <i className="fa-brands fa-instagram text-gray-500 cursor-pointer hover:text-black ease-in duration-200 hover:translate-x-1 hover:scale-105"></i>
                            <i className="fa-brands fa-twitter text-gray-500 cursor-pointer hover:text-black ease-in duration-200 hover:translate-x-1 hover:scale-105"></i>
                        </p>
                    </div>
                </div>
                <div className="m-3 flex items-end w-60 h-80 rounded-lg bg-contain bg-no-repeat bg-center bg-black bg-opacity-50 overflow-hidden cursor-pointer hover:scale-95 ease-in duration-300 hover:shadow-lg hover:shadow-yellow-400" style={{ backgroundImage: `url(${patlu})` }}>
                    <div className="w-full bg-syellow text-black text-center font-bold tracking-wide py-2">
                        <h1>Andrew Mukuye</h1>
                        <p className="text-xs font-normal">Co-Founder, UI/UX Designer</p>
                        <p className="text-lg font-light space-x-4">
                            <i className="fa-brands fa-facebook-f text-gray-500 cursor-pointer hover:text-black ease-in duration-200 hover:translate-x-1 hover:scale-105"></i>
                            <i className="fa-brands fa-instagram text-gray-500 cursor-pointer hover:text-black ease-in duration-200 hover:translate-x-1 hover:scale-105"></i>
                            <i className="fa-brands fa-twitter text-gray-500 cursor-pointer hover:text-black ease-in duration-200 hover:translate-x-1 hover:scale-105"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
        </div>
    )
}

export default AboutUs
