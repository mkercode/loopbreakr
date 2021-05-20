import React, {useState} from 'react'
import DonateForm from '../components/DonateForm';
import EmptyNavbar from '../components/Navbar/emptyNav';
import {donateObjTwo} from '../data/Data';


const DonationForm = () => {

    return (
        <div>
            <EmptyNavbar/>
            <div style={{margin:'0px', padding:'0px', overflow:'hidden'}}>
                <DonateForm {...donateObjTwo}/>
                </div>
        </div>
    )
}

export default DonationForm
