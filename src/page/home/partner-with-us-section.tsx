import React from 'react'
import {alpha, Box, Button, Typography, useTheme} from "@mui/material"
import lastMile from '../../assets/images/home/ship-with-us.png'
import carrierPartner from '../../assets/images/home/for-business.png'
import partnerBg from '../../assets/images/partner-bg.png'
import bg from '../../assets/images/bg.png'
import earn from '../../assets/images/earn.svg'


export default function PartnerWithUsSection() {

    const theme = useTheme()

    return (
        <Box component={'section'} sx={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom left',
            backgroundAttachment: 'fixed'

        }}>
            <Box sx={{
                minHeight: 'min(100vh, 600px)',
                // background: `url(${partnerBg})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom left',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Box data-aos="fade-up" data-aos-anchor-placement="center-bottom" sx={{
                    display: 'flex',
                    flexWrap: {xs: 'wrap', md: 'nowrap'},
                    alignItems: 'center',
                    gap: 3,
                    width: '100%',
                    maxWidth: '1100px',
                    mx: 'auto',
                    '& .ctaText': {
                        flex: '1 1 300px',
                        p: 2,
                        '& *':{
                            textAlign: {xs:'center', sm: 'left'},
                        },
                        '& h3': {
                            fontSize: 'clamp(1.5rem, 8vw, 3.5rem)',
                            fontWeight: 600,
                            color: theme.palette.secondary.main,
                            '& span': {
                                color: theme.palette.primary.main,
                            },
                        },
                        '& p': {
                            fontSize: theme.typography.pxToRem(15),
                            textIndent: {xs: 0, sm: '1.5rem'},
                            maxWidth: '450px',
                            mb: 6,
                        },
                        '& .actionButtons':{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems:'center',
                            gap: 2,
                            justifyContent: {xs: 'center', sm: 'flex-start'},
                            '& .ctaButton':{
                                borderWidth: '2px',
                                borderRadius: '12px',
                                textTransform: 'none',
                                fontWeight: 600,
                                color: theme.palette.secondary.main,
                                borderColor: theme.palette.secondary.main,
                                width: '100%',
                                maxWidth: '200px',
                                fontSize: '1.2rem',
                                // py: 1,
                            },
                        },
                    },
                    '& .ctaImage': {
                        flex: '1 1 300px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '& img': {
                            maxHeight: '300px',
                        },
                    },
                }}>
                    <Box className={'ctaImage'}>
                        <img src={earn} alt={'become our partner'}/>
                    </Box>

                    <Box className={'ctaText'}>
                        <Typography variant={'h3'}>
                            <span>Partner</span> with Us
                        </Typography>

                        <Typography className={'des'}>
                            Our dedicated customer support team is available round the clock, providing you with prompt
                            assistance and expert guidance whenever you need it.
                        </Typography>

                        <Box className={'actionButtons'}>
                            <Button variant={'outlined'} className={'ctaButton'}>Last Mile Partner</Button>
                            <Button variant={'outlined'} className={'ctaButton'}>Carrier Partner</Button>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Box>
    )
}