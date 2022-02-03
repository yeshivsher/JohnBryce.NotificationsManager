import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    links: {
        width: '30%',
        display: 'flex', 
        justifyContent: 'space-between'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: 18
    }
});


const Navbar = () => {
    const classes = useStyles();

    const notifications = useSelector(state => state.navbar.notifications)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Notificatoins System
                    </Typography>
                    <div className={classes.links}>
                        <Link
                            className={classes.link}
                            to="/home"
                        >Home</Link>
                        <Link
                            className={classes.link}
                            to="/createnotification"
                        >Create</Link>
                        <Badge badgeContent={notifications.length} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>)
}

export default Navbar