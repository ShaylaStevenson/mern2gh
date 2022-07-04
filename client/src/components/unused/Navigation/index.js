import React, { useState, useEffect } from "react";
import LoginModal from "../../LoginModal";
import {Link} from "react-router-dom"
import "./style.css"
import { Navbar, Nav, NavbarBrand, NavItem } from 'react-bootstrap';

const Navigation = () => {
    // state, state-setter, and initial state
    const [modalIsOpen, setIsOpen] = useState(false)

    // currently only used for console.log
    useEffect(
        () => {
          console.log("LoginModalIsOpen: " + modalIsOpen)
        }
    );

    // change state of modalIsOpen to false
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark" className="justify-content-between">
                <NavbarBrand><Link to="/" className="nav-link" replace>New Mern Practice</Link></NavbarBrand>
                {/* use <Link> vs <a> when using HashRouter */}
                <Nav>
                    <NavItem><Link to="/" className="nav-link" replace>Home</Link></NavItem>
                    <NavItem><Link to="/test-page" className="nav-link" replace>Test Page</Link></NavItem>
                    {/* set state to true to open the loginModal */}
                    <NavItem><Link to="#" className="nav-link" onClick={() => setIsOpen(true)}>Login</Link></NavItem>
                </Nav>  
            </Navbar>
            {/* pass through the state of the modal to LoginModal */}
            {/* pass through the closeModal function in order use close button within LoginModal */}
            <LoginModal
                isOpen={modalIsOpen}
                closeModal={closeModal}
            />  
        </div>           
    );
}

export default Navigation;