import React from 'react'
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material"

import logo1 from "../../assets/images/client-logos/1-agri-kheti.jpg"
import logo2 from "../../assets/images/client-logos/2-ajanta.jpg"
import logo3 from "../../assets/images/client-logos/3-atul.jpg"
import logo4 from "../../assets/images/client-logos/4-bharat-certis.jpg"
import logo5 from "../../assets/images/client-logos/5-corteva.jpg"
import logo6 from "../../assets/images/client-logos/6-dhanesha.jpg"
import logo7 from "../../assets/images/client-logos/7-envu.jpg"
import logo8 from "../../assets/images/client-logos/8-fmc.jpg"
import logo9 from "../../assets/images/client-logos/9-godrej.jpg"
import logo10 from "../../assets/images/client-logos/10-itc.jpg"
import logo11 from "../../assets/images/client-logos/11-kaveri.jpg"
import logo12 from "../../assets/images/client-logos/12-mol.jpg"
import logo13 from "../../assets/images/client-logos/13-nunhems.jpg"
import logo14 from "../../assets/images/client-logos/14-nurture.jpg"
import logo15 from "../../assets/images/client-logos/15-orpat.jpg"
import logo16 from "../../assets/images/client-logos/16-oxyrich.jpg"
import logo17 from "../../assets/images/client-logos/17-sml.jpg"
import logo18 from "../../assets/images/client-logos/18-sumito.jpg"
import logo19 from "../../assets/images/client-logos/19-unnati.jpg"
import logo20 from "../../assets/images/client-logos/20-upl.jpg"

import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay, Pagination} from "swiper"

const clients = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20]

export default function Clients() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box component={'section'} id="clients" sx={{
            minHeight: 'min(50vh, 500px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pt: 6,
        }}>
            <Box sx={{
                maxWidth: '1100px',
                mx: 'auto',
                overflow: 'hidden',
                '& .des': {
                    maxWidth: '767px',
                    mx: 'auto',
                    textAlign: 'center',
                },
            }}>
                <Typography className={'heading'} data-aos="fade-up" data-aos-anchor-placement="center-bottom">Brands
                    That Trust Us</Typography>
                <Typography className={'des'} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    Many businesses have simplified their shipping using Eternity Forwarders services.
                </Typography>


                <Box data-aos="fade-up" data-aos-anchor-placement="center-bottom" sx={{
                    mx: 'auto',
                    py: 4,
                    overflow: 'hidden',
                    '& .swiper': {
                        width: '98%',
                    },
                    '& .swiper-slide': {
                        width: 'max-content',
                        p: 1,
                    },
                    '& img': {
                        height: {xs: '60px', sm: '60px'},
                        width: {xs: 'auto', sm: '160px'},
                        flex: 1,
                        objectFit: 'contain',
                        background: theme.palette.background.default,
                        p: 2,
                        borderRadius: '16px',
                        outline: `3px solid ${theme.palette.background.default}`,
                        outlineOffset: '-3px',
                        '&.activeImg': {
                            boxShadow: `2px 3px 13px #cacbce inset, 4px 6px 13px #cacbce`,
                        },
                        '&:hover': {
                            borderRadius: '20px',
                            boxShadow: `2px 3px 13px #cacbce inset, 4px 6px 13px #cacbce`,
                        },
                    },
                }}>
                    <Swiper modules={[Pagination, Autoplay]}
                            autoplay={{
                                delay: 1000,
                                pauseOnMouseEnter: true,
                            }}
                            pagination={{clickable: true,}}
                            spaceBetween={isMobile ? 10 : 40} loop={true}
                            slidesPerView={isMobile ? 2 : 'auto'}
                    >
                        {clients.map((client, index) => (
                            <SwiperSlide key={index}>
                                {({isActive}) => <img src={client} className={isActive ? 'activeImg' : ''}
                                                      alt={'image'}/>}
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </Box>

            </Box>
        </Box>
    )
}