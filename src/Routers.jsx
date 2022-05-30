import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home,Explore,Profile,Bookmark,Login, SignUp} from "./Pages/index"
import { RequireAuth } from './RequireAuth'

function Routers() {
  return (
    <div>  
        <Routes>
        <Route path="/" element= {<RequireAuth><Home/></RequireAuth>}/>
        <Route path="/explorePage" element= {<RequireAuth><Explore/></RequireAuth>}/>
        <Route path="/profilePage" element= {<RequireAuth><Profile/></RequireAuth>}/>
        <Route path="/bookmarkPage" element= {<RequireAuth><Bookmark/></RequireAuth>}/>
        <Route path="/loginPage" element= {<Login/>}/>
        <Route path="/SignUpPage" element= {<SignUp/>}/>
        </Routes>
    </div>
  )
}

export { Routers}