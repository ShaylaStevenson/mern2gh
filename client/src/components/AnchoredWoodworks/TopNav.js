import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { lightBlue } from '@material-ui/core/colors'
import MenuIcon from '@material-ui/icons/Menu';
import cabinet from "../../img/cabinet-transparent.png"
import brown from "../../img/brown.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },

  appBar: {
    backgroundColor: lightBlue[800],
    paddingTop: 5,
    height: "10vh",
    //zIndex:"1500 !important",
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
    color: "fff",
    //textShadow: "0 0 20px #8e2f71, 0 0 10px #f3c638, 0 0 20px #8e2f71",
    fontWeight: 500,
    //letterSpacing: 10,
    fontSize: "larger"
  },
  iconButton: {
    marginRight: theme.spacing(1),
    color: "#fff",
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
            Anchored Woodworks
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
        <div>
          {/* <img className={classes.cabinetImg} src={cabinet} /> */}
        </div>
        
      </AppBar>
    </div>
  )
}

  // cabinetImg: {
  //   height: "35vh",
  //   width: "25vh",
    
  //   marginRight: "0px",
  //   marginLeft: "auto"
  // },
  // cabinetDiv: {
  //   display: "flex",
  //   paddingTop: 5,
  //   //justifyContent: "flex-end"
  // }