import React, {useEffect} from 'react'
import PageContainer from "../../components/page-container"
import HeroSection from "./HeroSection"
import ServicesSection from "./ServiceSection"
import ShipWithUs from "./ShipWithUs"
import EsteemedClients from "./EsteemedClients"
import AboutSection from "./AboutSection"
import 'swiper/css'
import 'aos/dist/aos.css';
import Aos from "aos";

export default function Home() {

    useEffect(() => {
        Aos.init()
    }, [])

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