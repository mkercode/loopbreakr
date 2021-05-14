import React, {useState} from 'react'
import DonateForm from '../components/DonateForm';
import EmptyNavbar from '../components/Navbar/emptyNav';
import {donateObjTwo} from '../data/Data';


const DonationForm = () => {

    return (
        <div>
            <EmptyNavbar/>  
            <DonateForm {...donateObjTwo}/>
        </div>
    )
}

export default DonationForm
