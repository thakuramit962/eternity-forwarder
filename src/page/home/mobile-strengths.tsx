import React, {useEffect, useState} from 'react'
import {Box, Button, ButtonGroup, Divider, IconButton, Typography, useMediaQuery, useTheme} from "@mui/material"
import lastMile from '../../assets/images/home/ship-with-us.png'
import carrierPartner from '../../assets/images/home/for-business.png'
import {
    ArrowDownwardRounded,
    ArrowUpwardRounded,
    Circle,
    KeyboardArrowDownRounded, KeyboardArrowLeftRounded, KeyboardArrowRightRounded,
    KeyboardArrowUpRounded,
    Star
} from "@mui/icons-material";


export default function MobileStrengths() {

    const theme = useTheme()

    const strengths = [
        {
            name: 'Real-Time Shipment Tracking',
            des: 'Stay informed and in control with our advanced real-time tracking system, allowing you to monitor your shipments every step of the way.'
        },
        {
            name: 'Extensive Rural Reach',
            des: 'Reach even the most remote areas with our comprehensive network that extends to rural locations, ensuring your deliveries reach customers wherever they are.'
        },
        {
            name: 'Streamlined Cash Management',
            des: 'Simplify your payment processes with our integrated cash management solution, allowing for seamless transactions and improved financial efficiency.'
        },
        {
            name: 'Optimized Operations with Strategically Located Hubs',
            des: 'Maximize efficiency and reduce transit times with our strategically located hubs, strategically positioned to optimize operations and expedite deliveries.'
        },
        {
            name: 'Unmatched Operational Transparency',
            des: 'Gain unparalleled visibility into your logistics operations with our commitment to operational transparency, ensuring you have clear insights into the status of your shipments.'
        },
        {
            name: 'Instant Email & SMS Notifications',
            des: 'Stay informed every step of the way with our instant email and SMS notifications, keeping you updated on shipment milestones and ensuring you and your customers are always in the loop.'
        },
        {
            name: 'Seamless Technology (API) Integration',
            des: 'Seamlessly integrate our logistics services into your existing systems with our technology (API) integration, allowing for smooth data exchange and efficient workflow management.'
        },
        {
            name: 'Multiple Convenient Pickup Locations',
            des: 'Enjoy the flexibility of multiple pickup locations, allowing you to choose the most convenient option for your shipments and ensuring swift and hassle-free collection.'
        },
        {
            name: '24/7 Dedicated Customer Support',
            des: 'Our dedicated customer support team is available round the clock, providing you with prompt assistance and expert guidance whenever you need it.'
        },
        {
            name: 'Convenient On-Door Delivery',
            des: 'Delight your customers with our on-door delivery service, ensuring their orders are delivered directly to their doorstep, saving time and enhancing convenience.'
        }
    ]
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))


    const [activeCarousel, setActiveCarousel] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)

    const nextCarousel = () => {
        activeCarousel >= strengths.length - 1
            ? setActiveCarousel(0)
            : setActiveCarousel(activeCarousel + 1)
    }
    const prevCarousel = () => {
        activeCarousel == 0
            ? setActiveCarousel(strengths.length - 1)
            : setActiveCarousel(activeCarousel - 1)
    }

    const stopAutoCounter = () => setAutoPlay(false)
    const resumeAutoCounter = () => setAutoPlay(true)


    useEffect(() => {
        if (autoPlay) setTimeout(() => nextCarousel(), 2000)
    }, [activeCarousel, autoPlay])


    return (
        <Box component={'section'} sx={{
            minHeight: 'min(80vh, 500px)',
            overflow: 'hidden',
            mt: 10,
        }}>
            <Box sx={{
                maxWidth: '1100px',
                mx: 'auto',
                position: 'relative',
                '& .des': {
                    maxWidth: '767px',
                    mx: 'auto',
                    textAlign: 'center',
                },
            }}>
                <Box sx={{
                    position: {xs: 'relative', sm: 'absolute'},
                    left: {xs: 'auto', sm: '10%'},
                }}>
                    <Typography className={'heading'}>Strengths</Typography>
                </Box>
                <Box sx={{
                    my: 8,
                    minHeight: {xs: 'auto', sm: 'min(90vh, 600px)'},
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    px: {xs: 2, sm: 0},
                    '& .titleBlock': {
                        flex: 1,
                        maxWidth: '400px',
                        display: {xs: 'none', sm: 'flex'},
                        justifyContent: 'flex-end',
                        alignItems: 'stretch',
                        '& .carouselBlock': {
                            marginRight: '-44px',
                            position: 'relative',
                            height: '300px',
                            display: 'flex',
                            flexFlow: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',

                        },
                        '& .carousel_item': {
                            position: 'absolute',
                            width: '100%',
                            alignItems: 'center',
                            gap: 1,
                            maxHeight: 'max-content',
                            transformOrigin: 'right',
                            transition: 'all 1000ms ease-in-out',
                            zIndex: 1,
                            display: 'none',
                            visibility: 'hidden',
                            opacity: 0,
                            '& p': {
                                flex: 1,
                                fontSize: '14px',
                                // width: '100px',
                                textAlign: 'right',
                                color: theme.palette.text.secondary,
                                fontWeight: 600,
                            },
                            '& .iconBox': {
                                height: '60px',
                                width: '60px',
                                borderRadius: '12px',
                                color: theme.palette.text.secondary,
                                border: `3px solid`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '& svg': {
                                    height: '3rem',
                                    width: '3rem',
                                },
                            },
                            '& hr': {
                                width: '100px',
                                borderWidth: '1px'
                            },
                            '& .circle': {
                                outline: '2px solid #83838370',
                                outlineOffset: '2px',
                                borderRadius: '50%',
                                color: theme.palette.secondary.light,
                            },
                            '&.prev': {
                                display: 'flex',
                                transform: 'translateY(200%) scale(0.8)',
                                left: 0,
                                visibility: 'visible',
                                opacity: 1,
                            },
                            '&.active': {
                                pr: '32px',
                                display: 'flex',
                                transform: 'translateY(0)',
                                left: '-30px',
                                opacity: 1,
                                visibility: 'visible',
                                '& p': {
                                    color: theme.palette.text.primary,
                                },
                                '& .iconBox': {
                                    borderRadius: '16px',
                                    borderColor: theme.palette.text.primary,
                                    color: theme.palette.primary.main,
                                },
                                '& hr': {
                                    borderColor: theme.palette.primary.main,
                                },
                                '& .circle': {
                                    outline: `2px solid ${theme.palette.primary.main}`,
                                    color: theme.palette.secondary.dark,
                                },
                            },
                            '&.next': {
                                display: 'flex',
                                transform: 'translateY(-200%) scale(0.8)',
                                left: 0,
                                visibility: 'visible',
                                opacity: 1,
                            },
                        },
                    },

                    '& .desBlock': {
                        flex: 1,
                        borderRadius: {xs: '24px', sm: '50%'},
                        height: {xs: 'auto', sm: '550px'},
                        maxHeight: '550px',
                        maxWidth: '550px',
                        outline: '2px solid',
                        // outlineOffset: {xs: '-16px', sm: 0},
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: {xs: 1, sm: 0},
                        '& .carousel_des': {
                            minHeight: '350px',
                            height: {xs: '95%', sm: '350px'},
                            width:  {xs: '95%', sm: '350px'},
                            p: 2,
                            textAlign: 'center',
                            fontSize: '14px',
                            borderRadius: {xs: '24px', sm: '50%'},
                            position: 'relative',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '-20px 20px 50px rgba(0, 0, 0, 0.3)',
                            zIndex: 1,
                            transition: 'all 1000ms ease-in-out',
                            '& p': {
                                fontSize: '14px',
                            },
                        },
                        ['@keyframes zoomIn']: {
                            '0%': {
                                opacity: 0,
                                transform: 'scale(0.995) rotate(-12deg)',
                            },
                            '50%': {
                                opacity: 0.5,
                                transform: 'scale(0.985) rotate(-6deg)',
                            },
                            '100%': {
                                opacity: 1,
                                transform: 'scale(1) rotate(0deg)',
                            },
                        },
                    },
                }}>
                    <Box className={'titleBlock'}>
                        <Box className={'carouselBlock'}>
                            {strengths.map((strength, index) => (
                                <Box key={index}
                                     className={
                                         activeCarousel == index
                                             ? 'active carousel_item'
                                             : activeCarousel == index + 1
                                             ? 'carousel_item next'
                                             : activeCarousel == index - 1
                                                 ? 'carousel_item prev'
                                                 : activeCarousel >= strengths.length - 1 && index == 0
                                                     ? 'carousel_item prev'
                                                     : 'carousel_item'
                                     }>
                                    <Typography>{strength.name}</Typography>
                                    <Box className={'iconBox'}><Star/></Box>
                                    <Divider/>
                                    <Circle className={'circle'}/>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    <Box className={'desBlock'}>
                        {strengths.map((strength, index) => (
                            <Box key={index} className={`carousel_des animate__animated ${isMobile ? 'animate__fadeIn' : 'animate__pulse'}`} sx={{
                                display: activeCarousel == index ? 'flex' : 'none',
                            }}>
                                <Typography className={'animate__animated animate__fadeInUp'}>
                                    {strength.des}
                                </Typography>

                                <Box onMouseLeave={resumeAutoCounter} onMouseEnter={stopAutoCounter} sx={{
                                    position: 'absolute',
                                    bottom: '1rem',
                                    width: '100%',
                                    background: 'transparent',
                                    borderRadius: '12px',
                                }}>
                                    <IconButton onClick={prevCarousel}><KeyboardArrowLeftRounded/></IconButton>
                                    <IconButton onClick={nextCarousel}><KeyboardArrowRightRounded/></IconButton>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}