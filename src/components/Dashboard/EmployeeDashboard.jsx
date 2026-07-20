import React from 'react'
import Headers from '../others/Headers'
import TaskNumber from '../others/TaskNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
        <Headers />
        <TaskNumber />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard