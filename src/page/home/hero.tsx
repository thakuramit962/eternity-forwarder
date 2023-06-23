import React, {useState} from 'react'
import {
    alpha,
    Box,
    Toolbar,
    Typography,
    useScrollTrigger,
    useTheme, Tab, Tabs, Button, InputBase, TextField, InputAdornment
} from "@mui/material"
import bg from '../../assets/images/hero-banner-1.jpg'
// import bg from '../../assets/images/bg-1.png'
import {MyLocation, Place} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";


const Hero = (props: any) => {

    const theme = useTheme()
    const navigate = useNavigate()

    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    })

    const [value, setValue] = React.useState('trackTab')

    const isTrackTab = value === 'trackTab'

    const handleChange = (event: React.SyntheticEvent, newValue: string) => setValue(newValue)

    return (
        <Box  component={'section'} className={'animate__animated animate__fadeIn'} sx={{
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
                    <Typography variant={'h2'} className={'animate__animated animate__fadeInUp'}>Logistics Meets<br/>Reliability Here!</Typography>
                    <Typography variant={'body2'} className={'animate__animated animate__fadeInUp'}>
                        Your trusted logistics partner, seamlessly serving both urban and rural areas across India by
                        ensuring efficient transportation, timely deliveries, and supply chain optimization.
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
                        },
                    }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                            variant={'fullWidth'}>
                            <Tab disableRipple value="trackTab" label="Track"/>
                            <Tab disableRipple value="shipTab" label="Ship Now"/>

                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" className={'shape'}
                                 x="0px" y="0px"
                                 viewBox="0 0 512 256">
                                <path className="st0"
                                      d="M512,256H0c141.4,0,256-114.6,256-256C256,141.4,370.6,256,512,256z"/>
                            </svg>
                        </Tabs>

                        {value === 'trackTab' &&
                        <Box className={'formBlock'}>

                            <Typography className={'ctaText animate__animated animate__fadeInUp'}>
                                Your trusted logistics partner, seamlessly serving across India
                            </Typography>

                            <TextField className={'heroInputs animate__animated animate__fadeInUp'} placeholder={'Enter your tracking number'}
                                       helperText={'Required'}/>

                            <Button disableRipple variant={'contained'} fullWidth className={'animate__animated animate__fadeInUp'}
                            onClick={()=> navigate('/track')}>
                                Track
                            </Button>
                        </Box>
                        }
                        {value === 'shipTab' &&
                        <Box className={'formBlock'}>

                            <Typography className={'ctaText animate__animated animate__fadeInUp'}>
                                Seamlessly serving across India
                            </Typography>

                            <TextField className={'heroInputs animate__animated animate__fadeInUp'}
                                       placeholder={'Pickup pincode'}
                                       helperText={'Required'}
                                       InputProps={{
                                           startAdornment: <InputAdornment
                                               position="start"><MyLocation/></InputAdornment>,
                                       }}
                            />
                            <TextField className={'heroInputs animate__animated animate__fadeInUp'} placeholder={'Delivery pincode'}
                                       helperText={'Required'}
                                       InputProps={{
                                           startAdornment: <InputAdornment position="start"><Place/></InputAdornment>,
                                       }}
                            />

                            <Button disableRipple variant={'contained'} fullWidth className={'animate__animated animate__fadeInUp'}>
                                Proceed
                            </Button>
                        </Box>
                        }

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Hero


// '& .MuiTabs-root': {
//     borderRadius: '12px',
//         p: '4px',
//         boxShadow: `0 0 12px -5px #83838370 inset`,
//         minHeight: '36px',
//         '& .MuiTab-root': {
//         fontSize: theme.typography.pxToRem(16),
//             fontWeight: 500,
//             fontFamily: theme.typography.h1.fontFamily,
//             textTransform: 'none',
//             borderRadius: '12px',
//             py: 0.5,
//             minHeight: '36px',
//             '&.Mui-selected': {
//             color: theme.palette.secondary.contrastText,
//         },
//     },
//     '& .MuiTabs-indicator': {
//         width: '100%',
//             zIndex: -1,
//             height: '100%',
//             borderRadius: '12px',
//         // backgroundColor: theme.palette.primary.main,
//     },
// },
