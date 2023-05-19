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
                </Toolbar>
            </Container>
        </AppBar>
    )
}
