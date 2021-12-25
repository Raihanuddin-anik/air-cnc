import React,{useContext} from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { InfoContext } from '../../../App';
import './NavBar.css'

const NavBar = () => {
        const [userInfo, setUserInfo] = useContext(InfoContext);
       
        return (
                <Container>
                        <Navbar expand="lg">
                                <Navbar.Brand className="fs-2" style={{color:'#43e379'}} href="#home">Aircnc</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="ms-auto ">
                                                <Nav.Link className="me-3" style={{color:'#010101'}} href="#home">Host your Home </Nav.Link>
                                                <Nav.Link className="me-3" style={{color:'#010101'}} href="#link">Host your experience </Nav.Link>
                                                <Link className="me-3 mt-2" style={{color:'#010101'}} to="/">Home</Link>
                                                <button className="btn me-3"><Link to="/login">{userInfo.email? "Sign Out":"Sign In"}</Link></button>
                                        </Nav>
                                </Navbar.Collapse>
                        </Navbar>
                </Container>
        );
};

export default NavBar;