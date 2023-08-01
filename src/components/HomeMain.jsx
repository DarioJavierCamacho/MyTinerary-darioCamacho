import React from 'react'
import mountains from '../../src/assets/images/mountains.jpg'

export default function HomeMain() {
    return (
        <>
          <main className='flex flex-row w-4/5 h-[90vh] mx-auto items-center'>
            <section className='flex flex-row justify-between flex-nowrap gap-12'>
            <div className='w-4/5 mt-10'>
              <h2 className='text-4xl'>Find the perfect destination</h2>
              <p className='mt-10 text-lg'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier</p>
              <button>View More</button>
              </div>
              <img className='w-2/5' src={mountains}/>
            </section>
            
          </main>
        </>
    )
}
