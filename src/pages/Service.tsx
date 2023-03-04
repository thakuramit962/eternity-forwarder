import React from 'react'
import {Box, Button, TextField, Typography, useTheme} from "@mui/material"
import heroImage from '../assets/images/logistic-1.png'
import PageContainer from "../components/page-container";


export default function Service() {

    const theme = useTheme()

    return (
        <PageContainer>
            <Box sx={{
                height: {xs: 'calc(100vh - 120px)', sm: 'min(calc(100vh - 120px), 600px)'},
                display: 'flex',
                flexFlow: {xs: 'column', sm: 'row'},
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
            }}>
                <Box sx={{
                    flex: 1,
                    background: theme.palette.background.default,
                    p: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        maxWidth: '380px',
                        display: 'flex',
                        flexFlow: 'column',
                        justifyContent: 'center',
                        '& h3': {
                            fontSize: `clamp(1.2rem, 8vw, 2.4rem)`,
                            maxWidth: '80%',
                        },
                        '& p': {},
                    }}>
                        <Typography variant={'h3'}>Real time tracking of your order.</Typography>
                        <Typography variant={'body1'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>

                        <Box sx={{
                            mt: 6,
                            display: 'flex',
                            alignItems: 'center',
                            position: 'relative',
                            maxWidth: {xs: '98%', sm: '80%'},
                            '& .MuiButton-root': {
                                position: 'absolute',
                                right: '4px',
                                borderRadius: '8px',
                                width: '80px',
                                '&:hover': {
                                    background: theme.palette.primary.main
                                },
                            },
                        }}>
                            <TextField size={'small'} placeholder={'LR number'}
                                       sx={{
                                           width: '100%',
                                           '& .MuiOutlinedInput-notchedOutline': {
                                               borderRadius: '12px',
                                               borderColor: theme.palette.primary.main,
                                               borderWidth: '2px'
                                           },
                                       }}/>
                            <Button variant={'contained'} color={'secondary'}>Track</Button>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    order: {xs: -1, sm: 2},
                    flex: 1,
                    display: 'grid',
                    placeItems: {xs: 'end', sm: 'center'},
                    '& img': {
                        width: 'clamp(150px, 90%, 500px)',
                        mx: 'auto',
                    },
                }}>
                    <img src={heroImage} alt={'demo-image'}/>
                </Box>
            </Box>
        </PageContainer>
    )
}