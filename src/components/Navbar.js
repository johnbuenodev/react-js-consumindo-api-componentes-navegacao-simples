import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class NavbarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value1: '',
          value2: ''
        };
    
        //referencia de usar uma função bind
        //this.entrar = this.entrar.bind(this);
     
    }

    /*
    entrar() {
        //faz algo
    } */

    /*
    <button onPress={this.entrar}></button>

    */

    render() {
    return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">TITULO APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/sobre">Sobre</NavDropdown.Item>
              <NavDropdown.Item href="/sobre">
                Sobre
              </NavDropdown.Item>
              <NavDropdown.Item href="/">inicio</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Inicio
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   );
  }
}

export default NavbarComponent;