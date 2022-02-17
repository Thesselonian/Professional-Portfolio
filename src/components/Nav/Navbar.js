import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavigationBar(props) {

    return (
        <>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Eric Young</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar
