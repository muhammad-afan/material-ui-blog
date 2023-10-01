import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import SideDrawer from './SideDrawer';

function Header() {
    return (
        <>
            <Toolbar>
                <SideDrawer>
                    <IconButton color='textSecondary'>
                        <MenuIcon />
                    </IconButton>
                </SideDrawer>
                <Typography variant='h6' sx={{ flexGrow: 1 }}>
                </Typography>
                <IconButton color='inherit'>
                    <Badge badgeContent={1} color='error'>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color='inherit'>
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <Toolbar sx={{
                fontSize: 20,
                textTransform: 'uppercase',
                justifyContent: 'center',
                fontFamily: 'Montserrat'
            }}>
                Express your emotions through words
            </Toolbar>
        </>
    )
}

export default Header
