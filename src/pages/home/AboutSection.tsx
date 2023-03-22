import React from "react";
import {alpha, Box, IconButton, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import {ArrowForwardIosRounded, InsightsRounded} from "@mui/icons-material";
import {useParallax} from "react-scroll-parallax"
import aboutIllustrationNew from '../../assets/images/aboutIllustrationNew.png'

const AboutSection = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'))
    const swiper = useSwiper()

    const nextButton = document.getElementsByClassName('swiper-button-prev')

    return (
        <Box sx={{
            mt: {xs: 6},
            minHeight: 'min(90vh, 550px)',
            '& .bodyText': {
                fontSize: theme.typography.pxToRem(15),
            },
            '& .missionTechnologyContainer': {
                position: 'relative',
                minHeight: '200px',
                mt: 4, mb: 8,
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                columnGap: {xs: 2, md: 4},
                width: '100%',
                textAlign: 'center',
                '& .swiper-slide-active': {
                    '& .missionTechnologyBlock': {
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
                },
                '& .missionTechnologyBlock': {
                    display: 'flex',
                    flexFlow: 'column',
                    flex: 1,
                    // width: '-webkit-fill-available',
                    maxWidth: '500px',
                    height: 'calc(100% - 6rem)',
                    borderRadius: '20px',
                    px: 3, py: 4,
                    overflow: ' hidden',
                    backgroundColor: alpha(theme.palette.primary.main, 0.01),
                    boxShadow: `0 2px 25px -7px #83838360`,
                    cursor: 'pointer',
                    transition: 'border 700ms ease-in-out',
                    '&.activeSlide': {
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
                        textAlign: 'center',
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

                '&:before, &:after, & .back, & .forward': {
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    width: '100px',
                    display: {xs: 'none', sm: 'flex'},
                    content: '""',
                },
                '&:before, & .back': {
                    background: `linear-gradient(90deg, ${theme.palette.background.default}, transparent)`,
                    left: 0,
                    zIndex: 9,
                },
                '&:after, & .forward': {
                    background: `linear-gradient(-90deg, ${theme.palette.background.default}, transparent)`,
                    right: 0,
                    zIndex: 9,
                },
                '& .back': {
                    zIndex: 11,
                },
            },

        }}>
            <Typography variant={'h2'} className={'heading'}>About Us</Typography>
            {/*<Typography variant={'body1'} sx={{*/}
            {/*    textAlign: 'center',*/}
            {/*    // maxWidth: '500px',*/}
            {/*    mx: 'auto',*/}
            {/*    color: theme.palette.text.secondary,*/}
            {/*    width: {xs: '100%', sm: '90%', md: '80%'},*/}
            {/*    fontSize: theme.typography.pxToRem(15),*/}
            {/*}}>*/}
            {/*    Founded in 2012, with a prime moto of digitising Logistics in the country, today, Eternity has*/}
            {/*    placed its name prominently in the Indian Logistics Market. Eternity efficiently working in the PTL*/}
            {/*    and FTL space with its core focus to connect every pin code in India by 2025. Operational in 20+*/}
            {/*    States PAN India, Eternity has been adding value to the Logistics Industry in many ways.*/}
            {/*</Typography>*/}

            <Box sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                minHeight: 'min(65vh, 500px)',
                '& img.illustration': {
                    flex: '1 1 300px',
                    objectFit: 'contain',
                    maxHeight: '300px',
                    width: '95%',
                },
                '& .bodyText': {
                    flex: '1 1 300px',

                },

                '& .blob': {
                    position: 'absolute',
                    zIndex: -1,
                    // bottom: '5vw',
                    left: '-10%',
                    maxHeight: '60vw',
                },
            }}>
                {/*<img src={blob} className={'blob'}/>*/}
                <img src={aboutIllustrationNew} className={'illustration'}/>
                <Typography variant={'body1'} className={'bodyText'} sx={{
                    mt: 3, mb: 3,
                    textAlign: 'center',
                    // width: {xs: '100%', sm: '90%', md: '80%'},
                }}>
                    Founded in 2012, with a prime moto of digitising Logistics in the country, today, Eternity has
                    placed its name prominently in the Indian Logistics Market. Eternity efficiently working in the PTL
                    and FTL space with its core focus to connect every pin code in India by 2025. Operational in 20+
                    States PAN India, Eternity has been adding value to the Logistics Industry in many ways
                </Typography>

            </Box>

            <Box className={'missionTechnologyContainer'} sx={{
                '& .swiper-wrapper': {
                    py: 2,
                },
                '& .swiper-slide': {
                    width: {xs: '95%', ms: '80%', md: '70%'},
                    maxWidth: '500px',
                },
                '& .swiper-slide-active': {
                    // ml: {xs: 0, sm: '40px !important', md: '80px !important'},
                },
            }}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={'auto'}
                    // pagination
                    navigation={true}
                    loop
                    centeredSlides
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                >
                    <SwiperSlide>
                        {({isActive}) => (
                            <Box
                                className={isActive ? 'missionTechnologyBlock activeSlide' : 'missionTechnologyBlock'}>
                                <Box className={'blockImage'}><InsightsRounded/></Box>
                                <Typography className={'blockHead'}>Widespread Urban & Rural Reach</Typography>
                                <Typography className={'blockDes bodyText'}>
                                    Eternity has developed its rural reach to the village level and has been able to
                                    deliver
                                    to almost every pin code in the 9 states for its Drop Ship model.
                                </Typography>
                            </Box>
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box className={'missionTechnologyBlock'}>
                            <Box className={'blockImage'}><InsightsRounded/></Box>
                            <Typography className={'blockHead'}>Tech Enabled</Typography>
                            <Typography className={'blockDes bodyText'}>
                                Offering its state of the art in-house developed technology helps smoothen the
                                operation
                                and enables faster deliveries.
                            </Typography>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box className={'missionTechnologyBlock'}>
                            <Box className={'blockImage'}><InsightsRounded/></Box>
                            <Typography className={'blockHead'}>Wide Range of Services</Typography>
                            <Typography className={'blockDes bodyText'}>
                                We offer a wide range of services starting FTL, Drop Ship and Warehousing services
                                spread across a wide territory.
                            </Typography>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box className={'missionTechnologyBlock'}>
                            <Box className={'blockImage'}><InsightsRounded/></Box>
                            <Typography className={'blockHead'}>Rapidly Growing</Typography>
                            <Typography className={'blockDes bodyText'}>
                                Eternity is rapidly growing and aiming to cover almost all pin codes across
                                territories
                                to enable deliveries for our esteemed customers to every corner of the country.
                            </Typography>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box className={'missionTechnologyBlock'}>
                            <Box className={'blockImage'}><InsightsRounded/></Box>
                            <Typography className={'blockHead'}>On Time, Every Time!</Typography>
                            <Typography className={'blockDes bodyText'}>
                                Our team thrives on the moto of delivery your products – on time, everytime!
                            </Typography>
                        </Box>
                    </SwiperSlide>

                    {/*<Box>*/}
                    <IconButton onClick={() => console.log(nextButton)}><ArrowForwardIosRounded/></IconButton>
                    {/*<IconButton><ArrowBackIosNewRounded/></IconButton>*/}
                    {/*</Box>*/}
                </Swiper>
            </Box>


        </Box>
    )
}

const OldAboutSection = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'))

    const service1 = useParallax<HTMLDivElement>(isMobile ? {translateX: [-15, 0, 'easeInQuad']} : {})
    const service2 = useParallax<HTMLDivElement>(isMobile ? {translateX: [15, 0, 'easeInQuad']} : {})
    const service3 = useParallax<HTMLDivElement>(isMobile ? {translateX: [-15, 0, 'easeInQuad']} : {})
    const service4 = useParallax<HTMLDivElement>(isMobile ? {translateX: [15, 0, 'easeInQuad']} : {})

    return (
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
            <Typography variant={'h2'} className={'heading'}>About Us</Typography>
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

            <Typography variant={'h2'} className={'heading'} sx={{mb: 3}}>Solutions</Typography>

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
    )
}

export default AboutSection