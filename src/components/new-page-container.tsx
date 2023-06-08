import React from 'react'
import {Box, useTheme} from "@mui/material"


export default function NewPageContainer(props: any) {

    const theme = useTheme()

    return (
        <Box sx={{
            '& .heading': {
                fontSize: 'clamp(1.3rem, 10vw, 4rem)',
                fontWeight: 700,
                textAlign: 'center',
                color: theme.palette.primary.main,
                fontFamily: theme.typography.body2.fontFamily,
            },
        }}>
            {props.children}
        </Box>
    )
}