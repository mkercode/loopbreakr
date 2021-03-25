import React from 'react'
import {SidebarMenu, SidebarLink, SidebarWrapper, SidebarContainer, Icon, CloseIcon} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
            
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SidebarWrapper>

                <SidebarMenu>
                    
                    <SidebarLink to="about">
                        About
                    </SidebarLink>

                    <SidebarLink to="projects">
                        Projects
                    </SidebarLink>

                    <SidebarLink to="contact">
                        Contact
                    </SidebarLink>

                    <SidebarLink to="donate">
                        Donate
                    </SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
