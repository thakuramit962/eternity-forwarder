import React, {useEffect, useMemo} from 'react'
import './App.css'
import 'animate.css'
import {BrowserRouter, useLocation} from "react-router-dom"
import WebRoutes from "./web-routes"
import {ParallaxProvider} from "react-scroll-parallax";
import NewCursor from "./components/new-cursor/new-cursor";

function App() {


    return (
        <ParallaxProvider>
            <BrowserRouter>
                <WebRoutes/>
                {/*<NewCursor/>*/}
            </BrowserRouter>
        </ParallaxProvider>
    )
}

export default App
