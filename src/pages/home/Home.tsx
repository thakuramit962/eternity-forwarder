import React from 'react'
import PageContainer from "../../components/page-container"
import HeroSection from "./HeroSection"
import ServicesSection from "./ServiceSection"
import ShipWithUs from "./ShipWithUs"
import EsteemedClients from "./EsteemedClients"
import AboutSection from "./AboutSection"

import 'swiper/css'


export default function Home() {

    return (
        <PageContainer>
            <HeroSection/>
            <AboutSection/>
            <ServicesSection/>
            <ShipWithUs/>
            {/*<WhyUs/>*/}
            <EsteemedClients/>
            {/*<AboutSection1/>*/}
        </PageContainer>
    )
}