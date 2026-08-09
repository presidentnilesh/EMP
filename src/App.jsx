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

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  } ,[])

 const handleLogin = (email, password) => {
    const loggedInAdmin = authData?.admin.find((e) => email === e.email && password === e.password)
    if (loggedInAdmin) {
      setUser("Admin")
      setLoggedInUserData(loggedInAdmin)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: "Admin", data:admin}))
    } else {
      const loggedInEmployee = authData?.employees.find((e) => email === e.email && password === e.password)
      if (loggedInEmployee) {
        setUser('Employee')
        setLoggedInUserData(loggedInEmployee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: "Employee", data:employees }))
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
      user === "Admin" ? <AdminDashboard data={loggedInUserData}/> : <EmployeeDashboard data={loggedInUserData}/>
    ) : ''}
    {/* <EmployeeDashboard data={loggedInUserData}/> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App