import React from 'react'
import Headers from '../others/Headers'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({data}) => {
  return (
    <div className='min-h-screen w-screen p-10 flex flex-col bg-black'>
        <Headers data={data} />
        <CreateTask data={data}/>
        <AllTask  />
    </div>
  )
}

export default AdminDashboard