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
  const [userData , SetUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.user)
    }
  } ,[])

 const handleLogin = (email, password) => {
    if (email=='admin@admin.com' && password=='123') {
      setUser("Admin")
      localStorage.setItem('loggedInUser', JSON.stringify({ role: "Admin"}))
    } else if (userData){
      const employees = userData.find((e) => email === e.email && password === e.password)
      if (employees) {
        setUser('Employee')
        setLoggedInUserData(employees)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: "Employee"}))
      } else {
        alert("Invalid Credentials")
      }
    }
}



  const data = useContext(AuthContext)

  return (
    <>
    {/* it means if there will be user then nohing will display and if there will be not a user then the login page eill appear */}
    {!user ? ( <Login handelLogin={handleLogin} /> ) : '' }
    {user ? (
      user === "Admin" ? <AdminDashboard data={loggedInUserData} changeUser={setUser}/> : <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/>
    ) : ''}
    {/* <EmployeeDashboard data={loggedInUserData}/> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App