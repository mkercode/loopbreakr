import React from 'react'
import {Nav, NavbarContainer, NavLogoContainer, NavLogoIcon} from './NavbarElements'
import {ButtonRoute} from '../Common/CommonElements.js'
import Image from '../../images/loopbreakrLogo.svg'

const EmptyNavbar = () => {
    return (
        <Nav> 
            <NavbarContainer>
                <NavLogoContainer>
                <ButtonRoute to='/'><NavLogoIcon src={Image}/></ButtonRoute>
                </NavLogoContainer>
                
            </NavbarContainer>
        </Nav>
    )
};

export default EmptyNavbar
