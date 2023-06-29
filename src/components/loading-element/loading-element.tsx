import React from 'react'
import {Box, CircularProgress, useTheme} from "@mui/material"


export default function LoadingElement() {

    const theme = useTheme()

    return (
        <Box className={'loadingElement'}
             sx={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 zIndex: theme.zIndex.tooltip + 10,
             }}>
            <CircularProgress/>
        </Box>
    )
}