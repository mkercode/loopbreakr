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
                    
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>

                    <SidebarLink to='projects' onClick={toggle}>
                        Projects
                    </SidebarLink>

                    <SidebarLink to='contact' onClick={toggle}>
                        Contact
                    </SidebarLink>

                    <SidebarLink to='donate' onClick={toggle}>
                        Donate
                    </SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
