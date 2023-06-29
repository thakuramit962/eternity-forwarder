import React from 'react'
import {alpha, Box, Drawer, useMediaQuery, useTheme} from "@mui/material";
import MobileSidebarItems from "./mobile-sidebar-items";


export default function Sidebar(props: any) {

    const {open, closeDrawer} = props

    const theme = useTheme()
    const isMobile = useMediaQuery('(max-width:600px)')

    return (
        <Drawer
            anchor={isMobile ? 'bottom' : 'right'}
            open={open}
            onClose={closeDrawer}
            sx={{
                flexShrink: 0,
                // background: '#f1633420',
                '& .MuiDrawer-paper': {
                    background: alpha(theme.palette.background.paper, 1),
                    // backdropFilter: 'blur(12px)',
                    width: isMobile ? '100%' : 350,
                    boxSizing: 'border-box',
                    border: 'none',
                    // borderRadius: '20px',
                },
                '& a': {
                    color: theme.palette.text.primary,
                    textDecoration: 'none',
                    cursor: 'default',
                },
                '& .MuiListItemButton-root': {
                    height: '56px',
                    borderRadius: '0 50vh 50vh 0',
                },
                '& .activeMenu .MuiListItemButton-root': {
                    background: theme.palette.action.hover,
                    '& svg': {
                        color: theme.palette.text.primary,
                    },
                },
            }}
        >
            {isMobile ? <MobileSidebarItems toggleDrawer={closeDrawer}/> : 'not mobile'}

        </Drawer>
    )
}