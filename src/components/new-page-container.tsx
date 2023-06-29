import React from 'react'
import {alpha, Box, useTheme} from "@mui/material"
import bg from "../assets/images/bg.png";


export default function NewPageContainer(props: any) {

    const theme = useTheme()

    return (
        <Box sx={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom left',
            backgroundAttachment: 'fixed',
            '& .heading': {
                mx: 'auto',
                width: 'max-content',
                fontSize: {xs: '2rem', sm: 'clamp(1.3rem, 10vw, 2.8rem)'},
                fontWeight: 700,
                textAlign: 'center',
                color: theme.palette.secondary.light,
                fontFamily: theme.typography.h1.fontFamily,
                position: 'relative',
                mb: 3,
                '&:after': {
                    content: '""',
                    width: '50%',
                    height: '1px',
                    background: theme.palette.primary.main,
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    opacity: 0,
                    transition: 'all 250ms ease-in-out',
                },
            },
            '& section:hover': {
                '& .heading': {
                    '&:after': {
                        width: '110%',
                        height: '4px',
                        bottom: '4px',
                        opacity: 1,
                    },
                },
            },
            ...props.sx
        }}>
            {props.children}
        </Box>
    )
}