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
import DrawerItems from "./drawer-items";
import {Toolbar} from "@mui/material";


interface ThemeDrawerProps {
    isDrawerOpen: boolean
    toggleDrawer: () => void
}

export default function ThemeDrawer(props: ThemeDrawerProps) {

    const {isDrawerOpen, toggleDrawer} = props

    return (
        <SwipeableDrawer
            anchor={'bottom'}
            open={isDrawerOpen}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            sx={{
                '& .MuiPaper-root': {
                    background: 'none',
                    boxShadow: 0
                },
            }}>
            <Toolbar/>
            <DrawerItems toggleDrawer={toggleDrawer}/>
        </SwipeableDrawer>
    )
}
