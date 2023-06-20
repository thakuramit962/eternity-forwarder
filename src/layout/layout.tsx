import React, {useEffect, useMemo, useRef, useState} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {alpha, Box, Container, createTheme, ThemeProvider, useMediaQuery, useTheme} from "@mui/material"
import AppBar2 from "../components/app-bar-2";
import ThemeFooter2 from "../components/theme-footer-2"
import ThemeDrawer from "../components/theme-drawer"
import {CSSTransition, TransitionGroup} from "react-transition-group"
import Header from "./header/header";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Sidebar from "./sidebar/sidebar";
import 'aos/dist/aos.css';
import Aos from "aos";
import Footer from "./footer/footer";

export default function Layout() {

    // const initialMode = useSelector((state: RootState) => state.colorMode.mode)

    const theme = useTheme()
    const location = useLocation()

    const isMobile = useMediaQuery('(max-width:600px)')

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = () => setIsDrawerOpen(prevState => !prevState)

    const currentKey = location?.pathname || "/"

    const cursorRounded = useRef()


    const moveCursor = (e: MouseEvent) => {
        const mouseY = e.clientY
        const mouseX = e.clientX
        // cursorRounded?.current?.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        // cursorRounded?.current?.style.backgroundColor = "red";
    }

    window.addEventListener('mousemove', moveCursor)

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <React.Fragment>
            <Sidebar open={isDrawerOpen} closeDrawer={toggleDrawer}/>

            <Header toggleDrawer={toggleDrawer}/>
            <Box sx={{
                display: 'flex',
                flexFlow: 'column',
                minHeight: '100vh',
                px: 0,
                background: alpha(theme.palette.secondary.main, 0.05),
                '& main': {
                    flex: 1,
                    background: 'transparent',
                },
                '& .MuiButton-root': {
                    '&:hover': {
                        cursor: 'none',
                        '&.MuiButton-outlined': {
                            background: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                        },
                    },
                },
                '& .page-enter': {
                    opacity: 0,
                    transform: 'scaleY(0.6)',
                    transformOrigin: 'top center',
                    transition: 'opacity 600ms, transform 300ms',
                },
                '& .page-enter-active': {
                    opacity: 1,
                    transform: 'scaleY(1)',
                    transformOrigin: 'top center',
                    transition: 'opacity 600ms, transform 300ms',
                },
                '& .page-exit': {
                    opacity: 1,
                    transformOrigin: 'center',
                },
                '& .page-exit-active': {
                    opacity: 0,
                    transition: 'opacity 300ms, transform 300ms',
                },
            }}>
                <Box component={'main'} className={'page'}>
                    <Outlet/>
                </Box>
                <Footer/>
            </Box>
            <Box ref={cursorRounded} className="cursor rounded" sx={{
                width: '30px',
                height: '30px',
                border: '2px solid #fff',
                borderRadius: '50%',
                display: 'none',
            }}/>
        </React.Fragment>
    )
}
