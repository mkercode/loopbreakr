import Image from '../images/aboutIcon.svg';
import projectsIcon from '../images/projectsIcon.svg';
import donateIcon from '../images/donateIcon.svg';
import donationFormIcon from '../images/donationFormIcon.svg';

export const homeObjOne = {
    id: 'about',
    lightText: false,
    lightTextDesc: true,
    topLine: 'About',
    headLine: 'Apps that Add Value...\nNo Matter How Much You Spend',
    description: 'LoopBreakr is commited to creating technology that enhances peoples lives, and helps them tackle their struggles. While originally started by a sole developer who just wanted to make a completely free mental health app... Loopbreakr now utilizes the help and consultation of some awesome mental health workers, to provide correct and relevant content.',
    imgStart: false,
    img: Image,
    alt: 'about',
    dark: false,
    primary: true,
    darkText: true,
    color: '#fff',
    bottomText: true
}

export const projectsObjOne = {
    id: 'projects',
    lightText: true,
    lightTextDesc: false,
    topLine: 'Projects',
    headLine: 'What We\'re Working On',
    description: 'Loopbreakr focuses on creating completely free mental health apps. No subscription fees, no freemium, and no disruptive ads! There are currently a few apps in development and in release. Read more about them here!',
    imgStart: true,
    img: projectsIcon,
    alt: 'projects',
    dark: true,
    primary: false,
    darkText: false,
    color: '#56cfe1'
}

export const contactObjOne = {
    id: 'contact',
    lightText: false,
    lightTextDesc: true,
    topLine: 'Contact',
    headLine: 'Drop a Line',
    description: 'Have a question? Or maybe an idea? Or perhaps you\'re a fellow changemaker looking to collaborate?! Eitherway we\'d love to hear from you.',
    imgStart: true,
    dark: false,
    primary: true,
    darkText: true,
    color: '#fff'
}

export const donateObjOne = {
    id: 'donate',
    lightText: true,
    lightTextDesc: false,
    topLine: 'Donate',
    headLine: 'Drop a Coin',
    description: 'Our mission is a volunteer effort to make helpful technology more accesible. If you like our work, you can consider donating so that we can make more cool apps in the future!',
    imgStart: false,
    alt: 'Donate',
    dark: true,
    primary: false,
    darkText: false,
    color: '#56cfe1',
    img: donateIcon
}

export const donateObjTwo = {
    id: 'donationform',
    lightText: true,
    lightTextDesc: false,
    topLine: 'Donation Form',
    headLine: 'Donate Here',
    description: 'Thanks so much for being awesome and inquiring on donating to our efforts. You can enter an amount you think is appropriate below. But no pressure!',
    imgStart: false,
    alt: 'Donate',
    dark: true,
    primary: false,
    darkText: false,
    color: '#56cfe1',
    img: donationFormIcon
}