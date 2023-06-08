import React from 'react'
import {
    alpha,
    Box,
    Button, ButtonBase,
    Divider, IconButton,
    InputBase,
    Typography,
    useMediaQuery,
    useScrollTrigger,
    useTheme
} from "@mui/material";
import bg from '../assets/images/bg-1.png'
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade} from 'swiper';

import 'swiper/css';
import Toolbar from "@mui/material/Toolbar"
import {ArrowForwardIosRounded, PanToolAltRounded} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import NewPageContainer from "../components/new-page-container";


export default function TestPage() {

    const theme = useTheme()
    const navigate = useNavigate()

    const isMobile = useMediaQuery(`(max-width: 500px)`)

    return (
        <NewPageContainer>
            <Box sx={{
                minHeight: {xs: 'calc(100vh - 256px)', sm: '100vh'},
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                flexFlow: 'column',
                width: '100%'

            }}>
                <Box sx={{
                    width: '100%',
                }}>
                    <Swiper
                        spaceBetween={0} loop
                        slidesPerView={1}
                        modules={[EffectFade]} effect="fade"
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {Array.from(Array(10)).map((_, index) => (
                            <SwiperSlide><SlideContentView index={index} key={index}/></SwiperSlide>))}
                    </Swiper>
                </Box>


                <Box className={'animate__animated animate__fadeInUp'} sx={{
                    bottom: 0,
                    position: {xs: 'revert', sm: 'absolute'},
                    minHeight: {xs: '200px', sm: '180px'},
                    width: '100%',
                    maxWidth: '1100px',
                    mx: 'auto',
                    background: theme.palette.primary.main,
                    zIndex: 2,
                    display: 'flex',
                    flexWrap: 'wrap-reverse',
                    borderRadius: {xs: '28px 28px 0 0', sm: 0},
                    mt: -4,
                    '& .head': {
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        position: 'relative',
                        '&:after': {
                            content: '""',
                            display: 'flex',
                            position: 'absolute',
                            bottom: 0,
                            width: '160px',
                            height: '2px',
                        },
                    },
                }}>
                    <Box sx={{
                        flex: '1 1 300px',
                        pt: {xs: 4, sm: 2},
                        pb: {xs: 8, sm: 2},
                        background: theme.palette.secondary.dark,
                        display: 'flex',
                        flexFlow: 'column',
                        color: theme.palette.secondary.contrastText,
                        '& .head': {
                            px: 2,
                            mb: {xs: 2, sm: 0},
                            '&:after': {
                                background: theme.palette.secondary.contrastText,
                            },
                        },
                        '& .inner': {
                            display: 'flex',
                            flexFlow: 'column',
                            flex: 1,
                            pt: 2,
                        },
                        '& .opt': {
                            px: 2,
                            py: 0.5,
                            width: '90%',
                            ml: 'auto',
                            mr: 2,
                            JustifyContent: 'flex-start',
                            textAlign: 'left',
                            position: 'relative',
                            borderRadius: '20px',
                            '& .MuiTypography-root': {
                                fontSize: '1rem',
                                fontWeight: 600,
                            },
                            '& .title': {
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                '& svg': {
                                    transform: 'rotate(90deg)',
                                    mr: 1,
                                    color: theme.palette.primary.main,
                                },
                            },
                            '& .MuiIconButton-root': {
                                opacity: 0,
                                color: theme.palette.primary.main,
                                position: 'absolute',
                                right: '2rem',
                                transition: 'all 250ms ease-in-out',
                                '& svg': {
                                    height: '14px',
                                    width: '14px',
                                },

                            },
                            '&:hover': {
                                '& .MuiIconButton-root': {
                                    opacity: 1,
                                    right: '1rem',
                                },
                            },
                        },
                    }}>
                        <Typography variant={'h3'} className={'head'}>Ship with us</Typography>
                        <Box className={'inner'}>
                            <ButtonBase className={'opt animate__animated animate__fadeInUp animate__fast'}>
                                <Typography className={'title'}><PanToolAltRounded/>Eternity for Business</Typography>
                                <IconButton disableRipple><ArrowForwardIosRounded/></IconButton>
                            </ButtonBase>
                            <ButtonBase className={'opt animate__animated animate__fadeInUp animate__slow'}>
                                <Typography className={'title'}><PanToolAltRounded/>Eternity Shipmate</Typography>
                                <IconButton disableRipple><ArrowForwardIosRounded/></IconButton>
                            </ButtonBase>
                            <ButtonBase className={'opt animate__animated animate__fadeInUp animate__slower'}>
                                <Typography className={'title'}><PanToolAltRounded/>Register Your Interest</Typography>
                                <IconButton><ArrowForwardIosRounded/></IconButton>
                            </ButtonBase>
                        </Box>
                    </Box>

                    <Box sx={{
                        flex: '2 1 300px',
                        px: 2,
                        py: {xs: 4, sm: 2},
                        display: 'flex',
                        flexFlow: 'column',
                        color: theme.palette.secondary.dark,
                        columnGap: 2,
                        rowGap: 1,
                        '& .head': {
                            '&:after': {
                                background: theme.palette.secondary.dark,
                            },
                        },
                    }}>
                        <Typography variant={'h3'} className={'head'} sx={{
                            display: {xs: 'none', sm: 'flex'}
                        }}>Track & Trace</Typography>

                        <Box className={'animate__animated animate__fadeInUp animate__slow'} sx={{
                            flex: 1,
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                            columnGap: 2,
                            rowGap: 1,
                        }}>
                            <InputBase placeholder={'Enter your tracking number'} sx={{
                                borderRadius: '12px',
                                border: `2px solid ${theme.palette.secondary.dark}`,
                                p: '8px 16px',
                                flex: '1 1 250px',
                                maxWidth: '320px',
                                fontWeight: 700,
                                '& input': {
                                    textTransform: 'uppercase',
                                },
                            }}/>
                            <Button variant={'contained'} sx={{
                                flex: '1 1 130px',
                                maxWidth: {xs: '320px', sm: '130px'},
                                p: '10px 16px',
                                fontWeight: 700,
                                fontSize: '1rem',
                                borderRadius: '12px',
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.contrastText,
                            }}>Track</Button>
                        </Box>

                    </Box>

                </Box>
            </Box>
        </NewPageContainer>
    )
}


