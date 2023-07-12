import React, {useState} from 'react'
import {
    alpha,
    Box,
    Button,
    Container, IconButton,
    Typography,
    useTheme
} from "@mui/material"
import demoImg from '../../../assets/images/ship-with-us.png'
import {Close} from "@mui/icons-material"
import {servicesDetails} from "../../../utils/sample-data";
import ThemeDialog from "../../../components/dialog-box/theme-dialog";
import {useNavigate} from "react-router-dom";


export default function LogisticSolutions() {

    const theme = useTheme()
    const navigate = useNavigate()

    const [activeDes, setActiveDes] = useState<number | undefined>()

    const [openDialog, setOpenDialog] = useState(false)

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
                        className={'heading animate__animated animate__fadeInUp'}>{servicesDetails.logistic?.name}</Typography>

            <Typography variant={'body1'} className={'serviceMainDes animate__animated animate__fadeInUp'}>
                {servicesDetails.logistic?.des}
            </Typography>

            <Box className={'serviceParts'}>
                {servicesDetails.logistic?.subServices.map((service, index) => (
                    <Box key={index} className={'servicePart'} data-aos="fade-up"
                         data-aos-anchor-placement="center-bottom">
                        <Box className={'imgBlock'}>
                            <img src={demoImg} alt={'service name'}
                                 className={`animate__animated ${activeDes != index && 'animate__fadeIn'}`}
                            />
                        </Box>
                        <Typography variant={'h4'}
                                    className={`animate__animated ${activeDes != index && 'animate__fadeIn'}`}
                        >
                            {service.name}
                        </Typography>

                        <Typography sx={{mb: 2, mx: 2,}}
                                    className={`animate__animated ${activeDes != index && 'animate__fadeIn'}`}>
                            {service.shortDes}
                        </Typography>

                        <Typography className={'readMore'} onClick={() => {
                            setOpenDialog(true)
                            setActiveDes(index)
                        }}>read more...</Typography>
                        {/*<Typography className={'readMore'} onClick={() => setActiveDes(index)}>read more...</Typography>*/}

                        {(openDialog && activeDes === index) &&
                        <ThemeDialog open={openDialog && activeDes === index}
                                     onClickClose={() => {
                                         setOpenDialog(false)
                                     }}
                                     dialogBody={
                                         <ServiceDescriptionBox
                                             service={service}
                                             closeDialog={() => setOpenDialog(false)}/>
                                     }/>}

                        <Box className={'ctaBlock'}>
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


const ServiceDescriptionBox = (props: any) => {

    const {service, closeDialog} = props

    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <Box sx={{
            maxWidth: '600px',
            px: {xs: 1, sm: 2},
            pb: 0,
            position: 'relative',
            '& .MuiIconButton-root': {
                position: 'absolute',
                top: '-1rem',
                right: 0,
                zIndex: theme.zIndex.modal + 10,
            },
            '& h3': {
                fontSize: '1.3rem',
                textAlign: 'center',
                fontWeight: 500,
                color: theme.palette.secondary.light,
                textDecoration: 'underline',
                textDecorationColor: theme.palette.primary.main,
                mb: 2,
            },
            '& .des': {
                fontSize: '15px',
                lineHeight: '24px',
                textAlign: 'justify',
                textIndent: '1rem',
            },
            '& .ctaBlock': {
                pt: 2,
                textAlign: 'center',
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

        }}>
            <IconButton onClick={closeDialog}>
                <Close/>
            </IconButton>
            <Typography variant={'h3'} className={'animate__animated animate__fadeIn'}>
                {service.name}
            </Typography>
            <Typography className={'des animate__animated animate__fadeIn animate__slow'}>
                {service.longDes}
            </Typography>
            <Box className={'ctaBlock'}>
                <Button variant={'outlined'} className={'animate__animated animate__fadeIn animate__slow'}
                        onClick={() => navigate('/about-us/contact')}>
                    Contact Us
                </Button>
            </Box>
        </Box>
    )
}