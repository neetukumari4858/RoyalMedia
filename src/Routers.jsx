import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home,Explore,Profile,Bookmark} from "./Pages/index"

function Routers() {
  return (
    <div>  
        <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/explorePage" element= {<Explore/>}/>
        <Route path="/profilePage" element= {<Profile/>}/>
        <Route path="/bookmarkPage" element= {<Bookmark/>}/>
        </Routes>
    </div>
  )
}

export { Routers}