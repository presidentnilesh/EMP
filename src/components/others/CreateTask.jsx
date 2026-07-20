import React from 'react'

const CreateTask = () => {
  return (
        <div>
            <form className='flex w-full flex-wrap mt-5 rounded bg-[#1c1c1c] justify-between items-start p-10'>
                <div className='w-1/2'>
                    <div className='text-gray-300 text-sm mb-0.5'>
                        <h3 className=' px-1 mt-3 text-gray-300 text-sm mb-0.5'>Title</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-500'   placeholder="Write your task details here..." type="text" placeholder='Make a UI design .' />
                    </div>

                    <div >
                        <h3 className=' px-1 mt-3 text-gray-300 text-sm mb-0.5'>Date</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-500'  type="date" />
                    </div>

                    <div>
                        <h3 className=' px-1 mt-3 text-gray-300 text-sm mb-0.5'>Assign to</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-500' type="text" placeholder='Employee name' />
                    </div>

                    <div>
                        <h3 className=' px-1 mt-3 text-gray-300 text-sm mb-0.5'>Category</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-500'  type="text" placeholder='Design , Dev , etc .'/>
                    </div>

                    

                </div>

                <div className='flex flex-col'>
                    <h3>Descriptions</h3>
                    <textarea className= ' text-white border bg-[#1c1c1c]'  name="" id="" col='30' rows='10'></textarea>

                    <button className='mt-8 size-fit bg-white text-black rounded px-2'>Create Task</button>

                </div>


                
            </form>
        </div>
  )
}

export default CreateTask