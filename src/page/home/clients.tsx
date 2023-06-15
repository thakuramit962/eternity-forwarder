import React from 'react'
import {Box, Button, Typography, useTheme} from "@mui/material"
import lastMile from '../../assets/images/home/ship-with-us.png'
import carrierPartner from '../../assets/images/home/for-business.png'


export default function Clients() {

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
            }}>
                <Typography className={'heading'}>Clients</Typography>

            </Box>
        </Box>
    )
}