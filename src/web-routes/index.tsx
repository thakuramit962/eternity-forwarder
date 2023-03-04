import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from "../layout";
import Home from "../pages/Home";
import Service from "../pages/Service";


export default function WebRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="about" element={<>About</>}/>
                <Route path="services" element={<Service/>}/>
                <Route path="group" element={<h2>Group</h2>}/>
                <Route path="support" element={<h2>Support</h2>}/>
            </Route>
        </Routes>
    )
}