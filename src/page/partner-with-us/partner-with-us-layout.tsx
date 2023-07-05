import React, {useEffect, useState} from 'react'
import NewPageContainer from "../../components/new-page-container";
import {alpha, Box, Tab, Tabs, Typography, useMediaQuery, useTheme} from "@mui/material";
import bg from "../../assets/images/hero-banner-1.jpg";
import {useNavigate, Outlet, useMatch, useLocation} from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";


export default function PartnerWithUsLayout() {

    const theme = useTheme()
    const navigate = useNavigate()
    const location = useLocation()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const lastMile = useMatch('/partner-us/last-mile-partner')
    const carrier = useMatch('/partner-us/carrier')

    const [value, setValue] = useState(lastMile ? 0 : carrier ? 1 : 2)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue)

    useEffect(() => {
        setValue(lastMile ? 0 : carrier ? 1 : 2)
    }, [location])

    return (
        <NewPageContainer sx={{
            background: 'none'
        }}>
            <Box component={'section'} className={'animate__animated animate__fadeIn'} sx={{
                minHeight: {xs: '200px', sm: '240px'},
                backgroundImage: `linear-gradient(${alpha(theme.palette.text.primary, 0.1)}, ${alpha(theme.palette.text.primary, 0.4)}), url(${bg})`,
                backgroundColor: theme.palette.background.default,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignContent: 'center',
                gap: 3,
                px: 3,
                pb: 4,
                '& .headingBlock': {
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    alignContent: 'center',
                    '& h1': {
                        mt: 5,
                        fontSize: 'clamp(1.7rem, 8vw, 3.5rem)',
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                    },
                    '& .headDes': {
                        color: alpha(theme.palette.secondary.contrastText, 0.85),
                    },
                },
            }}>

                <Toolbar disableGutters sx={{
                    height: '90px',
                    transition: 'all 300ms ease-in-out',
                }}/>

                <Box className={'headingBlock'}>
                    <Typography variant={'h1'} className={'animate__animated animate__fadeInUp'}>Eternity for Business</Typography>
                    <Typography variant={'body2'} className={'headDes animate__animated animate__fadeInUp'}>Making the world a smaller place</Typography>

                    <Tabs value={value} onChange={handleChange} aria-label="nav tabs"
                          orientation={isMobile ? 'vertical' : 'horizontal'}
                          sx={{
                              width: '94%',
                              maxWidth: '600px',
                              mt: 4,
                              borderRadius: '20px',
                              boxShadow: `0 0 12px -3px ${alpha(theme.palette.secondary.contrastText, 0.8)}`,
                              minHeight: '36px',
                              p: '4px',
                              '& .MuiTabs-flexContainer': {
                                  gap: 1,
                                  '& .MuiTab-root': {
                                      flex: 1,
                                      color: theme.palette.secondary.contrastText,
                                      borderRadius: '16px',
                                      minHeight: '36px',
                                      fontSize: '14px',
                                      lineHeight: '14px',
                                      '&.Mui-selected': {
                                          color: theme.palette.secondary.main,
                                          fontWeight: 600,
                                      },
                                  },
                              },
                              '& .MuiTabs-indicator': {
                                  width: '100%',
                                  zIndex: -1,
                                  height: '100%',
                                  borderRadius: '16px',
                                  background: theme.palette.primary.main,
                              },

                          }}>
                        <Tab label="Last Mile Partner" onClick={() => navigate('last-mile-partner')}/>
                        <Tab label="Carrier Partner" onClick={() => navigate('carrier')}/>
                        <Tab label="Agent/ Driver" onClick={() => navigate('agent-driver')}/>
                    </Tabs>
                </Box>

            </Box>
            <Outlet/>
        </NewPageContainer>
    )
}