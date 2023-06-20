import React from 'react'
import {Box, Button, Typography, useMediaQuery, useTheme} from "@mui/material"
import lastMile from '../../assets/images/home/ship-with-us.png'
import carrierPartner from '../../assets/images/home/for-business.png'

import logo1 from "../../assets/images/clients/ajio.png";
import logo2 from "../../assets/images/clients/bharat.png";
import logo3 from "../../assets/images/clients/nurture.png";
import logo4 from "../../assets/images/clients/upl.png";
import logo5 from "../../assets/images/clients/orpat.png";
import logo6 from "../../assets/images/clients/zeera.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import heroImage from "../../assets/images/logistic-1.png";

const clients = [logo1, logo2, logo3, logo4, logo5, logo6, logo2, logo3, logo4, logo5, logo5]

export default function Clients() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))


    return (
        <Box component={'section'} sx={{
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
                        height: {xs: '60px', sm: '80px'},
                        width: {xs: 'auto', sm: '200px'},
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