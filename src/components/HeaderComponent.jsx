import React from 'react'

export default function HeaderComponent() {
  return (
    <>
      <header className='flex flex-row justify-between flex-nowrap'>
        <div className='p-1'>MyTinerary</div>
        <nav className='flex flex-row justify-between flex-nowrap'>
          <a href='#' className='m-1'>Home</a>
          <a href='#' className='m-1'>Cities</a>
          <button className='m-1'>Login</button>
        </nav>
      </header>
    </>
  )
}
