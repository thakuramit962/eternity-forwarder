import React from 'react'
import {alpha, Avatar, Box, lighten, Typography, useMediaQuery, useTheme} from "@mui/material"
import PageContainer from "../components/page-container"
import onTime from '../assets/images/on-time-text.png'
import {InsightsRounded, SchoolRounded} from "@mui/icons-material";


import logo1 from '../assets/images/clients/ajio.png'
import logo2 from '../assets/images/clients/bharat.png'
import logo3 from '../assets/images/clients/nurture.png'
import logo4 from '../assets/images/clients/upl.png'
import logo5 from '../assets/images/clients/orpat.png'
import logo6 from '../assets/images/clients/zeera.png'

const clients = [logo1, logo2, logo3, logo4, logo5, logo6,]

export default function About() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

    const outlinedTextSx = {
        fontSize: 'clamp(1.3rem, 10vw, 4rem)',
        letterSpacing: '4px',
        fontWeight: 900,
        textAlign: 'center',
        color: alpha(theme.palette.primary.main, 0.6),
    }

    return (
        <PageContainer>

            <Box sx={{
                minHeight: {xs: 'min(90vh, 600px)', sm: 'min(70vh, 500px)'},
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: {xs: 'space-evenly', sm: 'center'},
            }}>
                <img src={onTime} style={{maxHeight: '180px', maxWidth: '96%',}}/>

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
            </Box>


            <Box sx={{
                mt: {xs: 6, sm: 1},
                minHeight: 'min(50vh, 400px)',
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
                        mb: 2,
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

            </Box>


            <Box sx={{
                minHeight: 'min(80vh, 500px)',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
            }}>
                <Typography variant={'h3'} className={'heading'}>Management Team</Typography>

                <svg style={{visibility: 'hidden', position: 'absolute'}} width="0" height="0"
                     xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="round">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                           result="goo"/>
                            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                        </filter>
                    </defs>
                </svg>

                <Box sx={{
                    mt: 6,
                    width: '-webkit-fill-available',
                    maxWidth: {xs: 'auto', sm: 'min(80%, 900px)'},
                    borderRadius: '20px',
                    p: 2,
                    // boxShadow: 5,
                    minHeight: '160px',
                    display: 'flex',
                    flexFlow: {xs: 'column', sm: 'row'},
                    gap: 2,
                    border: `2px solid ${alpha(theme.palette.secondary.light, 0.4)}`,
                    '& .MuiAvatar-root': {
                        background: lighten(theme.palette.primary.main, 0.9),
                        width: '140px',
                        height: '140px',
                        marginTop: '-2rem',
                        marginLeft: {xs: '-18px', sm: '-2rem'},
                        borderRadius: '20px 0 20px 0',
                        border: `2px solid ${theme.palette.primary.main}`,
                    },
                }}>

                    <Avatar variant={'rounded'}/>
                    <Box sx={{
                        '& .name': {
                            display: 'flex',
                            flexFlow: 'column',
                            fontSize: '20px',
                            lineHeight: '20px',
                            fontWeight: 600,
                            fontFamily: theme.typography.h1.fontFamily,
                            letterSpacing: '1px',
                            color: theme.palette.primary.main,
                            '& span': {
                                letterSpacing: 0,
                                color: theme.palette.secondary.main,
                                fontSize: '14px',
                                fontWeight: 400,
                                fontFamily: theme.typography.body1.fontFamily,
                            },
                        },

                        '& .educationDetail': {
                            color: theme.palette.secondary.main,
                            fontSize: '14px',
                            fontWeight: 400,
                        },
                    }}>
                        <Typography className={'name'}>Shailendra Varma<span>Chairman</span></Typography>
                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                        }}>
                            <Box sx={{
                                flex: '1 1 300px',
                                '& .details': {
                                    color: theme.palette.secondary.main,
                                    mt: 1,
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    textIndent: '1rem',
                                },
                            }}>
                                <Typography className={'details'}>
                                    With 45 Years experience in the services industry, Shailendra has lead the
                                    organization to new heights by providing his expertise in the Finance sector and
                                    rural supply chain instrumental in leading the change at Eternity.
                                </Typography>
                            </Box>

                            <Box sx={{
                                flex: '1 1 300px',
                                position: 'relative',
                                p: 1,
                                '& ul': {
                                    pl: 3,
                                    m: 0
                                },
                                '& .educationLabel': {
                                    // position: 'absolute',
                                    // top: '-2rem',
                                    fontSize: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    '& svg': {
                                        fontSize: '18px',
                                    },
                                },
                            }}>
                                <Typography className={'educationLabel'}><SchoolRounded/> Education</Typography>
                                <Typography className={'educationDetail'}>
                                    <ul>
                                        <li> B.Com (Hons)</li>
                                        <li> B.Sc. (Agriculture)</li>
                                    </ul>
                                </Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>

                <Box sx={{
                    mt: 6,
                    width: '-webkit-fill-available',
                    maxWidth: {xs: 'auto', sm: 'min(80%, 900px)'},
                    borderRadius: '20px',
                    p: 2,
                    // boxShadow: 5,
                    minHeight: '160px',
                    display: 'flex',
                    flexFlow: {xs: 'column', sm: 'row'},
                    gap: 2,
                    border: `2px solid ${alpha(theme.palette.secondary.light, 0.4)}`,
                    '& .MuiAvatar-root': {
                        background: lighten(theme.palette.primary.main, 0.9),
                        width: '140px',
                        height: '140px',
                        marginTop: '-2rem',
                        marginLeft: {xs: '-18px', sm: '-2rem'},
                        borderRadius: '20px 0 20px 0',
                        border: `2px solid ${theme.palette.primary.main}`,
                    },
                }}>

                    <Avatar variant={'rounded'}/>
                    <Box sx={{
                        '& .name': {
                            display: 'flex',
                            flexFlow: 'column',
                            fontSize: '20px',
                            lineHeight: '20px',
                            fontWeight: 600,
                            fontFamily: theme.typography.h1.fontFamily,
                            letterSpacing: '1px',
                            color: theme.palette.primary.main,
                            '& span': {
                                letterSpacing: 0,
                                color: theme.palette.secondary.main,
                                fontSize: '14px',
                                fontWeight: 400,
                                fontFamily: theme.typography.body1.fontFamily,
                            },
                        },

                        '& .educationDetail': {
                            color: theme.palette.secondary.main,
                            fontSize: '14px',
                            fontWeight: 400,
                        },
                    }}>
                        <Typography className={'name'}>Vidur Varma<span>Chief Executive Officer</span></Typography>
                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                        }}>
                            <Box sx={{
                                flex: '1 1 300px',
                                '& .details': {
                                    color: theme.palette.secondary.main,
                                    mt: 1,
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    textIndent: '1rem',
                                },
                            }}>
                                <Typography className={'details'}>
                                    With 12 Years experience in the Logistics & Supply Chain industry, Vidur has lead
                                    many
                                    new
                                    initiatives and added a lot of tech in the services being provided by Eternity.
                                </Typography>
                            </Box>

                            <Box sx={{
                                flex: '1 1 300px',
                                position: 'relative',
                                p: 1,
                                '& ul': {
                                    pl: 3,
                                    m: 0
                                },
                                '& .educationLabel': {
                                    // position: 'absolute',
                                    // top: '-2rem',
                                    fontSize: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    '& svg': {
                                        fontSize: '18px',
                                    },
                                },
                            }}>
                                <Typography className={'educationLabel'}><SchoolRounded/> Education</Typography>
                                <Typography className={'educationDetail'}>
                                    <ul>
                                        <li>B.A.(Economic Hons) LL.B</li>
                                        <li>Strategic Management</li>
                                        <li>Warehouse Design & Management</li>
                                        <li>Supply Chain Management</li>
                                    </ul>
                                </Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>

            </Box>


            <Box className={'esteemedClients'} sx={{
                mt: 6,
            }}>
                <Box sx={{
                    my: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    rowGap: 3,
                    flexWrap: 'wrap',
                    minHeight: '80px',
                }}>
                    <Box sx={{
                        flex: '1 1 300px',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                        overflowX: 'hidden',
                        position: 'relative',
                        '&:before, &:after': {
                            content: '""',
                            display: 'block',
                            background: 'linear-gradient(90deg, white, transparent)',
                            height: '-webkit-fill-available',
                            width: '40px',
                            position: 'absolute',
                            top: 0,
                            zIndex: 9,
                        },
                        '&:after': {
                            background: 'linear-gradient(90deg, transparent, white)',
                            right: 0,
                        },
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'nowrap',
                            animation: `dddd ${clients.length}000ms linear infinite`,
                            '&:hover': {
                                animationPlayState: 'paused',
                            },
                            '& img': {
                                height: '50px',
                                minWidth: '150px',
                                objectFit: 'contain',
                                filter: 'grayscale(1)',
                                transition: 'all 200ms',
                                '&:hover': {
                                    filter: 'grayscale(0)',
                                },
                            },
                            ['@keyframes dddd']: {
                                '0%': {transform: 'translateX(20%)'},
                                '100%': {transform: 'translateX(-100%)'},
                            },
                        }}>
                            {clients.map((client, index) => <img src={client} key={index}/>)}
                        </Box>
                    </Box>

                </Box>

            </Box>


        </PageContainer>

    )
}