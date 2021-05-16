import React, { useState, useEffect } from "react"
//import styles from "./TodoItem.module.css"
import Moment from 'moment';
import tachyons from 'tachyons';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const NavbarBoot = props => {

 const isUserLogged = () => {
    return props.isUserLogged();
 }


  return (
<Navbar bg="light" expand="lg">

        <Navbar.Brand className="courier" href="#/">
        <i class="fi-rr-glasses"></i>
        {/* <img
            src={Logo}
            width="75"
            height="75"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
        /> */}
            Foro da Costa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#/" className="courier" >Inicio</Nav.Link>
            { isUserLogged()  ? null : <Nav.Link href="#/signup" className="courier" >Registro</Nav.Link>}
            { isUserLogged()  ? null : <Nav.Link href="#/signin" className="courier" >Entrar</Nav.Link> }
            { isUserLogged()  ? <Nav.Link href="#/logout" className="courier" >Salir</Nav.Link> : null}
            <NavDropdown title="Opciones" id="basic-nav-dropdown" className="courier">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            {/* <Form inline>
            <FormControl type="text" placeholder="Sech" className="mr-sm-2" />
            <Button variant="outline-success">Sch</Button>
            </Form>  */}
        </Navbar.Collapse>
        </Navbar>


  )
}

export default NavbarBoot