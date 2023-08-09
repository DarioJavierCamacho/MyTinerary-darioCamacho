import React from 'react'
import construction from '../assets/images/underconstruction.webp'
import { CardText } from './CardText'

export const CitiesMain = () => {
  return (
    <>
       <div className='flex  flex-row items-center mx-auto min-h-[85vh] w-screen select-none'>
            <div className='flex flex-col md:flex-row justify-between mx-auto md: w-4/5' >
                <CardText/>
                <img className='w-full md:w-6/12' src={construction}></img>
            </div>
       </div> 
    </>
  )
}

export default CitiesMain