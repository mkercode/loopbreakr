import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';



export const Nav = styled.nav`
    font-family: 'Press Start 2P', cursive;
    background: #fff;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    z-index: 1;
    padding: 0 16px;
    max-width: 1100px;
`

export const NavLogoContainer = styled(LinkR)`
    align-items: center;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
`

export const NavLogoIcon = styled.img`
    width: 190px;
    height: 100px;
    position: "absolute", 
    
`

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 768px){
    color: #56cfe1;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    
}

&:hover{
    color: #e9c46a;
    transition: 0.2 ease-in-out;
}



`
export const NavMenu = styled.ul`
font-family: 'Press Start 2P', cursive;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavItem = styled.li`
font-family: 'Press Start 2P', cursive;
    height 80px;
`

export const NavLinks = styled(LinkS)`
    color: #56cfe1;
    display: flex;
    align-items:center;
    text-decoration: none;
    padding: 0 1rem;
    height 100%;
    cursor: pointer;

    &:hover{
        color: #e9c46a;
        transition: 0.2 ease-in-out;
    }


`