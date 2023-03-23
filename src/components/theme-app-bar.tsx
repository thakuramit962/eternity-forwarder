import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {alpha, useTheme} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import squareLogo from '../assets/images/eternity-forwarders-logo-square.svg'
import longLogo from '../assets/images/long-logo.svg'


const menus = [
    {name: 'Privacy Policy', link: 'privacy-policy'},
    {name: 'Terms & Conditions', link: 'terms-and-conditions'},
]

export default function ThemeAppBar() {

    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <AppBar position="fixed" sx={{
            background: 'transparent',
            backdropFilter: 'blur(50px)',
            boxShadow: 0,
            '& *': {},
            '& img.longLogo': {
                maxHeight: {xs: '30px', sm: '50px'}
            },

        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{
                    py: {xs: 2, sm: 0},
                    gap: 2,
                    flexWrap: {xs: 'wrap', md: 'nowrap'},
                    justifyContent: {xs: 'center', md: 'space-between'},

                }}>
                    <img src={longLogo} className={'longLogo'} onClick={()=>navigate('/')}/>

                    <Box sx={{
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: {xs: 'center', md: 'flex-end'},
                        alignItems: 'center',
                        gap: 1.5,
                        '& a': {
                            px: 1,
                            textAlign: 'center',
                            textDecoration: 'none',
                            color: theme.palette.secondary.main,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexFlow: 'column',
                            position: 'relative',
                            '& span': {
                                position: 'absolute',
                                bottom: '-6px',
                                display: 'flex',
                                content: "''",
                                height: '2px',
                                borderRadius: '50vh',
                                width: '0',
                                mx: 'auto',
                                transition: 'all 350ms ease-in-out',
                                background: theme.palette.primary.main
                            },
                            '&:hover': {
                                '& span': {
                                    width: 'calc(100% + 8px)',
                                    mx: 'auto',
                                }
                            },
                            '&.active': {
                                color: theme.palette.primary.main,
                                '& span': {
                                    background: theme.palette.primary.main,
                                    width: '4px',
                                    height: '4px',

                                },
                                '&:hover': {
                                    // color: theme.palette.secondary.main,
                                    '& span': {
                                        background: alpha(theme.palette.primary.main, 1),
                                        width: 'calc(100% + 8px)',
                                        height: '2px',
                                        // height: 'calc(100% + 4px)',
                                    },
                                }
                            },

                        }
                    }}>
                        {menus.map((menu) => (
                            <NavLink key={menu.name} to={`/${menu.link}`}
                                     className={({isActive}) => isActive ? 'active' : ''}>
                                {menu.name}
                                <span/>
                            </NavLink>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
