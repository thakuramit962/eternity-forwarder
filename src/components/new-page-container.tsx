import React from 'react'
import {alpha, Box, useTheme} from "@mui/material"


export default function NewPageContainer(props: any) {

    const theme = useTheme()

    return (
        <Box sx={{
            background: alpha(theme.palette.action.hover, 0.05),
            '& .heading': {
                fontSize: 'clamp(1.3rem, 10vw, 4rem)',
                fontWeight: 700,
                textAlign: 'center',
                color: 'transparent',
                // color: theme.palette.secondary.light,
                fontFamily: theme.typography.h1.fontFamily,
                letterSpacing: '2px',
                WebkitTextStroke: '2px',
                WebkitTextStrokeColor: alpha(theme.palette.secondary.light, 0.1)
            },
        }}>
            {props.children}
        </Box>
    )
}