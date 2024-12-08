import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'


function Routing() {
    return (

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/user' element={<User />}></Route>
        </Routes>
    )
}

export default Routing