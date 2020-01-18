'use strict';


import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-4 shadow-lg" >
            <Navbar.Brand as={NavLink} to="/" activeClassName="active" accessKey="home">
                Expensifier
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto justify-content-center" defaultActiveKey="/" justify>
                    <Nav.Link as={NavLink} exact to="/" accessKey="dashboard" activeClassName="active">
                        Dashboard
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/about" accessKey="about" activeClassName="active">
                        About
                    </Nav.Link>
                </Nav>
                <Navbar.Text>Signed in as: <b>Maneesh Divana</b></Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};


export default Header;