const SlideContentView = (props: any) => {

    const theme = useTheme()

    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    })

    return (
        <Box className={'animate__animated animate__fadeIn'} sx={{
            minHeight: {xs: 'calc(100vh - 200px)', sm: 'calc(100vh - 200px)'},
            backgroundImage: `linear-gradient(${alpha(theme.palette.text.primary, 0.6)}, ${alpha(theme.palette.text.primary, 0)}), url(${bg})`,
            backgroundColor: theme.palette.background.default,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            pb: {xs: 0, sm: '200px'},
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            px: 3,
        }}>
            <Toolbar disableGutters sx={{
                height: scrolled ? '80px' : '90px',
                transition: 'all 300ms ease-in-out',
            }}/>
            <Box sx={{
                width: '100%',
                maxWidth: '1100px',
                mx: 'auto',
                '& .MuiTypography-root': {
                    textAlign: {xs: 'center', md: 'left'},
                    '&.MuiTypography-h2': {
                        fontWeight: 500,
                        fontSize: 'clamp(1.5rem, 8vw, 2.8rem)',
                        color: theme.palette.background.default,
                    },
                    '&.MuiTypography-body2': {
                        maxWidth: '550px',
                        fontSize: '1rem',
                        letterSpacing: '0.5px',
                        margin: {xs: 'auto', sm: 'auto', md: 0},
                        color: alpha(theme.palette.background.default, 0.85),
                    },
                },
            }}>
                <Typography variant={'h2'}>Logistics Meets<br/>Reliability Here!</Typography>
                <Typography variant={'body2'}>
                    Your trusted logistics partner, seamlessly serving both urban and rural areas across India by
                    ensuring efficient transportation, timely deliveries, and supply chain optimization.
                </Typography>
            </Box>
        </Box>
    )
}