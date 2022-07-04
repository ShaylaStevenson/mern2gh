import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Drawer } from '@material-ui/core';
import { BottomHamburger, BottomClose } from '../../BottomIcon';
import LoginModal from '../../LoginModal';
import DrawerLinks from '../../DrawerLinks';
import { blue } from '@material-ui/core/colors'


const drawerWidth = 240;
const transitionDuration = 1000; //can also use theme.transitions.duration

const useStyles = makeStyles((theme) => ({
    // sideNav: {
    //     marginTop: '-60px',
    //     zIndex: 3,
    //     marginRight: '0px',
    //     position: 'flex',
    // },
    
    // blue: {
    //     color: theme.palette.getContrastText(blue[500]),
    //     backgroundColor: blue[500],
    // },
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
        //backgroundColor: "rgba(0,0,0,0.6)" Don't target here
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "rgba(60,12,120,0.5)", //target here
        // transparentish rgba(120,120,120,0.2)
        display:"flex",
        alignItems:"flex-end",
        justifyContent:"flex-end",
        paddingBottom: "80px"
    }
}));

export default function SideDrawer() {
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
                elevation={3}
                anchor="right"
                transitionDuration={{
                    enter: transitionDuration,
                    exit: transitionDuration
                }}
                classes={{
                    paper: classes.drawerPaper
                }}
                PaperProps={{ elevation: 9 }}
            >
                <DrawerLinks
                    toggleModal={toggleModal}
                    closeDrawer={closeDrawer}
                    modalIsOpen={modalIsOpen}
                />
            </Drawer>

            {/* display login modal when link selected */}
            <LoginModal
                isOpen={modalIsOpen}
                closeModal={closeModal}
            />
        </div>
    );
}