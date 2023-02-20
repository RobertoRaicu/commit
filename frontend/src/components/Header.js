import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { LinkContainer } from 'react-router-bootstrap';

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <i className="fa-solid fa-book-open-reader"></i>
                            &nbsp;Store
                        </Navbar.Brand>
                    </LinkContainer>
                    <Nav>
                        <LinkContainer to="/cart">
                            <Nav.Link>
                                <i className="fa-solid fa-cart-shopping"></i>
                                Cart
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
