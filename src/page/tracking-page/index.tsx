import React, {ChangeEvent, useState} from 'react'
import NewPageContainer from "../../components/new-page-container";
import {Box, Button, TextField, Toolbar, Typography, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";


export default function TrackingPage() {

    return (
        <NewPageContainer>
            <Toolbar disableGutters sx={{
                height: '110px',
                transition: 'all 300ms ease-in-out',
            }}/>
            <TrackPage/>
        </NewPageContainer>
    )
}

const TrackPage = () => {

    const theme = useTheme()
    const navigate = useNavigate()

    const [trackingNo, setTrackingNo] = useState('')
    const [helperText, setHelperText] = useState('')

    const checkTrackingNo = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTrackingNo(e.target.value)
        if (e.target.value.length > 0) {
            if (/^[0-9]{7}$/.test(e.target.value) != true) {
                e.target.value.length < 3
                    ? setHelperText('Order id too short')
                    : setHelperText('Invalid order Id')
            } else {
                setHelperText('')
            }
        } else {
            setHelperText('')
        }
    }

    const onSubmit = () => {
        navigate(`${trackingNo}`)
    }

    return (
        <Box sx={{
            minHeight: {xs: '70vh', sm: 'min(80vh, 500px)'},
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{
                width: '90%',
                maxWidth: '767px',
                mx: 'auto',
                minHeight: '400px',
                textAlign: 'center',
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '20px',
                boxShadow: {xs: `1px 2px 0px 5px ${theme.palette.text.primary}`, sm: 'none'},
                background: {xs: theme.palette.primary.main, sm: 'none'},
                '& img': {
                    maxHeight: '200px',
                },
            }}>
                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Typography variant={'h3'} className={'animate__animated animate__fadeInUp'}
                                sx={{
                        fontSize: 'clamp(2rem, 8vw, 3rem)',
                        fontWeight: 500,
                        color: theme.palette.secondary.main,
                        textAlign: 'center',
                    }}>
                        Track Your Order
                    </Typography>

                    <Typography variant={'h3'} className={'animate__animated animate__fadeInUp'} sx={{
                        mt: 2,
                        fontSize: '1rem',
                        color: theme.palette.text.secondary,
                        textAlign: 'center',
                        maxWidth: '600px',
                        width: '90%',
                        mx: 'auto',
                    }}>
                        Eternity Solutions is committed to being a trusted partner throughout India.
                    </Typography>
                </Box>
                <Box className={'animate__animated animate__fadeInUp animate_fast'} sx={{
                    width: '90%',
                    maxWidth: '767px',
                    my: 3,
                    borderRadius: '20px',
                    boxShadow: {xs: 'none', sm: `1px 2px 0px 5px ${theme.palette.text.primary}`},
                    background: {xs: 'none', sm: theme.palette.background.paper},
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3,
                    p: 3,
                    pb: 1,
                    '& .heroInputs': {
                        // maxWidth :'400px',
                        borderRadius: '12px',
                        flex: `1 1 350px`,
                        minHeight: '64px',
                        borderWidth: '0 2px 0 0',
                        '& .MuiSvgIcon-root': {
                            height: '18px',
                            width: '18px',
                        },
                        '& .MuiInputBase-root': {
                            px: '10px',
                            '&.Mui-focused': {
                                '&.Mui-error': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: theme.palette.error.main,
                                        borderWidth: '0 0 2px 0',
                                    },
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderWidth: '0 0 2px 0',
                                    borderColor: theme.palette.secondary.main,
                                },
                            },
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: 0,
                            borderWidth: '0 0 2px 0',
                            borderColor: theme.palette.secondary.light,
                        },
                        '& .MuiFormHelperText-root': {
                            mt: 0,
                        },
                        '& input': {
                            p: '10px 0',
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            color: theme.palette.secondary.main,
                            '&::placeholder': {
                                textTransform: 'none',
                                fontWeight: 400,
                                letterSpacing: '0px',
                                // fontSize: '14px'
                            },
                        },
                    },
                    '& .trackButton': {
                        maxWidth: {xs: '100%', sm: '200px'},
                        flex: `1 1 200px`,
                        borderWidth: '2px',
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontWeight: 600,
                        minHeight: '50px',
                        mb: 1,
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        transition: 'all 150ms ease-in-out',
                        '&:hover': {
                            '&:active': {
                                transform: 'scale(0.98)',
                            },
                        },
                    },
                }}>
                    <TextField className={'heroInputs animate__animated animate__fadeInUp animate_slow'}
                               placeholder={'Enter your order id'} error={!!helperText}
                               helperText={helperText} onChange={(e) => checkTrackingNo(e)}/>

                    <Button disableRipple variant={'contained'} fullWidth
                            className={'trackButton animate__animated animate__fadeInUp animate_slow'}
                            disabled={!!helperText} color={'secondary'} onClick={onSubmit}>
                        Track
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}