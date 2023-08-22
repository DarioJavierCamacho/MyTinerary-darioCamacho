import React, { useEffect, useState  } from 'react'
import { Input } from '@material-tailwind/react'
import { HorizontalCard } from './HorizontalCard'
import axios from 'axios'
const ApiURL = 'http://localhost:8081/api'

export const CitiesMain = () => {
  const [cities, setCities] = useState([])
  const [backupCities,setBackupCities]= useState([])

  const filterCities = (value) =>{
    setCities(backupCities.filter((data)=>{
      return (data.city.toLowerCase().startsWith(value)||data.country.toLowerCase().startsWith(value))
    }))
  }
  const handleChange = event =>{
     filterCities(event.target.value)
  }
  
  useEffect(() => {
    axios(ApiURL).then((res) => {
      setCities(res.data.cities)
      setBackupCities(res.data.cities)
    })
  }, [])


  return (
    <div className=' min-h-[70vh] w-full'>
      <div className='w-full md:w-4/5 mx-auto mt-0'>
        <Input color='blue' className='text-white' label='Search city...' onChange={handleChange} />
      </div>
      
      <div className='flex flex-row flex-wrap justify-center my-5'>
        {cities.map((city) => <HorizontalCard cityName={city.city} photo={city.photo} country={city.country} description={city.smalldescription} id={city._id} />)}
      </div>
    </div>
  )
}

export default CitiesMain