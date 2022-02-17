import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from './components/Nav/Navbar';
import Contact from './components/Contact'
// import Body from './components/Body/index';
import About from './components/About'
import Footer from './components/Footer/index';
import './App.css';

function App() {
  return (
    <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/contact" render={() => <Contact />} />
          <Route exact path="/about" render={() => <About />} />
        {/* <Body currentNavigationItem={currentNavigationItem} /> */}
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
