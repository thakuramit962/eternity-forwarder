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
import TrackingPage from "../page/tracking-page";
import ServiceLayout from "../page/services/service-layout";
import LogisticSolutions from "../page/services/logistic-solutions/logistic-solutions";
import WarehouseService from "../page/services/warehouse-service/warehouse-service";
import OtherServices from "../page/services/other-services/other-services";
import BookService from "../page/book-service";
import AboutUs from "../page/about-us";
import TrackingResult from "../page/tracking-page/tracking-result";
import PartnerWithUs from "../page/partner-with-us";
import LastMilePartner from "../page/partner-with-us/last-mile-partner";
import Carrier from "../page/partner-with-us/carrier";
import AgentRequest from "../page/partner-with-us/agent-request";
import PartnerWithUsLayout from "../page/partner-with-us/partner-with-us-layout";
import ContactUs from "../page/contact-us";
import AboutLayout from "../page/about-us/about-layout";
import AboutCompany from "../page/about-us/about-company";
import Career from "../page/about-us/career";
import Services from "../page/services";
import TermsOfUses from '../page/legal/terms-of-uses';
import Disclaimer from '../page/legal/disclaimer';
import PrivacyAndPolicy from '../page/legal/privacy-and-policy';

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
                    {/*<Route path="contact-us" element={<ContactUs/>}/>*/}
                    <Route path="/about-us" element={<AboutLayout/>}>
                        <Route path="" element={<AboutCompany/>}/>
                        <Route path="company" element={<AboutCompany/>}/>
                        <Route path="career" element={<Career/>}/>
                        <Route path="contact" element={<ContactUs/>}/>
                    </Route>
                    <Route path="book-service" element={<BookService/>}/>
                    <Route path="our-services" element={<Services/>}/>
                    <Route path="/services" element={<ServiceLayout/>}>
                        <Route path="logistic-solutions" element={<LogisticSolutions/>}/>
                        <Route path="3pl-warehousing-services" element={<WarehouseService/>}/>
                        <Route path="other-services" element={<OtherServices/>}/>
                    </Route>
                    <Route path="partner-with-us" element={<PartnerWithUs/>}/>
                    <Route path="partner-us" element={<PartnerWithUsLayout/>}>
                        <Route path="last-mile-partner" element={<LastMilePartner/>}/>
                        <Route path="carrier" element={<Carrier/>}/>
                        <Route path="agent-driver" element={<AgentRequest/>}/>
                    </Route>
                    <Route path="track" element={<TrackingPage/>}/>
                    <Route path="track/:trackId" element={<TrackingResult/>}/>
                    <Route path="privacy-policy" element={<PrivacyAndPolicy/>}/>
                    <Route path="terms-of-uses" element={<TermsOfUses/>}/>
                    <Route path="disclaimer" element={<Disclaimer/>}/>
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