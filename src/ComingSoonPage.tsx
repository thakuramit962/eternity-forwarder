import React from "react"
import {Box, Typography, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom"

import logo from './logo.svg'
import websiteBanner from './assets/images/app-banner.png'


export default function ComingSoonPage() {

    const navigate = useNavigate()

    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            gap: 2,
            minHeight: '100vh',
            background: `#f8ffff url(${websiteBanner})`,
            backgroundSize: {xs: 'contain', sm: 'cover'},
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            '& img': {
                maxHeight: '100px'
            },
        }}>

            <Typography sx={{
                pb: 14,
                textAlign: 'center',
                fontSize: 'clamp(1.1rem, 8vw, 2rem)',
                fontWeight: 600,
            }}>
                Website is under construction
            </Typography>


            <Typography sx={{
                fontSize: '0.9rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                position: 'absolute',
                bottom: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                '& span':{
                    cursor: 'pointer',
                    color: '#222',
                    '&:hover':{
                        color: '#000',
                        fontWeight: 600,
                    },
                },
            }}>
                <span onClick={()=>navigate('/privacy-policy')}>Privacy Policy</span>
                |
                <span onClick={()=>navigate('/terms-and-conditions')}>Terms & Conditions</span>
            </Typography>

        </Box>
    )
}