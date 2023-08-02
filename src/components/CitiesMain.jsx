import React from 'react'
import construction from '../assets/images/underconstruction.webp'

export const CitiesMain = () => {
  return (
    <>
       <div className='flex flex-row items-center  mx-auto min-h-screen w-screen'>
            <div className='flex flex-row justify-between mx-auto w-4/5' >
                <div className='grow'>
                    <h2 className='text-6xl'>Coming soon</h2>
                    <h3 className='text-2xl'>Site is under construction..</h3>
                    <p>We are currently working on this page</p>
                    <button className='bg-[#4f46e5] hover:bg-[#2D23DF] text-white font-bold py-2 px-4 rounded'>Go back</button>
                </div>
                <img className='w-6/12' src={construction}></img>
            </div>
       </div> 
    </>
  )
}
