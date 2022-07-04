import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { deepPurple } from '@material-ui/core/colors'

//const dialogWidth = "100vw";
//const transitionDuration = 1000; //can also use theme.transitions.duration

const useStyles = makeStyles((theme) => ({
    root:{
        zIndex: "1400 !important",
        //position: "relative"
    },
    paper:{
        backgroundColor: "#3bb0bf",
        width: "80vw",
        height: "80vh",
        borderRadius: 0,
        marginTop: "15vh"

    },
    scrollPaper: {
        backgroundColor: "rgba(59, 176, 191, .7)",
        alignItems: 'baseline',// default center
        height: "100vh",
    },

//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create("margin", {
//           easing: theme.transitions.easing.sharp,
//           duration: transitionDuration
//         }),
//         marginRight: -dialogWidth
//     },
//     contentShift: {
//         transition: theme.transitions.create("margin", {
//           easing: theme.transitions.easing.easeOut,
//           duration: transitionDuration
//         }),
//         marginRight: 0
//     },
//     dialog: {
//         width: dialogWidth,
//         flexShrink: 0,
//         //marginTop: "-60px"
//     },
//     dialogPaper: {
//         width: dialogWidth,
//         height: "90vh",
//         backgroundColor: "rgba(148,49,132,.5)", //target here
//         //rgba(60,12,120,0.6)"
//         // transparentish rgba(120,120,120,0.2)
//         display:"flex",
//         alignItems:"flex-end",
//         justifyContent:"flex-end",
//         paddingBottom: "80px"
//     }
}));

export default function LoginDialog({ isOpen, closeModal }) {
    //console.log(props.isOpen)
    // make zindex greater than that of BottomIcon
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slide
                direction="down"
                in={isOpen}
                timeout={{
                    appear: 1500,
                    enter: 1500,
                    exit: 1500,
                }}
            
            >
                <Dialog
                    open={true} //note: true instead of {isOpen} to allow exit transition
                    //onClose={closeModal}
                    keepMounted
                    elevation={4}
                    fullWidth={true}
                    maxWidth="xl"
                    //classes={{paper: classes.dialog}}
                    classes={{root: classes.root, scrollPaper: classes.scrollPaper, paper: classes.paper}}
                    //PaperComponent
                    //PaperProps={""}
                    //className={classes.dialog}
                >
                    
                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Thanks for coming back! First time visitor? Sign Up now!
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeModal} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={closeModal} color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                    
                </Dialog>
            </Slide>
        </div>
    )
  }

//   <h2>Login</h2>
//             <form>
//               <h4>Username</h4>
//               <input/>
//               <h4>Password</h4>
//               <input/>
//             </form>
//             <p style={{color:"#ff0042"}}>Close login screen here</p>
//             <button onClick={closeModal}>close</button>
