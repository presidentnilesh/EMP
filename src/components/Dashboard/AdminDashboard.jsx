import React from 'react'
import Headers from '../others/Headers'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-full w-screen p-10 bg-black'>
        <Headers />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard