import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import {NavLink} from 'react-router-dom';


function NavBar() {
    return (
        <div>
            <Navbar className={styles.NavBar} expand="md" fixed="top">
                <Container>
                    <NavLink to="/">
                        <Navbar.Brand>
                            <img src={logo} alt="logo" height="45" />
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto text-left">
                            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
                                <i className="fa-solid fa-house" />Home
                            </NavLink>
                            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
                                <i className="fa-solid fa-sign-in-alt" />Sign in
                            </NavLink>
                            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
                                <i className="fa-solid fa-user-plus" />Sign up
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar