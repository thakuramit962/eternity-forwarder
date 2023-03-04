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
import {alpha, useScrollTrigger, useTheme} from "@mui/material";
import {NavLink} from "react-router-dom";
import squareLogo from '../assets/images/eternity-forwarders-logo-square.svg'
import longLogo from '../assets/images/long-logo.svg'
import UserMenu from "./user-menu";


const menus = [
    {name: 'Home', link: ''},
    {name: 'About', link: 'about'},
    {name: 'Services', link: 'services'},
    {name: 'Group', link: 'group'},
    {name: 'Support', link: 'support'},
    {name: 'Track Lr', link: 'support'},
]
const userMenus = ['Profile', 'Logout'];


export default function AppBar2(props: any) {

    const theme = useTheme()

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

    const handleCloseUserMenu = () => setAnchorElUser(null)

    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });

    return (
        <AppBar
            position={'fixed'}
            sx={{
                zIndex: theme.zIndex.drawer + 1,
                background: theme.palette.background.paper,
                backdropFilter: 'blur(50px)',
                boxShadow: scrolled ? `0px -4px 19px 0 ${theme.palette.primary.main}` : 0,
                '& *': {},
                '& img.longLogo': {
                    maxHeight: '50px'
                },
                '& img.squareLogo': {
                    maxHeight: '30px'
                },
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{gap: 2}}>
                    <IconButton onClick={props.toggleDrawer} sx={{
                        display: {xs: 'flex', md: 'none'},
                        order: -1
                    }}><MenuIcon/></IconButton>
                    <Typography variant="h6"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: {xs: 'center', md: 'flex-start'},
                                    gap: '8px',
                                    minWidth: 'max-content',
                                    flex: {xs: 1, md: '0 0 150px'},
                                    color: theme.palette.secondary.main
                                }}>
                        <img src={longLogo} className={'squareLogo'}/>
                        {/*Eternity*/}
                    </Typography>

                    <Box sx={{
                        mt: scrolled ? 0 : 7,
                        mb: scrolled ? 0 : 2,
                        flexGrow: 1,
                        display: {xs: 'none', md: 'flex'},
                        justifyContent: scrolled ? 'flex-end' : 'center',
                        alignItems: 'center',
                        gap: 1.5,
                        transition: scrolled ? 'all 250ms ease-in-out' : 'all 300ms ease-in-out',
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
                            <NavLink key={menu.name} to={`${menu.link}`}
                                     className={({isActive}) => isActive ? 'active' : ''}>
                                {menu.name}
                                <span/>
                            </NavLink>
                        ))}
                    </Box>

                    <Box sx={{
                        flexGrow: 0,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: 2,
                        ml: 3,
                    }}>
                        <Button variant={'outlined'} sx={{
                            borderRadius: '12px',
                            borderWidth: '2px',
                            textTransform: 'none',
                            width: '100px',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            display: {xs: 'none', sm: 'flex'},
                            '&:hover': {
                                borderWidth: '2px',
                            },
                        }}>Ship Now</Button>
                        <UserMenu/>
                        <Menu sx={{mt: '45px'}}
                              id="menu-appbar"
                              anchorEl={anchorElUser}
                              anchorOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                              }}
                              keepMounted
                              transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                              }}
                              open={Boolean(anchorElUser)}
                              onClose={handleCloseUserMenu}>
                            {userMenus.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
