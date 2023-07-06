import React, {useEffect, useState} from 'react'
import {
    Accordion, AccordionDetails, AccordionSummary,
    alpha,
    Box,
    Container,
    InputAdornment,
    Tab,
    Tabs,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import groupIllustration from "../../assets/images/aboutIllustrationNew.png";
import {AutoAwesomeRounded} from "@mui/icons-material";
import {coreValues} from "../../utils/sample-data";
import Career from "./career";
import ContactUs from "../contact-us";


export default function AboutCompany() {

    const theme = useTheme()

    const [readMore, setReadMore] = useState(false)
    const toggleReadMore = () => setReadMore(prevState => !prevState)

    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false)
    };


    return (
        <Box sx={{
            maxWidth: '1100px',
            mx: 'auto',
        }}>
            <Box component={'section'} id={'aboutCompany'} sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& .contentBlock': {
                    flex: '2 1 300px',
                    '& h1': {
                        fontSize: 'clamp(1.7rem, 8vw, 3.2rem)',
                        fontWeight: 600,
                        color: theme.palette.secondary.dark,
                        textDecoration: 'underline',
                        textDecorationColor: theme.palette.primary.main,
                        mb: 3,
                    },
                    '& .headDes': {
                        textIndent: '1.5rem',
                        fontSize: '15px',
                        lineHeight: '24px',
                        textAlign: 'justify',
                        mb: 2,
                    },
                },
            }}>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap-reverse',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    '& .desBlock': {
                        flex: '1 1 300px',
                        mb: 5,
                        textAlign: 'justify',
                        mx: 'auto',
                        pt: 5,
                        color: theme.palette.secondary.main,
                        width: {xs: '100%', sm: '90%', md: '80%'},
                        fontSize: theme.typography.pxToRem(15),
                        '& .headDes': {
                            textIndent: '1.5rem',
                            fontSize: '15px',
                            lineHeight: '24px',
                            textAlign: 'justify',
                            mb: 2,
                            '& .read': {
                                color: theme.palette.primary.dark,
                                cursor: 'pointer',
                                '&.more': {
                                    display: readMore ? 'none' : 'inline'
                                },
                                '&.less': {
                                    display: !readMore ? 'none' : 'inline'
                                },
                            },
                        },
                    },
                    '& .imageBlock': {
                        flex: '1 1 300px',
                        textAlign: 'center',
                        '& .groupIllustration': {
                            width: {xs: '85%', sm: '80%'},
                            maxHeight: '350px',
                            objectFit: 'contain',
                            mx: 'auto',
                        },
                    },
                }}>
                    <Box className={'desBlock'}>
                        <Typography className={'heading'} variant={'h3'} data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    style={{margin: '0 0 1rem'}}>
                            Who Are We
                        </Typography>
                        <Typography variant={'body2'} className={'headDes'}>
                            Established in 2012, Eternity is dedicated to revolutionizing the logistics landscape in
                            India by leveraging digital solutions. Over the years, Eternity has emerged as a prominent
                            player in the Indian logistics market. With a strong emphasis on efficiency, Eternity excels
                            in providing comprehensive services in the PTL (Partial Truckload), Dropship, and FTL (Full
                            Truckload) sectors. With a widespread operational presence spanning over 21+ states
                            throughout the country, Eternity consistently adds value to the logistics industry,
                            contributing to its growth and success in numerous ways. <span className={'read more'}
                                                                                           onClick={toggleReadMore}>read more...</span>
                        </Typography>
                        <Typography variant={'body2'} className={'headDes'} sx={{display: readMore ? 'block' : 'none'}}>
                            Additionally, Eternity boasts a robust network connectivity that spans both urban
                            and rural
                            areas. Recognizing the importance of reaching every corner of the country, we have
                            strategically
                            established a strong presence in rural regions, ensuring seamless logistics services
                            even in the
                            most remote locations. This extensive network enables us to cater to diverse
                            customer needs,
                            bridging the gap between urban and rural markets. By leveraging our wide-ranging
                            infrastructure
                            and efficient operations, we are committed to delivering reliable and timely
                            logistics solutions
                            to businesses and individuals across India, irrespective of their geographic
                            location. ways. <br/><span className={'read less'}
                                                       onClick={toggleReadMore}>read less...</span>
                        </Typography>
                    </Box>

                    <Box className={'imageBlock'}>
                        <img src={groupIllustration} className={'groupIllustration'}/>
                    </Box>
                </Box>
            </Box>
            <Box sx={{minHeight: '50px'}}/>
            <Box component={'section'} sx={{
                // maxWidth: '900px',
                mx: 'auto',
                textAlign: 'center',
                '& .headDes': {
                    textIndent: '1.5rem',
                    fontSize: '15px',
                    lineHeight: '24px',
                    mb: 2,
                },
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                    '& .visionDes': {
                        flex: '1 1 300px',
                        maxWidth: '600px',
                        '& h3':{
                             ml: 0
                        },
                        '& .headDes':{
                            textAlign: 'justify',
                            textIndent: 3,
                            // maxWidth: '600px',
                            ml: 'auto'
                        },
                        // display: 'flex',
                        // justifyContent: 'center',
                        // alignItems: 'center',
                    },
                    '& .valuesBlock': {
                        flex: '1 1 300px',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'flex-end',
                        gap: 2,
                        py: 3,
                        '& .MuiAccordion-root': {
                            py: 1,
                            maxWidth: '400px',
                            alignSelf: 'flex-start',
                            borderRadius: '14px !important',
                            boxShadow: '0 0 12px -3px #83838370',
                            background: theme.palette.background.paper,
                            transition: 'all 300ms ease-in-out',
                            '&:before': {
                                display: 'none',
                            },
                            '&.Mui-expanded': {
                                m: 0,
                                borderRadius: '20px !important',
                                py: 0,
                            },
                            '& .MuiAccordionSummary-root': {
                                '& .MuiAccordionSummary-content': {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    m: 0,
                                    '& svg': {
                                        height: '2rem',
                                        width: '2rem'
                                    },
                                    '& .MuiTypography-root': {
                                        fontSize: '1.1rem',
                                        fontWeight: 500,

                                    },
                                },
                            },
                            '& .MuiAccordionDetails-root': {
                                background: alpha(theme.palette.secondary.main, 0.1),
                                mx: 2,
                                mb: 2,
                                borderRadius: '16px',
                            },
                        },
                    },
                    '& .imageBlock': {
                        flex: '1 1 300px',
                        textAlign: 'center',
                        '& .groupIllustration': {
                            width: {xs: '85%', sm: '80%'},
                            maxHeight: '350px',
                            objectFit: 'contain',
                            mx: 'auto',
                        },
                    },
                }}>

                    <Box className={'visionDes'}>
                        <Typography className={'heading'} variant={'h3'} data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom">
                            Our Vision
                        </Typography>
                        <Typography variant={'body2'} className={'headDes'}>
                            At Eternity Forwarders, our vision is to redefine the logistics industry through innovative
                            solutions and exceptional service. We aim to be the leading provider of end-to-end logistics
                            services, empowering businesses worldwide to thrive in a seamless and interconnected global
                            marketplace.
                        </Typography>

                        <Box className={'imageBlock'}>
                            <img src={groupIllustration} className={'groupIllustration'}/>
                        </Box>
                    </Box>

                    <Box className={'valuesBlock'}>
                        {coreValues.map((coreValue, index) => (
                            <Accordion key={index} expanded={expanded === `value${index}`}
                                       onChange={handleChange(`value${index}`)}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <AutoAwesomeRounded/>
                                    <Typography>{coreValue.name}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{coreValue.des}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}

                    </Box>

                </Box>
            </Box>
        </Box>
    )
}
