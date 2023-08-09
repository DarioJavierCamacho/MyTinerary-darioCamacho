import React from 'react'
import HeaderComponent from '../layouts/HeaderComponent'
import CitiesMain  from '../components/CitiesMain'
import FooterComponent from '../layouts/FooterComponent'

const  Cities = () => {
  return (
    <>
      <HeaderComponent color="black"/>
      <CitiesMain/>
      <FooterComponent text="black"/>
    </>
  )
}
export default Cities