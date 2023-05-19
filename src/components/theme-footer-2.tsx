import React from 'react'
import {Box, Divider, IconButton, Tooltip, Typography, useTheme} from "@mui/material"
import logo from '../assets/images/eternity-forwarders-logo.svg'
import moment from "moment"
import PlayStoreCta from "./play-store-cta"
import {FacebookRounded, Instagram, LinkedIn, Twitter} from "@mui/icons-material"
import {useNavigate} from "react-router-dom";

export default function ThemeFooter2() {

    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <Box component={'footer'} sx={{
            minHeight: 'calc(100vh - 100px)',
            m: {xs: 0, sm: 1, md: 2},
            pt: 2, pb: 1,
            px: {xs: 2, sm: 4, md: 6},
            mb: {xs: 2, sm: 1, md: 2},
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 300ms ease',
            '&:hover': {
                borderRadius: '30px',
            },
        }}>
            <PlayStoreCta/>

            <Box sx={{
                mt: 6,
                flex: 1,
                width: '100%',
                mx: 'auto',
                display: 'grid',
                gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr', md: '1.5fr 1fr 1fr 1fr'},
                gap: 2,
                '& .footerWidget': {
                    p: 1,
                    pt: 3,
                    userSelect: 'none',
                    '& img': {
                        maxWidth: '160px',
                        textAlign: 'center'
                    },
                    '& .footerDescription': {
                        fontSize: '0.85rem',
                        maxWidth: '85%',
                        color: theme.palette.text.secondary
                    },
                    '& .footerHeading': {
                        pointerEvents: 'none',
                        fontSize: '1rem',
                        fontWeight: 500,
                        letterSpacing: 1,
                        mb: 2,
                        width: 'max-content',
                    },
                    '& .footerLink, & a': {
                        mb: 0.5,
                        textIndent: '10px',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all 180ms ease',
                        width: 'max-content',
                        color: theme.palette.text.secondary,
                        textDecoration: 'none',
                        '&:hover':{
                            color: theme.palette.primary.main,
                        },
                    },
                    '& .footerLink':{
                        '&:hover': {
                            letterSpacing: 0.5,
                            position: 'relative',
                            '&:before': {
                                content: '""',
                                height: '3px',
                                width: '3px',
                                background: theme.palette.primary.main,
                                display: 'inline-flex',
                                position: 'absolute',
                                top: '50%',
                                left: -0.3,
                                transform: 'translateY(-50%)'
                            },
                        }
                    },
                },
                [theme.breakpoints.down('sm')]: {
                    '& .footerWidget': {
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center',
                        '& .footerDescription': {
                            textAlign: 'center',
                            mt: 2,
                        },
                        '& .footerLink': {
                            textIndent: 0,
                        },
                    },

                },
            }}>
                <Box className={'footerWidget'} sx={{
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'space-between',
                }} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <img src={logo} alt={'eternity forwarders'}/>

                    <Typography className={'footerDescription'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod</Typography>
                </Box>

                <Box className={'footerWidget'} data-aos="fade-up" data-aos-anchor-placement="center-bottom" >
                    <Typography className={'footerHeading'} variant={'h6'}>Company</Typography>
                    <Typography className={'footerLink'} onClick={()=>navigate('/about')}>About Us</Typography>
                    <Typography className={'footerLink'} onClick={()=>navigate('/group')}>Group</Typography>
                    <Typography className={'footerLink'} ><a href={'#serviceSection'} onClick={() => navigate('/')}>Services</a></Typography>
                    <Typography className={'footerLink'}><a href={'#clientSection'} onClick={() => navigate('/')}>Clients</a></Typography>
                </Box>

                <Box className={'footerWidget'} data-aos="fade-up" data-aos-anchor-placement="center-bottom" >
                    <Typography className={'footerHeading'} variant={'h6'}>Connect</Typography>
                    <Typography className={'footerLink'}>Support</Typography>
                    <Typography className={'footerLink'}>Raise a Query</Typography>
                    <Typography className={'footerLink'}>Start Shipping</Typography>
                    <Typography className={'footerLink'}>Careers</Typography>
                </Box>

                <Box className={'footerWidget'} data-aos="fade-up" data-aos-anchor-placement="center-bottom" >
                    <Typography className={'footerHeading'} variant={'h6'}>Important Links</Typography>
                    <Typography className={'footerLink'} onClick={() => navigate('/privacy-policy')}>Privacy
                        Policy</Typography>
                    <Typography className={'footerLink'}>Disclaimer</Typography>
                    <Typography className={'footerLink'} onClick={() => navigate('/terms-and-conditions')}>Terms &
                        Conditions</Typography>
                    <Typography className={'footerLink'}>EEO Policy</Typography>
                </Box>
            </Box>

            <Divider sx={{
                mt: 3,
                borderColor: theme.palette.text.secondary,
                mb: 1,
            }}/>

            <Box sx={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center'
            }} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    '& .MuiIconButton-root': {
                        height: '1.8rem',
                        width: '1.8rem',
                        transition: 'all 200ms ease',
                        '& svg': {
                            height: '1.2rem',
                            width: '1.2rem',
                        },
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            '&.facebook': {color: '#4267B2'},
                            '&.instagram': {color: '#E1306C'},
                            '&.linkedin': {color: '#0077b5'},
                            '&.twitter': {color: '#1DA1F2'},
                        },
                    },
                }}>
                    <Tooltip title={'@userName'} arrow placement={'top'}>
                        <IconButton className={'facebook'}><FacebookRounded/></IconButton>
                    </Tooltip>
                    <Tooltip title={'@userName'} arrow placement={'top'}>
                        <IconButton className={'instagram'}><Instagram/></IconButton>
                    </Tooltip>
                    <Tooltip title={'@userName'} arrow placement={'top'}>
                        <IconButton className={'linkedin'}><LinkedIn/></IconButton>
                    </Tooltip>
                    <Tooltip title={'@userName'} arrow placement={'top'}>
                        <IconButton className={'twitter'}><Twitter/></IconButton>
                    </Tooltip>
                </Box>

                <Typography sx={{
                    fontSize: '12px',
                    color: theme.palette.text.secondary,
                    textDecoration: 'none',
                    textAlign: 'center',
                    cursor: 'pointer',
                    width: 'max-content',
                    '&:hover': {
                        color: theme.palette.text.primary,
                    },
                }}>© {moment().format('YYYY')} Eternity Forwarders Pvt Ltd.</Typography>
            </Box>
        </Box>
    )
}