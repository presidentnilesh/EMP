import React from 'react'

const NewTask = () => {
  return (
     <div className='shrink-0 h-full w-75 bg-yellow-400 rounded-xl'>
          <div className='flex justify-between items-center p-5'>
            <h3 className='bg-red-600 px-3 rounded-[12%] '>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold px-5 '>{data.taskTitle}</h2>
          <p className='text-sm mt-5 px-5'>{data.taskDescription}</p>
          <div className='mt-2 '>
            <button className='w-full'> Accept </button>
          </div>
        </div>
  )
}

export default NewTask