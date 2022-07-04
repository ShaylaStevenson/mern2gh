import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors'


const useStyles = makeStyles((theme) => ({
    bgGrid: {
        position: "fixed",
        zIndex: -100,
        paddingTop: "10vh"
    },
    bgCaptions: {
        paddingTop: "8vh",
        padding: "12px",
        color:"#fff",
        fontSize: "18px",
    },
}));

export default function BgGrid({}) {
  const classes = useStyles();
  return (
        <div>
            <Grid container className={classes.bgGrid} spacing={1}>
                {/* row 1 */}
                <Grid item xs={8}>
                    <Typography className={classes.bgCaptions}>
                        All work is custom made
                        to ensure your piece is 
                        uniquely you.
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <span></span>
                </Grid>
                {/* row 2 */}
                <Grid item xs={4}>
                    <span></span>
                </Grid>
                <Grid item xs={8}>
                    <Typography className={classes.bgCaptions}>
                        All work is custom made
                        to ensure your piece is 
                        uniquely you.
                    </Typography>
                </Grid>
                {/* row 3 */}
                <Grid item xs={8}>
                    <Typography className={classes.bgCaptions}>
                        All work is custom made
                        to ensure your piece is 
                        uniquely you.
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <span></span>
                </Grid>
            </Grid>
      </div>
  )
}