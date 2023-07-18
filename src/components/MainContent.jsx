import React from 'react'


    const handleEmailButtonClick = () => {
      window.open('mailto:varungole1999@gmail.com', '_blank');
    };

    const handleLinkedInButtonClick = () => {
        window.open('https://www.linkedin.com/in/varun-gole-b4a77a1a0/');
    };





    
  


function MainContent()
{
   
    return (
        <>
        <div className='main-content'>
            
        <h3>Varun Gole</h3>
        <p>Software Developer</p>
        <p>varungole1999@gmail.com</p>
        <div className='buttons'>
        <button className='button-email' id='button-email' onClick={handleEmailButtonClick}>Email</button> 
        <button className='button-linkedin' id='button-linkedin' onClick={handleLinkedInButtonClick}>LinkedIn</button>
        
        </div>
        <h4>Abouts</h4>
        <p>I am a software engineer from Pune, India. I worked in Quorum Software for 2 years and then I am about to pursue my Master's in Software Engineering from University of Maryland, College Park.</p>
        <h4>Interests</h4>
        <p>
            React , Coding , Football, History , Boxing , Sidemen , Minecract , Geography
        </p>
        
        </div>


        </>
    )
}

export default MainContent