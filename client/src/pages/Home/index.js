import React from "react";
import bulb from "../../img/png-tree-bulb.png"
import { makeStyles } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { purple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    paperContainer:{  
        backgroundColor: "#000000",
        backgroundImage: `url(${bulb})`,
        minHeight: "100vh",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        
        //backgroundColor:"transparent",
    },
    text:{
        color: purple[50]
    }
}))

const Home = () => {
    const classes = useStyles();
    return(
        <Paper
            elevation={1}
            className={classes.paperContainer}>
            
            {/* <h1 className={classes.text}>New Mern Practice</h1>
            <h2 className={classes.text}>Author: Shayla Stevenson</h2> */}
            {/* <img src={creativeDesignScreen} alt="Shayla Stevenson" /> */}
        </Paper>
    )
}

export default Home;