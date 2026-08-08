import React from 'react'
import Headers from '../others/Headers'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({data}) => {
  return (
    <div className='h-full w-screen p-10 bg-black'>
        <Headers data={data} />
        <CreateTask data={data}/>
        <AllTask data={data} />
    </div>
  )
}

export default AdminDashboard