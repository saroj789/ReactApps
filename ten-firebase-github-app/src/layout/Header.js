import React, { useState, useContext } from 'react';

import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, NavbarText } from "reactstrap"

import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { toast } from "react-toastify";


const Header = () => {

    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen)

    const logOut = () => {
        context.setUser(null);
        toast("You are logged out successfully ",{type:"success"})
    }

    return ( 
        <Navbar color="info" light expand="md">
            <NavbarBrand href='/' className="text-white" >
                {/* <Link to="/"  className="text-white"> */}
                    LCO gitfire app
                {/* </Link> */}
            </NavbarBrand>

            <NavbarText className='text-white'>
                {context.user?.email ? context.user.email : ""  }
            </NavbarText>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto">
                {
                    context.user ? (
                        <NavItem>
                            <NavLink type='button' onClick={logOut} className="text-white">
                                Logout
                            </NavLink>
                        </NavItem>
                    ) : (
                        <>
                        <NavItem >
                            <NavLink tag={Link} to="/signup" className="text-white">
                                Signup
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/signin" className="text-white">
                                Signin
                            </NavLink>
                        </NavItem>
                        </>
                    )
                }
                </Nav>
            </Collapse>
            
        </Navbar>
     );
}

export default Header;