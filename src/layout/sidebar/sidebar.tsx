import React from 'react'
import { alpha, Box, Button, Drawer, useMediaQuery, useTheme } from "@mui/material";
import MobileSidebarItems from "./mobile-sidebar-items";
import illustration from '../../assets/images/logistic-1.png'


export default function Sidebar(props: any) {

    const { open, closeDrawer } = props

    const theme = useTheme()
    const isMobile = useMediaQuery('(max-width:1023px)')

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
                    justifyContent: 'center',
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
            {isMobile ? <MobileSidebarItems toggleDrawer={closeDrawer} /> : <LargeScreenDrawerItem />}

        </Drawer>
    )
}


const LargeScreenDrawerItem = () => {

    const theme = useTheme()

    return (
        <Box sx={{
            alignSelf: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
            flexFlow: 'column',
            '& img': {
                maxHeight: '200px',
                objectFit: 'contain',
                p:4,
            },
            '& .ctaButton':{
                borderWidth: '2px',
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 600,
                color: theme.palette.secondary.main,
                borderColor: theme.palette.secondary.main,
                width: '100%',
                maxWidth: '200px',
                fontSize: '1.2rem',

            },
        }}>
                <img src={illustration} alt={'thank you'} />
                <Button variant={'outlined'} className={'ctaButton'}>Use Portal</Button>

        </Box>
    )
}