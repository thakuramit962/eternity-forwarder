import React, {useState} from "react";
import {
    Box,
    Button,
    FormControl, FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {useParallax} from "react-scroll-parallax";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade} from "swiper";
import heroImage from "../../assets/images/logistic-1.png"
import onTime from "../../assets/images/on-time-text.png"

const HeroSection = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'));
    const scalingY = useParallax<HTMLDivElement>(
        isMobile ? {opacity: [1.11, 0.4, 'easeInQuad']} : {})
        // isMobile ? {scale: [1.11, 0.6, 'easeInQuad'], opacity: [1.11, 0.4, 'easeInQuad']} : {})

    const [trackingType, setTrackingType] = useState('shipmentId')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTrackingType((e.target.value))

    return (
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

                    <FormControl sx={{
                        mt: 6,
                        width: '100%',
                        '& .MuiFormControlLabel-root': {
                            mx: 0,
                            padding: '0 8px 0 2px',
                            '&:has(.Mui-checked)': {
                                borderBottom: 'none',
                                borderRadius: '6px 6px 0 0',
                                color: '#fff',
                                background: '#fbb810',
                                '& .MuiRadio-root': {
                                    color: '#fff',
                                },
                            },
                            '& .MuiTypography-root': {
                                fontSize: '13px',
                            },
                            '& .MuiRadio-root': {
                                p: '5px',
                            },
                            '& .MuiSvgIcon-root': {
                                fontSize: '14px',
                            },
                        },

                    }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={trackingType}
                            onChange={handleChange}>
                            <FormControlLabel value="shipmentId" control={<Radio size={'small'}/>} label="Shipment ID"/>
                            <FormControlLabel value="prsId" control={<Radio size={'small'}/>} label="PRS ID"/>
                            <FormControlLabel value="drsId" control={<Radio size={'small'}/>} label="DRS ID"/>
                        </RadioGroup>
                    </FormControl>

                    <Box sx={{
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
                                           borderRadius: trackingType == 'shipmentId' ? '0 12px 12px' : '12px',
                                           borderColor: theme.palette.primary.main,
                                           borderWidth: '2px',
                                           transition: 'all 200ms ease',
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
                '& .swiper': {
                    width: '94%',
                    '& .swiper-wrapper': {
                        alignItems: 'center',
                    },
                    '& .swiper-slide': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                },
                '& img': {
                    width: 'clamp(150px, 90%, 500px)',
                    mx: 'auto',
                    background: theme.palette.background.default,
                    objectFit: 'contain',
                    opacity: 0,
                    transition: 'all 150ms ease', '&.activeImg': {
                        opacity: 1,
                        transition: 'all 350ms ease',
                    },
                },
            }}>
                <Swiper modules={[EffectFade, Autoplay]} spaceBetween={50} slidesPerView={1} loop centeredSlides
                        autoplay={{disableOnInteraction: true}}>
                    <SwiperSlide>
                        {({isActive}) => <img src={heroImage} className={isActive ? 'activeImg' : ''} alt={'image'}/>}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({isActive}) => <img src={onTime} className={isActive ? 'activeImg' : ''} alt={'image'}/>}
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    )
}

export default HeroSection
