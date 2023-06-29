import React from 'react'
import NewPageContainer from "../../components/new-page-container";
import {alpha, Box, Tab, Tabs, Typography, useTheme} from "@mui/material";
import bg from "../../assets/images/hero-banner-1.jpg";
import Toolbar from "@mui/material/Toolbar";
import {useLocation} from "react-router-dom";


export default function AboutUs() {

    const theme = useTheme()
    const location = useLocation()


    return (
        <NewPageContainer sx={{
            background: 'none',
        }}>
            <Toolbar disableGutters sx={{
                height: '90px',
                transition: 'all 300ms ease-in-out',
            }}/>

            <Box sx={{
                p: 3,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
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
                '& .formBlock': {
                    flex: '1 1 300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    '& .formBox': {
                        flex: 1,
                        maxWidth: '400px',
                        minHeight: '300px',
                        background: theme.palette.primary.main,
                        borderRadius: '20px',
                        p: 2,
                        outline: `2px solid ${theme.palette.secondary.main}`,
                        outlineOffset: '-16px',
                        py: 4,
                        '& h4':{
                            textAlign: 'center',
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            color: theme.palette.secondary.dark,

                        },

                    },
                },
            }}>
                <Box className={'contentBlock'}>
                    <Typography variant={'h1'}>About Us</Typography>
                    <Typography variant={'body2'} className={'headDes'}>
                        Established in 2012, Eternity is dedicated to revolutionizing the logistics landscape in India
                        by leveraging digital solutions. Over the years, Eternity has emerged as a prominent player in
                        the Indian logistics market. With a strong emphasis on efficiency, Eternity excels in providing
                        comprehensive services in the PTL (Partial Truckload), Dropship, and FTL (Full Truckload)
                        sectors. With a widespread operational presence spanning over 21+ states throughout the country,
                        Eternity consistently adds value to the logistics industry, contributing to its growth and
                        success in numerous ways.
                    </Typography>
                    <Typography variant={'body2'} className={'headDes'}>
                        Additionally, Eternity boasts a robust network connectivity that spans both urban and rural
                        areas. Recognizing the importance of reaching every corner of the country, we have strategically
                        established a strong presence in rural regions, ensuring seamless logistics services even in the
                        most remote locations. This extensive network enables us to cater to diverse customer needs,
                        bridging the gap between urban and rural markets. By leveraging our wide-ranging infrastructure
                        and efficient operations, we are committed to delivering reliable and timely logistics solutions
                        to businesses and individuals across India, irrespective of their geographic location. ways.
                    </Typography>

                </Box>
                <Box className={'formBlock'}>
                    <Box className={'formBox'}>
                        <Typography variant={'h4'}>Join Us</Typography>
                    </Box>
                </Box>
            </Box>

        </NewPageContainer>
    )
}

// <Box component={'section'} className={'animate__animated animate__fadeIn'} sx={{
//     minHeight: {xs: '200px', sm: '240px'},
//     backgroundImage: `linear-gradient(${alpha(theme.palette.text.primary, 0.1)}, ${alpha(theme.palette.text.primary, 0.4)}), url(${bg})`,
//     backgroundColor: theme.palette.background.default,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center top',
//     display: 'flex',
//     flexFlow: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     alignContent: 'center',
//     gap: 3,
//     px: 3,
//     pb: 4,
//     '& .headingBlock': {
//         width: '100%',
//         display: 'flex',
//         flexFlow: 'column',
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//         alignContent: 'center',
//         '& h1': {
//             fontSize: 'clamp(1.7rem, 8vw, 3.5rem)',
//             fontWeight: 600,
//             color: theme.palette.primary.light,
//         },
//         '& .headDes': {
//             color: alpha(theme.palette.secondary.contrastText, 0.85),
//         },
//     },
// }}>
//
//
//
//     <Box className={'headingBlock'}>
//         <Typography variant={'h1'}>About Us</Typography>
//         <Typography variant={'body2'} className={'headDes'}>Making the world a smaller place</Typography>
//     </Box>
//
// </Box>
