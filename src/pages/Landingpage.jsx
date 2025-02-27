import React from "react"
import "./Landingpage.css"
import Navbar from "../Components/Navbar"
import Hero from "../Components/Herrosection"
import Feature from "../Components/Featurecard"
import Stories from "../Components/Success"
import Oppor from "../Components/Opportunities"
import Footer from "../Components/Footer"
import { BrowserRouter } from "react-router-dom"
import How from "../Components/how"


const Landing=()=>{
  return(
  <>
 <Navbar></Navbar>
 <Hero></Hero>
 <Feature></Feature>
 <Stories></Stories>
 <How></How>
 <Oppor></Oppor>
 <BrowserRouter>
      <Footer />
  </BrowserRouter>
    
  </>
  )
} 
export default Landing