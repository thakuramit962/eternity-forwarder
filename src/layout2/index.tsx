import React, {useEffect, useMemo, useState} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {Box, Container, createTheme, ThemeProvider, useMediaQuery} from "@mui/material"
import AppBar2 from "../components/app-bar-2";
import ThemeFooter2 from "../components/theme-footer-2"
import ThemeDrawer from "../components/theme-drawer"
import {CSSTransition, TransitionGroup} from "react-transition-group"


export default function Layout2() {

    // const initialMode = useSelector((state: RootState) => state.colorMode.mode)

    const location = useLocation()

    const isMobile = useMediaQuery('(max-width:600px)')

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = () => setIsDrawerOpen(prevState => !prevState)

    const currentKey = location?.pathname || "/"

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <React.Fragment>
            <AppBar2 toggleDrawer={toggleDrawer}/>
            {isMobile && <ThemeDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>}
            <Container sx={{
                display: 'flex',
                flexFlow: 'column',
                minHeight: '100vh',
                width: '100%',
                px: 0,
                '& main': {
                    flex: 1,
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
                <TransitionGroup component={null}>
                    <CSSTransition key={currentKey} classNames="page" timeout={300}>
                        <Box component={'main'} className={'page'}>
                            <Outlet/>
                        </Box>
                    </CSSTransition>
                </TransitionGroup>
                <ThemeFooter2/>
            </Container>
        </React.Fragment>
    )
}
