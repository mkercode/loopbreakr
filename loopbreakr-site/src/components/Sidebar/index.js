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
                    
                    <SidebarLink to='about' onClick={toggle}
                    spy={true}
                    exact="true"
                    offset={-80}>
                        About
                    </SidebarLink>

                    <SidebarLink to='projects' onClick={toggle}
                    spy={true}
                    exact="true"
                    offset={-80}>
                        Projects
                    </SidebarLink>

                    <SidebarLink to='contact' onClick={toggle}
                    spy={true}
                    exact="true"
                    offset={-78}>
                        Contact
                    </SidebarLink>

                    <SidebarLink to='donate' onClick={toggle}
                    spy={true}
                    exact="true"
                    offset={-80}>
                        Donate
                    </SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
