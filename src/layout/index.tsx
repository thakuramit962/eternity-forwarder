import React, {useMemo, useState} from 'react'
import {Outlet} from 'react-router-dom'
import {Box, Container, createTheme, ThemeProvider, useMediaQuery} from "@mui/material"
import AppBar2 from "../components/app-bar-2";
import ThemeFooter2 from "../components/theme-footer-2"
import ThemeDrawer from "../components/theme-drawer"


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

    const isMobile = useMediaQuery('(max-width:600px)')

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = () => setIsDrawerOpen(prevState => !prevState)


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
                }}>
                    <Box component={'main'}>
                        <Outlet/>
                    </Box>
                    <ThemeFooter2/>
                </Container>
        </ThemeProvider>
    )
}
