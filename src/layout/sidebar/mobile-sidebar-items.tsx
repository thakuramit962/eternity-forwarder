import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {alpha, useTheme} from "@mui/material";
import {
    BusinessRounded,
    DeblurRounded,
    Diversity2Rounded,
    Home,
    SupportAgentRounded,
    TimelineRounded
} from "@mui/icons-material";
import {NavLink, useNavigate} from "react-router-dom";

interface MobileSidebarItemsProps {
    toggleDrawer: () => void
}

export default function MobileSidebarItems(props: MobileSidebarItemsProps) {

    const drawerMenus = [
        {name: 'Home', icon: Home, link: '',},
        {name: 'Services', icon: Home, link: 'services/logistic-solutions',},
        {name: 'Partner With Us', icon: Home, link: 'partner-with-us',},
        {name: 'About Company', icon: DeblurRounded, link: 'about-us',},
        {name: 'Contact Us', icon: Diversity2Rounded, link: 'about-us/contact'},
        {name: 'Ship Now', icon: SupportAgentRounded, link: 'book-service',},
        {name: 'Track', icon: TimelineRounded, link: 'track',},
    ]


    const {toggleDrawer} = props

    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <Box role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}
             sx={{
                 width: '100vw',
                 // background: alpha(theme.palette.background.paper, 0.6),
                 // backdropFilter: 'blur(12px)',
                 // borderRadius: '20px',
                 mt: 2,
                 height: 'calc(100vh - 5rem)',
                 overflow: 'auto',
                 // boxShadow: `0 20px 20px -12px ${theme.palette.background.paper} inset`,
             }}>
            <List sx={{
                width: '80vw',
                mt: 3,
                mx: 'auto',
                '& a': {
                    textDecoration: 'none',
                },
                '& .MuiListItemButton-root': {
                    mb: 2,
                    borderRadius: '10px',
                    color: theme.palette.primary.contrastText,
                    background: `linear-gradient(145deg, ${alpha(theme.palette.text.secondary, 0.1)}, ${theme.palette.background.default})`,
                    boxShadow: `2px 4px 10px ${alpha(theme.palette.text.secondary, 0.1)}, -2px -3px 11px ${alpha(theme.palette.background.default, 0.5)}`,
                    '&:hover': {
                        background: alpha(theme.palette.background.default, 0.5),
                        boxShadow: `inset 2px 4px 10px ${alpha(theme.palette.text.secondary, 0.1)}, inset -2px -3px 10px ${alpha(theme.palette.background.default, 0.5)}`,
                    },
                    '& svg': {
                        height: '1.5rem',
                        width: '1.5rem',
                        p: '5px',
                        borderRadius: '4px',
                        color: theme.palette.primary.dark,
                    },
                },
                '& .active': {
                    '& .MuiListItemButton-root': {
                        color: theme.palette.secondary.contrastText,
                        background: theme.palette.primary.dark,
                        '&:hover': {
                            background: alpha(theme.palette.background.default, 0.5),
                            boxShadow: `inset 2px 4px 10px ${alpha(theme.palette.text.secondary, 0.1)}, inset -2px -3px 10px ${alpha(theme.palette.background.default, 0.5)}`,
                        },
                        '& svg': {
                            background: alpha(theme.palette.secondary.contrastText, 0.1),
                            color: theme.palette.secondary.contrastText,
                        },
                    },
                },
            }}>

                {drawerMenus.map((drawerMenu, index) => {
                    const MyIcon = drawerMenu.icon
                    return (
                        // drawerMenu.name == 'Services'
                        //     ? <a key={drawerMenu.name} href={'#serviceSection'} onClick={() => navigate('/')}>
                        //         <ListItem disablePadding>
                        //             <ListItemButton>
                        //                 <ListItemIcon>
                        //                     <MyIcon/>
                        //                 </ListItemIcon>
                        //                 <ListItemText primary={drawerMenu.name}/>
                        //             </ListItemButton>
                        //         </ListItem>
                        //     </a>
                        //     :
                            <NavLink key={drawerMenu.name} to={drawerMenu.link}
                                       className={({isActive}) => isActive ? 'active' : ''}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <MyIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={drawerMenu.name}/>
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                    // )
                // }
                )})}
            </List>
        </Box>
    )
}
