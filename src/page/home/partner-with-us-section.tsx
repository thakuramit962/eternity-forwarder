import React from 'react'
import {Box, Button, Typography, useTheme} from "@mui/material"
import lastMile from '../../assets/images/home/ship-with-us.png'
import carrierPartner from '../../assets/images/home/for-business.png'


export default function PartnerWithUsSection() {

    const theme = useTheme()

    return (
        <Box sx={{
            minHeight: 'min(80vh, 500px)',

        }}>
            <Box sx={{
                maxWidth: '1100px',
                mx: 'auto',
                '& .des': {
                    maxWidth: '767px',
                    mx: 'auto',
                    textAlign: 'center',
                },
                '& .actionBlock': {
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3,
                    maxWidth: '1023px',
                    mx: 'auto',
                    mt: 5,
                    px: 2,
                    '& .partnerOption': {
                        flex: '1 1 300px',
                        borderRadius: '20px',
                        boxShadow: '0 0 17px -4px #83838370',
                        p: 2,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2,
                        background: theme.palette.background.default,
                        '& img': {
                            width: '120px',
                            height: '80px',
                            objectFit: 'contain'
                        },
                        '& .content': {
                            flex: '1 1 200px',
                            '& .title': {
                                fontWeight: 500,
                                fontSize: '1.2rem',
                            },
                            '& .dex': {
                                fontSize: '0.85rem',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                display: '-webkit-box',
                                width: '-webkit-fill-available',
                                color: theme.palette.secondary.light,
                            },
                            '& .MuiButton-root':{
                                borderWidth: '2px',
                                borderRadius: '12px',
                                textTransform: 'none',
                                fontWeight: 600,
                                color: theme.palette.secondary.main,
                                borderColor: theme.palette.secondary.main,
                                width: '100%',
                                maxWidth: '150px',
                                mt: 3,
                                fontSize: '1rem'
                            },
                        },
                        '&:hover': {
                            boxShadow: '0 3px 17px -4px #83838390',
                        },
                    }
                },
            }}>
                <Typography className={'heading'}>Partner With Us</Typography>
                <Typography className={'des'}>We take pride in serving a wide range of esteemed clients from various
                    industries. We have had the privilege of working with businesses of all sizes, from startups to
                    multinational corporations. Our tailored approach to their unique requirements has allowed us to
                    seamlessly handle their supply chain, ensuring timely deliveries, and contributing to their overall
                    success.</Typography>

                <Box className={'actionBlock'}>
                    <Box className={'partnerOption'}>
                        <img src={lastMile} alt={'last-mile-partner'}/>
                        <Box className={'content'}>
                            <Typography className={'title'}>Last Mile Partner</Typography>
                            <Typography className={'dex'}>
                                Our tailored approach to their unique requirements has allowed us to
                                seamlessly.requirements has allowed us to seamlessly.
                            </Typography>
                            <Button variant={'outlined'}>Get Started</Button>
                        </Box>
                    </Box>

                    <Box className={'partnerOption'}>
                        <img src={lastMile} alt={'last-mile-partner'}/>
                        <Box className={'content'}>
                            <Typography className={'title'}>Carrier Partner</Typography>
                            <Typography className={'dex'}>
                                Our tailored approach to their unique requirements has allowed us to seamlessly.
                            </Typography>
                            <Button variant={'outlined'}>Get Started</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}