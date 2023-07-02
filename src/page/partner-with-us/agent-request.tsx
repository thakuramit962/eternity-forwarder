import React from 'react'
import NewPageContainer from "../../components/new-page-container";
import Toolbar from "@mui/material/Toolbar";
import {Box} from "@mui/material";


export default function AgentRequest() {


    return (
        <NewPageContainer>
            <Toolbar disableGutters sx={{
                height: '90px',
                transition: 'all 300ms ease-in-out',
            }}/>

            AgentRequest page
        </NewPageContainer>
    )
}