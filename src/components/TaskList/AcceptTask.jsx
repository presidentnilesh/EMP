import React from 'react'

const AcceptTask = ({data}) => {
  return (
 
    <div className='shrink-0 h-full w-75 bg-green-400 rounded-xl flex flex-col '>
        <div className='flex justify-between items-center p-5'>
            <h3 className='bg-red-600 px-3 rounded-[12%] '>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
          <h2 className='mt-5 text-2xl font-semibold px-5 '>{data.taskTitle}</h2>
          <p className='text-sm mt-5 px-5'>{data.taskDescription}</p>
        
        <div className='px-4 flex gap-2 mt-auto justify-between pb-5 mb-4  '>
            <button className=' bg-green-500 px-2 py-1 text-sm rounded' > Mark as Completed</button>
            <button className=' bg-red-500 px-2 py-1 text-sm rounded '>Mark as Failed</button>
        </div >
    </div>
  
  )
}

export default AcceptTask