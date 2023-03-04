import React from 'react'
import './App.css'
import 'animate.css'
import {BrowserRouter} from "react-router-dom"
import WebRoutes from "./web-routes"
import {ParallaxProvider} from "react-scroll-parallax";

function App() {


    return (
        <ParallaxProvider>
            <BrowserRouter>
                <WebRoutes/>
            </BrowserRouter>
        </ParallaxProvider>
    )
}

export default App
