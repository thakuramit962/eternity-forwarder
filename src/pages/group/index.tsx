import React from 'react'
import PageContainer from "../../components/page-container";
import {alpha, Box, Typography, useTheme} from "@mui/material";

import eternityLogo from '../../assets/images/eternity-forwarders-logo.svg'
import groupIllustration from '../../assets/images/groupIllustration.svg'


export default function Group() {

    const theme = useTheme()

    return (
        <PageContainer>
            <Box sx={{
                textAlign: 'center',
                '& .groupIllustration': {
                    width: {xs: '85%', sm: '90%'},
                    maxHeight: '350px',
                    objectFit: 'contain',
                    mx: 'auto',
                },
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    minHeight: {xs: 'min(90vh, 600px)', sm: 'min(70vh, 500px)'},
                }}>
                    <img src={groupIllustration} className={'groupIllustration'}/>
                    <Typography variant={'body1'} sx={{
                        mb: 5,
                        textAlign: 'center',
                        mx: 'auto',
                        color: theme.palette.text.secondary,
                        width: {xs: '100%', sm: '90%', md: '80%'},
                        fontSize: theme.typography.pxToRem(15),
                    }}>
                        Founded in 2012, with a prime moto of digitising Logistics in the country, today, Eternity has
                        placed its name prominently in the Indian Logistics Market. Eternity efficiently working in the
                        PTL
                        and FTL space with its core focus to connect every pin code in India by 2025. Operational in 20+
                        States PAN India, Eternity has been adding value to the Logistics Industry in many ways.
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    flexWrap: 'wrap',
                    '& .groupItem': {
                        boxShadow: `0 0 17px -4px #83838370`,
                        borderRadius: `12px`,
                        padding: 2,
                        minWidth: '300px',
                        '& img': {
                            background: alpha(theme.palette.primary.main, 0.2),
                            borderRadius: '8px',
                            padding: 2,
                            objectFit: 'contain',
                            maxHeight: '70px',
                            width: '-webkit-fill-available',
                        },
                        '& .details': {
                            display: 'flex',
                            flexFlow: 'column'
                        },
                        '& .MuiTypography-root': {
                            textAlign: 'center',
                            mx: 'auto',
                            '&.name': {
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                            },
                            '&.role': {
                                fontSize: '13px',
                                // fontWeight: 400,
                                // color: theme.palette.text.secondary,
                            },
                        },
                    },
                }}>
                    {Array.from(Array(10)).map((_, index: number) => (
                        <Box className={'groupItem'} key={index}>
                            <img src={eternityLogo} alt={'eternity'}/>
                            <Typography className={'name'}>Frontier Agrotech Private Limited</Typography>
                            <Typography className={'role'}>Super Distribution | Marketing Services</Typography>
                        </Box>
                    ))}

                </Box>

            </Box>
        </PageContainer>
    )
}