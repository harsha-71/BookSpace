import React from 'react'
import Home from './home/Home'
import { Route, Router, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import Contact_nav from './courses/Contact_nav'
import About_nav from './courses/About_nav'


function App() {
  return (
   
   <>

  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/course" element={<Courses/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/contactus" element={<Contact_nav/>}></Route>
    <Route path="/aboutus" element={<About_nav/>}></Route>
    
  
   </Routes>
  
  
   
   
   </>
  )
}

export default App
