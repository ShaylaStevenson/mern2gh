import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors'
import CardHome from "../../components/AnchoredWoodworks/CardHome"
import tools from "../../img/tools.jpg"


const useStyles = makeStyles((theme) => ({
    scrollGrid: {
        paddingTop: "10vh"
    },
    scrollImage: {
        paddingTop: "8vh",
        //padding: "12px",
        //width: "80px",
        height: "50%"
    },
}));

export default function BgGrid({}) {
  const classes = useStyles();
  return (
        <div>
            <Grid container className={classes.scrollGrid} spacing={1}>
                <Grid item xs={8}>
                    <span></span>
                </Grid>
                <Grid item xs={4}>
                    <img  className={classes.scrollImage} src={tools}/>
                </Grid>

                <Grid item xs={4}>
                    <img src={tools}/>
                </Grid>
                <Grid item xs={8}>
                    <span></span>
                </Grid>

                <Grid item xs={8}>
                    <span></span>
                </Grid>
                <Grid item xs={4}>
                    <img src={tools}/>
                </Grid>
            </Grid>
      </div>
  )
}