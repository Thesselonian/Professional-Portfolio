import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavigationBar({ navigationCategory, selectedCategory, setSelectedCategory }) {

    const handleNavigation = (event) => {
        event.preventDefault();
        setSelectedCategory(event.target.outerText)
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Eric Young</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={handleNavigation}>About</Nav.Link>
                    <Nav.Link onClick={handleNavigation}>Projects</Nav.Link>
                    <Nav.Link onClick={handleNavigation}>Resume</Nav.Link>
                    <Nav.Link onClick={handleNavigation}>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar
