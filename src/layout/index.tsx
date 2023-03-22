import React, {useEffect, useMemo, useState} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {Box, Container, createTheme, ThemeProvider, useMediaQuery} from "@mui/material"
import AppBar2 from "../components/app-bar-2";
import ThemeFooter2 from "../components/theme-footer-2"
import ThemeDrawer from "../components/theme-drawer"
import {CSSTransition, TransitionGroup} from "react-transition-group"


export default function Layout() {

    // const initialMode = useSelector((state: RootState) => state.colorMode.mode)

    const theme = useMemo(() =>
            createTheme({
                palette: {
                    primary: {
                        main: '#FBB810',
                    },
                    secondary: {
                        main: '#535353',
                    },
                    // mode: 'dark',
                    // mode: initialMode,
                },
                typography: {
                    h1: {fontFamily: "Prompt, sans-serif"},
                    h2: {fontFamily: "Prompt, sans-serif"},
                    h3: {fontFamily: "Prompt, sans-serif"},
                    h4: {fontFamily: "Prompt, sans-serif"},
                    h5: {fontFamily: "Prompt, sans-serif"},
                    h6: {fontFamily: "Prompt, sans-serif"},
                    body2: {fontFamily: "Nunito, sans-serif"},
                    button: {
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: 500,
                    },
                    fontFamily: "Nunito, sans-serif"
                },
                components: {
                    MuiMenu: {
                        styleOverrides: {
                            paper: {
                                borderRadius: '16px !important'
                            },
                        },
                    },
                    MuiButton: {
                        defaultProps: {
                            size: 'small',
                        }
                    },
                },
            }),
        [],
    )
    const location = useLocation()

    const isMobile = useMediaQuery('(max-width:600px)')

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = () => setIsDrawerOpen(prevState => !prevState)

    const currentKey = location?.pathname || "/"

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    )
}
