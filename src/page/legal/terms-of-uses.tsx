import React from 'react'
import NewPageContainer from '../../components/new-page-container'
import { Toolbar, useTheme, Box, alpha, Typography } from '@mui/material'
import bg from "../../assets/images/hero-banner-1.jpg";


export default function TermsOfUses() {

    const theme = useTheme()

    return (
        <NewPageContainer>
            <Box component={'section'} className={'animate__animated animate__fadeIn'} sx={{
                minHeight: { xs: '200px', sm: '240px' },
                backgroundImage: `linear-gradient(${alpha(theme.palette.text.primary, 0.1)}, ${alpha(theme.palette.text.primary, 0.4)}), url(${bg})`,
                backgroundColor: theme.palette.background.default,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignContent: 'center',
                gap: 3,
                px: 3,
                pb: 4,
                '& .headingBlock': {
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    alignContent: 'center',
                    '& h1': {
                        fontSize: 'clamp(1.7rem, 8vw, 3.5rem)',
                        fontWeight: 600,
                        color: theme.palette.primary.light,
                    },
                    '& .headDes': {
                        color: alpha(theme.palette.secondary.contrastText, 0.85),
                    },
                },
            }}>

                <Toolbar disableGutters sx={{
                    height: '90px',
                    transition: 'all 300ms ease-in-out',
                }} />

                <Box className={'headingBlock'}>
                    <Typography variant={'h1'}>Terms and Conditions</Typography>
                    <Typography variant={'body2'} className={'headDes'}>Making the world a smaller place</Typography>
                </Box>

            </Box>
        </NewPageContainer>
    )
}