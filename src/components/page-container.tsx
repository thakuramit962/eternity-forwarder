import React from 'react'
import {Box, useTheme} from "@mui/material"


export default function PageContainer(props: any) {

    const theme = useTheme()

    return (
        <Box sx={{
            p: 2,
            mt: {xs: '60px', sm: '100px'},
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