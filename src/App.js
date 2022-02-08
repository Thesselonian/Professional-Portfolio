import React, { useState } from 'react';
import Navbar from './components/Nav/index';
import Body from './components/Body/index';
import Footer from './components/Footer/index';
import './App.css';

function App() {

  const [navigationItems] = useState([
    'About Me',
    'Projects',
    'Contact'
  ])
  const [currentNavigationItem, setCurrentNavigationItem] = useState(navigationItems[0]);

  return (
    <div id="page-container">
      <Navbar 
        navigationItems={navigationItems}
        currentNavigationItem={currentNavigationItem}
        setCurrentNavigationItem={setCurrentNavigationItem}
        />
      <Body currentNavigationItem={currentNavigationItem} />
      <Footer />
    </div>
  );
}

export default App;
