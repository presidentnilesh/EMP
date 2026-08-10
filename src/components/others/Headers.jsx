import React, { useState } from 'react'

const Headers = (props) => {

  // const [userName, setUserName] = useState('')

  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.firstName)
  // }

  const logOutUser =()=>{
    localStorage.setItem('loggedInUser' , '')
    console.log(props.changeUser)
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl font-medium text-pink-300'> Hello <br /> <span className='text-pink-300 text-3xl font-semibold'> 😎</span> </h1>
        <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-s-sm'>Log Out</button>
    </div>
  )
}

export default Headers