import {Avatar, Box, Typography, useTheme} from "@mui/material";
import {FormatQuoteRounded} from "@mui/icons-material";
import React from "react";
import logo1 from "../../assets/images/clients/ajio.png";
import logo2 from "../../assets/images/clients/bharat.png";
import logo3 from "../../assets/images/clients/nurture.png";
import logo4 from "../../assets/images/clients/upl.png";
import logo5 from "../../assets/images/clients/orpat.png";
import logo6 from "../../assets/images/clients/zeera.png";

const clients = [logo1, logo2, logo3, logo4, logo5, logo6]

const EsteemedClients = () => {

    const theme = useTheme()

    return (
        <Box className={'esteemedClients'} sx={{
            mt: 6,
        }}>

            <Typography variant={'h2'} className={'heading'}>Clients & Reviews</Typography>

            <Box sx={{
                my: 7,
                display: 'flex',
                justifyContent: 'center',
                rowGap: 3,
                flexWrap: 'wrap',
                minHeight: '250px',
            }}>
                <Box sx={{
                    flex: '1 1 300px',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    overflowX: 'hidden',
                    position: 'relative',
                    '&:before, &:after': {
                        content: '""',
                        display: 'block',
                        background: 'linear-gradient(90deg, white, transparent)',
                        height: '-webkit-fill-available',
                        width: '40px',
                        position: 'absolute',
                        top: 0,
                        zIndex: 9,
                    },
                    '&:after': {
                        background: 'linear-gradient(90deg, transparent, white)',
                        right: 0,
                    },
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                        animation: `dddd ${clients.length}000ms linear infinite`,
                        '&:hover': {
                            animationPlayState: 'paused',
                        },
                        '& img': {
                            height: '50px',
                            minWidth: '150px',
                            objectFit: 'contain',
                            // filter: 'grayscale(1)',
                            transition: 'all 200ms',
                            '&:hover': {
                                filter: 'grayscale(0)',
                            },
                        },
                        ['@keyframes dddd']: {
                            '0%': {transform: 'translateX(20%)'},
                            '100%': {transform: 'translateX(-100%)'},
                        },
                    }}>
                        {clients.map((client, index) => <img src={client} key={index}/>)}
                    </Box>
                </Box>

                <Box sx={{
                    borderRadius: '20px',
                    flex: '1 1 300px',
                }}>
                    <Box sx={{
                        position: 'relative',
                        border: '2px solid #83838370',
                        borderRadius: '12px',
                        minHeight: '160px',
                        flex: '1 1 300px',
                        maxWidth: '400px',
                        mx: 'auto',
                        p: '3rem 1rem 4rem',
                        display: 'flex',
                        justifyContent: 'center',
                        '& .quote': {
                            position: 'absolute',
                            background: '#fff',
                            color: '#83838370',
                            fontSize: '4rem',
                            '&.first': {
                                top: '-1.5rem',
                                left: '-1.5rem',
                                transform: 'scaleX(-1)',
                            },
                            '&.second': {
                                bottom: '-1.5rem',
                                right: '-1.5rem',
                            },
                        },
                        '& .reviewer': {
                            position: 'absolute',
                            bottom: '-1rem',
                            left: '1rem',
                            display: 'flex',
                            gap: 1,
                            '& .MuiTypography-root': {
                                pt: '16px',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                justifyItems: 'flex-start',
                                flexFlow: 'column',
                                fontSize: '0.9rem',
                                lineHeight: '1rem',
                                fontWeight: 500,
                                fontFamily: theme.typography.h2.fontFamily,
                                '& span': {
                                    fontSize: '0.75rem',
                                    lineHeight: '0.75rem',
                                    color: theme.palette.text.secondary
                                },
                            },
                            '& .MuiAvatar-root': {
                                height: '4rem',
                                width: '4rem',
                                borderRadius: '50vh',
                            },

                        },
                    }}>
                        <FormatQuoteRounded className={'quote first'}/>
                        <FormatQuoteRounded className={'quote second'}/>
                        <Box className={'reviewer'}>
                            <Avatar/>
                            <Typography>
                                Reviewer Name<span>Designation, Company</span>
                            </Typography>
                        </Box>

                        <Typography sx={{
                            textAlign: 'center',
                        }}>
                            Eternity is rapidly growing and aiming to cover almost all pin codes across territories
                            to enable deliveries for our esteemed customers to every corner of the country. Eternity
                            is rapidly growing and aiming to cover almost all pin codes across territories
                            to enable deliveries.
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default EsteemedClients