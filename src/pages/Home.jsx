import React from 'react'
import HomeMain from '../components/HomeMain'
import HeaderComponent from '../layouts/HeaderComponent'
import Background from '../assets/images/bg6.jpg'


export default function Home() {
  return (
    <div className='w-full h-screen bg-cover' style={{backgroundImage: `url(${Background})`}} >
      <HeaderComponent />
      <HomeMain />
    </div>
  )
}
