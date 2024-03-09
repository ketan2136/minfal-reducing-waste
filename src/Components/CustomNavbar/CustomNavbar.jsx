import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './CustomNavbar.css'
import main_logo from '../Assets/Minfal_logo 1.png'
function CustomNavbar() {
  return (
    <div className="navbar-main">
      <Navbar expand="lg"  >
        <Container >
          <Navbar.Brand href="#" >
            <img src={main_logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 atags"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Over ons</Nav.Link>
              <Nav.Link href="#action2">Refill</Nav.Link>
              <Nav.Link href="#action2">Circulair</Nav.Link>
              <Nav.Link href="#action2">Producten</Nav.Link>

              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
              {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            </Nav>
            <div className='main-button'>
              <a href="">Contact</a>
            </div>
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default CustomNavbar;