import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {alpha, lighten, useTheme} from "@mui/material";
import {ArrowRightRounded, Logout, LogoutRounded, ManageAccountsRounded} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

export default function UserMenu() {

    const theme = useTheme()
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    return (
        <React.Fragment>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="My Account">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{width: 32, height: 32}}/>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        width: '180px',
                        overflow: 'visible',
                        background: (theme.palette.mode == 'dark')
                            ? lighten(theme.palette.secondary.main, 0.2)
                            : lighten(theme.palette.secondary.main, 0.8),
                        mt: 1.5,
                        borderRadius: '12px',
                        px: 1,
                        py: 0,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            background: (theme.palette.mode == 'dark')
                                ? lighten(theme.palette.secondary.main, 0.2)
                                : lighten(theme.palette.secondary.main, 0.8),
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                        '& .userInfo': {
                            lineHeight: '16px',
                            fontSize: '15px',
                            width: '100%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            letterSpacing: '0.5px',
                            '& span': {
                                color: theme.palette.text.secondary,
                                letterSpacing: '1px',
                            },
                        },
                    },
                }}>

                <MenuItem sx={{
                    mt: 1,
                    borderRadius: '8px',
                    justifyContent: 'space-between',
                    background: alpha(theme.palette.background.default, 0.2),
                    '&:hover': {
                        '& .arrowIcon': {
                            right: '-7px',
                            opacity: 1,
                        },
                    },
                }}>
                    <Typography className={'userInfo'}>
                        User<br/>
                        <span style={{fontSize: '12px'}}>
                        User Role
                    </span>
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        width: '42px',
                        justifyContent: 'space-around',
                        position: 'relative',
                        '& .arrowIcon': {
                            position: 'absolute',
                            right: 0,
                            opacity: 0,
                            transition: 'all 200ms ease-in-out',
                        }
                    }}>
                        <Divider orientation={'vertical'} sx={{height: 'auto'}}/>
                        <ManageAccountsRounded fontSize="small"/>
                        <ArrowRightRounded fontSize="small" className={'arrowIcon'}/>
                    </Box>
                </MenuItem>
                <Divider/>
                <MenuItem sx={{
                    mt: 1,
                    borderRadius: '8px',
                    gap: 2,
                    '& svg':{
                        height: '1.2rem'
                    },

                }}>
                    <LogoutRounded/>
                    Logout
                </MenuItem>

            </Menu>
        </React.Fragment>
    );
}
