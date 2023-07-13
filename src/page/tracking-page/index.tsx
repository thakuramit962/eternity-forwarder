import React, { ChangeEvent, useState } from 'react'
import NewPageContainer from "../../components/new-page-container";
import {
    alpha,
    Box,
    Button,
    FormControl,
    FormControlLabel, Radio,
    RadioGroup,
    TextField,
    Toolbar,
    Typography,
    useTheme
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/images/hero-banner-1.jpg";


export default function TrackingPage() {

    const theme = useTheme()

    return (
        <NewPageContainer sx={{
            backgroundImage: `linear-gradient(${alpha(theme.palette.text.primary, 0.1)}, ${alpha(theme.palette.text.primary, 0.4)}), url(${bg})`,
            backgroundColor: theme.palette.background.default,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            minHeight: { xs: '100vh', sm: 'min(100vh, 800px)' },
        }}>
            <Toolbar disableGutters sx={{
                height: '110px',
                transition: 'all 300ms ease-in-out',
            }} />
            <TrackPage />
        </NewPageContainer>
    )
}

const TrackPage = () => {

    const theme = useTheme()
    const navigate = useNavigate()

    const [trackingNo, setTrackingNo] = useState('')
    const [helperText, setHelperText] = useState('')

    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };


    const checkTrackingNo = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTrackingNo(e.target.value)
        if (e.target.value.length > 0) {
            // if (/^[0-9]$/.test(e.target.value) != true) {
            e.target.value.length < 3
                ? setHelperText('Order id too short')
                : setHelperText('')
            // } else {
            //     setHelperText('')
            // }
        } else {
            setHelperText('')
        }
    }

    const onSubmit = () => {
        if (trackingNo.length > 0) {
            setHelperText('Enter tracking ID')
            if (trackingNo.length < 3) setHelperText('Order id too short')
            else {
                setHelperText('')
                navigate(`${trackingNo}`)
            }
        } else {
            setHelperText('')
        }

    }

    return (
        <Box sx={{
            minHeight: { xs: '70vh', sm: 'min(70vh, 500px)' },
            width: '90%',
            maxWidth: '767px',
            mx: 'auto',
            textAlign: 'center',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px',
            boxShadow: 'none',
            background: 'none',
            // boxShadow: {xs: `1px 2px 0px 5px ${ theme.palette.text.primary } `, sm: 'none'},
            // background: {xs: theme.palette.primary.main, sm: 'none'},
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
                        color: theme.palette.primary.main,
                        textAlign: 'center',
                    }}>
                    Track Your Order
                </Typography>

                <Typography variant={'h3'} className={'animate__animated animate__fadeInUp'} sx={{
                    mt: 2,
                    fontSize: '1rem',
                    color: alpha(theme.palette.secondary.contrastText, 0.9),
                    textAlign: 'center',
                    maxWidth: '600px',
                    width: '90%',
                    mx: 'auto',
                }}>
                    Eternity Solutions is committed to being a trusted partner throughout India.
                </Typography>
            </Box>

            <FormControl sx={{
                ml: 4,
                alignSelf: 'flex-start',
                '& .MuiFormControlLabel-root': {
                    color: theme.palette.secondary.contrastText,
                    '& .MuiButtonBase-root': {
                        color: theme.palette.secondary.contrastText,
                    },
                    '&:has(.MuiButtonBase-root.Mui-checked)': {
                        color: theme.palette.primary.main,
                        '& .MuiButtonBase-root': {
                            color: theme.palette.primary.main,
                        },
                    },
                },
            }}>
                <RadioGroup row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Shipment ID" />
                    <FormControlLabel value="male" control={<Radio />} label="Order ID/ Ref ID" />
                </RadioGroup>
            </FormControl>

            <Box className={'animate__animated animate__fadeInUp animate_fast'} sx={{
                width: '90%',
                maxWidth: '767px',
                mb: 3,
                borderRadius: '20px',
                // boxShadow: {xs: 'none', sm: `1px 2px 0px 5px ${ theme.palette.text.primary } `},
                // background: {xs: 'none', sm: theme.palette.background.paper},
                boxShadow: `1px 2px 0px 5px ${theme.palette.primary.main} `,
                background: theme.palette.secondary.dark,
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
                        color: theme.palette.secondary.contrastText,
                        '&::placeholder': {
                            textTransform: 'none',
                            fontWeight: 400,
                            letterSpacing: '0px',
                            // fontSize: '14px'
                        },
                    },
                },
                '& .trackButton': {
                    maxWidth: { xs: '100%', sm: '200px' },
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
                    helperText={helperText} onChange={(e) => checkTrackingNo(e)} />

                <Button disableRipple variant={'contained'} fullWidth
                    className={'trackButton animate__animated animate__fadeInUp animate_slow'}
                    disabled={!!helperText} color={'primary'} onClick={onSubmit}>
                    Track
                </Button>
            </Box>
        </Box>
    )
}