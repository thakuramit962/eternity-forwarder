import React, {useEffect, useState} from 'react'
import {Box, Divider,alpha, IconButton, Typography, useMediaQuery, useTheme} from "@mui/material"
import {
    Circle, KeyboardArrowLeftRounded, KeyboardArrowRightRounded, Star
} from "@mui/icons-material";


import {useParallax} from "react-scroll-parallax";
import truckIllustration from "../../assets/images/truck-illustration.svg";

const Strengths = () => {

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

    const service1 = useParallax<HTMLDivElement>(isMobile ? {translateX: [-15, 0, 'easeInQuad']} : {})
    const service2 = useParallax<HTMLDivElement>(isMobile ? {translateX: [15, 0, 'easeInQuad']} : {})
    const service3 = useParallax<HTMLDivElement>(isMobile ? {translateX: [-15, 0, 'easeInQuad']} : {})
    const service4 = useParallax<HTMLDivElement>(isMobile ? {translateX: [15, 0, 'easeInQuad']} : {})

    return (
        <Box id={'serviceSection'} sx={{
            mt: {xs: 6, sm: 1},
            minHeight: '100vh',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            '& .bodyText': {
                fontSize: theme.typography.pxToRem(15),
            },
            '& .serviceBlockContainer': {
                width: '100%',
                maxWidth: '950px',
                mx: 'auto',
                '& .serviceBlock': {
                    position: 'relative',
                    border: `2px solid ${alpha(theme.palette.primary.main, 0.9)}`,
                    borderRadius: '20px',
                    width: {xs: 'auto', sm: '80%', md: '65%', lg: '60%'},
                    maxWidth: '550px',
                    minHeight: '130px',
                    p: 2,
                    mb: {xs: 3, sm: 4, md: 5},
                    '& img': {
                        position: 'absolute',
                        bottom: '-9px',
                        width: {xs: 0, md: '140px'},
                        '&.right': {
                            right: '-140px',
                            transform: 'scaleX(-1)',
                        },
                        '&.left': {
                            left: '-140px',
                        },
                    },
                    '&:hover': {
                        cursor: 'pointer',
                        border: `2px solid ${alpha(theme.palette.primary.main, 0.9)}`,
                        // '& h6': {
                        //     color: theme.palette.secondary.main,
                        // },

                    },
                    '& h6': {
                        textAlign: 'center',
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: theme.palette.primary.main,
                        mb: 1,
                        transition: 'all 300ms ease-in-out',
                    },
                    '& .serviceDescription': {
                        fontSize: theme.typography.pxToRem(15),
                        textAlign: 'center',
                        // pl: {xs: 0, sm: 1, md: 3,},
                        textIndent: '1rem',
                    },
                },
            },

            '& .missionTechnologyContainer': {
                minHeight: '200px',
                mt: 4, mb: 8,
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                columnGap: {xs: 2, md: 4},
                width: '100%',
                textAlign: 'center',
                '& .missionTechnologyBlock': {
                    display: 'flex',
                    flexFlow: 'column',
                    flex: `1 1 200px`,
                    maxWidth: '500px',
                    borderRadius: '20px',
                    px: 3, py: 4,
                    overflow: ' hidden',
                    backgroundColor: alpha(theme.palette.primary.main, 0.01),
                    boxShadow: `0 2px 25px -7px #83838360`,
                    cursor: 'pointer',
                    transition: 'border 700ms ease-in-out',
                    '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.2),
                        boxShadow: `0 4px 17px -4px #83838380`,
                        '& .blockImage': {
                            backgroundColor: theme.palette.primary.main,
                            '& svg': {
                                color: theme.palette.secondary.contrastText,
                                fontSize: '5rem',
                            },
                        },
                        '& .blockDes': {
                            color: alpha(theme.palette.text.primary, 0.9),
                        },
                    },
                    '& .blockImage': {
                        minHeight: '80px',
                        display: 'grid',
                        placeItems: 'center',
                        width: '100px',
                        height: '100px',
                        borderRadius: '20px',
                        outline: `2px solid ${theme.palette.primary.main}`,
                        outlineOffset: '2px',
                        mx: 'auto',
                        transition: 'all 700ms ease-in-out',
                        mb: 2,
                        '& svg': {
                            color: theme.palette.primary.main,
                            fontSize: '4rem',
                            transition: 'all 700ms ease-in-out',
                        },
                    },
                    '& .blockHead': {
                        fontSize: theme.typography.pxToRem(20),
                        textAlign: 'center',
                        fontWeight: 700,
                        color: theme.palette.secondary.main,
                        mb: 2,
                    },
                    '& .blockDes': {
                        transition: 'all 300ms ease-in-out',
                        color: alpha(theme.palette.text.primary, 0.7),
                        textAlign: 'left',
                        textIndent: '1rem',
                    },
                    '& ul': {
                        transition: 'all 300ms ease-in-out',
                        color: alpha(theme.palette.text.primary, 0.7),
                        textAlign: 'left',
                        margin: 0,
                        pl: 2,
                        listStylePosition: 'outside',
                        '& li': {
                            mb: '4px'
                        },
                    },
                },
            },
        }}>
            <Typography data-aos="fade-up" data-aos-anchor-placement="center-bottom" variant={'h3'} sx={{
                fontSize: 'clamp(1.5rem, 8vw, 3.5rem)',
                lineHeight: '2.5rem',
                fontWeight: 600,
                color: theme.palette.secondary.main,
                // textAlign: 'center',
                '& span': {
                    color: theme.palette.primary.main,
                    '&.why': {
                        fontSize: '18px',
                        fontWeight: 400,
                        color: theme.palette.secondary.light,
                        // textTransform: 'uppercase',
                        letterSpacing: '1px',
                        textDecoration: 'underline',
                        textDecorationColor: theme.palette.primary.main,
                    },
                },
            }}>
                <span className={'why'}>Why</span><br/>
                We are <span>Awesome</span>
            </Typography>
            <Box className={'serviceBlockContainer'}>
                <Box ref={service1.ref} className={'serviceBlock'} sx={{mx: 'auto'}}>
                    <img src={truckIllustration} alt={'truck'} className={'left'}/>
                    <Typography variant={'h6'}>Full Truck Load Shipping</Typography>
                    <Typography className={'bodyText serviceDescription'}>
                        Present in 20+ States, Full truck load shipping enables making trucks available from our
                        active states to anywhere in India ranging from 1 Metric Tonne upto 30 Metric Tonne
                    </Typography>
                </Box>
                <Box ref={service2.ref} className={'serviceBlock'} sx={{mx: 'auto'}}>
                    <img src={truckIllustration} alt={'truck'} className={'right'}/>
                    <Typography variant={'h6'}>Partial Truck Load Shipping</Typography>
                    <Typography className={'bodyText serviceDescription'}>
                        Focusing on commerce and industry and fulfilling there regular PTL requirements on dedicated
                        routes available in 9 states and expanding PTL networks to other locations
                    </Typography>
                </Box>
                <Box ref={service3.ref} className={'serviceBlock'} sx={{mx: 'auto'}}>
                    <img src={truckIllustration} alt={'truck'} className={'left'}/>
                    <Typography variant={'h6'}>Inter & Intra Drop Ship</Typography>
                    <Typography className={'bodyText serviceDescription'}>
                        Available in 9 states across North and West India – also rapidly ramping up capability to be
                        present across India – Pick up from anywhere in these states and delivery to anywhere within
                        48-72 Hours and 96 Hours for long haul deliveries
                    </Typography>
                </Box>
                <Box ref={service4.ref} className={'serviceBlock'} sx={{mx: 'auto'}}>
                    <img src={truckIllustration} alt={'truck'} className={'right'}/>
                    <Typography variant={'h6'}>Warehouse</Typography>
                    <Typography className={'bodyText serviceDescription'}>
                        Best in class warehousing capability to manage in-bounds, out-bounds and storage for all
                        industries. A tech enabled process and highly experienced workforce to manage your
                        fulfilment operations
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Strengths

export function Strengthss() {

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

                <Typography data-aos="fade-up" data-aos-anchor-placement="center-bottom" variant={'h3'} sx={{
                    fontSize: 'clamp(1.5rem, 8vw, 3.5rem)',
                    lineHeight: '2.5rem',
                    fontWeight: 600,
                    color: theme.palette.secondary.main,
                    // textAlign: 'center',
                    '& span': {
                        color: theme.palette.primary.main,
                        '&.why': {
                            fontSize: '18px',
                            fontWeight: 400,
                            color: theme.palette.secondary.light,
                            // textTransform: 'uppercase',
                            letterSpacing: '1px',
                            textDecoration: 'underline',
                            textDecorationColor: theme.palette.primary.main,
                        },
                    },
                }}>
                    <span className={'why'}>Why</span><br/>
                    We are <span>Awesome</span>
                </Typography>

                <Box sx={{
                    position: {xs: 'relative', sm: 'absolute'},
                    // left: {xs: 'auto', sm: '10%'},
                    top: 0,
                    left: 0,
                    display: 'none',
                    '& h3': {
                        fontSize: 'clamp(1.5rem, 8vw, 3.5rem)',
                        fontWeight: 600,
                        color: theme.palette.secondary.main,
                        '& span': {
                            color: theme.palette.primary.main,
                        },
                    },

                }} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    {/*<Typography className={'heading'}>Strengths</Typography>*/}
                    <Typography>Why</Typography>
                    <Typography variant={'h3'}>
                        We are <br/><span>Awesome</span>
                    </Typography>
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
                            width: {xs: '95%', sm: '350px'},
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
                    <Box className={'titleBlock'} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
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

                    <Box className={'desBlock'} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        {strengths.map((strength, index) => (
                            <Box key={index}
                                 className={`carousel_des animate__animated ${isMobile ? 'animate__fadeIn' : 'animate__pulse'}`}
                                 sx={{
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