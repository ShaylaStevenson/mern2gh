import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Drawer } from '@material-ui/core';
import { BottomHamburger, BottomClose } from '../BottomIcon';
import LoginDialog from '../LoginDialog';
import DrawerLinks from '../DrawerLinks';

const drawerWidth = "100vw";
const transitionDuration = 1500; //can also use theme.transitions.duration

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.sharp,
          duration: transitionDuration
        }),
        marginRight: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: transitionDuration
        }),
        marginRight: 0
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        //marginTop: "-60px"
    },
    drawerPaper: {
        width: drawerWidth,
        height: "100vh",
        backgroundColor: "rgba(148,49,132,.5)", //target here
        //rgba(60,12,120,0.6)"
        // transparentish rgba(120,120,120,0.2)
        display:"flex",
        alignItems:"flex-end",
        justifyContent:"flex-end",
        paddingBottom: "80px"
    }
}));

export default function DrawerBottom() {
  const classes = useStyles();

    // Manage the state of the Drawer
    const [drawerIsOpen, setDrawerOpen] = useState(false);
        console.log("drawerIsOpen: " + drawerIsOpen)
  
    function toggleDrawer() {
        setDrawerOpen(prevState => !prevState);
    }

    function closeDrawer() {
        setDrawerOpen(false);
    }

    // Manage the state of the Login Modal
    const [modalIsOpen, setModalOpen] = useState(false);
        console.log("modalIsOpen: " + modalIsOpen)

    function toggleModal() {
        setModalOpen(prevState => !prevState);
        setDrawerOpen(false)
    }

    function closeModal() {
        setModalOpen(false);
    }

    return (
        <div >
            {/* display drawer icon */}
            <div onClick={toggleDrawer}>
                {!drawerIsOpen ? <BottomHamburger/> : <BottomClose/> }
            </div>

            {/* display drawer contents*/}
            <Drawer
                open={drawerIsOpen}
                onClose={closeDrawer}
                className={classes.drawer}
                variant="temporary"
                elevation={10}
                anchor="bottom"
                transitionDuration={{
                    enter: transitionDuration,
                    
                    exit: transitionDuration,
                }}
                
                classes={{
                    paper: classes.drawerPaper
                }}
                PaperProps={{ elevation: 20 }}
            >
                
                <DrawerLinks
                    toggleModal={toggleModal}
                    closeDrawer={closeDrawer}
                    modalIsOpen={modalIsOpen}
                />
                {/* use this code to add bottom icon to the drawer */}
                {/* <div onClick={toggleDrawer}>
                    <BottomClose/>
                </div> */}
                
            </Drawer>

            {/* display login modal when link selected */}
            <LoginDialog
                isOpen={modalIsOpen}
                closeModal={closeModal}
            />
        </div>
    );
}