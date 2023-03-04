import React, {useLayoutEffect, useRef, useState} from 'react'
import {alpha, Box, Button, TextField, Typography, useMediaQuery, useTheme} from "@mui/material"
import heroImage from '../assets/images/logistic-1.png'
import PageContainer from "../components/page-container"
import shipWithUs from '../assets/images/ship-with-us.png'
import onTime from '../assets/images/on-time.png'
import {useParallax} from "react-scroll-parallax";
import {InsightsRounded} from "@mui/icons-material";


export default function Home() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

    const outlinedTextSx = {
        fontSize: 'clamp(1.3rem, 10vw, 4rem)',
        letterSpacing: '4px',
        fontWeight: 900,
        textAlign: 'center',
        color: alpha(theme.palette.primary.main, 0.6),
        // color: theme.palette.text.secondary,
        // WebkitTextFillColor: 'transparent',
        // WebkitTextStroke: `1px ${alpha(theme.palette.primary.main, 0.4)}`,
    }


    const scalingY = useParallax<HTMLDivElement>(
        isMobile ? {scale: [1.11, 0.6, 'easeInQuad'], opacity: [1.11, 0.4, 'easeInQuad']} : {})

    // const service1 = useParallax<HTMLDivElement>(isMobile ? {scale: [1.1, 0.9, 'easeInQuad']} : {})
    // const service2 = useParallax<HTMLDivElement>(isMobile ? {scale: [1.1, 0.9, 'easeInQuad']} : {})
    // const service3 = useParallax<HTMLDivElement>(isMobile ? {scale: [1.1, 0.9, 'easeInQuad']} : {})
    // const service4 = useParallax<HTMLDivElement>(isMobile ? {scale: [1.1, 0.9, 'easeInQuad']} : {})

    const service1 = useParallax<HTMLDivElement>(isMobile
        ? {translateX: [-15, 0, 'easeInQuad']}
        : {})
    const service2 = useParallax<HTMLDivElement>(isMobile
        ? {translateX: [15, 0, 'easeInQuad']}
        : {})
    const service3 = useParallax<HTMLDivElement>(isMobile
        ? {translateX: [-15, 0, 'easeInQuad']}
        : {})
    const service4 = useParallax<HTMLDivElement>(isMobile
        ? {translateX: [15, 0, 'easeInQuad']}
        : {})

    return (
        <PageContainer>
            <Box ref={scalingY.ref} sx={{
                minHeight: {xs: 'calc(100vh - 90px)', sm: 'min(calc(100vh - 120px), 600px)'},
                display: 'flex',
                flexFlow: {xs: 'column', sm: 'row'},
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
            }}>
                <Box sx={{
                    flex: 1,
                    background: theme.palette.background.default,
                    p: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        maxWidth: '380px',
                        display: 'flex',
                        flexFlow: 'column',
                        justifyContent: 'center',
                        '& h3': {
                            fontSize: `clamp(1.2rem, 8vw, 2.4rem)`,
                            maxWidth: {xs: '95%', sm: '90%'},
                        },
                    }}>
                        <Typography variant={'h3'}>Real time<br/>tracking of order.</Typography>
                        <Typography variant={'body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </Typography>

                        <Box sx={{
                            mt: 6,
                            display: 'flex',
                            alignItems: 'center',
                            position: 'relative',
                            maxWidth: {xs: '98%', sm: '80%'},
                            '& .MuiButton-root': {
                                position: 'absolute',
                                right: '4px',
                                borderRadius: '8px',
                                width: '80px',
                                '&:hover': {
                                    background: theme.palette.primary.main
                                },
                            },
                        }}>
                            <TextField size={'small'} placeholder={'LR number'}
                                       sx={{
                                           width: '100%',
                                           '& .MuiOutlinedInput-notchedOutline': {
                                               borderRadius: '12px',
                                               borderColor: theme.palette.primary.main,
                                               borderWidth: '2px'
                                           },
                                       }}/>
                            <Button variant={'contained'} color={'secondary'}>Track</Button>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    order: {xs: -1, sm: 2},
                    flex: 1,
                    display: 'grid',
                    placeItems: {xs: 'end', sm: 'center'},
                    '& img': {
                        width: 'clamp(150px, 90%, 500px)',
                        mx: 'auto',
                    },
                }}>
                    <img src={heroImage} className={'animate__fadeInUp'} alt={'demo-image'}/>
                </Box>
            </Box>

            <Box sx={{
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
                        border: `2px solid ${alpha(theme.palette.primary.main, 0.9)}`,
                        borderRadius: '20px',
                        width: {xs: 'auto', sm: '80%', md: '65%', lg: '60%'},
                        maxWidth: '550px',
                        minHeight: '130px',
                        p: 2,
                        mb: {xs: 3, sm: 4, md: 5},
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
                <Typography variant={'h2'} sx={outlinedTextSx}>About Us</Typography>
                <Typography variant={'body1'} className={'bodyText'} sx={{
                    mt: 3, mb: 3,
                    textAlign: 'center',
                    width: {xs: '100%', sm: '90%', md: '80%'},
                }}>
                    Founded in 2012, with a prime moto of digitising Logistics in the country, today, Eternity has
                    placed its name prominently in the Indian Logistics Market. Eternity efficiently working in the PTL
                    and FTL space with its core focus to connect every pin code in India by 2025. Operational in 20+
                    States PAN India, Eternity has been adding value to the Logistics Industry in many ways
                </Typography>


                <Box className={'missionTechnologyContainer'}>
                    <Box className={'missionTechnologyBlock'}>
                        <Box className={'blockImage'}><InsightsRounded/></Box>
                        <Typography className={'blockHead'}>Volume</Typography>
                        <ul className={'bodyText'}>
                            <li>300 Full Truck Load Transactions Per day</li>
                            <li>5500 Partial Truck load shipments per day</li>
                            <li>3200 Drop Ship transactions per day</li>
                        </ul>
                    </Box>
                    <Box className={'missionTechnologyBlock'}>
                        <Box className={'blockImage'}><InsightsRounded/></Box>
                        <Typography className={'blockHead'}>Mission</Typography>
                        <Typography className={'blockDes bodyText'}>
                            We aim to become India’s fastest supply chain & logistics company and aim to reach every PIN
                            Code in India by 2025. Building our infrastructure we are highly focused on operational
                            efficiency – to deliver the right shipment at the right time every time.
                        </Typography>
                    </Box>
                    <Box className={'missionTechnologyBlock'}>
                        <Box className={'blockImage'}><InsightsRounded/></Box>
                        <Typography className={'blockHead'}>Technology</Typography>
                        <Typography className={'blockDes bodyText'}>
                            Being a tech based Logistics Company – Eternity aims to be the quickest along with providing
                            real time visibility of the current delivery status, e-POD, committed TAT through its state
                            of the art in-house developed technology.
                        </Typography>
                    </Box>
                </Box>


                <Typography variant={'h2'} sx={{...outlinedTextSx, mb: 3,}}>Solutions</Typography>

                <Box className={'serviceBlockContainer'}>
                    <Box ref={service1.ref} className={'serviceBlock'} sx={{mx: 'auto'}}>
                        <Typography variant={'h6'}>Full Truck Load Shipping</Typography>
                        <Typography className={'bodyText serviceDescription'}>
                            Present in 20+ States, Full truck load shipping enables making trucks available from our
                            active states to anywhere in India ranging from 1 Metric Tonne upto 30 Metric Tonne
                        </Typography>
                    </Box>
                    <Box ref={service2.ref} className={'serviceBlock'} sx={{mx: 'auto'}}>
                        <Typography variant={'h6'}>Partial Truck Load Shipping</Typography>
                        <Typography className={'bodyText serviceDescription'}>
                            Focusing on commerce and industry and fulfilling there regular PTL requirements on dedicated
                            routes available in 9 states and expanding PTL networks to other locations
                        </Typography>
                    </Box>
                    <Box ref={service3.ref} className={'serviceBlock'} sx={{mx: 'auto'}}>
                        <Typography variant={'h6'}>Inter & Intra Drop Ship</Typography>
                        <Typography className={'bodyText serviceDescription'}>
                            Available in 9 states across North and West India – also rapidly ramping up capability to be
                            present across India – Pick up from anywhere in these states and delivery to anywhere within
                            48-72 Hours and 96 Hours for long haul deliveries
                        </Typography>
                    </Box>
                    <Box ref={service4.ref} className={'serviceBlock'} sx={{mx: 'auto'}}>
                        <Typography variant={'h6'}>Warehouse</Typography>
                        <Typography className={'bodyText serviceDescription'}>
                            Best in class warehousing capability to manage in-bounds, out-bounds and storage for all
                            industries. A tech enabled process and highly experienced workforce to manage your
                            fulfilment operations
                        </Typography>
                    </Box>
                </Box>


            </Box>

            <Box sx={{
                mt: {xs: 6, sm: 1},
                minHeight: 'min(80vh, 550px)',
            }}>
                <Typography variant={'h2'} sx={outlinedTextSx}>Ship with Us</Typography>

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap-reverse',
                    alignItems: 'center',
                    gap: 2,
                    mt: {xs: 3, sm: 5, md: 7},
                    '& img': {
                        maxHeight: {xs: '150px', sm: '200px', md: '300px'},
                        filter: 'opacity(0.9)',
                        transform: 'scaleX(-1)',
                        mx: 'auto'
                    },
                }}>

                    <Box flex={1} sx={{
                        alignSelf: 'flex-start',
                        '& .hook': {
                            mb: 1,
                            borderRadius: '8px',
                            px: 2,
                            ml: 2,
                            cursor: 'pointer',
                            // backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                            // borderLeft: `3px solid ${theme.palette.secondary.main}`,
                            backgroundColor: alpha(theme.palette.primary.main, 0.05),
                            borderLeft: `3px solid ${theme.palette.primary.main}`,
                            '&:hover': {

                                '& .hookTitle': {
                                    color: theme.palette.primary.main,
                                },
                            },
                            '& .hookTitle': {
                                fontSize: '1rem',
                                fontFamily: theme.typography.h3.fontFamily,
                            },
                            '& .hookDes': {
                                fontSize: theme.typography.pxToRem(14)

                            },
                        },
                    }}>
                        <Typography variant={'h3'} sx={{
                            fontSize: 'clamp(1rem, 8vw, 1.5rem)',
                            px: {xs: 3, sm: 0},
                            textAlign: {xs: 'center', sm: 'left'},
                        }}>Managed Delivery in All Over India</Typography>
                        <Typography variant={'body1'} sx={{
                            mt: 2, mb: 2,
                            textIndent: '1rem',
                            maxWidth: '550px',
                            fontSize: theme.typography.pxToRem(15)
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </Typography>

                        <Box className={'hook'}>
                            <Typography className={'hookTitle'}>Reach</Typography>
                            <Typography className={'hookDes'}>
                                7000+ PIN CODES | 18 Branches across 20+ States
                            </Typography>
                        </Box>
                        <Box className={'hook'}>
                            <Typography className={'hookTitle'}>App Based Location Tracking</Typography>
                            <Typography className={'hookDes'}>
                                In-House developed Tech, enabling Application based Location tracking on order to order
                                basis
                            </Typography>
                        </Box>
                        <Box className={'hook'}>
                            <Typography className={'hookTitle'}>Business</Typography>
                            <Typography className={'hookDes'}>
                                INR 1840+ CRORES | SPREAD ACROSS ALL BUSINESSES
                            </Typography>
                        </Box>

                        {/*<Button variant={'outlined'} sx={{*/}
                        {/*    borderRadius: '12px',*/}
                        {/*    borderWidth: '2px',*/}
                        {/*    textTransform: 'none',*/}
                        {/*    minWidth: '140px',*/}
                        {/*    height: 40,*/}
                        {/*    fontSize: '1rem',*/}
                        {/*    fontWeight: 600,*/}
                        {/*    letterSpacing: '0.5px',*/}
                        {/*    display: 'flex',*/}
                        {/*    position: 'relative',*/}
                        {/*    pr: 3,*/}
                        {/*    m: '2rem 1rem',*/}
                        {/*    mx: {xs: 'auto', sm: '1rem'},*/}
                        {/*    '&:hover': {*/}
                        {/*        borderWidth: '2px',*/}
                        {/*        '& svg': {*/}
                        {/*            animation: 'none',*/}
                        {/*            opacity: 1,*/}
                        {/*            right: '0.3rem',*/}
                        {/*        },*/}
                        {/*    },*/}
                        {/*    '& svg': {*/}
                        {/*        opacity: 1,*/}
                        {/*        right: '0.3rem',*/}
                        {/*        position: 'absolute',*/}
                        {/*        animation: 'flowRight 800ms linear infinite',*/}
                        {/*    },*/}
                        {/*    ['@keyframes flowRight']: {*/}
                        {/*        '0%': {*/}
                        {/*            opacity: 0,*/}
                        {/*            right: '1.2rem',*/}
                        {/*        },*/}
                        {/*        '100%': {*/}
                        {/*            opacity: 1,*/}
                        {/*            right: '0.3rem',*/}
                        {/*        }*/}
                        {/*    }*/}
                        {/*}}>*/}
                        {/*    Ship Now*/}
                        {/*    <KeyboardDoubleArrowRightRounded/>*/}
                        {/*</Button>*/}


                    </Box>

                    <img src={shipWithUs} alt={'ship with us'}/>

                </Box>

            </Box>


            <Box sx={{
                mt: {xs: 6, sm: 1},
                minHeight: 'min(90vh, 550px)',
                // background: `url(${onTime})`,
                // backgroundAttachment: 'fixed',
                // backgroundSize: 'contain'
            }}>x
                <Typography variant={'h2'} sx={outlinedTextSx}>Why Us</Typography>

                <Box>
                    ssss
                </Box>
            </Box>


        </PageContainer>

    )
}