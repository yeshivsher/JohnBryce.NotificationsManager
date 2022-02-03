import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector, useDispatch } from 'react-redux';
import { removeNotificationById } from '../app/navbarSlice';

const Home = () => {
    const dispatch = useDispatch()
    const notifications = useSelector(state => state.navbar.notifications)

    return (
        <List>
            {
                notifications.map(element => {
                    return <ListItem
                        key={`notification-item-list-${element.id}`}
                        secondaryAction={
                            <IconButton
                                onClick={() => {
                                    dispatch(removeNotificationById({ id: element.id }))
                                }}
                                edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <NotificationsIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={element.msg}
                        />
                    </ListItem>
                })
            }
        </List>
    )
}

export default Home