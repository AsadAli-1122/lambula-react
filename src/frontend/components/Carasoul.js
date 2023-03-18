import React from 'react';

const Carasoul = () => {
  return (
    <>
<div className="carousel">
<div
id="carouselDarkVariant"
className="carousel slide carousel-fade carousel-dark relative"
data-bs-ride="carousel"
>
<div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
<button
data-bs-target="#carouselDarkVariant"
data-bs-slide-to="0"
className="active"
aria-current="true"
aria-label="Slide 1"
></button>
<button
data-bs-target="#carouselDarkVariant"
data-bs-slide-to="1"
aria-label="Slide 1"
></button>
<button
data-bs-target="#carouselDarkVariant"
data-bs-slide-to="2"
aria-label="Slide 1"
></button>
</div>

<div className="carousel-inner relative w-full overflow-hidden ">
<div className="carousel-item active relative float-left w-full">
<div className="slider1 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] bg-cover bg-center" >
</div>
<div className="carousel-caption absolute w-full h-full left-0 bottom-0 flex items-center bg-black bg-opacity-60">
    <div className="border-l mx-8 h-[70%] flex flex-col justify-around">
    <div className="w-4 h-4 bg-white text-black rounded-full flex justify-center items-center text-xs font-semibold -ml-2 hover:scale-150 cursor-pointer ease-in-out duration-200">1</div>
    <div className="w-4 h-4 bg-white text-white hover:text-black rounded-full flex justify-center items-center text-xs font-semibold -ml-2 scale-50 hover:scale-150 cursor-pointer ease-in-out duration-200">2</div>
    <div className="w-4 h-4 bg-white text-white hover:text-black rounded-full flex justify-center items-center text-xs font-semibold -ml-2 scale-50 hover:scale-150 cursor-pointer ease-in-out duration-200">3</div>
    </div>
    <div className="">
    <h1 className="uppercase text-4xl lg:text-6xl xl:text-8xl font-extrabold tracking-wider text-white">Safaris</h1>
    <p className="text-white text-[8px] sm:text-[10px] md:text-xs w-[90%] sm:w-[80%] md:w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem aliquid libero provident nostrum consectetur autem repudiandae officiis! Molestiae, odio!</p>
    <button className="my-4 sm:my-5 md:my-6 lg:my-7 xl:my-8 bg-syellow hover:bg-yellow-400 px-4 py-2 rounded-lg text-xs md:text-sm font-bold tracking-wider">Discover <i className="fa-solid fa-arrow-right-long ml-6"></i></button>
    
    </div>
    <div className="w-full hidden lg:block">
    <div className="slider mt-52">
        <input type="radio" className="hidden" name="testimonial" value="1" id="t-1" />
        <input type="radio" className="hidden" name="testimonial" value="2" id="t-2" />
        <input type="radio" className="hidden" name="testimonial" value="3" id="t-3" />
        <input type="radio" className="hidden" name="testimonial" value="4" id="t-4" />
        <input type="radio" className="hidden" name="testimonial" value="5" id="t-5" />
        
        <div className="testimonials flex items-center justify-center relative min-h-[300px] lg:min-h-[420px]">
        <label className="-ml-96 item bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-1" >
        </label>
        <label className="-ml-96 item bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-2">
        </label>
        <label className="-ml-96 item bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-3" >
        </label>
        <label className="-ml-96 item bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-4" >
        </label>
        <label className="-ml-96 item bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-5">
        </label>
        </div>
    </div>
    </div> 
</div>
</div>

<div className="carousel-item relative float-left w-full">
<div className="slider1 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] bg-cover bg-center">
</div>
<div className="carousel-caption absolute w-full h-full left-0 bottom-0 flex items-center bg-black bg-opacity-60">
    <div className="border-l mx-8 h-[70%] flex flex-col justify-around">
    <div className="w-4 h-4 bg-white text-white hover:text-black rounded-full flex justify-center items-center text-xs font-semibold -ml-2 scale-50 hover:scale-150 cursor-pointer ease-in-out duration-200">1</div>
    <div className="w-4 h-4 bg-white text-black rounded-full flex justify-center items-center text-xs font-semibold -ml-2 hover:scale-150 cursor-pointer ease-in-out duration-200">2</div>
    <div className="w-4 h-4 bg-white text-white hover:text-black rounded-full flex justify-center items-center text-xs font-semibold -ml-2 scale-50 hover:scale-150 cursor-pointer ease-in-out duration-200">3</div>
    </div>
    <div className="">
    <h1 className="uppercase text-4xl lg:text-6xl xl:text-8xl font-extrabold tracking-wider text-white">Mountains</h1>
    <p className="text-white text-[8px] sm:text-[10px] md:text-xs w-[90%] sm:w-[80%] md:w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem aliquid libero provident nostrum consectetur autem repudiandae officiis! Molestiae, odio!</p>
    <button className="my-4 sm:my-5 md:my-6 lg:my-7 xl:my-8 bg-syellow hover:bg-yellow-400 px-4 py-2 rounded-lg text-xs md:text-sm font-bold tracking-wider">Discover <i className="fa-solid fa-arrow-right-long ml-6"></i></button>
    </div>
    
    <div className="w-full hidden lg:block">
    <div className="slider mt-52">
        <input type="radio" className="hidden" name="testimonial2" value="1" id="t-11" />
        <input type="radio" className="hidden" name="testimonial2" value="2" id="t-22" />
        <input type="radio" className="hidden" name="testimonial2" value="3" id="t-33" />
        <input type="radio" className="hidden" name="testimonial2" value="4" id="t-44" />
        <input type="radio" className="hidden" name="testimonial2" value="5" id="t-55" />
        <div className="testimonials2 flex items-center justify-center relative min-h-[300px] lg:min-h-[420px]">
        <label className="-ml-96 item2 bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-11" >
        </label>
        <label className="-ml-96 item2 bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-22">
        </label>
        <label className="-ml-96 item2 bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-33">
        </label>
        <label className="-ml-96 item2 bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-44">
        </label>
        <label className="-ml-96 item2 bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-55" >
        </label>
        </div>
    </div>
    </div>
</div>
</div>

<div className="carousel-item relative float-left w-full">
<div className="slider1 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] bg-cover bg-center">
</div>
<div className="carousel-caption absolute w-full h-full left-0 bottom-0 flex items-center bg-black bg-opacity-60">
    <div className="border-l mx-8 h-[70%] flex flex-col justify-around">
    <div className="w-4 h-4 bg-white text-white hover:text-black rounded-full flex justify-center items-center text-xs font-semibold -ml-2 scale-50 hover:scale-150 cursor-pointer ease-in-out duration-200">1</div>
    <div className="w-4 h-4 bg-white text-white hover:text-black rounded-full flex justify-center items-center text-xs font-semibold -ml-2 scale-50 hover:scale-150 cursor-pointer ease-in-out duration-200">2</div>
    <div className="w-4 h-4 bg-white text-black rounded-full flex justify-center items-center text-xs font-semibold -ml-2 hover:scale-150 cursor-pointer ease-in-out duration-200">3</div>
    </div>
    <div className="">
    <h1 className="uppercase text-4xl lg:text-6xl xl:text-8xl font-extrabold tracking-wider text-white whitespace-nowrap">People <br />& culture</h1>
    <p className="text-white text-[8px] sm:text-[10px] md:text-xs w-[90%] sm:w-[80%] md:w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem aliquid libero provident nostrum consectetur autem repudiandae officiis! Molestiae, odio!</p>
    <button className="my-4 sm:my-5 md:my-6 lg:my-7 xl:my-8 bg-syellow hover:bg-yellow-400 px-4 py-2 rounded-lg text-xs md:text-sm font-bold tracking-wider">Discover <i className="fa-solid fa-arrow-right-long ml-6"></i></button>
    </div>
    
    <div className="w-full hidden lg:block">
    <div className="slider mt-52">
        <input type="radio" className="hidden" name="testimonial3" value="1" id="t-111" />
        <input type="radio" className="hidden" name="testimonial3" value="2" id="t-222" />
        <input type="radio" className="hidden" name="testimonial3" value="3" id="t-333" />
        <input type="radio" className="hidden" name="testimonial3" value="4" id="t-444" />
        <input type="radio" className="hidden" name="testimonial3" value="5" id="t-555" />
        <div className="testimonials3 flex items-center justify-center relative min-h-[300px] lg:min-h-[420px]">
        <label className="-ml-96 item3 bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-111">
        </label>
        <label className="-ml-96 item3 bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-222" >
        </label>
        <label className="-ml-96 item3 bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-333" >
        </label>
        <label className="-ml-96 item3 bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-444">
        </label>
        <label className="-ml-96 item3 bg-cover bg-center min-h-[300px] lg:min-h-[420px] w-[300px] absolute top-0 cursor-pointer overflow-hidden rounded-xl brightness-75" htmlFor="t-555" >
        </label>
        </div>
    </div>
    </div>
</div>
</div>
</div>

<button
className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 invisible"
type="button"
data-bs-target="#carouselDarkVariant"
data-bs-slide="prev"
>
<span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button
className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 invisible"
type="button"
data-bs-target="#carouselDarkVariant"
data-bs-slide="next"
>
<span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
</div>

</div>
    </>
  )
}

export default Carasoul;
