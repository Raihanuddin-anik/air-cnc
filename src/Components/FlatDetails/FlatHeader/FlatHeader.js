import React,{useContext} from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container } from 'react-bootstrap';
import './FlatHeader.css'
import { Link } from 'react-router-dom';
import { InfoContext } from '../../../App';
const FlatHeader = () => {
        const [userInfo, setUserInfo] = useContext(InfoContext)
        console.log(userInfo)
    return (
        <Container>
                        <Navbar expand="lg">
                                <Navbar.Brand className="fs-2" style={{color:'#43e379'}} href="#home">Aircnc</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="ms-auto ">
                                                <Nav.Link className="me-3" style={{color:'#010101'}} href="#home">Host your Home </Nav.Link>
                                                <Nav.Link className="me-3" style={{color:'#010101'}} href="#link">Host your experience </Nav.Link>
                                                <Nav.Link className="me-3" style={{color:'#010101'}} href="#link">Home</Nav.Link>
                                                <button className="btn me-3"><Link to="/login">{userInfo.isSignedIn? "Sign Out":"Sign In"}</Link></button>
                                        </Nav>
                                </Navbar.Collapse>
                        </Navbar>
                </Container>
    );
};

export default FlatHeader;