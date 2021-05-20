import React from 'react';
import Cogstruct from '../components/Cogstruct';
import EmptyNavbar from '../components/Navbar/emptyNav';

const cogstruct = () => {
    return (
        <div>
            <EmptyNavbar/>
            <div style={{margin:'0px', padding:'0px', overflow:'hidden'}}>
                <Cogstruct/>
            </div>
        </div>
    )
}

export default cogstruct
