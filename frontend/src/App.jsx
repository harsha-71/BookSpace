import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Router, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'

import Contact_nav from './courses/Contact_nav'
import About_nav from './courses/About_nav'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


function App() {

  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);

  return (
   
   <>

  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/course" element={authUser? <Courses/> : <Navigate to="/signup"/>}></Route>
    
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/contactus" element={<Contact_nav/>}></Route>
    <Route path="/aboutus" element={<About_nav/>}></Route>
   </Routes>
   <Toaster/>
  
  
   
   
   </>
  )
}

export default App
