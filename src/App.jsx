import React, { use, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TaskNumber from './components/others/TaskNumber'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email , password)=>{
    if(email == "admin@admin.com" && password == '123'){
      console.log("this is admmin")
    }
    else if(email == "employees@employees.com" && password == '123'){
        console.log("this is Employees")
    }
    else {
      alert("Invalid Ceadintials")
    }
  }

  handleLogin('admin@admin.com' , 123)

  return (
    <>
    {/* it means if there will be user then nohing will display and if there will be not a user then the login page eill appear */}
    { user ?  '' :<Login handelLLogin={handleLogin}/>  }  
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App