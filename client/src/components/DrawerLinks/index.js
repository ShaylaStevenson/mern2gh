import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
//ListItemIcon
import purple from '@material-ui/core/colors/purple';

//import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // '& > *': {
        //   margin: theme.spacing(1),
        // },
        // justifyContent: "flex-end",
        // position: "fixed",
        // right: 0,
        // bottom: 0,
        // padding: "8px",
        // zIndex: 1400
    },
    // green: {
    //     color: '#fff',
    //     backgroundColor: green[500],
    // }, 

    linkText: {
        color: purple[50],
        '&:hover': {
            color: purple[200],
            textDecoration: "none"
         },
         
    },
    disabledLinkText: {
        color: purple[800],
        '&:hover': {
            color: purple[800],
            textDecoration: "none",
         },
    },

    listItemText: {
        flex: 1,
        textAlign: "right"

    },


}));

export default function DrawerLinks({ toggleModal, closeDrawer, modalIsOpen }) {
    const classes = useStyles();
    return (
        <div>
            <Link to='/'  onClick={closeDrawer} className={classes.linkText}>
                <List>
                    <ListItem button key='Home'>
                        {/* <ListItemIcon><AccountCircleIcon/>
                        </ListItemIcon> */}
                        <ListItemText style={{fontSize:"large"}} className={classes.listItemText} primary='Home' />
                    </ListItem>
                </List>
            </Link>
            <Link to='/test-page' onClick={closeDrawer} className={classes.linkText}>
                <List>
                    <ListItem button key='Test Page'>
                        <ListItemText className={classes.listItemText} primary='Click Me' />
                    </ListItem>
                </List>
            </Link>
            <Link to='/anchored-home' onClick={closeDrawer} className={classes.linkText}>
                <List>
                    <ListItem button key='Anchored Woodworks'>
                        <ListItemText className={classes.listItemText} primary='Anchored Woodworks' />
                    </ListItem>
                </List>
            </Link>
            
            {!modalIsOpen ? 
            <Link to='#' onClick={toggleModal} className={classes.linkText}>      
                <List>
                    <ListItem button key='Login'>
                        <ListItemText className={classes.listItemText} primary='Login' />
                    </ListItem>
                </List>
            </Link>
            :
            <Link to="#" disabled className={classes.disabledLinkText}>
                <List>
                    <ListItem button key='Login'>
                        <ListItemText className={classes.listItemText} primary='Login' />
                    </ListItem>
                </List>
                
            </Link>
            }
        </div>
    )
}
