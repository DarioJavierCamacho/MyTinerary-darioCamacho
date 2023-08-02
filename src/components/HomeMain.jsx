import React from 'react'
import mountains from '../../src/assets/images/mountains.jpg'
import { Carousel } from './Carousel';

 const HomeMain= () =>{
  return (
    <>
      <main className='flex flex-row w-4/5 h-[90vh] mx-auto items-center'>
        <section className='flex flex-col md:flex-row md:justify-between flex-nowrap'>
          <div className='md:w-10/12 w-100 mt-5 flex flex-col justify-between'>
            <h2 className='md:text-4xl'>Find the perfect destination</h2>
            <p className='mt-5 md:text-lg w-[85%]'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier</p>
            <button className="bg-[#4f46e5] hover:bg-[#2D23DF] text-base text-white font-bold py-2 px-7 rounded w-6/12 md:w-[45%]">View More</button>
          </div>
         <Carousel></Carousel>
        </section>
      </main>
    </>
  )
}

export default HomeMain;