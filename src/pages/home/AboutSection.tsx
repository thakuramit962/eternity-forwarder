import React from "react";
import {alpha, Box, IconButton, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import {ArrowForwardIosRounded, InsightsRounded} from "@mui/icons-material";
import {useParallax} from "react-scroll-parallax"
import aboutIllustrationNew from '../../assets/images/aboutIllustrationNew.png'

const AboutSection = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'));
    const scalingAbout = useParallax<HTMLDivElement>(isMobile ? {scale: [1, 0.6, 'easeInQuad']} : {})

    const nextButton = document.getElementsByClassName('swiper-button-prev')

    return (
        <Box ref={scalingAbout.ref} sx={{
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
                <img src={aboutIllustrationNew} className={'illustration'}/>
                <Typography variant={'body1'} className={'bodyText'} sx={{
                    mt: 3, mb: 3,
                    textAlign: 'center',
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

export default AboutSection