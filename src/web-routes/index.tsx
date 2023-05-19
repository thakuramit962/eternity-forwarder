import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from "../layout";
import Home from "../pages/home/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import About from "../pages/About";
import Group from "../pages/group";
import TermsAndConditions from "../pages/TermsAndConditions";
import ComingSoonPage from "../ComingSoonPage";
import ThemeAppBar from "../components/theme-app-bar";


export default function WebRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
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
    )
}