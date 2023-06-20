import React from 'react'
import {
    alpha,
    Box,
    Button, ButtonBase,
    Toolbar, IconButton,
    InputBase,
    Typography,
    useMediaQuery,
    useScrollTrigger,
    useTheme
} from "@mui/material";
import {ArrowForwardIosRounded, PanToolAltRounded} from "@mui/icons-material"
import {useNavigate} from "react-router-dom"
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectFade} from 'swiper'
import 'swiper/css'

import NewPageContainer from "../../components/new-page-container"
import Hero from "./hero";
import PartnerWithUsSection from "./partner-with-us-section";
import ServiceOption2 from "./service-option-2";
import Strengths from "./strengths";
import Clients from "./clients";
import MobileStrengths from "./mobile-strengths";


export default function Home() {

    const theme = useTheme()
    const navigate = useNavigate()

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <NewPageContainer>
            <Hero/>
            <ServiceOption2/>
            {isMobile ? <MobileStrengths/> : <Strengths/>}
            <PartnerWithUsSection/>
            <Clients/>
        </NewPageContainer>
    )
}