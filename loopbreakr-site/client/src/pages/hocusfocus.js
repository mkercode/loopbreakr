import React from 'react'
import HocusFocus from '../components/HocusFocus'
import EmptyNavbar from '../components/Navbar/emptyNav'

const hocusfocus = () => {
    return (
        <div>
            <EmptyNavbar/>
            <div style={{margin:'0px', padding:'0px', overflow:'hidden'}}>
                <HocusFocus/>
            </div>
        </div>
    )
}

export default hocusfocus
