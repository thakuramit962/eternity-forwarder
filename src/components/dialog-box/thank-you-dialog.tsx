import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import thankYou from "../../assets/illustrations/success.svg";
import ThemeDialog from './theme-dialog';


export default function ThankYouDialog(props: any) {

    const { open, handleClose } = props


    return (
        <ThemeDialog open={open}
            onClickClose={handleClose}
            dialogBody={
                <ThankYouBox handleClose={handleClose} />
            } />
    )
}

const ThankYouBox = (props: any) => {

    const { handleClose } = props

    return (
        <Box sx={{
            width: '75vw',
            maxWidth: '550px',

            minHeight: '300px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            '& .dialogHead': {
                maxWidth: '320px',
                fontSize: '1.3rem',
                fontWeight: 500,
            },
            '& .dialogDes': {
                maxWidth: '320px',
                fontSize: '0.9rem',
            },
            '& .MuiButton-root': {
                height: '40px',
                borderRadius: '50vh',
                fontSize: '1rem',
                width: '90%',
                maxWidth: '300px',
                mx: 'auto'
            },
        }}>
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '& img': {
                    maxHeight: '200px',
                    objectFit: 'contain',
                    p:4,
                },
            }}>
                <img src={thankYou} alt={'thank you'} />
                <Typography className='dialogHead'>
                    Thank you for reaching out to us!
                </Typography>
                <Typography className='dialogDes'>
                    We appreciate your time and look forward to connecting with you soon.
                </Typography>
            </Box>
            <Button variant={'contained'} onClick={handleClose}>Okay</Button>
        </Box>
    )
}