import React, { useState } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers.js";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

function NavigationBar(props) {
    const {
        navigationItems = [],
        currentNavigationItem,
        setCurrentNavigationItem
    } = props

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">
                        {" "}
                    </span>{" "}
                    Eric
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {navigationItems.map((navigationItem) => (
                        <li className={`mx-2 header-item ${navigationItem === currentNavigationItem && 'navActive'}`} key={navigationItem}>
                            <span
                                onClick={() => {
                                    setCurrentNavigationItem(navigationItem)
                                }}
                            >
                                {capitalizeFirstLetter(navigationItem)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar
