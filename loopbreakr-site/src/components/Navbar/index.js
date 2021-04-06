import React from 'react'
import {Nav, NavbarContainer, NavLogoContainer, NavLogoIcon, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import Image from '../../images/loopbreakrLogo.svg'

const Navbar = ({toggle}) => {
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <Nav> 
            <NavbarContainer>
                <NavLogoContainer>
                    <NavLogoIcon src={Image} to='/' onClick={toggleHome} />
                </NavLogoContainer>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={700} spy={true} exact="true" offset={-80}>About</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='projects' smooth={true} duration={700} spy={true} exact="true" offset={-80}>Projects</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='contact' smooth={true} duration={700} spy={true} exact="true" offset={-78}>Contact</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='donate' smooth={true} duration={700} spy={true} exact="true" offset={-80}>Donate</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
};

export default Navbar
