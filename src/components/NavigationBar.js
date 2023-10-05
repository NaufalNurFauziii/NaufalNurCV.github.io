import {Navbar, Container, Nav} from "react-bootstrap" 

const NavigationBar = () => {
    return (
        <div className="nav-bar">
        <Navbar className="navbar fixed-top">
            <Container className="text-white">
                <Navbar.Brand className="navbar-brand">NaufalNur</Navbar.Brand>
                <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar