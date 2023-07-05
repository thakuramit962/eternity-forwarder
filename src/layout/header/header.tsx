import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import {
    alpha, Button,
    List,
    ListItem,
    ListItemButton,
    useMediaQuery,
    useScrollTrigger,
    useTheme
} from "@mui/material"
import {NavLink, useNavigate, useMatch, useLocation} from "react-router-dom"
import whiteLogo from '../../assets/images/long-logo-white.svg'
import blackLogo from '../../assets/images/long-logo.svg'


const menus = [
    {
        name: 'Our Services', link: 'services', clickable: false, submenu: [
            {name: 'Logistic Solutions', link: 'services/logistic-solutions'},
            {name: '3PL/ Warehousing', link: 'services/3pl-warehousing-services'},
            {name: 'Other Services', link: 'services/other-services'},
        ]
    },
    // {
    // name: 'Ship Now', link: 'ship-with-us', submenu: [
    // {name: 'Order Booking', link: 'services'},
    // {name: 'Connectivity Menu', link: 'group'},
    // ]
    // },
    {
        name: 'Partner With Us', link: 'partner-with-us', clickable: true, submenu: [
            {name: 'Last Mile Partner', link: 'partner-us/last-mile-partner'},
            {name: 'Carrier Partner', link: 'partner-us/carrier'},
            {name: 'Agent', link: 'partner-us/agent-driver'},
        ]
    },
    {
        name: 'About Us', link: 'about-us', clickable: true, submenu: [
            {name: 'Company', link: 'services'},
            {name: 'Career', link: 'group'},
            {name: 'Contact Us', link: 'contact-us'},
        ]
    },
    {name: 'Ship Now', link: 'book-service', clickable: true,}
]

export default function Header(props: any) {

    const theme = useTheme()
    const navigate = useNavigate()

    const homePage = useMatch('/')
    const trackPage = useMatch('/track')
    const about = useMatch('/about-us*')
    const service = useMatch('/services/*')
    const partner = useMatch('/partner-with-us/*')
    const partnerUs = useMatch('/partner-us/*')

    const withOutBanner = (homePage || service || partner || partnerUs || trackPage || about)

    const isSmallScreen = useMediaQuery('(max-width:1023px)')

    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 60,
    })

    return (
        <AppBar
            position={'fixed'}
            sx={{
                backgroundColor: scrolled ? theme.palette.background.paper : (withOutBanner ? 'transparent' : theme.palette.background.paper),
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
                    <img
                        src={scrolled ? blackLogo : (withOutBanner ? whiteLogo : blackLogo)}
                        onClick={() => navigate('/')} className={'longLogo'}/>
                </Box>

                <Box sx={{
                    flexGrow: 1,
                    display: isSmallScreen ? 'none' : 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'stretch',
                    gap: 1.5,
                    transition: scrolled ? 'all 250ms ease-in-out' : 'all 300ms ease-in-out',
                    '& .menuBox': {
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexFlow: 'column',
                        '& a': {
                            px: 1,
                            textAlign: 'center',
                            textDecoration: 'none',
                            fontSize: '18px',
                            // color: scrolled ? theme.palette.secondary.main : theme.palette.secondary.contrastText,
                            color: scrolled ? theme.palette.secondary.main : (withOutBanner ? theme.palette.secondary.contrastText : theme.palette.secondary.main),
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexFlow: 'column',
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
                        },
                        '&:has(a.active)': {
                            backgroundImage: `linear-gradient( ${alpha(theme.palette.primary.main, 0.2)}, ${alpha(theme.palette.text.secondary, 0)})`,
                            '& span.decoration': {
                                height: '5px',
                                mx: 'auto',
                                borderRadius: '0',

                            },
                            '&:hover': {
                                '& a span.decoration': {
                                    height: '2px',
                                },
                            }
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
                            '& a': {
                                '& span.decoration': {
                                    height: '5px',
                                    mx: 'auto',
                                    borderRadius: '0',
                                },
                            },
                            '& .submenu': {
                                display: 'block',
                            },
                        },
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
                }}>
                    {menus.map((menu) => (
                        <Box key={menu.name} className={'menuBox'}>
                            <NavLink key={menu.name} to={`${menu.link}`}
                                     className={({isActive}) => isActive ? 'active' : ''}
                                     style={{
                                         pointerEvents: menu.clickable ? 'auto' : 'none'
                                     }}>
                                {menu.name}
                                <span className={'decoration'}/>
                            </NavLink>
                            {menu.submenu &&
                            menu.submenu.length > 0 &&
                            <List className={'submenu animate__animated animate__fadeInUps'}>
                                {menu.submenu?.map((m, index) => (
                                    <ListItem key={index} sx={{p: 0}} onClick={() => navigate(m.link)}>
                                        <ListItemButton sx={{
                                            fontWeight: 500,
                                            fontSize: '15px',
                                            color: theme.palette.secondary.main,
                                        }}>
                                            {m?.name}
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>}
                        </Box>
                    ))}

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        '& .shipButton': {
                            borderWidth: '2px',
                            borderRadius: '12px',
                            // textTransform: 'none',
                            fontWeight: 600,
                            color: scrolled ? theme.palette.secondary.main : theme.palette.primary.main,
                            borderColor: scrolled ? theme.palette.secondary.main : theme.palette.primary.main,
                            // width: '100px',
                            width: '110px',
                            maxWidth: '200px',
                            fontSize: '1.1rem',
                            lineHeight: '1.7rem',
                            background: scrolled ? theme.palette.primary.main : 'transparent',
                            '&:hover': {
                                background: theme.palette.primary.main,
                                color: theme.palette.secondary.main,
                            },
                        },
                        '& .trackButton': {
                            borderWidth: '1px',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontWeight: 500,
                            color: scrolled ? theme.palette.secondary.main : theme.palette.primary.main,
                            border: 0,
                            // borderColor: scrolled ? theme.palette.secondary.main : theme.palette.primary.main,
                            // width: '100px',
                            maxWidth: '200px',
                            fontSize: '1.1rem',
                            lineHeight: '1.7rem',
                            background: scrolled ? theme.palette.primary.main : 'transparent',
                            '&:hover': {
                                background: theme.palette.primary.main,
                                color: theme.palette.secondary.main,
                            },
                        },

                    }}>
                        {/*<Button variant={'outlined'} size={'medium'} className={'trackButton'}>Track</Button>*/}
                        <Button variant={'outlined'} size={'medium'} className={'shipButton'}
                                onClick={() => navigate('track')}>Track</Button>
                    </Box>
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
                        // background: scrolled ? theme.palette.secondary.main : alpha(theme.palette.background.default, 0),
                        background: scrolled ? theme.palette.secondary.main : (withOutBanner ? alpha(theme.palette.background.default, 0) : theme.palette.secondary.main),
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