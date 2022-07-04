import React from "react"
import { Menu, MenuItem, Grow, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
    //   display: 'flex',
    },
}));

const SideMenu = ({ navIsOpen, anchorEl, closeMenu, handleClick }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Fade
                in={navIsOpen}
                //style={{ transformOrigin: '0 0 0' }}
                {...(navIsOpen ? { timeout: 1000 } : {})}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                
            >
                <Menu 
                    open={navIsOpen} 
                    anchorEl={anchorEl} 
                    //onClose={closeMenu}
                    keepMounted
                >
                    <MenuItem onClick={closeMenu}>Login</MenuItem>
                    <MenuItem onClick={closeMenu}>Test Page</MenuItem>
                </Menu>
                
            </Fade>
        </div>
    )
}

export default SideMenu;