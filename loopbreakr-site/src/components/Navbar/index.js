import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
    return (
        <fragment>
        <Nav> 
            <NavbarContainer>
                <NavLogo to='/'>LoopBreakr</NavLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to="projects">Projects</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to="contact">Contact</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to="donate">Donate</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </fragment>
    )
};

export default Navbar
