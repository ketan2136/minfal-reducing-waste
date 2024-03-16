import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './CustomNavbar.css'
import main_logo from '../Assets/Minfal_logo 1.png'
import { Link } from 'react-router-dom';
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
              <ul>
                <li >
                  <Link   to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">Over ons</Link>
                </li>
                <li >
                  <Link to="/popcornbekers">Popcornbeker</Link>
                </li>
                <li>
                  <Link to="/refill">Refill</Link>
                </li>
                <li>
                  <Link to="/circulair">Circulair</Link>
                </li>
                <li>
                  <Link to="/producten">Producten</Link>
                </li>

              </ul>

            </Nav>
            <div className='main-button'>
              <Link to="/contact">Contact</Link>
              {/* <a href="" to='contact'>Contact</a> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default CustomNavbar;





