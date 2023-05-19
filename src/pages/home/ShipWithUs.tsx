import {alpha, Box, Button, Typography, useTheme} from "@mui/material";
import {KeyboardDoubleArrowRightRounded} from "@mui/icons-material";
import shipWithUs from "../../assets/images/ship-with-us.png";
import React from "react";

const ShipWithUs = () => {

    const theme = useTheme()

    return (
        <Box sx={{
            mt: 6,
            minHeight: 'min(80vh, 550px)',
        }}>
            <Typography variant={'h2'} className={'heading'}>Ship with Us</Typography>

            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap-reverse',
                alignItems: 'center',
                gap: 2,
                mt: {xs: 3, sm: 5, md: 7},
                '& img': {
                    maxHeight: {xs: '150px', sm: '200px', md: '300px'},
                    filter: 'opacity(0.9)',
                    // transform: 'scaleX(-1)',
                    mx: 'auto'
                },
            }}>

                <Box flex={1} sx={{
                    // alignSelf: 'flex-start',
                    '& .hook': {
                        mb: 1,
                        borderRadius: '8px',
                        px: 2,
                        ml: 2,
                        cursor: 'pointer',
                        // backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                        // borderLeft: `3px solid ${theme.palette.secondary.main}`,
                        backgroundColor: alpha(theme.palette.primary.main, 0.05),
                        borderLeft: `3px solid ${theme.palette.primary.main}`,
                        '&:hover': {

                            '& .hookTitle': {
                                color: theme.palette.primary.main,
                            },
                        },
                        '& .hookTitle': {
                            fontSize: '1rem',
                            fontFamily: theme.typography.h3.fontFamily,
                        },
                        '& .hookDes': {
                            fontSize: theme.typography.pxToRem(14)

                        },
                    },
                }} data-aos="fade-right"
                     data-aos-anchor-placement="top-bottom">
                    <Typography variant={'body1'} sx={{
                        mt: 2, mb: 2,
                        textIndent: '1rem',
                        maxWidth: '550px',
                        fontSize: theme.typography.pxToRem(15)
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </Typography>

                    <Box className={'hook'}>
                        <Typography className={'hookTitle'}>Reach</Typography>
                        <Typography className={'hookDes'}>
                            7000+ PIN CODES | 18 Branches across 20+ States
                        </Typography>
                    </Box>
                    <Box className={'hook'}>
                        <Typography className={'hookTitle'}>App Based Location Tracking</Typography>
                        <Typography className={'hookDes'}>
                            In-House developed Tech, enabling Application based Location tracking on order to order
                            basis
                        </Typography>
                    </Box>
                    <Box className={'hook'}>
                        <Typography className={'hookTitle'}>Business</Typography>
                        <Typography className={'hookDes'}>
                            INR 1840+ CRORES | SPREAD ACROSS ALL BUSINESSES
                        </Typography>
                    </Box>

                    <Button variant={'outlined'} sx={{
                        borderRadius: '12px',
                        borderWidth: '2px',
                        textTransform: 'none',
                        minWidth: '140px',
                        height: 40,
                        fontSize: '1rem',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        display: 'flex',
                        position: 'relative',
                        pr: 3,
                        m: '2rem 1rem',
                        mx: {xs: 'auto', sm: '1rem'},
                        '&:hover': {
                            borderWidth: '2px',
                            '& svg': {
                                animation: 'none',
                                opacity: 1,
                                right: '0.3rem',
                            },
                        },
                        '& svg': {
                            opacity: 1,
                            right: '0.3rem',
                            position: 'absolute',
                            animation: 'flowRight 800ms linear infinite',
                        },
                        ['@keyframes flowRight']: {
                            '0%': {
                                opacity: 0,
                                right: '1.2rem',
                            },
                            '100%': {
                                opacity: 1,
                                right: '0.3rem',
                            }
                        }
                    }}>
                        Ship Now
                        <KeyboardDoubleArrowRightRounded/>
                    </Button>


                </Box>

                <img src={shipWithUs} alt={'ship with us'} data-aos="fade-right"
                     data-aos-anchor-placement="top-bottom"/>

            </Box>

        </Box>
    )
}

export default ShipWithUs