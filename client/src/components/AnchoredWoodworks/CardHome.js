import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import creativeDesignScreen from "../../img/creativeDesignScreen.png"
import tools from "../../img/tools.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "rgba(71,72,83,.7)",
        //padding: theme.spacing(1),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2), 
        marginBottom: theme.spacing(1),

    },
    imgPaper:{
        backgroundImage: `url(${tools})`,
        backgroundSize: "cover",
        height: "175px",
        width: "175px"
    },
    imgPaperDiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    paper: {
        flexGrow: 1,
        //padding: theme.spacing(1),
        textAlign: "center",
        backgroundColor: "transparent",
        color: "#fff"
    },
    paperDiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(2)
    },
    brown: {
        backgroundColor: "#844d36",
        color: "#fff"
    },
    grey: {
        backgroundColor: "#474853",
        color: "#fff"
    },
    lightBlue: {
        backgroundColor: "#86b3d1",
        color: "#fff"
    },
    tan: {
        backgroundColor: "#aaa0a0",
        color: "#fff"
    },
    khaki: {
        backgroundColor: "#8e8268",
        color: "#fff"
    },
}));

export default function CardHome({}) {
  const classes = useStyles();
  return (
    <div  className={classes.root}>
        <Grid container>
        <Grid container item xs={12}>
            <Grid item xs={6}>
                <Paper className={classes.imgPaper} elevation={5}>

                </Paper>
            </Grid>

            <Grid className={classes.paperDiv} item xs={6}>
                <Paper className={classes.paper} elevation={0}>
                    <h4>I am the details for the image</h4>
                </Paper>
            </Grid>
        </Grid>
        </Grid>
    </div>


  )
}

{/* <div className={classes.brown}>Brown</div>
<div className={classes.grey}>Grey</div>
<div className={classes.lightBlue}>Light Blue</div>
<div className={classes.tan}>Tan</div>
<div className={classes.khaki}>Khaki</div> */}