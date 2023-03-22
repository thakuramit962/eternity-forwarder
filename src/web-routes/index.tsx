import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from "../layout";
import Home from "../pages/home/Home";
import Service from "../pages/Service";
import About from "../pages/About";
import Group from "../pages/group";


export default function WebRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="services" element={<Service/>}/>
                <Route path="group" element={<Group/>}/>
                <Route path="support" element={<h2>Support</h2>}/>
            </Route>
        </Routes>
    )
}