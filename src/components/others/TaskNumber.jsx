import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div >
        <div className='flex mt-4 screen gap-4'>
            <div className='p-7 rounded-xl w-[45%] bg-red-400 '>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
                <h3 className='text-xl mt-4 font-medium'>New Task</h3>
            </div>
            <div className='p-7 rounded-xl w-[45%] bg-yellow-400 '>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
                <h3 className='text-xl mt-4 font-medium'>Active</h3>
            </div>
        </div>

        <div className='flex mt-4 screen gap-4  '>
            <div className='p-7 rounded-xl w-[45%] bg-green-400 '>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
                <h3 className='text-xl mt-4 font-medium'>Completed Task</h3>
            </div>
            <div className='p-7 rounded-xl w-[45%] bg-orange-400 '>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
                <h3 className='text-xl mt-4 font-medium'>Failed</h3>
            </div>
        </div>
    </div>
  )
}

export default TaskNumber