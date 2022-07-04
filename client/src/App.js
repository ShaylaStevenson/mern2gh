import React from "react";
import {  Route, Switch } from "react-router-dom";
//used HashRouter in order to deploy to gh pages; set up in index.js
//BrowserRouter as Router,
//import Navigation from "./components/Navigation";
//import Footer from "./components/Footer"
import Home from "./pages/Home"
import "./App.css";
import TestPage from "./pages/TestPage";
//import Card from "react-bootstrap/Card"
//import SideDrawer from "./components/SideDrawer";
import DrawerBottom from "./components/DrawerBottom";
import TopNav from "./components/TopNav";
import AnchoredHome from "./pages/AnchoredWoodworks/Home"
import AnchoredTopNav from "./components/AnchoredWoodworks/TopNav"

const App = () => {
  console.log()
    return (
      <div className="App">
        
          <div>
            
            <Switch>
              <Route exact path="/">
                <TopNav />
                <Home />
                <DrawerBottom/>
              </Route>
              <Route exact path="/test-page">
                <TopNav />
                <TestPage />
                <DrawerBottom/>
              </Route>
              <Route exact path="/anchored-home">
                <AnchoredTopNav />
                <AnchoredHome />
              </Route>
            </Switch>
           
          </div>
      </div>
    );
}

export default App