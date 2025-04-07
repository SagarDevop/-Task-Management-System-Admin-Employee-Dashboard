import React, { useContext, useEffect } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import EmpolyeeDashboard from './Components/Dashboard/EmpolyeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/Localstorage'
import { useState } from 'react'
import Authprovider, { AuthContext } from './Context/Authprovider'
function App() {
 
  const[user, setUser] = useState(null)
  const[UserLoogedInData, setUserLoogedInData] = useState(null)
  const authData = useContext(AuthContext) 

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setUserLoogedInData(userData.data)
    }

  },[])
    

  const handelLogin = (email,password) =>{
   if(authData && authData.admin.find((e)=>email==e.email && password== e.password)){
    setUser('admin')
    setUserLoogedInData(authData.admin)
    localStorage.setItem('loggedInUser',JSON.stringify({role:"admin",data:authData.admin}))
   }
   else if(authData){
    const employee = authData.employees.find((e)=>email==e.email && password== e.password)
    if(employee){
      setUser('employee')
      setUserLoogedInData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:"employee",data:employee}))
    }
   }
  }
  handelLogin()


  return (
   <>

   {! user ?  <Login handelLogin={handelLogin}/> : ""}
   {user=='admin'?<AdminDashboard  changeUser={setUser}/>:(user== 'employee' ?<EmpolyeeDashboard data={UserLoogedInData} changeUser={setUser}/>: "")}
   {/* <EmpolyeeDashboard/> */}
   {/*<AdminDashboard/> */}
    </>
  )
}

export default App
