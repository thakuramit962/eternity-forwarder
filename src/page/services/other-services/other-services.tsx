import React, {useState} from 'react'
import {
    alpha,
    Box,
    Button,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material"
import demoImg from '../../../assets/images/ship-with-us.png'
import {KeyboardArrowRightRounded} from "@mui/icons-material"
import {servicesDetails} from "../../../utils/sample-data";
import {useNavigate} from "react-router-dom";


export default function OtherServices() {

    const theme = useTheme()
    const navigate = useNavigate()

    const [activeDes, setActiveDes] = useState<number | undefined>()

    return (
        <Container sx={{
            pt: 8,
            textAlign: 'center',
            '& .serviceMainDes': {
                maxWidth: '767px',
                mx: 'auto',
            },
            '& .serviceParts': {
                pt: 8,
                display: 'grid',
                gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr'},
                gap: 3,
                '& .servicePart': {
                    position: 'relative',
                    overflow: 'hidden',
                    px: 2,
                    // background: theme.palette.background.paper,
                    borderRadius: '12px',
                    minHeight: '280px',
                    pb: '90px',
                    '& .imgBlock': {
                        p: 2,
                        pt: 4,
                        '& img': {
                            height: '110px',
                            objectFit: 'contain',
                        },
                    },
                    '& h4': {
                        fontSize: '1.3rem',
                        fontWeight: 500,
                        color: theme.palette.secondary.main,
                        mb: 1,
                    },
                    '& .shortDes': {
                        alignItems: 'flex-start',
                        py: 0,
                        '& .MuiTypography-root': {
                            fontSize: '13px',
                            color: theme.palette.text.primary,
                        },
                        '& .MuiListItemIcon-root': {
                            pt: 1,
                            minWidth: '28px',
                            '& svg': {
                                height: '1rem',
                                width: '1rem',
                            },
                        },
                    },
                    '& .readMore': {
                        // textAlign:' right',
                        fontSize: '12px',
                        cursor: 'pointer',
                        color: theme.palette.primary.main,
                    },
                    '& .ctaBlock': {
                        zIndex: 2,
                        position: 'absolute',
                        left: 0,
                        bottom: '0.5rem',
                        width: '100%',
                        // background: `linear-gradient(${alpha(theme.palette.background.paper, 0)}, ${theme.palette.background.paper})`,
                        py: 2,
                        borderRadius: '20px 20px 0 0',
                        '& .MuiButton-root': {
                            border: `2px solid ${theme.palette.secondary.main}`,
                            color: theme.palette.secondary.main,
                            borderRadius: '16px',
                            height: '40px',
                            width: '120px',
                            outline: `2px solid ${alpha(theme.palette.primary.main, 0)}`,
                            outlineOffset: 0,
                            transition: 'all 300ms ease-in-out',
                            cursor: 'pointer',
                        },
                    },
                    '&:hover': {
                        '& .ctaBlock': {
                            '& .MuiButton-root': {
                                background: theme.palette.primary.main,
                                border: `2px solid ${theme.palette.secondary.main}`,
                            },
                        },
                    },
                },
            },
        }}>
            <Typography variant={'h3'}
                        className={'heading  animate__animated animate__fadeInUp'}>{servicesDetails.other?.name}</Typography>

            <Typography variant={'body1'} className={'serviceMainDes  animate__animated animate__fadeInUp'}>
                {servicesDetails.other?.des}
            </Typography>

            <Box className={'serviceParts'}>
                {servicesDetails.other?.subServices.map((service, index) => (
                    <Box key={index} className={'servicePart'} data-aos="fade-up"
                         data-aos-anchor-placement="center-bottom">
                        <Box className={'imgBlock'}>
                            <img src={service.image} alt={'service name'}
                                 className={`animate__animated ${activeDes != index && 'animate__fadeIn'}`}/>
                        </Box>
                        <Typography variant={'h4'}
                                    className={`animate__animated ${activeDes != index && 'animate__fadeIn'}`}>
                            {service.name}
                        </Typography>

                        <Typography sx={{
                            mb: 2,
                            mx: 2,
                        }}>{service.shortDes}
                        </Typography>

                        <Box className={'ctaBlock animate__animated animate__fadeInUp'}>
                            <Button variant={'outlined'} data-aos="fade-up" data-aos-anchor-placement="center-bottom"
                                    onClick={() => navigate('/about-us/contact')}>
                                Contact Us
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}