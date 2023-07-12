import React, {ChangeEvent, useState} from 'react'
import {
    alpha,
    Box,
    Toolbar,
    Typography,
    useScrollTrigger,
    useTheme, Tab, Tabs, Button, InputBase, TextField, InputAdornment, Backdrop, CircularProgress
} from "@mui/material"
import bg from '../../assets/images/hero-banner-1.jpg'
import trackIllustration from '../../assets/images/logistic-1.png'
import {MyLocation, Place} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {heroBanner} from "../../utils/sample-data";
import LoadingElement from "../../components/loading-element/loading-element";


const Hero = (props: any) => {

    const theme = useTheme()

    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    })

    const [value, setValue] = React.useState('trackTab')

    const isTrackTab = value === 'trackTab'

    const handleChange = (event: React.SyntheticEvent, newValue: string) => setValue(newValue)

    return (
        <Box component={'section'} className={'animate__animated animate__fadeIn'} sx={{
            minHeight: '90vh',
            backgroundImage: `linear-gradient(${alpha(theme.palette.text.primary, 0.1)}, ${alpha(theme.palette.text.primary, 0.4)}), url(${bg})`,
            backgroundColor: theme.palette.background.default,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            px: 3,
            pb: 8,
        }}>
            <Toolbar disableGutters sx={{
                height: scrolled ? '80px' : '90px',
                transition: 'all 300ms ease-in-out',
            }}/>
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                alignItems: 'center',
                width: '100%',
                maxWidth: '1100px',
                mx: 'auto',
            }}>
                <Box sx={{
                    flex: '1 1 400px',
                    pb: {xs: 0, sm: 10},
                    mx: 'auto',
                    '& .MuiTypography-root': {
                        textAlign: {xs: 'center', md: 'left'},
                        '&.MuiTypography-h2': {
                            maxWidth: '20ch',
                            fontWeight: 500,
                            fontSize: 'clamp(1.5rem, 8vw, 3rem)',
                            color: theme.palette.background.default,
                        },
                        '&.MuiTypography-body2': {
                            maxWidth: '550px',
                            fontSize: '1rem',
                            letterSpacing: '0.5px',
                            margin: {xs: 'auto', sm: 'auto', md: '0.5rem 0 0'},
                            color: alpha(theme.palette.background.default, 0.85),
                        },
                    },
                }}>
                    <Typography variant={'h2'}
                                className={'animate__animated animate__fadeInUp'}>{heroBanner.title}</Typography>
                    <Typography variant={'body2'} className={'animate__animated animate__fadeInUp'}>
                        {heroBanner.des}
                    </Typography>
                </Box>

                <Box className={'animate__animated animate__fadeIn animate__fast'}
                     sx={{
                         flex: '1 1 350px',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                     }}>
                    <Box sx={{
                        zIndex: 0,
                        background: alpha(theme.palette.background.paper, 0.2),
                        borderRadius: '20px',
                        minHeight: '350px',
                        width: '100%',
                        maxWidth: {xs: '100%', sm: '350px'},
                        overflow: 'hidden',
                        display: 'flex',
                        flexFlow: 'column',
                        '& .MuiTabs-root': {
                            position: 'relative',
                            borderRadius: '12px 12px 0 0',
                            '& .MuiTab-root': {
                                fontSize: theme.typography.pxToRem(18),
                                fontWeight: 600,
                                fontFamily: theme.typography.h1.fontFamily,
                                textTransform: 'none',
                                // py: 0.5,
                                color: theme.palette.primary.main,
                                '&.Mui-selected': {
                                    color: theme.palette.secondary.dark,
                                },
                            },
                            '& .MuiTabs-indicator': {
                                width: '100%',
                                zIndex: -1,
                                height: '100%',
                                borderRadius: '20px 20px 0 0',
                                background: theme.palette.background.paper,
                            },
                            '& .shape': {
                                height: '1rem',
                                position: 'absolute',
                                bottom: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                '& .st0': {
                                    fill: theme.palette.background.paper,
                                },
                            },
                        },

                        '& .formBlock': {
                            minHeight: '220px',
                            background: theme.palette.background.paper,
                            flex: 1,
                            width: '-webkit-fill-available',
                            mx: 'auto',
                            pt: 4,
                            pb: 3,
                            px: 3,
                            display: 'flex',
                            flexFlow: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            borderRadius: value === 'trackTab' ? '0 20px 20px' : '20px 0 20px 20px',
                            transition: 'border-radius 3000ms ease-in-out',
                            position: 'relative',
                            '& .ctaText': {
                                fontSize: '14px',
                                textAlign: 'center',
                                maxWidth: '30ch',
                                flex: 1,
                                mb: 2,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
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
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                            variant={'fullWidth'}>
                            <Tab disableRipple value="trackTab" label="Track"/>
                            <Tab disableRipple value="shipTab" label="Ship Now"/>

                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" className={'shape'}
                                 x="0px" y="0px" viewBox="0 0 512 256">
                                <path className="st0" d="M512,256H0c141.4,0,256-114.6,256-256C256,141.4,370.6,256,512,256z"/>
                            </svg>
                        </Tabs>

                        {value === 'trackTab' && <TrackingTab/>}
                        {value === 'shipTab' && <ShipNowTab/>}

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

const TrackingTab = () => {

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

    const track = () => {
        trackingNo
            ? navigate(`/track/${trackingNo}`)
            : setHelperText('Tracking no is required')
    }

    return (
        <Box className={'formBlock'}>
            <Typography className={'ctaText animate__animated animate__fadeInUp'} sx={{flexFlow: 'column'}}>
                <img src={trackIllustration} style={{maxHeight: '90px'}}/>

                Your trusted logistics partner
                {/*, seamlessly serving across India*/}
            </Typography>

            <TextField className={'heroInputs animate__animated animate__fadeInUp'}
                       placeholder={'Enter your order id'} error={!!helperText}
                       helperText={helperText} onChange={(e) => checkTrackingNo(e)}/>

            <Button disableRipple variant={'contained'} fullWidth
                    className={'animate__animated animate__fadeInUp'}
                    disabled={!!helperText} onClick={track}>
                Track
            </Button>
        </Box>
    )
}


const ShipNowTab = () => {

    const theme = useTheme()
    const navigate = useNavigate()
    const [pickUpCity, setPickUpCity] = useState('')
    const [dropCity, setDropCity] = useState('')
    const [pinCodes, setPinCodes] = useState({pickUp: '', drop: ''})
    const [helperText, setHelperText] = useState({pickUp: '', drop: ''})
    const [error, setError] = useState({pickUp: false, drop: false})
    const [checking, setChecking] = useState(false)


    const checkPinCode = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, inputId: number) => {
        console.log(pinCodes)

        if (e.target.value.length <= 6) {
            if (inputId == 1) setPinCodes({pickUp: e.target.value, drop: pinCodes.drop})
            else setPinCodes({pickUp: pinCodes.pickUp, drop: e.target.value})

            if (/^[1-6][0-9]{5}$/.test(e.target.value) == true) {
                console.log('running', e.target.value)
                // if (e.target.value == pinCodes.pickUp || e.target.value == pinCodes.drop) {
                //     if (inputId == 1) {
                //         setHelperText({pickUp: 'Can\'t be same as destination', drop: helperText.drop})
                //         setError({pickUp: true, drop: error.drop})
                //     } else {
                //         setHelperText({pickUp: helperText.pickUp, drop: 'Can\'t be same as pickup'})
                //         setError({pickUp: error.pickUp, drop: true})
                //     }
                // } else {
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
                // }
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

    const onSubmit = () => {
        console.log(pinCodes)
    }

    return (
        <Box className={'formBlock'}>
            {checking && <LoadingElement/>}

            <Typography className={'ctaText animate__animated animate__fadeInUp'}>
                Seamlessly serving across India
            </Typography>

            <TextField className={'heroInputs animate__animated animate__fadeInUp'}
                       placeholder={'Pickup pincode'}
                       helperText={helperText.pickUp}
                       inputProps={{inputMode: 'numeric', pattern: '[1-6][0-9]{5}'}}
                       InputProps={{
                           startAdornment: <InputAdornment position="start"><MyLocation/></InputAdornment>,
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
                           startAdornment: <InputAdornment position="start"><Place/></InputAdornment>,
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
                    onClick={onSubmit}>
                Proceed
            </Button>
        </Box>
    )
}


export default Hero

