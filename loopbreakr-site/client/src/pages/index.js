import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/AboutSection';
import { homeObjOne, projectsObjOne, contactObjOne, donateObjOne } from '../data/Data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import DonateSection from '../components/DonateSection';

import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Home = () => {
  const[isOpen, setIsOpen] = useState(false);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
  };

  AOS.init();

  return (
        <div>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>  
          <HeroSection/>
          <InfoSection {...homeObjOne}/>
          <ProjectsSection {...projectsObjOne}/>
          <ContactSection {...contactObjOne}/>
          <DonateSection {...donateObjOne}/>
        </div>
    )
}

export default Home