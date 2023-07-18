import React from 'react'
import twitter from '../images/twitter.png';
import insta from '../images/insta.jfif'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'


const handleInstagramButtonClick = () => {
    window.open('https://www.instagram.com/');
};

const handleTwitterButtonClick = () => {
    window.open('https://twitter.com/i/flow/login?redirect_after_login=%2Fhome');
};

const handleGithubButtonClick = () => {
    window.open('https://github.com/MarcusAurelius29');
};

const handleLinkedInButtonClick = () => {
    window.open('https://www.linkedin.com/in/varun-gole-b4a77a1a0/');
};


function Footer() {
    return (
        <div className='footer-logos'>
        <img src={twitter} onClick={handleTwitterButtonClick}></img>
        <img src={insta} onClick={handleInstagramButtonClick}></img>
        <img src={linkedin} onClick={handleLinkedInButtonClick}></img>
        <img src={github} onClick={handleGithubButtonClick}></img>
        </div>
    )
}

export default Footer