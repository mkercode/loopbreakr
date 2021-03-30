import React from 'react'
import {Nav, NavbarContainer, NavLogoContainer, NavLogoIcon, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import Image from '../../images/loopbreakrLogo.svg'

const Navbar = ({toggle}) => {
    return (
        <Nav> 
            <NavbarContainer>
                <NavLogoContainer>
                    <NavLogoIcon src={Image}/>
                </NavLogoContainer>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' >About</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='projects'>Projects</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='contact'>Contact</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='donate'>Donate</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
};

export default Navbar
