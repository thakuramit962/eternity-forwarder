import React from 'react'
import {Box, Drawer, useTheme} from "@mui/material";


export default function Sidebar(props: any) {

    const {open, closeDrawer} = props

    const theme = useTheme()

    return (
        <Drawer
            anchor={'right'}
            open={open}
            onClose={closeDrawer}
            sx={{
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 350,
                    boxSizing: 'border-box',
                    border: 'none',
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
            <p>Drawer View</p>
        </Drawer>
    )
}