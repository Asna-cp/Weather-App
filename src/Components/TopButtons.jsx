import React from 'react'

function TopButtons () {

    const cities = [ 

        {
            id:1,
            title:'Landon'

            
        },
        {
            id:2,
            title:'Tokyo'

        },
        {
            id:3,
            title:'China'

        },
        {
            id:4,
            title:'Toronto'

        },
        {
            id:5,
            title:'paris'

        },
]
  return (

      <div className='flex items-center justify-around my-6'>
  
    {cities.map((city) => (
        <button key ={city.id} className='text-white text-lg font-medium'>{city.title}</button>
        ))}
    </div>
        )
}

export default TopButtons;
