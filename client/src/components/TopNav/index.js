import React from "react";
import { makeStyles, fade } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
//import { grey, teal, blue } from "@material-ui/core/colors";
import P from "../../img/png-tree-P-thumbnail.png";
import Y from "../../img/png-tree-Y-thumbnail.png";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  appBar: {
    backgroundColor: "#000000",
    paddingTop: 5,
    boxShadow: "0 0 20px #8e2f71, 0 0 10px #f3c638, 0 0 20px #ab47bc",
    height: "10vh",
    zIndex:"1500 !important"
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
    color: "#f3c638",
    textShadow: "0 0 20px #8e2f71, 0 0 10px #f3c638, 0 0 20px #8e2f71",
    fontWeight: 500,
    letterSpacing: 10,
    fontSize: "larger"
  },
  iconButton: {
    marginRight: theme.spacing(1),
    color: "#ab47bc",
  },
}));

export default function TopNav({ }) {
  //console.log(props.isOpen)
  // make zindex greater than that of BottomIcon
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography align="left" className={classes.title} variant="h6" noWrap>
            PYP
          </Typography>

          <IconButton
            className={classes.iconButton}
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            className={classes.iconButton}
            color="inherit"
          >
            <TwitterIcon />
          </IconButton>

          {/* <Button align="right" color="fff"><GitHubIcon/></Button> */}
        </Toolbar>
      </AppBar>
    </div>

    // const useStyles = makeStyles((theme) => ({
//   brandDiv:{
//     //display: "flex",
//     //justifyContent: "flex-start"
//   },
//   appBar:{
//     backgroundColor: "#000000",
//     //paddingTop: 10,
//     //paddingLeft: 10,
//     boxShadow: "0 0 20px #f3c638",
//     height: "10vh"
//   },
//   image:{
//     width:"50px",
//     justifySelf:"flex-start"
//   },
//   iconDiv:{
//     display:"flex",
//     justifyContent:"flex-end"
//   }
// }));







    
      // <AppBar className={classes.appBar} position="fixed">
      //   <Toolbar>
      //     <div className={classes.brandDiv}>
      //       <img className={classes.image} src={P}/> <img className={classes.image} src={Y}/> <img className={classes.image} src={P}/>
      //     </div>
      //     <div className={classes.iconDiv}>
      //     <GitHubIcon/>
      //     <TwitterIcon/>
      //     </div>
      //   </Toolbar>
      // </AppBar>
    
  )
}
    // <AppBar className={classes.root} position="fixed">
    //         <Typography
    //             variant="h1"
    //             align="center"
    //             className={classes.brand}
    //             //color="fff"
    //         >
    //         PYP
    //         </Typography>
    // </AppBar>

    // root:{
    //   //height: "10vh",
    //   backgroundColor: "#000000"
    // //zIndex: 1400
    // },
    // brand: {
    //   color: "#000000",
    //   paddingTop: "3vh",
    //   textShadow: "0 0 10px #f3c638, 0 0 20px #8e2f71, 0 0 40px #d8293a, 0 0 60px #1a237e",
    //   fontWeight: 500,
    //   letterSpacing: 18,
    // }


// all types of text-emphasis-styles:
// textEmphasisStyle: "filled",
// textEmphasisStyle: "open",
// textEmphasisStyle: "dot",
// textEmphasisStyle: "circle",
// textEmphasisStyle: "double-circle",
// textEmphasisStyle: "triangle",
// textEmphasisStyle: "filled sesame",
// textEmphasisStyle: "open sesame",

      //textEmphasisStyle: "dot",
      //textEmphasisColor: "#e91e63",
      //textEmphasisPosition: "under",