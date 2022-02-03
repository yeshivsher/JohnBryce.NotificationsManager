import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
    root:{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center'
    },
    paper: {
        marginTop: 200,
        width: 300,
        height: 200
    }
});

const CreateNotification = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Create new notification
                    </Typography>
            </Paper>
        </div>
    )
}

export default CreateNotification