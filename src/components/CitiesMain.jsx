import React from 'react'
import construction from '../assets/images/underconstruction.webp'
import { CardText } from './CardText'

export const CitiesMain = () => {
  return (
    <>
       <div className='flex flex-row items-center  mx-auto min-h-screen w-screen select-none'>
            <div className='flex flex-row justify-between mx-auto w-4/5' >
                <CardText/>
                <img className='w-6/12' src={construction}></img>
            </div>
       </div> 
    </>
  )
}
