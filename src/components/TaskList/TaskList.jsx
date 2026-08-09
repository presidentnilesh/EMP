import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex overflow-x-auto justify-self-start items-center gap-10 flex-nowrap w-full h-[55%] mt-10 py-5'>
        
        <AcceptTask />
        <NewTask />
        <CompleteTask />
        <FailedTask />
        
        
    </div>
  )
}

export default TaskList