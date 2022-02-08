import React from 'react';
import About from '../About/index';
import Contact from '../Contact/index';
import Projects from '../Projects/index';

function Body(props) {
    const { currentNavigationItem } = props
    return(
        <main>
            { currentNavigationItem === 'About Me' && <About /> }
            { currentNavigationItem === 'Contact' && <Contact /> }
            {/* { currentNavigationItem === 'Resume' && <Resume /> } */}
            { currentNavigationItem === 'Projects' && <Projects /> }      
        </main>
    )
}

export default Body