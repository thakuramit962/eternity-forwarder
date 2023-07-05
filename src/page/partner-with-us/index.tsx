import React from 'react'
import NewPageContainer from "../../components/new-page-container";
import Toolbar from "@mui/material/Toolbar";
import {alpha, Box, Button, Container, Paper, Tab, Tabs, Typography, useTheme} from "@mui/material";
import bg from "../../assets/images/blob-1.svg"
import bannerBg from "../../assets/images/hero-banner-1.jpg"
import lastMile from "../../assets/images/lastmile.svg";
import carrier from "../../assets/images/carrier.svg";
import driver from "../../assets/images/last-mile-1.svg";
import partnerWithUs from "../../assets/images/aboutIllustrationNew.png";
import {KeyboardArrowRightRounded, KeyboardDoubleArrowRightRounded} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";


const partnerBlocks = [
    {
        name: 'Last Mile Partner',
        des: 'Your trusted logistics partner, seamlessly serving both urban and rural areas across India by ensuring efficient transportation, timely deliveries, and supply chain optimization.',
        img: lastMile,
        link: 'partner-us/last-mile-partner'
    },
    {
        name: 'Carrier Partner',
        des: 'Your trusted logistics partner, seamlessly serving both urban and rural areas across India by ensuring efficient transportation, timely deliveries, and supply chain optimization.',
        img: carrier,
        link: 'partner-us/carrier'
    },
    {
        name: 'Agent/ Driver',
        des: 'Your trusted logistics partner, seamlessly serving both urban and rural areas across India by ensuring efficient transportation, timely deliveries, and supply chain optimization.',
        img: driver,
        link: 'partner-us/agent-driver'
    },
]

export default function PartnerWithUs() {

    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <NewPageContainer sx={{background: 'none'}}>
            <Box component={'section'} className={'animate__animated animate__fadeIn'} sx={{
                // minHeight: {xs: '100vh', sm: 'min(100vh, 700px)'},
                minHeight: {xs: '200px', sm: '240px'},
                backgroundImage: `linear-gradient(${alpha(theme.palette.text.primary, 0.1)}, ${alpha(theme.palette.text.primary, 0.4)}), url(${bannerBg})`,
                backgroundColor: theme.palette.background.default,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                alignContent: 'center',
                gap: 3,
                px: 3,
                pb: 4,
                '& .headingBlock': {
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    minHeight: {xs: 'min(50vh, 500px)', sm: 'auto'},
                    '& h1': {
                        mt: 5,
                        fontSize: 'clamp(1.7rem, 8vw, 3.5rem)',
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                    },
                    '& .headDes': {
                        mt: 1,
                        color: alpha(theme.palette.secondary.contrastText, 0.85),
                        maxWidth: '600px',
                        width: '90%',
                        mx: 'auto',
                        textAlign: 'center',
                        fontSize: '16px',
                    },
                    '& img': {
                        display: {xs: 'block', sm: 'none'},
                        maxHeight: '200px',
                        objectFit: 'contain',
                    },
                },
            }}>

                <Toolbar disableGutters sx={{
                    height: '90px',
                    transition: 'all 300ms ease-in-out',
                }}/>

                <Box className={'headingBlock'}>
                    <img src={partnerWithUs} className={'animate__animated animate__fadeInUp'} alt={'partner with us'}/>
                    <Typography variant={'h1'} className={'animate__animated animate__fadeInUp'}>Eternity for
                        Business</Typography>
                    <Typography variant={'body2'} className={'headDes animate__animated animate__fadeInUp'}>
                        Your trusted logistics partner, seamlessly serving both urban and rural areas across India by
                        ensuring efficient transportation, timely deliveries, and supply chain optimization.
                    </Typography>
                </Box>

            </Box>

            <Container sx={{
                mt: 5,
                width: '100%',
                display: 'grid',
                gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr'},
                gap: 3,
            }}>
                {partnerBlocks.map((block, index) => (
                    <Paper key={index}
                           onClick={() => navigate(`/${block.link}`)}
                           sx={{
                               p: 2,
                               cursor: 'pointer',
                               boxShadow: {xs: `0 1px 0 2px ${alpha(theme.palette.secondary.main, 0.8)}`,sm: `0 1px 0 2px ${alpha(theme.palette.background.paper, 0.3)}`},
                               borderRadius: '20px',
                               minHeight: '200px',
                               background: alpha(theme.palette.background.paper, 0.2),
                               backdropFilter: 'blur(7px)',
                               display: 'flex',
                               flexFlow: 'column',
                               gap: 1,
                               alignItems: 'center',
                               justifyContent: 'center',
                               transition: 'all 350ms ease-in-out',
                               '& img': {
                                   height: '100px',
                                   width: '100px',
                                   objectFit: 'contain',
                                   backgroundPosition: 'center',
                                   backgroundSize: '40%',
                                   backgroundRepeat: 'no-repeat',
                                   transition: 'all 350ms ease-in-out',
                               },
                               '& h3': {
                                   fontSize: '1.2rem',
                                   lineHeight: '1.75rem',
                                   fontWeight: 600,
                                   color: theme.palette.secondary.dark,
                               },
                               '& .des': {
                                   fontSize: '15px',
                                   lineHeight: '24px',
                                   textAlign: 'center',
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
                               },
                               '&:hover': {
                                   transform: 'scale(1.03)',
                                   boxShadow: `0 1px 0 2px ${alpha(theme.palette.secondary.main, 0.8)}`,
                                   '& img': {
                                       backgroundPosition: 'center',
                                       backgroundSize: '115%',
                                       backgroundImage: `url(${bg})`,
                                   },
                                   '& .button': {
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
                               '&:active': {
                                   transform: 'scale(0.98)',
                               },

                           }}>
                        <img src={block.img} alt={'ss'} className={'animate__animated animate__fadeInUp'}/>

                        <Typography variant={'h3'} data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom">{block.name}</Typography>
                        <Typography className={'des'} data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom">{block.des}</Typography>

                        <Button className={'button'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <Box className={'iconBox'}>
                                <KeyboardArrowRightRounded className={'firstSvg'}/>
                                <KeyboardDoubleArrowRightRounded className={'secondSvg'}/>
                            </Box>
                            Get Started
                        </Button>
                    </Paper>
                ))}
            </Container>

        </NewPageContainer>
    )
}