import React, {useEffect, useMemo} from 'react'
import {Routes, Route, useLocation, BrowserRouter} from 'react-router-dom'
import Home2 from "../pages/home/Home"
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

import Home from "../page/home/home"
import TrackingPage from "../page/tracking-page/tracking-page";
import ServiceLayout from "../page/services/service-layout";
import NewPageContainer from "../components/new-page-container";
import LogisticSolutions from "../page/services/logistic-solutions/logistic-solutions";
import WarehouseService from "../page/services/warehouse-service/warehouse-service";
import OtherServices from "../page/services/other-services/other-services";
import BookService from "../page/book-service";
import AboutUs from "../page/about-us";

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
                    h1: {fontFamily: "Roboto, sans-serif"},
                    h2: {fontFamily: "Roboto, sans-serif"},
                    h3: {fontFamily: "Roboto, sans-serif"},
                    h4: {fontFamily: "Roboto, sans-serif"},
                    h5: {fontFamily: "Roboto, sans-serif"},
                    h6: {fontFamily: "Roboto, sans-serif"},
                    body1: {fontFamily: "Roboto, sans-serif"},
                    body2: {fontFamily: "Roboto, sans-serif"},
                    button: {
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 500,
                    },
                    fontFamily: "Roboto, sans-serif"
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
                    <Route path="" element={<Home/>}/>
                    <Route path="/services" element={<ServiceLayout/>}>
                        <Route path="logistic-solutions" element={<LogisticSolutions/>}/>
                        <Route path="3pl-warehousing-services" element={<WarehouseService/>}/>
                        <Route path="other-services" element={<OtherServices/>}/>
                    </Route>
                    <Route path="about-us" element={<AboutUs/>}/>
                    <Route path="book-service" element={<BookService/>}/>
                    <Route path="track" element={<TrackingPage/>}/>
                </Route>


                <Route path="/layout-2" element={<Layout2/>}>
                    <Route path="" element={<Home2/>}/>
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