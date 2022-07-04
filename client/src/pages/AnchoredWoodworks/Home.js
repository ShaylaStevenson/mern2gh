import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors'
import { Typography, Paper, Grid } from "@material-ui/core";
import woodRound from "../../img/wood-round.jpg"
import CardHome from "../../components/AnchoredWoodworks/CardHome"
import BgGrid from "../../components/AnchoredWoodworks/BgGrid";
import ScrollGrid from "../../components/AnchoredWoodworks/ScrollGrid"


const useStyles = makeStyles((theme) => ({
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
        color: "#fff",
        padding: theme.spacing(2)
    },
    tan: {
        backgroundColor: "#aaa0a0",
        color: "#fff"
    },
    khaki: {
        backgroundColor: "#8e8268",
        color: "#fff"
    },

    paperContainer: {
        position: "fixed",
        backgroundColor: lightBlue[800],
        height: "100vh",
        overflowY:'scroll',
        overflowX: 'hidden'
        //backgroundImage: `url(${woodRound})`,
        //backgroundRepeat: "no-repeat",
        //backgroundSize: "cover",
    },
    cardLayout: {
        paddingTop: "20vh"
    },

    footer: {
        height: "90vh",
        backgroundColor: "rgba(71,72,83,.7)",
        color: "#fff"
    }
}))

export default function Home () {
    const classes = useStyles();

    return(
        <Paper className={classes.paperContainer}>
            <BgGrid/>
            <ScrollGrid/>
                
                <Grid container className={classes.footer} spacing={1}>
                    Footer
                </Grid>
        </Paper>
    )
}

