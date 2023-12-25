import React from 'react'
import { UilSearchAlt,UilLocationPoint } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
     < input type='text'
     placeholder='Search for city....'
     className='text-xl font-light p-2 w-full shadow-xl focus:outline-none first-letter:capitalize placeholder:lowercase'/>
      <UilSearchAlt size={25} className='text-white cursor-pointer'/>
      < UilLocationPoint size={25} className='text-white cursor-pointer'/>
       <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' className='text-xl text-white font-light'> &deg;C</button>
        <p className='text-xl text-white mx'></p>
        <button name='imperial' className='text-xl text-white font-light'>&deg;F</button>
       </div>
    </div>
  )
} 

export default Inputs
