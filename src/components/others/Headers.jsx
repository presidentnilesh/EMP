import React from 'react'

const Headers = () => {
  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl font-medium text-black'> Hello <br /> <span className='text-black text-3xl font-semibold'>Ayushi Agarwal ❣️</span> </h1>
        <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-s-sm'>Log Out</button>
    </div>
  )
}

export default Headers