import React, {useMemo} from 'react'
import './App.css'
import 'animate.css'
import {BrowserRouter} from "react-router-dom"
import WebRoutes from "./web-routes"
import {ParallaxProvider} from "react-scroll-parallax";
import {createTheme, ThemeProvider} from "@mui/material";

function App() {

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

    return (
        <ParallaxProvider>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <WebRoutes/>
                </ThemeProvider>
            </BrowserRouter>
        </ParallaxProvider>
    )
}

export default App
