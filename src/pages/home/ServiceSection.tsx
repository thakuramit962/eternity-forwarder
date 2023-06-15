import {alpha, Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useParallax} from "react-scroll-parallax";
import truckIllustration from "../../assets/images/truck-illustration.svg";
import React from "react";

const ServiceSection = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'))

    const service1 = useParallax<HTMLDivElement>(isMobile ? {translateX: [-15, 0, 'easeInQuad']} : {})
    const service2 = useParallax<HTMLDivElement>(isMobile ? {translateX: [15, 0, 'easeInQuad']} : {})
    const service3 = useParallax<HTMLDivElement>(isMobile ? {translateX: [-15, 0, 'easeInQuad']} : {})
    const service4 = useParallax<HTMLDivElement>(isMobile ? {translateX: [15, 0, 'easeInQuad']} : {})

    return (
        <Box id={'serviceSection'} sx={{
            mt: {xs: 6, sm: 1},
            minHeight: '100vh',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            '& .bodyText': {
                fontSize: theme.typography.pxToRem(15),
            },
            '& .serviceBlockContainer': {
                width: '100%',
                maxWidth: '950px',
                mx: 'auto',
                '& .serviceBlock': {
                    position: 'relative',
                    border: `2px solid ${alpha(theme.palette.primary.main, 0.9)}`,
                    borderRadius: '20px',
                    width: {xs: 'auto', sm: '80%', md: '65%', lg: '60%'},
                    maxWidth: '550px',
                    minHeight: '130px',
                    p: 2,
                    mb: {xs: 3, sm: 4, md: 5},
                    '& img': {
                        position: 'absolute',
                        bottom: '-9px',
                        width: {xs: 0, md: '140px'},
                        '&.right': {
                            right: '-140px',
                            transform: 'scaleX(-1)',
                        },
                        '&.left': {
                            left: '-140px',
                        },
                    },
                    '&:hover': {
                        cursor: 'pointer',
                        border: `2px solid ${alpha(theme.palette.primary.main, 0.9)}`,
                        // '& h6': {
                        //     color: theme.palette.secondary.main,
                        // },

                    },
                    '& h6': {
                        textAlign: 'center',
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: theme.palette.primary.main,
                        mb: 1,
                        transition: 'all 300ms ease-in-out',
                    },
                    '& .serviceDescription': {
                        fontSize: theme.typography.pxToRem(15),
                        textAlign: 'center',
                        // pl: {xs: 0, sm: 1, md: 3,},
                        textIndent: '1rem',
                    },
                },
            },

            '& .missionTechnologyContainer': {
                minHeight: '200px',
                mt: 4, mb: 8,
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                columnGap: {xs: 2, md: 4},
                width: '100%',
                textAlign: 'center',
                '& .missionTechnologyBlock': {
                    display: 'flex',
                    flexFlow: 'column',
                    flex: `1 1 200px`,
                    maxWidth: '500px',
                    borderRadius: '20px',
                    px: 3, py: 4,
                    overflow: ' hidden',
                    backgroundColor: alpha(theme.palette.primary.main, 0.01),
                    boxShadow: `0 2px 25px -7px #83838360`,
                    cursor: 'pointer',
                    transition: 'border 700ms ease-in-out',
                    '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.2),
                        boxShadow: `0 4px 17px -4px #83838380`,
                        '& .blockImage': {
                            backgroundColor: theme.palette.primary.main,
                            '& svg': {
                                color: theme.palette.secondary.contrastText,
                                fontSize: '5rem',
                            },
                        },
                        '& .blockDes': {
                            color: alpha(theme.palette.text.primary, 0.9),
                        },
                    },
                    '& .blockImage': {
                        minHeight: '80px',
                        display: 'grid',
                        placeItems: 'center',
                        width: '100px',
                        height: '100px',
                        borderRadius: '20px',
                        outline: `2px solid ${theme.palette.primary.main}`,
                        outlineOffset: '2px',
                        mx: 'auto',
                        transition: 'all 700ms ease-in-out',
                        mb: 2,
                        '& svg': {
                            color: theme.palette.primary.main,
                            fontSize: '4rem',
                            transition: 'all 700ms ease-in-out',
                        },
                    },
                    '& .blockHead': {
                        fontSize: theme.typography.pxToRem(20),
                        textAlign: 'center',
                        fontWeight: 700,
                        color: theme.palette.secondary.main,
                        mb: 2,
                    },
                    '& .blockDes': {
                        transition: 'all 300ms ease-in-out',
                        color: alpha(theme.palette.text.primary, 0.7),
                        textAlign: 'left',
                        textIndent: '1rem',
                    },
                    '& ul': {
                        transition: 'all 300ms ease-in-out',
                        color: alpha(theme.palette.text.primary, 0.7),
                        textAlign: 'left',
                        margin: 0,
                        pl: 2,
                        listStylePosition: 'outside',
                        '& li': {
                            mb: '4px'
                        },
                    },
                },
            },
        }}>
            <Typography variant={'h2'} className={'heading'} sx={{mb: 3}}>Solutions</Typography>
            <Box className={'serviceBlockContainer'}>
                <Box ref={service1.ref} className={'serviceBlock'} sx={{mx: 'auto'}}>
                    <img src={truckIllustration} alt={'truck'} className={'left'}/>
                    <Typography variant={'h6'}>Full Truck Load Shipping</Typography>
                    <Typography className={'bodyText serviceDescription'}>
                        Present in 20+ States, Full truck load shipping enables making trucks available from our
                        active states to anywhere in India ranging from 1 Metric Tonne upto 30 Metric Tonne
                    </Typography>
                </Box>
                <Box ref={service2.ref} className={'serviceBlock'} sx={{mx: 'auto'}}>
                    <img src={truckIllustration} alt={'truck'} className={'right'}/>
                    <Typography variant={'h6'}>Partial Truck Load Shipping</Typography>
                    <Typography className={'bodyText serviceDescription'}>
                        Focusing on commerce and industry and fulfilling there regular PTL requirements on dedicated
                        routes available in 9 states and expanding PTL networks to other locations
                    </Typography>
                </Box>
                <Box ref={service3.ref} className={'serviceBlock'} sx={{mx: 'auto'}}>
                    <img src={truckIllustration} alt={'truck'} className={'left'}/>
                    <Typography variant={'h6'}>Inter & Intra Drop Ship</Typography>
                    <Typography className={'bodyText serviceDescription'}>
                        Available in 9 states across North and West India – also rapidly ramping up capability to be
                        present across India – Pick up from anywhere in these states and delivery to anywhere within
                        48-72 Hours and 96 Hours for long haul deliveries
                    </Typography>
                </Box>
                <Box ref={service4.ref} className={'serviceBlock'} sx={{mx: 'auto'}}>
                    <img src={truckIllustration} alt={'truck'} className={'right'}/>
                    <Typography variant={'h6'}>Warehouse</Typography>
                    <Typography className={'bodyText serviceDescription'}>
                        Best in class warehousing capability to manage in-bounds, out-bounds and storage for all
                        industries. A tech enabled process and highly experienced workforce to manage your
                        fulfilment operations
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ServiceSection