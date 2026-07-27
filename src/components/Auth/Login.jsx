import React, { useState } from 'react'

const Login = ({handelLogin}) => {

  console.log(handelLogin)
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const submitHandler =(e)=>{
    e.preventDefault()
    setPassword('')
    setEmail('')
    console.log("Email is ", email , 'and password is ', password);
  
}

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-400 p-20'>
            <form 
            onSubmit={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-col items-center  justify-center px-10px py-10px'>
                <input 
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }
                }
                required className='outline-none  placeholder:text-gray-600 border-2 border-emerald-600 py-3 px-5 text-xl rounded-2xl' type="email" placeholder='Enter the Email' />
                <input 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                required className='mt-2  text-white  outline-none placeholder:text-gray-600 border-2 border-emerald-600 py-3 px-5 text-xl rounded-2xl' type="password" placeholder='Enter Password' />
                <button className='mt-4 text-white  outline-none border-2 border-none bg-emerald-600 py-3 px-5 text-xl rounded-[10%]'>Log in</button>
            </form>

        </div>
        
    </div>
  )
}

export default Login