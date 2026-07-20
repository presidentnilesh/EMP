import React from 'react'
import Headers from '../others/Headers'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-screen p-10 bg-pink-50'>
        <Headers />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard