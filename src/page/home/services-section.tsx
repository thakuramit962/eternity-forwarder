import React from 'react'
import {alpha, Box, Button, ButtonBase, Divider, Tab, Tabs, Typography, useMediaQuery, useTheme} from "@mui/material"
import {ArrowRightRounded, KeyboardArrowRightRounded, KeyboardDoubleArrowRightRounded} from "@mui/icons-material"
import {useNavigate} from "react-router-dom"
import {services} from "../../utils/sample-data"

export default function ServicesSection() {

    const theme = useTheme()

    const [value, setValue] = React.useState(0)

    const isMobile = useMediaQuery('(max-width: 599px)')

    const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue)

    return (
        <Box sx={{
            minHeight: 'min(100vh, 550px)',
            pt: 6,
            pb: 3,
        }}>
            <Box sx={{
                maxWidth: '1100px',
                mx: 'auto',
                px: 3,
                '& .MuiTab-root': {
                    fontSize: 'clamp(1.5rem, 4vw, 1.7rem)',
                    fontWeight: 500,
                    fontFamily: theme.typography.h1.fontFamily,
                    textTransform: 'none',
                    borderRadius: '12px',
                    minHeight: isMobile ? '60px' : 'auto',
                    py: isMobile ? 5 : 2,
                    boxShadow: isMobile ? `0 0 12px -5px #83838370 inset` : 0,
                    '&.Mui-selected': {
                        color: isMobile ? theme.palette.secondary.main : theme.palette.primary.main,
                    },
                },
                '& .MuiTabs-flexContainerVertical': {
                    gap: '0.5rem',
                },
                '& .MuiTabs-indicator': {
                    width: '100%',
                    zIndex: -1,
                    borderRadius: '12px',
                },
                '& .heading': {
                    mb: 4,
                },
            }}>
                <Typography variant={'h2'} className={'heading'}>Services</Typography>
                {/*<Divider sx={{mb:5,}}/>*/}
                <Tabs value={value} onChange={handleChange} aria-label="services tabs"
                      variant={'fullWidth'} orientation={isMobile ? 'vertical' : 'horizontal'}>
                    {services.map((service, index) => (
                        <Tab key={index} label={service.name} id={`service-tab-${index}`}/>
                    ))}
                </Tabs>

                {services.map((service, index) => {
                        return (
                            value === index &&
                            <ServiceBlock key={index} image={service.image} des={service.des} heading={service.heading}
                                          subServices={service.subServices} link={service.link}/>
                        )
                    }
                )}
            </Box>
        </Box>
    )
}

interface ServiceBlockProps {
    image: string
    heading: string
    des: string
    link?: string
    subServices: any[]
}

const ServiceBlock = (props: ServiceBlockProps) => {

    const {image, heading, des, link, subServices} = props

    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <Box role="tabpanel" className={'animate__animated animate__fadeIn'} sx={{
            p: 3,
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            py: 8,
            '& .serviceImage': {
                flex: '1 1 300px',
                textAlign: 'center',
                '& img': {
                    width: '90%',
                    maxWidth: '300px',
                    mx: 'auto',
                },
            },
            '& .serviceContent': {
                flex: '2 1 500px',
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                '& .serviceDes': {
                    flex: '2 1 300px',
                    '& .hook': {
                        fontSize: 'clamp(1.3rem, 8vw, 1.5rem)',
                        fontWeight: 700,
                        mb: 1,
                    },
                    '& .des': {
                        textIndent: '1rem',
                        textAlign: 'justify',
                        color: theme.palette.secondary.light,
                        fontSize: theme.typography.pxToRem(13),
                        fontFamily: theme.typography.h1.fontFamily,
                    },
                    '& hr': {
                        mt: 4,
                        mb: 2,
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
                },
                '& .serviceParts': {
                    flex: '1 1 180px',
                    p: 3,
                    '& .partsBlock': {
                        background: theme.palette.background.default,
                        p: 2,
                        '& .MuiButtonBase-root': {
                            fontSize: '1rem',
                            fontWeight: 400,
                            fontFamily: theme.typography.h1.fontFamily,
                            px: 2,
                            borderRadius: '50vh',
                            whiteSpace: 'nowrap',
                            color: theme.palette.secondary.main,
                            transition: 'all 250ms ease-in-out',
                            position: 'relative',
                            mb: 1,
                            justifyContent: 'flex-start',
                            width: '100%',
                            '& svg': {
                                color: theme.palette.secondary.main,
                                transition: 'all 200ms ease-in-out',
                                position: 'absolute',
                                left: 0,
                                opacity: 0,
                            },
                            '&:hover': {
                                pl: 3,
                                color: theme.palette.primary.main,
                                '& svg': {
                                    left: '0.2rem',
                                    opacity: 1,
                                },
                            },
                        },
                    },
                },
            },
        }}>
            <Box className={'serviceImage animate__animated animate__fadeIn animate__slow'}>
                <img src={image} alt={'logistics solutions'}/>
            </Box>
            <Box className={'serviceContent animate__animated animate__fadeIn'}>
                <Box className={'serviceDes'}>
                    <Typography className={'hook animate__animated animate__fadeInUp animate__fast'}
                                variant={'body2'}>{heading}</Typography>
                    <Typography className={'des animate__animated animate__fadeInUp animate__slow'}>{des}</Typography>
                    <Divider/>
                    <Button className={'button animate__animated animate__fadeInUp animate__slower'}
                            onClick={() => navigate(`/${link}`)}>
                        <Box className={'iconBox'}>
                            <KeyboardArrowRightRounded className={'firstSvg'}/>
                            <KeyboardDoubleArrowRightRounded className={'secondSvg'}/>
                        </Box>
                        Explore More
                    </Button>
                </Box>
                <Box className={'serviceParts'}>
                    <Box className={'partsBlock animate__animated animate__fadeIn'}>
                        {subServices?.map((subService, index) => (
                            <ButtonBase key={index} style={{
                                animationDelay: `${index}00ms`
                            }} className={`part animate__animated animate__fadeInUp`}
                                        onClick={() => navigate(`/${subService?.link}`)}>
                                <ArrowRightRounded/>{subService.name}
                            </ButtonBase>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )

}