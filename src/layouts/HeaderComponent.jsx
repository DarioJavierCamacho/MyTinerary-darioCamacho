import React from 'react'
import { Nav } from '../components/nav';

const  HeaderComponent= () => {
  return (
    <>
      <header className='flex flex-row justify-between flex-nowrap w-4/5 mx-auto mt-10'>
        <div className='p-1 font-["Segoe UI"] font-bold text-2xl'>My Tinerary</div>
        <Nav/>
      </header>
    </>
  )
}

export default HeaderComponent;