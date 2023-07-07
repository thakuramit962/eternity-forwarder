import React, {ChangeEvent, KeyboardEventHandler, useState} from 'react'
import NewPageContainer from "../../components/new-page-container";
import {
    alpha,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    InputAdornment, Stack,
    Tab,
    Tabs,
    TextField,
    Typography,
    useTheme
} from "@mui/material";
import map from "../../assets/images/map.png";
import bannerBg from "../../assets/images/hero-banner-1.jpg"
import Toolbar from "@mui/material/Toolbar";
import LoadingElement from "../../components/loading-element/loading-element";
import {MyLocation, Password, PhoneRounded, Place} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import OTPInput from "./otp-inputs";


export default function BookService() {

    const theme = useTheme()
    const navigate = useNavigate()
    const [pickUpCity, setPickUpCity] = useState('')
    const [dropCity, setDropCity] = useState('')
    const [pinCodes, setPinCodes] = useState({pickUp: '', drop: ''})
    const [helperText, setHelperText] = useState({pickUp: '', drop: ''})
    const [error, setError] = useState({pickUp: false, drop: false})
    const [checking, setChecking] = useState(false)
    const [otp, setOtp] = useState<string>()

    const [formState, setFormState] = useState<'pinCodeEntries' | 'mobileEntry' | 'otpEntry' | 'submitted'>('pinCodeEntries')


    const checkPinCode = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, inputId: number) => {

        if (e.target.value.length <= 6) {
            if (inputId == 1) setPinCodes({pickUp: e.target.value, drop: pinCodes.drop})
            else setPinCodes({pickUp: pinCodes.pickUp, drop: e.target.value})

            if (/^[1-6][0-9]{5}$/.test(e.target.value) == true) {
                console.log('running', e.target.value)
                setChecking(true)
                if (inputId == 1) {
                    setHelperText({pickUp: '', drop: helperText.drop})
                } else {
                    setHelperText({pickUp: helperText.pickUp, drop: ''})
                }
                setTimeout(() => {
                    setChecking(false)
                    if (e.target.value == '123456') {
                        if (inputId == 1) {
                            setHelperText({pickUp: 'Not Serviceable', drop: helperText.drop})
                            setError({pickUp: true, drop: error.drop})
                        } else {
                            setHelperText({pickUp: helperText.pickUp, drop: 'Not Serviceable'})
                            setError({pickUp: error.pickUp, drop: true})
                        }
                    } else {
                        if (inputId == 1) {
                            setPickUpCity('Your City Name')
                            setHelperText({pickUp: '', drop: ''})
                            setError({pickUp: false, drop: error.drop})
                        } else {
                            setDropCity('Your City Name')
                            setHelperText({pickUp: '', drop: ''})
                            setError({pickUp: error.pickUp, drop: false})
                        }
                    }
                }, 700)
            } else {
                if (inputId == 1) {
                    setHelperText({pickUp: 'Invalid pincode', drop: helperText.drop})
                    setPickUpCity('')
                } else {
                    setHelperText({pickUp: helperText.pickUp, drop: 'Invalid pincode'})
                    setDropCity('')
                }
            }

        } else if (e.target.value.length == 0) {
            console.log('r 2', e.target.value)
            setHelperText({pickUp: helperText.pickUp, drop: helperText.drop})
            if (inputId == 1) {
                setPickUpCity('')
                setError({pickUp: false, drop: error.drop})
                setHelperText({pickUp: '', drop: helperText.drop})
            } else {
                setDropCity('')
                setError({pickUp: error.pickUp, drop: false})
                setHelperText({pickUp: helperText.pickUp, drop: ''})
            }
        }
    }

    const handleOTPChange = (otp: string) => {
        setOtp((prevConfig) => (otp))
    }

    const onClickProceed = () => {
        console.log(pinCodes)
        setFormState('mobileEntry')
    }
    const onClickSendOtp = () => {
        console.log(pinCodes)
        setFormState('otpEntry')
    }
    const onSubmitOtp = () => {
        console.log(otp)
        setFormState('submitted')
    }

    return (
        <NewPageContainer sx={{
            background: 'none',
        }}>
            <Box component={'section'} className={'animate__animated animate__fadeIn'} sx={{
                minHeight: 'min(100vh, 700px)',
                backgroundImage: `linear-gradient(${alpha(theme.palette.text.primary, 0.1)}, ${alpha(theme.palette.text.primary, 0.4)}), url(${bannerBg})`,
                backgroundColor: theme.palette.background.default,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignContent: 'center',
            }}>

                <Toolbar disableGutters sx={{
                    height: '90px',
                    transition: 'all 300ms ease-in-out',
                }}/>

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap-reverse',
                    alignItems: 'stretch',
                    flex: 1,
                    width: '100%',
                    minHeight: 'min(90vh, 700px)',
                }}>

                    <Box sx={{
                        flex: `2 1 400px`,
                        // backgroundImage: `linear-gradient(150deg, #0c0901, #473619, #af920b)`,
                        // background: theme.palette.secondary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '& img': {
                            height: '90%',
                            width: '90%',
                            maxHeight: 'min(80vh, 500px)',
                            objectFit: 'contain',
                        },
                    }}>
                        <img src={map} alt={'connectivity map'}/>
                    </Box>

                    <Box sx={{
                        flex: '1 1 300px',
                        background: '#fff',
                        boxShadow: '0 0 17px #83838370',
                        minHeight: {xs: '80vh', sm: 'auto'},
                    }}>
                        <Box sx={{
                            height: '100%',
                            width: '90%',
                            maxWidth: '380px',
                            mx: 'auto',
                            my: 2,
                            display: 'flex',
                            flexFlow: 'column',
                            justifyContent: 'center',
                            gap: 3,
                            '& .headingBlock': {
                                mb: 3,
                                display: 'flex',
                                flexFlow: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                alignContent: 'center',
                                '& .formHead': {
                                    fontSize: '1.25rem',
                                    lineHeight: '1.5rem',
                                    fontWeight: 600,
                                    color: theme.palette.secondary.main,
                                },
                                '& .headDes': {
                                    fontSize: '0.875rem',
                                    lineHeight: '1.25rem',
                                    color: theme.palette.secondary.light,
                                },
                            },
                            '& .formBlock': {
                                mx: 'auto',
                                width: '100%',
                                maxWidth: '300px',
                                position: 'relative',
                                py: 3,
                                '& .formItems': {
                                    width: '100%',
                                    minHeight: '200px',
                                    display: 'flex',
                                    flexFlow: 'column',
                                    justifyContent: 'flex-end',
                                },
                                '& .heroInputs': {
                                    borderRadius: '12px',
                                    width: '100%',
                                    minHeight: '64px',
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
                                                },
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: theme.palette.secondary.main,
                                            },
                                        },
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '12px',
                                        borderWidth: '2px',
                                    },
                                    '& .MuiFormHelperText-root': {
                                        mt: 0,
                                    },
                                    '& input': {
                                        p: '10px 0',
                                        textTransform: 'uppercase',
                                        fontWeight: 700,
                                        letterSpacing: '1px',
                                        color: theme.palette.secondary.light,
                                        '&::placeholder': {
                                            textTransform: 'none',
                                            fontWeight: 400,
                                            letterSpacing: '0px',
                                            fontSize: '14px'
                                        },
                                    },
                                },
                                '& .MuiButton-root': {
                                    borderWidth: '2px',
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    minHeight: '50px',
                                    mt: 1,
                                    fontSize: '1.2rem',
                                    cursor: 'pointer',
                                    transition: 'all 150ms ease-in-out',
                                    '&:hover': {
                                        '&:active': {
                                            transform: 'scale(0.98)',
                                        },
                                    },
                                },
                                '& .loadingElement': {
                                    background: `radial-gradient(${alpha(theme.palette.text.secondary, 0.07)} 20%, ${alpha(theme.palette.text.secondary, 0)} 80%)`,
                                    position: 'absolute',
                                    inset: 0,
                                },
                            },
                        }}>
                            {
                                formState == 'pinCodeEntries'
                                    ? <Box className={'formBlock'}>
                                        {checking && <LoadingElement/>}

                                        <Box className={'headingBlock'}>
                                            <Typography className={'formHead animate__animated animate__fadeInUp'}>
                                                Enter location details
                                            </Typography>
                                            <Typography className={'headDes animate__animated animate__fadeInUp'}>
                                                Seamlessly serving across India
                                            </Typography>
                                        </Box>

                                        <Box className={'formItems'}>
                                            <TextField className={'heroInputs animate__animated animate__fadeInUp'}
                                                       placeholder={'Pickup pincode'}
                                                       helperText={helperText.pickUp}
                                                       inputProps={{inputMode: 'numeric', pattern: '[1-6][0-9]{5}'}}
                                                       InputProps={{
                                                           startAdornment: <InputAdornment
                                                               position="start"><MyLocation/></InputAdornment>,
                                                           endAdornment: <InputAdornment position="start" sx={{
                                                               '& p': {
                                                                   color: theme.palette.success.main,
                                                                   fontSize: '14px',
                                                                   fontWeight: 600,
                                                               },
                                                           }}>{pickUpCity}</InputAdornment>,
                                                       }}
                                                       error={error.pickUp}
                                                       value={pinCodes.pickUp}
                                                       onChange={(e) => checkPinCode(e, 1)}
                                            />

                                            <TextField className={'heroInputs animate__animated animate__fadeInUp'}
                                                       placeholder={'Delivery pincode'}
                                                       helperText={helperText.drop}
                                                       inputProps={{inputMode: 'numeric', pattern: '[1-6][0-9]{5}'}}
                                                       InputProps={{
                                                           startAdornment: <InputAdornment
                                                               position="start"><Place/></InputAdornment>,
                                                           endAdornment: <InputAdornment position="start" sx={{
                                                               '& p': {
                                                                   color: theme.palette.success.main,
                                                                   fontSize: '14px',
                                                                   fontWeight: 600,
                                                               },
                                                           }}>{dropCity}</InputAdornment>,
                                                       }}
                                                       error={error.drop}
                                                       value={pinCodes.drop}
                                                       onChange={(e) => checkPinCode(e, 2)}
                                            />

                                            <Button disableRipple variant={'contained'} fullWidth
                                                    disabled={
                                                        (pinCodes.pickUp != '' || pinCodes.drop != '') && (pickUpCity == '' || dropCity == '')
                                                    }
                                                    className={'animate__animated animate__fadeInUp'}
                                                    onClick={onClickProceed}>
                                                Proceed
                                            </Button>
                                        </Box>

                                    </Box>
                                    : formState == 'mobileEntry'
                                    ? <Box className={'formBlock'}>
                                        {checking && <LoadingElement/>}

                                        <Box className={'headingBlock animate__animated animate__fadeInUp'}>
                                            <Typography className={'formHead'}>
                                                Enter your Mobile Number
                                            </Typography>

                                            <Typography className={'headDes'}>
                                                Seamlessly serving across India
                                            </Typography>
                                        </Box>

                                        <Box className={'formItems animate__animated animate__fadeInUp'}>

                                            <TextField className={'heroInputs animate__animated animate__fadeInUp'}
                                                       placeholder={'XXXX XXX XXX'}
                                                       helperText={helperText.drop}
                                                       inputProps={{inputMode: 'numeric', pattern: '[6789][0-9]{5}'}}
                                                       InputProps={{
                                                           startAdornment: <InputAdornment
                                                               position="start">+91</InputAdornment>,
                                                           endAdornment: <InputAdornment position="start" sx={{
                                                               '& p': {
                                                                   color: theme.palette.success.main,
                                                                   fontSize: '14px',
                                                                   fontWeight: 600,
                                                               },
                                                           }}>{dropCity}</InputAdornment>,
                                                       }}
                                                       error={error.drop}
                                                // value={pinCodes.drop}
                                                // onChange={(e) => checkPinCode(e, 2)}
                                            />
                                            <Stack direction={'row'} sx={{
                                                alignItems: 'flex-start',
                                                '& .MuiTypography-root': {
                                                    mt: 1,
                                                },

                                            }}>
                                                <Checkbox size={'small'}/>
                                                <Typography variant={'caption'}>
                                                    I have read and I accept the <Link to={'/'}>Privacy
                                                    Policy</Link> & <Link to={'/'}>Conditions of Use</Link>
                                                </Typography>
                                            </Stack>


                                            <Button disableRipple variant={'contained'} fullWidth
                                                    disabled={
                                                        (pinCodes.pickUp != '' || pinCodes.drop != '') && (pickUpCity == '' || dropCity == '')
                                                    }
                                                    className={'animate__animated animate__fadeInUp'}
                                                    onClick={onClickSendOtp}>
                                                Get OTP
                                            </Button>
                                        </Box>

                                    </Box>
                                    : formState == 'otpEntry'
                                        ? <Box className={'formBlock'}>
                                            {checking && <LoadingElement/>}

                                            <Box className={'headingBlock animate__animated animate__fadeInUp'}>
                                                <Typography className={'formHead'}>
                                                    OTP Verification
                                                </Typography>

                                                <Typography className={'headDes'} sx={{
                                                    color: 'green !important',
                                                    mt: 2,
                                                }}>
                                                    An otp has been sent to +91-8529698369
                                                </Typography>
                                            </Box>

                                            <Box className={'formItems animate__animated animate__fadeInUp'}
                                                 sx={{
                                                     '& .otpInputsContainer': {
                                                         display: 'flex',
                                                         justifyContent: 'center',
                                                         gap: '10px',
                                                         '& input': {
                                                             height: '40px',
                                                             width: '30px',
                                                             backgroundColor: 'transparent',
                                                             borderRadius: '8px',
                                                             border: `2px solid ${alpha(theme.palette.secondary.dark, 0)}`,
                                                             textAlign: 'center',
                                                             outline: 'none',
                                                             fontSize: '20px',
                                                             fontWeight: 600,
                                                             background: alpha(theme.palette.secondary.main, 0.1),
                                                             '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                                                                 WebkitAppearance: 'none',
                                                                 margin: 0,
                                                             },
                                                             '&[type=number]': {
                                                                 MozAppearance: 'textfield',
                                                             },
                                                             '&:focus': {
                                                                 border: `2px solid ${theme.palette.secondary.dark}`,
                                                             },
                                                         },
                                                     },
                                                 }}>

                                                <div className="otpInputsContainer">
                                                    <OTPInput inputType={'number'} shouldAutoFocus
                                                              value={otp}
                                                              onChange={handleOTPChange}
                                                              renderInput={(props) => <input {...props} />}/>
                                                </div>

                                                <Button disableRipple variant={'contained'} fullWidth
                                                        disabled={
                                                            (pinCodes.pickUp != '' || pinCodes.drop != '') && (pickUpCity == '' || dropCity == '')
                                                        }
                                                        className={'animate__animated animate__fadeInUp'}
                                                        onClick={onSubmitOtp}>
                                                    Get OTP
                                                </Button>
                                            </Box>

                                        </Box>
                                        : <p>Thank You</p>
                            }


                        </Box>

                    </Box>

                </Box>


            </Box>

        </NewPageContainer>
    )
}