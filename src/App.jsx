import React, { use, useContext, useDebugValue, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TaskNumber from './components/others/TaskNumber'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { admin, employees, getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(() => {
  //     if(authData){
  //       const loggedInUser = localStorage.getItem('loggedInUser')
  //       setUser(loggedInUser.role)
  //     }
  // }, [authData])
  


  const handleLogin = (email , password)=>{
    if(AuthContext && authData?.admin.find((e)=>email==e.email && password==e.password )){
      setUser("Admin")
      setLoggedInUserData(adminUser)
      localStorage.setItem('loggedInUser',JSON.stringify({role:"Admin" , user:adminUser} ))
    }
    else if(AuthContext){
      const employee = authData?.employees.find((e)=>email == e.email && password == e.password)
      if (employees){
        setUser('Employee')
        setLoggedInUserData(employees)
        localStorage.setItem('loggedInUser',JSON.stringify({role:"Employees" }))
      }
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
      user === "Admin" ? <AdminDashboard /> : <EmployeeDashboard data={loggedInUserData}/>
    ) : ''}
    {/* <EmployeeDashboard data={loggedInUserData/> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App