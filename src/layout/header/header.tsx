import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {
    alpha,
    List,
    ListItem,
    ListItemButton, ListItemIcon,
    useMediaQuery,
    useScrollTrigger,
    useTheme
} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import whiteLogo from '../../assets/images/long-logo-white.svg'
import blackLogo from '../../assets/images/long-logo.svg'
import UserMenu from "./user-menu";


const menus = [
    {
        name: 'Company', link: '', submenu: [
            {name: 'About Us', link: 'services'},
            {name: 'Contact', link: 'group'},
            {name: 'Career', link: 'group'},
        ]
    },
    {
        name: 'Services', link: 'services', submenu: [
            {name: 'Logistic Solutions', link: 'services'},
            {name: '3PL/ Warehousing', link: 'group'},
            {name: 'Other Services', link: 'group'},
        ]
    },
    {name: 'Tracking', link: 'group'},
    {
        name: 'Partner With Us', link: 'partner-with-us', submenu: [
            {name: 'Last Mile Partner', link: 'services'},
            {name: 'Carrier Partner', link: 'group'},
        ]
    },
    {
        name: 'Ship With Us', link: 'ship-with-us', submenu: [
            {name: 'Eternity for Business', link: 'services'},
            {name: 'Eternity Shipmate', link: 'group'},
            {name: 'Register your Interest', link: 'group'},
        ]
    },
]

function ListItemText(props: { primary: string }) {
    return null;
}

export default function Header(props: any) {

    const theme = useTheme()
    const navigate = useNavigate()
    const isSmallScreen = useMediaQuery('(max-width:1023px)')

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

    const handleCloseUserMenu = () => setAnchorElUser(null)

    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
        // target: window
    });

    return (
        <AppBar
            position={'fixed'}
            sx={{
                backgroundColor: scrolled ? theme.palette.background.paper : 'transparent',
                boxShadow: 0,
                borderBottom: `1px solid ${theme.palette.text.disabled}`,
                justifyContent: 'space-between',
                '& img.longLogo': {
                    maxWidth: '100%',
                    maxHeight: {xs: '36px', sm: '44px'},
                },
            }}>
            <Toolbar disableGutters sx={{
                gap: 2,
                height: scrolled ? '80px' : '90px',
                alignItems: 'stretch',
                transition: 'all 300ms ease-in-out',
            }}>
                <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    px: 2,
                }}>
                    <img src={scrolled ? blackLogo : whiteLogo} className={'longLogo'}/>
                </Box>

                <Box sx={{
                    flexGrow: 1,
                    display: isSmallScreen ? 'none' : 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'stretch',
                    gap: 1.5,
                    transition: scrolled ? 'all 250ms ease-in-out' : 'all 300ms ease-in-out',
                    '& a': {
                        px: 1,
                        textAlign: 'center',
                        textDecoration: 'none',
                        fontSize: '18px',
                        color: scrolled ? theme.palette.secondary.main : theme.palette.secondary.contrastText,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexFlow: 'column',
                        position: 'relative',
                        '& span.decoration': {
                            position: 'absolute',
                            top: 0,
                            display: 'flex',
                            content: "''",
                            height: '0',
                            borderRadius: '50vh',
                            width: '100%',
                            transition: 'all 350ms ease-in-out',
                            background: theme.palette.primary.main,
                            zIndex: -1,
                        },
                        '& .submenu': {
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: 'max-content',
                            minWidth: '150px',
                            background: '#fff',
                            color: '#000',
                            display: 'none',
                            animation: 'fadeUp 500ms ease-in-out both',
                        },
                        '&:hover': {
                            backgroundImage: `linear-gradient( ${alpha(theme.palette.primary.main, 0.2)}, ${alpha(theme.palette.text.secondary, 0)})`,
                            '& span.decoration': {
                                height: '5px',
                                mx: 'auto',
                                borderRadius: '0',
                            },
                            '& .submenu': {
                                display: 'block',
                            },
                        },
                        '&.active': {
                            backgroundImage: `linear-gradient( ${alpha(theme.palette.primary.main, 0.2)}, ${alpha(theme.palette.text.secondary, 0)})`,
                            '& span.decoration': {
                                height: '5px',
                                mx: 'auto',
                                borderRadius: '0',

                            },
                            '&:hover': {
                                '& span.decoration': {
                                    height: '2px',
                                },
                            }
                        },
                        ['@keyframes fadeUp']: {
                            '0%': {
                                opacity: 0,
                                transform: 'translate3d(0, 20px, 0)',
                            },
                            '100%': {
                                opacity: 1,
                                transform: 'translate3d(0, 0, 0)',
                            },
                        },
                    }
                }}>
                    {menus.map((menu) => (
                        <NavLink key={menu.name} to={`${menu.link}`}
                                 className={({isActive}) => isActive ? 'active' : ''}>
                            {menu.name}
                            <span className={'decoration'}/>

                            {menu.submenu &&
                            <List className={'submenu animate__animated animate__fadeInUps'}>
                                {menu.submenu?.map((m, index) => (
                                    <ListItem key={index} sx={{p: 0}}><ListItemButton sx={{
                                        fontWeight: 500,
                                        fontSize: '15px',
                                        color: theme.palette.secondary.main,
                                    }}>{m?.name}</ListItemButton></ListItem>
                                ))}
                            </List>}
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
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        px: 3,
                        borderLeft: `1px solid ${theme.palette.text.disabled}`,
                        alignSelf: 'stretch',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 500ms ease-in-out',
                        background: scrolled ? theme.palette.secondary.main : alpha(theme.palette.background.default, 0),
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            borderRadius: '50%',
                            height: '200%',
                            width: '200%',
                            transform: 'scale(0)',
                            transition: 'all 400ms ease-in-out',
                            background: theme.palette.primary.main,
                        },
                        '& .MuiIconButton-root': {
                            cursor: 'none',
                            color: theme.palette.background.default,
                            fontSize: '1.5rem',
                            p: 0,
                            '& svg': {
                                height: '2.2rem',
                                width: '2.2rem',
                            },
                        },
                        '&:hover': {
                            cursor: 'none',
                            '&:before': {
                                transform: 'scale(1)',
                            },
                        },
                    }}>
                        <IconButton disableRipple onClick={props.toggleDrawer}>
                            <MenuIcon/>
                        </IconButton>
                    </Box>
                </Box>

            </Toolbar>
        </AppBar>
    )
}

// <Button variant={'contained'} sx={{
//     borderRadius: '8px',
//     borderWidth: '2px',
//     textTransform: 'none',
//     fontSize: '15px',
//     fontWeight: 600,
//     letterSpacing: '0.5px',
//     boxShadow: 0,
//     height: '40px',
//     // px: 2,
//     display: {xs: 'none', sm: 'flex'},
//     '&:hover': {
//         boxShadow: 0,
//     },
// }}>Ship With Us</Button>