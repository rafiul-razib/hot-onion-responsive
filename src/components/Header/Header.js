import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Image/logo2.png'

const Header = (props) => {
    const cart = props.cart
    return (
        <>
              <Navbar bg="light" variant="light" sticky='top'>
                <Container>
                    <Navbar.Brand href="#home" className="text-start">
                        <img className="w-25" src={Logo} alt="" />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link as={Link} to="/cart">Cart<sup>{cart.length}</sup></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;