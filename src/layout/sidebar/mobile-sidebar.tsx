import React from 'react'
import {Toolbar, SwipeableDrawer} from "@mui/material"
import MobileSidebarItems from "./mobile-sidebar-items"


interface ThemeDrawerProps {
    isDrawerOpen: boolean
    toggleDrawer: () => void
}

export default function MobileSidebar(props: ThemeDrawerProps) {

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
            <MobileSidebarItems toggleDrawer={toggleDrawer}/>
        </SwipeableDrawer>
    )
}
