import React from 'react'

import { Slide } from './Slide';
import { CarouselTail } from './Carousel';

 const HomeMain= () =>{
  return (
    <>
      <main className='flex flex-row  h-[90vh] mx-auto items-center bg-transparent'>
        <section className='flex flex-col md:flex-row md:justify-between flex-nowrap w-4/5 mx-auto'>
          <div className='md:w-10/12 w-100 mt-5 flex flex-col justify-between'>
            <h2 className='md:text-4xl text-white shad' style={{textShadow: "#000 0px 0 2px,#fff 1px 0 15px"}}>Find the perfect destination</h2>
            <p className='mt-5 md:text-lg w-[85%] text-white' style={{textShadow: "#000 0px 0 2px,#fff 1px 0 10px"}}>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <p className='text-bold font-bold text-xl mt-10 mb-5 w-[85%] italic text-white' style={{textShadow: "#000 0 0 2px,#fff 1px 0 10px"}}>Find your perfect trip, designed by insiders who know and love their cities.</p>
            <button className="bg-[#4f46e5] hover:bg-[#2D23DF] text-base text-white font-bold py-2 px-7 rounded w-6/12 md:w-[45%]">View More</button>
          </div>
         <CarouselTail/>
        </section>
      </main>
    </>
  )
}

export default HomeMain;