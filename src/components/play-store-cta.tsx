import React from 'react'
import {Box, Divider, Typography, useTheme} from "@mui/material"
import appStoreButton from "../assets/images/app-store-button.svg"
import qr from "../assets/images/qr.png"
import mobileMockup from "../assets/images/app-mockup.png"


export default function PlayStoreCta() {

    const theme = useTheme()

    return (
        <Box sx={{
            minHeight: '300px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap-reverse',
            transition: 'all 300ms ease',
            backgroundColor: theme.palette.primary.main,
            px: {xs: 2, sm: 4, md: 8},
            py: {xs: 4, sm: 2},
            gap: 2,
            '& img.mockup': {
                maxHeight: {xs: '200px', sm: '300px', md: '400px'},
                transform: `skewX(356deg) skewY(5deg)`,
                transition: 'all 300ms ease',
                '&:hover': {
                    transform: `skewX(356deg) skewY(5deg) translateY(-5px)`,
                },
            },
            '& .appStoreButton': {
                maxHeight: '60px',
            },
            '&:hover': {
                borderRadius: '30px',
            },
        }}>
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'center',
                gap: 2,
                minWidth: {xs: '100%', sm: 'auto'},
                '& h4': {
                    fontSize: 'clamp(1rem, 8vw, 2.3rem)',
                    fontWeight: 500,
                    textAlign: {xs: 'center', md: 'left'},
                },
                '& .MuiTypography-body2': {
                    fontSize: '0.9rem',
                    textAlign: {xs: 'center', md: 'left'},
                },
            }}>
                <Typography variant={'h4'}>Download the App<br/>for ease of access</Typography>
                <Typography variant={'body2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod</Typography>

                <Box sx={{
                    mt: 4,
                    display: 'flex',
                    flexFlow: {xs: 'column', sm: 'row'},
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: {xs: 'center', md: 'flex-start'},
                    rowGap: 1,
                    '& .MuiDivider-root': {
                        width: '60px',
                        order: {xs: -1, sm: 2},
                    },
                    '& .qr': {
                        order: {xs: -2, sm: 3},
                        height: '100px'
                    },
                }}>
                    <img src={appStoreButton} className={'appStoreButton'} alt={'play store button'}/>
                    <Divider>OR</Divider>
                    <img src={qr} className={'qr'} alt={'play store link qr'}/>
                </Box>
            </Box>
            <img src={mobileMockup} className={'mockup'}/>
        </Box>
    )
}