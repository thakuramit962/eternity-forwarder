import React from "react"
import {Box, useTheme} from "@mui/material"
import useCursorPosition from "../../hooks/use-cursor-position"

const NewCursor = () => {

    const {x, y} = useCursorPosition()

    const theme = useTheme()

    return (
        <>
            <Box className={"ring"}
                 sx={{
                     position: 'fixed',
                     left: `${x}px`,
                     top: `${y}px`,
                     width: '22px',
                     height: '22px',
                     border: `2px solid ${theme.palette.primary.main}`,
                     borderRadius: '100%',
                     transform: 'translate(-50%, -50%)',
                     WebkitTransitionDuration: '100ms',
                     transitionDuration: '100ms',
                     WebkitTransitionTimingFunction: 'ease-out',
                     transitionTimingFunction: 'ease-out',
                     willChange: 'width, height, transform, border',
                     zIndex: theme.zIndex.drawer + 5,
                     pointerEvents: 'none',
                     '&.hovered': {
                         width: '50px',
                         height: '50px',
                         borderWidth: '3px',
                         borderColor: theme.palette.primary.main,
                     },
                 }}/>
            <Box className={"dot"}
                 sx={{
                     left: `${x}px`,
                     top: `${y}px`,
                     position: 'fixed',
                     width: '8px',
                     height: '8px',
                     backgroundColor: theme.palette.primary.main,
                     borderRadius: '100%',
                     transform: 'translate(-50%, -50%)',
                     zIndex: theme.zIndex.drawer + 5,
                     pointerEvents: 'none',
                     '&.hovered': {
                         display: 'none',
                     },
                 }}/>
        </>
    )
}

export default NewCursor
