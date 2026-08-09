import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  console.log(data)

  return (
    <div id='tasklist' className='flex overflow-x-auto justify-self-start items-center gap-10 flex-nowrap w-full h-[55%] mt-10 py-5'>
        
      {data.tasks.map((elem)=>{
        if(elem.active){
          return <AcceptTask />
        }
        if (elem.completed){
          return <CompleteTask />
        }
        if (elem.failed){
          return <FailedTask />
        }
        if (elem.newTask){
          return <NewTask  />
        }
      })}

    </div>
  )
}

export default TaskList