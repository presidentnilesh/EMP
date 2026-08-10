import React, { useState } from 'react'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandeler = (e)=>{
        e.preventDefault()
        setAsignTo('')
        setCategory('')
        setTaskDate('')
        setTaskTitle('')
        settaskDescription('')

        console.log(taskTitle , taskDate , taskDescription , asignTo , category)
    }
  return (
        <div>
            <form onSubmit={(e)=>{
                submitHandeler(e)
            }} className='flex w-full flex-wrap mt-5 h-100 rounded bg-[#1c1c1c] justify-between items-start p-10'>   
                <div className='w-1/2'>
                    <div className='text-gray-300 text-sm mb-0.5'>
                        <h3 className=' px-1 mt-3 text-gray-300 text-sm mb-0.5'>Title</h3>
                        <input 
                        value={taskTitle}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }}
                        className='text-sm py-1 px-2 h-12 w-4/5 rounded outline-none bg-transparent border-2 border-gray-500'   placeholder="Write your task details here..." type="text" placeholder='Make a UI design .' />
                    </div>

                    <div >
                        <h3 className=' px-1 mt-3 text-gray-300 text-sm mb-0.5'>Date</h3>
                        <input 
                        value={taskDate}
                        onChange={(e)=>{
                            setTaskDate(e.target.value)
                        }}
                        className='text-sm py-1 px-2 h-12 w-4/5 rounded outline-none bg-transparent border-2 border-gray-500'  type="date"/>
                    </div>

                    <div>
                        <h3 className=' px-1 mt-3 text-gray-300 text-sm mb-0.5'>Assign to</h3>
                        <input 
                        value={asignTo}
                        onChange={(e)=>{
                            setAsignTo(e.target.value)
                        }}
                        className='text-sm py-1 px-2 h-12 w-4/5 rounded outline-none bg-transparent border-2 border-gray-500' type="text" placeholder='Employee name' />
                    </div>

                    <div>
                        <h3 className=' px-1 mt-3 text-gray-300 text-sm mb-0.5'>Category</h3>
                        <input 
                        value={category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}
                        className='text-sm py-1 px-2  h-12 w-4/5 rounded outline-none bg-transparent border-2 border-gray-500'  type="text" placeholder='Design , Dev , etc .'/>
                    </div>

                    

                </div>

                <div className='flex flex-col'>
                    <h3 className='text-sm mb-1 mt-6'>Descriptions</h3>
                    <textarea 
                    value={taskDescription}
                    onChange={(e)=>{
                        settaskDescription(e.target.value)
                    }}
                    className= ' text-white border px-2 bg-[#1c1c1c]'  name="" id="" cols='40' rows='10'></textarea>

                    <button className='mt-4 size-fit bg-white text-sm text-black rounded px-2'>Create Task</button>

                </div>


                
            </form>
        </div>
  )
}

export default CreateTask