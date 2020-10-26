import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavigationBar() {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="nav-brand">
                    <Navbar.Brand>Movies</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    <Link to={"add"} className="nav-link">Add Movie</Link>
                </Nav>
            </Navbar>
        </>
    );
}