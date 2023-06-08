import React, {useEffect, useMemo} from 'react'
import {Routes, Route, useLocation, BrowserRouter} from 'react-router-dom'
import Home from "../pages/home/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import About from "../pages/About";
import Group from "../pages/group";
import TermsAndConditions from "../pages/TermsAndConditions";
import ComingSoonPage from "../ComingSoonPage";
import ThemeAppBar from "../components/theme-app-bar";
import Layout from "../layout/layout";
import TestPage from "../pages/text-page";
import {createTheme, ThemeProvider} from "@mui/material";
import Layout2 from "../layout2";


export default function WebRoutes() {

    const location = useLocation()

    const theme = useMemo(() =>
            createTheme({
                palette: {
                    primary: {
                        main: '#FBB810',
                    },
                    secondary: {
                        main: '#2d2d2d',
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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])


    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="" element={<TestPage/>}/>
                </Route>


                <Route path="/layout-2" element={<Layout2/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="group" element={<Group/>}/>
                    <Route path="support" element={<h2>Support</h2>}/>
                    <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="terms-and-conditions" element={<TermsAndConditions/>}/>

                    <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="terms-and-conditions" element={<TermsAndConditions/>}/>
                </Route>


                <Route path="/coming-soon" element={<><ThemeAppBar/><ComingSoonPage/></>}/>

                <Route path="*" element={<h1>No page found</h1>}/>
            </Routes>
        </ThemeProvider>
    )
}