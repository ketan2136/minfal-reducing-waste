import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './CustomNavbar.css'
import main_logo from '../Assets/Minfal_logo 1.png'
import { Link, useLocation } from 'react-router-dom';
function CustomNavbar() {

  const location = useLocation();
 

  return (
    <div className="navbar-main">
      <Navbar expand="lg"  >
        <Container >
          <Navbar.Brand href="/" >
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
                  <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
                </li>
                <li>
                  <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">Over ons</Link>
                </li>
                <li >
                  <Link className={location.pathname === '/popcornbekers' ? 'active' : ''} to="/popcornbekers">Popcornbeker</Link>
                </li>
                <li>
                  <Link className={location.pathname === '/refill' ? 'active' : ''} to="/refill">Refill</Link>
                </li>
                <li>
                  <Link className={location.pathname === '/circulair' ? 'active' : ''} to="/circulair">Circulair</Link>
                </li>
                <li>
                  <Link className={location.pathname === '/producten' ? 'active' : ''} to="/producten">Producten</Link>
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


