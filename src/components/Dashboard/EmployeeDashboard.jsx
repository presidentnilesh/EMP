import React from 'react'
import Headers from '../others/Headers'
import TaskNumber from '../others/TaskNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
      <Headers cangeUser={props.changeUser}  data={props.data} />
      <TaskNumber data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard 