import {alpha, Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useParallax} from "react-scroll-parallax";
import truckIllustration from "../../assets/images/truck-illustration.svg";
import React, {useEffect, useState} from "react";
import {Diversity2Rounded} from "@mui/icons-material";


const strengths = [
    {
        name: 'Real-Time Shipment Tracking',
        title: 'Real-Time Tracking',
        des: 'Stay informed and in control with our advanced real-time tracking system, allowing you to monitor your shipments every step of the way.'
    },
    {
        name: 'Extensive Rural Reach',
        title: 'Rural Reach',
        des: 'Reach even the most remote areas with our comprehensive network that extends to rural locations, ensuring your deliveries reach customers wherever they are.'
    },
    {
        name: 'Streamlined Cash Management',
        title: 'Cash Management',
        des: 'Simplify your payment processes with our integrated cash management solution, allowing for seamless transactions and improved financial efficiency.'
    },
    {
        name: 'Optimized Operations with Strategically Located Hubs',
        title: 'Optimized Hub Operations',
        des: 'Maximize efficiency and reduce transit times with our strategically located hubs, strategically positioned to optimize operations and expedite deliveries.'
    },
    {
        name: 'Unmatched Operational Transparency',
        title: 'Operational Transparency',
        des: 'Gain unparalleled visibility into your logistics operations with our commitment to operational transparency, ensuring you have clear insights into the status of your shipments.'
    },
    {
        name: 'Instant Email & SMS Notifications',
        title: 'Live Notifications',
        des: 'Stay informed every step of the way with our instant email and SMS notifications, keeping you updated on shipment milestones and ensuring you and your customers are always in the loop.'
    },
    {
        name: 'Seamless Technology (API) Integration',
        title: 'Technology Integration',
        des: 'Seamlessly integrate our logistics services into your existing systems with our technology (API) integration, allowing for smooth data exchange and efficient workflow management.'
    },
    {
        name: 'Multiple Convenient Pickup Locations',
        title: 'Multiple Pickup Locations',
        des: 'Enjoy the flexibility of multiple pickup locations, allowing you to choose the most convenient option for your shipments and ensuring swift and hassle-free collection.'
    },
    {
        name: '24/7 Dedicated Customer Support',
        title: '24/7 Support',
        des: 'Our dedicated customer support team is available round the clock, providing you with prompt assistance and expert guidance whenever you need it.'
    },
    {
        name: 'Convenient On-Door Delivery',
        title: 'On-Door Delivery',
        des: 'Delight your customers with our on-door delivery service, ensuring their orders are delivered directly to their doorstep, saving time and enhancing convenience.'
    }
]


const StrengthSection2 = () => {

    const theme = useTheme()

    const [activeCarousel, setActiveCarousel] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const nextCarousel = () => {
        activeCarousel >= strengths.length - 1
            ? setActiveCarousel(0)
            : setActiveCarousel(activeCarousel + 1)
    }

    const showDes = () => setIsHovered(true)
    const hideDes = () => setIsHovered(false)

    useEffect(() => {
        // if (!isHovered)
            setTimeout(() => nextCarousel(), 2000)
    }, [activeCarousel, isHovered])


    return (
        <Box component={'section'} id={'serviceSection'} sx={{
            mt: 6,
            minHeight: '100vh',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
            background: theme.palette.text.primary,
            '& .bodyText': {
                fontSize: theme.typography.pxToRem(15),
            },
            '& .heading': {
                mt: 4,
                color: theme.palette.secondary.contrastText,
                '& span': {
                    color: theme.palette.primary.main,
                }
            },
        }}>

            {/*<Typography className={'heading'} data-aos="fade-up" data-aos-anchor-placement="center-bottom">*/}
            {/*    Why We Are <span>Awesome</span>*/}
            {/*</Typography>*/}


            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // py: 12,
            }}>
                <Box sx={{
                    mx: 'auto',
                    width: '95%',
                    maxWidth: '1100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 12,
                    // background: '#f16334',
                }}>
                    <Box data-aos="fade-up" data-aos-anchor-placement="center-bottom" sx={{
                        position: 'relative',
                        display: 'flex',
                        flexFlow: 'column',
                        justifyContent: 'center',
                        // justifyContent: 'flex-start',
                        alignItems: 'center',
                        borderRadius: '50%',
                        minHeight: '400px',
                        minWidth: '400px',
                        background: theme.palette.text.primary,
                        backdropFilter: 'blur(12px)',
                        outline: `2px solid ${theme.palette.primary.main}`,
                        zIndex: 0,
                        transition: 'all 300ms ease-in-out',
                        '& .strengthTitle': {
                            mt: '25%',
                            width: '300px',
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            color: theme.palette.primary.main,
                            borderBottom: '2px solid'
                        },
                        '& .strengthDes': {
                            mt: 2,
                            width: '300px',
                            fontSize: '15px',
                            fontWeight: 400,
                            color: theme.palette.secondary.contrastText,
                            textIndent: '1.5rem',
                            textAlign: 'justify'
                        },
                        '& .strength': {
                            cursor: 'pointer',
                            userSelect: 'none',
                            position: 'absolute',
                            width: '244px',
                            borderRadius: '20px',
                            boxShadow: 0,
                            background: alpha(theme.palette.primary.main, 0),
                            p: 1,
                            height: '45px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 600,
                            fontSize: '17px',
                            textAlign: 'center',
                            outline: `2px solid ${alpha(theme.palette.secondary.contrastText, 0.2)}`,
                            color: theme.palette.secondary.contrastText,
                            transition: 'all 300ms ease-in-out',
                            '&.active': {
                                // boxShadow: `0 0 17px ${theme.palette.primary.main}`,
                                // background: theme.palette.primary.main,
                                // outline: `0px solid ${alpha(theme.palette.secondary.contrastText, 0.2)}`,
                                outline: `2px solid ${alpha(theme.palette.primary.main, 1)}`,
                                color: theme.palette.secondary.contrastText,
                                '&:after': {
                                    width: '60px',
                                    height: '2px',
                                    background: theme.palette.primary.main,
                                },
                            },
                            '&:after': {
                                content: '""',
                                width: '60px',
                                height: '2px',
                                // width: '0px',
                                // height: '0px',
                                background: alpha(theme.palette.secondary.contrastText, 0.2),
                                display: 'inline-flex',
                                position: 'absolute',
                                left: '100%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: -1,
                                transition: 'all 300ms ease-in-out',
                            },
                            '&.left': {
                                '&:after': {
                                    left: '-60px',
                                },
                            },

                            '&:nth-of-type(1)': {
                                left: 'calc(100% - 31px)',
                                top: '0%',
                            },
                            '&:nth-of-type(2)': {
                                left: 'calc(100% + 40px)',
                                top: '20%',
                            },
                            '&:nth-of-type(3)': {
                                left: 'calc(100% + 60px)',
                                top: '40%',
                            },
                            '&:nth-of-type(4)': {
                                left: 'calc(100% + 47px)',
                                top: '60%',
                            },
                            '&:nth-of-type(5)': {
                                left: 'calc(100% - 6px)',
                                top: '80%',
                            },
                            '&:nth-of-type(6)': {
                                left: '-253px',
                                top: '80%',
                            },
                            '&:nth-of-type(7)': {
                                left: '-308px',
                                top: '60%',
                            },
                            '&:nth-of-type(8)': {
                                left: '-320px',
                                top: '40%',
                            },
                            '&:nth-of-type(9)': {
                                left: '-300px',
                                top: '20%',
                            },
                            '&:nth-of-type(10)': {
                                left: '-228px',
                                top: '0%',
                            },
                        },
                    }}>

                        {strengths.map((strength, index) => (
                            <>
                                <Typography variant={'h4'}
                                            className={'strengthTitle animate__animated animate__fadeInUp'} sx={{
                                    display: (activeCarousel == index && isHovered) ? 'block' : 'none',
                                }}>
                                    {strength.name}
                                </Typography>
                                <Typography variant={'body2'}
                                            className={'strengthDes animate__animated animate__fadeInUp'} sx={{
                                    display: (activeCarousel == index && isHovered) ? 'block' : 'none',
                                }}>
                                    {strength.des}
                                </Typography>
                            </>
                        ))}

                        <Typography variant={'h2'}
                                    data-aos="zoom-in" data-aos-anchor-placement="center-bottom"
                                    sx={{
                                        // display: isHovered ? 'none' : 'block',
                                        textAlign: 'center',
                                        fontWeight: 600,
                                        color: theme.palette.background.default,
                                        '& span': {
                                            color: theme.palette.primary.main,
                                        },
                                    }}>
                            Why<br/>We Are<br/><span>Awesome</span>
                        </Typography>


                        {strengths.map((strength, index) => (
                            <Box
                                // onMouseOver={showDes}
                                // onMouseEnter={showDes} onMouseLeave={hideDes}
                                // onClick={() => setActiveCarousel(index)}
                                className={
                                    activeCarousel == index ?
                                        index < 5 ? 'active strength left' : 'strength active'
                                        : index < 5 ? 'strength left' : 'strength'
                                }>
                                {strength.title}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

const StrengthSection = () => {

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
    const notMobile = useMediaQuery(theme.breakpoints.up('sm'))

    const strength1 = useParallax<HTMLDivElement>(notMobile ? {translateX: [-15, 0, 'easeInQuad']} : {})
    const strength2 = useParallax<HTMLDivElement>(notMobile ? {translateX: [15, 0, 'easeInQuad']} : {})
    const strength3 = useParallax<HTMLDivElement>(notMobile ? {translateX: [-15, 0, 'easeInQuad']} : {})
    const strength4 = useParallax<HTMLDivElement>(notMobile ? {translateX: [15, 0, 'easeInQuad']} : {})
    const strength5 = useParallax<HTMLDivElement>(notMobile ? {translateX: [-15, 0, 'easeInQuad']} : {})
    const strength6 = useParallax<HTMLDivElement>(notMobile ? {translateX: [15, 0, 'easeInQuad']} : {})
    const strength7 = useParallax<HTMLDivElement>(notMobile ? {translateX: [-15, 0, 'easeInQuad']} : {})
    const strength8 = useParallax<HTMLDivElement>(notMobile ? {translateX: [15, 0, 'easeInQuad']} : {})
    const strength9 = useParallax<HTMLDivElement>(notMobile ? {translateX: [-15, 0, 'easeInQuad']} : {})
    const strength10 = useParallax<HTMLDivElement>(notMobile ? {translateX: [15, 0, 'easeInQuad']} : {})

    return (
        <Box component={'section'} id={'serviceSection'} sx={{
            mt: 6,
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
                    border: `2px solid ${alpha(theme.palette.secondary.main, 0.9)}`,
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
                        '& h6': {
                            fontSize: '1.25rem',
                        },

                    },
                    '& h6': {
                        textAlign: 'center',
                        fontSize: '1.2rem',
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

            <Typography className={'heading'} data-aos="fade-up" data-aos-anchor-placement="center-bottom" sx={{
                color: theme.palette.secondary.main,
                '& span': {
                    color: theme.palette.primary.main,
                }
            }}>
                Why We Are <span>Awesome</span>
            </Typography>

            <Box className={'serviceBlockContainer'}>
                {strengths.map((strength, index) => (
                    <Box key={index}
                         ref={index == 0 ? strength1.ref :
                             index == 1 ? strength2.ref :
                                 index == 2 ? strength3.ref :
                                     index == 3 ? strength4.ref :
                                         index == 4 ? strength5.ref :
                                             index == 5 ? strength6.ref :
                                                 index == 6 ? strength7.ref :
                                                     index == 7 ? strength8.ref :
                                                         index == 8 ? strength9.ref : strength10.ref
                         }
                         className={'serviceBlock'} sx={{mx: 'auto'}}>
                        <img src={truckIllustration} alt={'truck'} className={index % 2 == 0 ? 'left' : 'right'}/>
                        <Typography variant={'h6'}>{strength.name}</Typography>
                        <Typography className={'bodyText serviceDescription'}>
                            {strength.des}
                        </Typography>
                    </Box>
                ))}


            </Box>
        </Box>
    )
}

export default StrengthSection2