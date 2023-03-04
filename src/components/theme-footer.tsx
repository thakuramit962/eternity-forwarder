import React from 'react'
import {alpha, AppBar, Box, Divider, lighten, Toolbar, Typography, useTheme} from "@mui/material"
import logo from '../assets/images/eternity-forwarders-logo.svg'
import moment from "moment";


export default function ThemeFooter() {

    const theme = useTheme()

    return (
        <Box sx={{
            minHeight: '270px',
            borderRadius: '20px',
            background: theme.palette.secondary.main,
            m: {xs: 0, sm: 1, md: 2},
            pt: 2, pb: 1,
            px: {xs: 2, sm: 4, md: 6},
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 300ms ease',
            '&:hover':{
                borderRadius: '30px',
            },

        }}>
            <Box sx={{
                flex: 1,
                width: '100%',
                mx: 'auto',
                display: 'grid',
                gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr', md: '1.5fr 1fr 1fr 1fr'},
                gap: 2,
                '& :where(.footerWidget img)': {
                    display: 'flex',
                },
                '& .footerWidget': {
                    p: 1,
                    pt: 3,
                    userSelect: 'none',
                    '& img': {
                        maxWidth: '160px',
                        mx: 'auto',
                        textAlign: 'center'
                    },
                    '& .footerHeading': {
                        pointerEvents: 'none',
                        fontSize: '1rem',
                        fontWeight: 400,
                        letterSpacing: 1,
                        color: lighten(theme.palette.secondary.main, 0.3),
                        mb: 2,
                    },
                    '& .footerLink': {
                        mb: 0.5,
                        textIndent: '10px',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all 180ms ease',
                        width: 'max-content',
                        color: alpha(theme.palette.secondary.contrastText, 0.8),
                        '&:hover': {
                            color: theme.palette.primary.main,
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
            }}>
                <Box className={'footerWidget'}>
                    <img src={logo} alt={'eternity forwarders'}/>
                </Box>
                <Box className={'footerWidget'}>
                    <Typography className={'footerHeading'} variant={'h6'}>Company</Typography>
                    <Typography className={'footerLink'}>About Us</Typography>
                    <Typography className={'footerLink'}>Group</Typography>
                    <Typography className={'footerLink'}>Services</Typography>
                    <Typography className={'footerLink'}>Clients</Typography>
                </Box>
                <Box className={'footerWidget'}>
                    <Typography className={'footerHeading'} variant={'h6'}>Connect</Typography>
                    <Typography className={'footerLink'}>Support</Typography>
                    <Typography className={'footerLink'}>Raise a Query</Typography>
                    <Typography className={'footerLink'}>Start Shipping</Typography>
                    <Typography className={'footerLink'}>Careers</Typography>
                </Box>
                <Box className={'footerWidget'}>
                    <Typography className={'footerHeading'} variant={'h6'}>Important Links</Typography>
                    <Typography className={'footerLink'}>Privacy Policy</Typography>
                    <Typography className={'footerLink'}>Disclaimer</Typography>
                    <Typography className={'footerLink'}>Terms & Conditions</Typography>
                    <Typography className={'footerLink'}>EEO Policy</Typography>
                </Box>
            </Box>
            {/*<svg _ngcontent-huv-c39="" aria-hidden="true" width="100%" height="8" fill="none"*/}
            {/*     xmlns="http://www.w3.org/2000/svg">*/}
            {/*    <pattern _ngcontent-huv-c39="" id="a" width="91" height="8" patternUnits="userSpaceOnUse">*/}
            {/*        <g _ngcontent-huv-c39="" clip-path="url(#clip0_2426_11367)">*/}
            {/*            <path _ngcontent-huv-c39=""*/}
            {/*                  d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"*/}
            {/*                  stroke="#E1E3E1" stroke-linecap="square"></path>*/}
            {/*        </g>*/}
            {/*    </pattern>*/}
            {/*    <rect _ngcontent-huv-c39="" width="100%" height="100%" fill="url(#a)"></rect>*/}
            {/*</svg>*/}
            <Divider sx={{
                borderColor: alpha(theme.palette.secondary.contrastText, 0.7),
                mb: 1,
            }}/>
            <Typography sx={{
                fontSize: '12px',
                color: alpha(theme.palette.secondary.contrastText, 0.7),
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': {
                    color: alpha(theme.palette.secondary.contrastText, 1),
                },
            }}>© {moment().format('YYYY')} Eternity Forwarders Pvt Ltd.</Typography>
        </Box>
    )
}