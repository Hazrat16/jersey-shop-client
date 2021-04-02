import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to='/' className='ml-5'>Jersey Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto px-5 ml-5">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/Orders'>Orders</Nav.Link>
                            <Nav.Link as={Link} to='/admin'>Admin</Nav.Link>
                            <Nav.Link as={Link} to='/deals'>Deals</Nav.Link>
                        </Nav>
                        <Nav>
                            { loggedInUser.name ?
                            <Nav.Link as={Link} to='#' style={{ borderRadius: '5px', backgroundColor: '#6946F4',color:'white' }}>{loggedInUser.name}</Nav.Link> :
                            <Nav.Link as={Link} to='/login' style={{ borderRadius: '5px', backgroundColor: '#6946F4' }}>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>


        </div>

    );
};

export default Header;