
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData , setUserData] = useContext(AuthContext)

        return (
            <div className='bg-[#1c1c1c] p-5 mt-5 rounded '>
                        <div className='bg-red-400 mb-2 px-2 py-4 rounded justify-between flex'>
                            <h3 className='font-medium text-lg w-1/5'>Employees name</h3>
                            <h5 className='font-medium text-lg w-1/5'>Active Task</h5>
                            <h2 className='font-medium text-lg w-1/5'>New task </h2>
                            <h5 className='font-medium text-lg w-1/5'>Completed</h5>
                            <h5 className='font-medium text-lg w-1/5'>Failed</h5>
                        </div>

                <div className='h-[80%] overflow-auto'>
                    {userData.employees.map(function(elem , idx){
                    return (
                            <div key={idx}className='border-emerald-400 border-2 mb-2 px-2 py-4 rounded justify-between flex'>
                            <h2 className=' w-1/5'>{elem.firstName} </h2>
                            <h3 className='text-yellow-400 font-medium text-lg w-1/5'> {elem.taskNumbers.newTask}</h3>
                            <h5 className='text-blue-600 font-medium px-2 text-lg w-1/5'>{elem.taskNumbers.active}</h5>
                            <h5 className='text-green-300 font-medium px-2 text-lg  w-1/5'>{elem.taskNumbers.completed}</h5>
                            <h5 className='text-red-500 font-medium px-3 text-lg w-1/5'>{elem.taskNumbers.failed}</h5>
                        </div>
                    )
                })}
                </div>
        
    </div>
  )
}

export default AllTask