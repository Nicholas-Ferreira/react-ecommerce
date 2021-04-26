import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import FloatCart from '../FloatCart/index'
import './style.scss';


class NavBar extends Component {

  render() {
    return (
      <Navbar fixed='top'>
        <Link to=''>
          <Navbar.Brand >My style</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

            <Nav.Link href="#lançamentos">Lançamentos</Nav.Link>

            <NavDropdown title="Feminino" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#acessorios">Acessorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#roupas">Roupas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#calcados">Calçados</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Masculino" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#acessorios">Acessorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#roupas">Roupas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#calcados">Calçados</NavDropdown.Item>
            </NavDropdown>

          </Nav>

          <Link to='SingIn'>
            <Nav>
              <Nav.Link href="#deets">Login / Inscreva-se</Nav.Link>
            </Nav>
          </Link>

          <React.Fragment>
            <FloatCart />
          </React.Fragment>

        </Navbar.Collapse>
      </Navbar>
    )

  }

}

export default NavBar;