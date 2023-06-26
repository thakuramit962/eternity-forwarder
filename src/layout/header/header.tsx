import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import {
    alpha,
    List,
    ListItem,
    ListItemButton,
    useMediaQuery,
    useScrollTrigger,
    useTheme
} from "@mui/material"
import {NavLink, useNavigate, useMatch} from "react-router-dom"
import whiteLogo from '../../assets/images/long-logo-white.svg'
import blackLogo from '../../assets/images/long-logo.svg'


const menus = [
    {
        name: 'Our Services', link: 'services', submenu: [
            {name: 'Logistic Solutions', link: 'services'},
            {name: '3PL/ Warehousing', link: 'group'},
            {name: 'Other Services', link: 'group'},
        ]
    },
    {
        name: 'Ship Now', link: 'ship-with-us', submenu: [
            {name: 'Order Booking', link: 'services'},
            {name: 'Connectivity Menu', link: 'group'},
        ]
    },
    {
        name: 'Partner With Us', link: 'partner-with-us', submenu: [
            {name: 'Last Mile Partner', link: 'services'},
            {name: 'Carrier Partner', link: 'group'},
            {name: 'Agent', link: 'group'},
        ]
    },
    {
        name: 'About Us', link: 'company', submenu: [
            {name: 'Company', link: 'services'},
            {name: 'Career', link: 'group'},
            {name: 'Contact Us', link: 'group'},
        ]
    }
]

export default function Header(props: any) {

    const theme = useTheme()
    const navigate = useNavigate()
    const isHomeScreen = useMatch('/')
    const isSmallScreen = useMediaQuery('(max-width:1023px)')

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

    const handleCloseUserMenu = () => setAnchorElUser(null)

    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 60,
    })

    return (
        <AppBar
            position={'fixed'}
            sx={{
                backgroundColor: scrolled ? theme.palette.background.paper : (isHomeScreen ? 'transparent' : theme.palette.background.paper),
                boxShadow: 0,
                borderBottom: `1px solid ${theme.palette.text.disabled}`,
                justifyContent: 'space-between',
                '& img.longLogo': {
                    maxWidth: '100%',
                    maxHeight: {xs: '36px', sm: '44px'},
                    cursor: 'pointer',
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
                    <img src={scrolled ? blackLogo : (isHomeScreen ? whiteLogo : blackLogo)} onClick={() => navigate('/')} className={'longLogo'}/>
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
                        color: scrolled ? theme.palette.secondary.main : (isHomeScreen ? theme.palette.secondary.contrastText : theme.palette.secondary.main),
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
                            background: theme.palette.background.paper,
                            color: theme.palette.text.primary,
                            display: 'none',
                            boxShadow: '0 0 12px #83838360',
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

                    <IconButton onClick={props.toggleDrawer} sx={{
                        borderRadius: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        px: 3,
                        borderLeft: `1px solid ${theme.palette.text.disabled}`,
                        alignSelf: 'stretch',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 500ms ease-in-out',
                        cursor: 'none',
                        color: theme.palette.background.default,
                        fontSize: '1.5rem',
                        background: scrolled ? theme.palette.secondary.main  : (isHomeScreen ? alpha(theme.palette.background.default, 0) : theme.palette.secondary.main),
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            borderRadius: '50%',
                            height: '200%',
                            width: '200%',
                            transform: 'scale(0)',
                            transition: 'all 400ms ease-in-out',
                            background: theme.palette.primary.main,
                            zIndex: -1,
                        },
                        '& svg': {
                            height: '2.2rem',
                            width: '2.2rem',
                        },
                        '&:hover': {
                            cursor: 'none',
                            '&:before': {
                                transform: 'scale(1)',
                            },
                        },
                    }}>
                        <MenuIcon/>
                    </IconButton>
                </Box>

            </Toolbar>
        </AppBar>
    )
}