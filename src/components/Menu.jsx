import { Navbar, Nav } from 'react-bootstrap';
import { AppName } from '../constants/Global';

function Menu(){
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand href="/">{AppName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">Quem Somos</Nav.Link>
                        <Nav.Link href="/pricing">Planos</Nav.Link>
                        <Nav.Link href="/contact">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="mx-3"></div>
                </div>
            </Navbar>            
        </div>        
    )
}

export default Menu