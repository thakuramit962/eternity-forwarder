import React from 'react'
import {alpha, Box, Button, Paper, Typography, useTheme} from "@mui/material"
import {KeyboardArrowRightRounded, KeyboardDoubleArrowRightRounded} from "@mui/icons-material";
import {services} from "../../utils/sample-data";
import {useNavigate} from "react-router-dom";


export default function ServiceOption2() {

    const theme = useTheme()

    return (
        <Box id="ourServices" component={'section'} className={'animate__animated animate__fadeIn'}
             sx={{
                 minHeight: 'min(90vh, 450px)',
                 maxWidth: '1100px',
                 mx: 'auto',
                 display: 'grid',
                 gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr 1fr'},
                 gap: 3,
                 mt: {xs: 0, sm: -6},
                 p: 2

             }}>

            {services.map((service, index) => <ServiceCard key={index} service={service}/>)}

        </Box>
    )
}


const ServiceCard = (props:any) => {

    const {service} = props

    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <Paper sx={{
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: 5,
            '& .imageBox':{
                background: theme.palette.background.default,
                '& img':{
                    width: '100%',
                    height: {xs: '200px', sm: '240px'},
                    objectFit: 'cover',
                },
            },

            '& .button': {
                fontSize: theme.typography.pxToRem(18),
                fontWeight: 500,
                fontFamily: theme.typography.h1.fontFamily,
                textTransform: 'none',
                height: '3rem',
                borderRadius: '50vh',
                transition: 'all 250ms ease-in-out',
                pr: '3rem',
                pl: '3.6rem',
                position: 'relative',
                outline: `1px solid ${alpha(theme.palette.secondary.main, 0)}`,
                outlineOffset: 0,
                color: theme.palette.secondary.light,
                '& .iconBox': {
                    position: 'absolute',
                    left: '2px',
                    transition: 'all 250ms ease-in-out',
                    height: '3rem',
                    width: '3rem',
                    background: theme.palette.primary.main,
                    borderRadius: '50vh',
                    mr: 2,
                    color: theme.palette.primary.contrastText,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '& .firstSvg': {
                        transition: 'all 250ms ease-in-out',
                    },
                    '& .secondSvg': {
                        transition: 'all 250ms ease-in-out',
                        display: 'none',
                    },
                },
                '&:hover': {
                    outline: `2px solid ${theme.palette.secondary.light}`,
                    outlineOffset: '1px',
                    '& .iconBox': {
                        height: '2.8rem',
                        width: '2.8rem',
                        background: theme.palette.primary.main,
                        borderRadius: '50vh',
                        mr: '1.2rem',
                        color: theme.palette.primary.contrastText,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '& .firstSvg': {
                            display: 'none',
                        },
                        '& .secondSvg': {
                            display: 'flex',
                        },
                    },
                },
            },

        }}>
            <Box className={'imageBox'}>
                <img src={service.image} alt={'service-image'}/>
            </Box>
            <Box sx={{
                p: 2,
                pb: 3,
                '& h3':{
                    fontSize: '20px',
                    fontWeight: 600
                },
                '& .des':{
                    mt: 1, mb: 2,
                    fontSize: '14px',
                    fontWeight: 400
                },
            }}>
                <Typography variant={'h3'} data-aos="fade-up" data-aos-anchor-placement="center">{service.name}</Typography>

                <Typography className={'des'} data-aos="fade-up" data-aos-anchor-placement="center">{service.des}</Typography>

                <Button className={'button'} data-aos="fade-up" data-aos-anchor-placement="center"
                        onClick={() => navigate(`/${service.link}`)}>
                    <Box className={'iconBox'}>
                        <KeyboardArrowRightRounded className={'firstSvg'}/>
                        <KeyboardDoubleArrowRightRounded className={'secondSvg'}/>
                    </Box>
                    Explore More
                </Button>
            </Box>

        </Paper>
    )
}