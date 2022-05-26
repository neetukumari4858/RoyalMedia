import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home,Explore,Profile,Bookmark,Login, SignUp} from "./Pages/index"

function Routers() {
  return (
    <div>  
        <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/explorePage" element= {<Explore/>}/>
        <Route path="/profilePage" element= {<Profile/>}/>
        <Route path="/bookmarkPage" element= {<Bookmark/>}/>
        <Route path="/loginPage" element= {<Login/>}/>
        <Route path="/SignUpPage" element= {<SignUp/>}/>
        </Routes>
    </div>
  )
}

export { Routers}