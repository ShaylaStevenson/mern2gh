import React, { useState, useEffect,useRef } from 'react';
//import { BottomNavigation } from "@material-ui/core"
//import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//import GitHubIcon from '@material-ui/icons/GitHub';
//import ShareIcon from '@material-ui/icons/Share';
//import ContactMailIcon from '@material-ui/icons/ContactMail';
//import { makeStyles } from '@material-ui/core/styles';
//import BottomHamburger from "../BottomHamburger"
import SideMenu from '../SideMenu';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Footer() {

    // state, state-setter, and initial state
    const [navIsOpen, setIsOpen] = useState(false)
    console.log("NavIsOpen: " + navIsOpen)

    //use achorEl instead of state open when using mui Menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    //console.log("anchorEl: " + anchorEl)

    const inputRef = useRef();

    //const [value, setValue] = React.useState(0);
    
    const handleClick = () => {
        setIsOpen((prev) => !prev);
    }
    // function handleHamburger(event) {
    //     console.log("handleHamburger activated!")
    //     if (navIsOpen) {
    //         closeMenu(event);

    //     } else {
    //         openMenu(event);
    //     }

    // }

    function openMenu(event) {
        console.log(event)
        setIsOpen(true);
        setAnchorEl(event.currentTarget);
    }
    
    function closeMenu(event) {
        console.log(event);
        setIsOpen(false);
        setAnchorEl(null);
    }

//<Switch checked={checked} onChange={handleChange} />
    return(
        <div>
            <SideMenu 
               navIsOpen={navIsOpen}
               //open={Boolean(anchorEl)}
               anchorEl={anchorEl}
               closeMenu={closeMenu}
               //handleHamburger={handleHamburger}
               openMenu={openMenu} 
            />
            {/* <BottomHamburger
                openMenu={openMenu}
                navIsOpen={navIsOpen}
                closeMenu={closeMenu}
                //handleHamburger={handleHamburger}
                handleClick = {openMenu}
                //onClick={handleHamburger}
            /> */}
        </div>
    )
}

export default Footer;

{/* <div className="fixed-bottom">
<BottomNavigation
    value={value}
    onChange={(event, newValue) => {
        setValue(newValue);
    }}
    showLabels
    className={classes.root}
>
    <BottomNavigationAction label="Github" icon={<GitHubIcon />}/>
    <BottomNavigationAction label="Share" icon={<ShareIcon />} />
    <BottomNavigationAction label="Contact Me" icon={<ContactMailIcon />} /> 
    
</BottomNavigation>
</div> */}
