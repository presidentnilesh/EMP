import React, { use, useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TaskNumber from './components/others/TaskNumber'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)


  const handleLogin = (email , password)=>{
    if(AuthContext && authData?.admin.find((e)=>email==e.email && password==e.password )){
      setUser("Admin")

    }
    else if(AuthContext && authData?.employees.find((e)=>email == e.email && password == password )){
      setUser('Employee')
    }
    else {
      alert("Invalid Ceadintials")
    }
  }


  const data = useContext(AuthContext)

  return (
    <>
    {/* it means if there will be user then nohing will display and if there will be not a user then the login page eill appear */}
    {!user ? ( <Login handelLogin={handleLogin} /> ) : '' }
    {user ? (
      user === "Admin" ? <AdminDashboard /> : <EmployeeDashboard />
    ) : ''}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App