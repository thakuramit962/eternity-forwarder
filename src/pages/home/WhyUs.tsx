import {alpha, Box, Typography, useTheme} from "@mui/material";
import demo from "../../assets/images/logistic-1.png";
import React from "react";

const WhyUs = () => {

    const theme = useTheme()

    return (
        <Box sx={{
            mt: {xs: 6},
            minHeight: 'min(90vh, 550px)',
            // background: `url(${onTime})`,
            // backgroundAttachment: 'fixed',
            // backgroundSize: 'contain'
            '& .bodyText': {
                fontSize: theme.typography.pxToRem(15),
            },
            '& .featureContainer': {
                mt: 5,
                '& .featureBlock': {
                    maxWidth: '768px',
                    mx: 'auto',
                    borderRadius: '12px',
                    p: 2,
                    display: "flex",
                    gap: 2,
                    flexWrap: 'wrap',
                    my: 3,
                    boxShadow: '0 3px 12px -4px #83838361',
                    transition: 'all 240ms ease-in-out',
                    '&:hover': {
                        boxShadow: '0 3px 17px -4px #83838390',
                    },
                    '& .featureImage': {
                        width: {xs: '100%', sm: '200px'},
                        display: 'grid',
                        placeItems: 'center',
                        // borderRadius: '8px',
                        // background: '#f16334',
                        '& img': {
                            maxHeight: '100px',
                            mx: 'auto',
                        },
                    },
                    '& .feature': {
                        flex: `1 1 300px`,
                        textAlign: {xs: 'center', sm: 'left'},
                        '& .title': {
                            fontWeight: 500,
                            fontSize: '1rem',
                            color: theme.palette.secondary.main,
                        },
                        '& .des': {
                            fontSize: '0.9rem',
                            color: alpha(theme.palette.text.primary, 0.7),
                        },
                    },
                },
            },
        }}>
            <Typography variant={'h2'} className={'heading'}>About Us</Typography>
            <Typography variant={'body1'} sx={{
                textAlign: 'center',
                // maxWidth: '500px',
                mx: 'auto',
                color: theme.palette.text.secondary,
                width: {xs: '100%', sm: '90%', md: '80%'},
                fontSize: theme.typography.pxToRem(15),
            }}>
                Founded in 2012, with a prime moto of digitising Logistics in the country, today, Eternity has
                placed its name prominently in the Indian Logistics Market. Eternity efficiently working in the PTL
                and FTL space with its core focus to connect every pin code in India by 2025. Operational in 20+
                States PAN India, Eternity has been adding value to the Logistics Industry in many ways.
            </Typography>

            <Box className={'featureContainer'}>
                <Box className={'featureBlock'}>
                    <Box className={'featureImage'}><img src={demo}/></Box>
                    <Box className={'feature'}>
                        <Typography variant={'h6'} className={'title'}>
                            Widespread Urban & Rural Reach
                        </Typography>
                        <Typography className={'des'}>
                            Eternity has developed its rural reach to the village level and has been able to deliver
                            to almost every pin code in the 9 states for its Drop Ship model.
                        </Typography>
                    </Box>
                </Box>
                <Box className={'featureBlock'}>
                    <Box className={'feature'}>
                        <Typography variant={'h6'} className={'title'}>
                            Tech Enabled
                        </Typography>
                        <Typography className={'des'}>
                            Offering its state of the art in-house developed technology helps smoothen the operation
                            and enables faster deliveries.
                        </Typography>
                    </Box>
                    <Box className={'featureImage'} sx={{order: {xs: -1, sm: 2}}}><img src={demo}/></Box>
                </Box>
                <Box className={'featureBlock'}>
                    <Box className={'featureImage'}><img src={demo}/></Box>
                    <Box className={'feature'}>
                        <Typography variant={'h6'} className={'title'}>
                            Wide Range of Services
                        </Typography>
                        <Typography className={'des'}>
                            We offer a wide range of services starting FTL, Drop Ship and Warehousing services
                            spread across a wide terriroty,
                        </Typography>
                    </Box>
                </Box>
                <Box className={'featureBlock'}>
                    <Box className={'feature'}>
                        <Typography variant={'h6'} className={'title'}>
                            Rapidly Growing
                        </Typography>
                        <Typography className={'des'}>
                            Eternity is rapidly growing and aiming to cover almost all pin codes across territories
                            to enable deliveries for our esteemed customers to every corner of the country.
                        </Typography>
                    </Box>
                    <Box className={'featureImage'} sx={{order: {xs: -1, sm: 2}}}><img src={demo}/></Box>
                </Box>
                <Box className={'featureBlock'}>
                    <Box className={'featureImage'}><img src={demo}/></Box>
                    <Box className={'feature'}>
                        <Typography variant={'h6'} className={'title'}>
                            On Time, Every Time!
                        </Typography>
                        <Typography className={'des'}>
                            Our team thrives on the moto of delivery your products – on time, everytime!
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default WhyUs