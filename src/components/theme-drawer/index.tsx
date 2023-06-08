import React from 'react';
import {Toolbar} from "@mui/material";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import DrawerItems from "./drawer-items";


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
