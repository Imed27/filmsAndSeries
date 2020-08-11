import React from "react";
import { Button,Form,Nav,FormControl,Navbar } from 'react-bootstrap';
 
const NavBar =() => {
    return(
      <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">LOGO</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Accueil</Nav.Link>
        <Nav.Link href="#features">Films</Nav.Link>
        <Nav.Link href="#pricing">Series</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Vos recherche" className="mr-sm-2" />
        <Button variant="outline-info">Chercher</Button>
      </Form>
    </Navbar>
    
    </div>
    );
};
 
export default NavBar;