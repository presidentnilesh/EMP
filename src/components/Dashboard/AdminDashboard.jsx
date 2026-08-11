import React from 'react'
import Headers from '../others/Headers'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='min-h-screen w-screen p-10 flex flex-col bg-black'>
        <Headers changeUser={props.changeUser}  data={props.data}/>
        <CreateTask data={props.data}/>
        <AllTask  />
    </div>
  )
}

export default AdminDashboard
