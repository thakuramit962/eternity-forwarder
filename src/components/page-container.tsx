import React, {ReactNode} from 'react'
import {Box, Container} from "@mui/material"


interface PageContainerProps {
    children: ReactNode
}

export default function PageContainer(props: any) {

    return (
        <Box sx={{
            p: 2,
            mt: {xs: '60px', sm: '100px'},
            // background: '#f16334'
        }}>
            {props.children}
        </Box>
    )
}