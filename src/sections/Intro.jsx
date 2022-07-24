import './Intro.css';
// import ScrollAnimation from 'react-animate-on-scroll';
// import React, { useState, useEffect } from 'react';

function Intro() {



  
  // useEffect(() => {
  //   // Update the document title using the browser API
    
  // });

  return (
    <div className='section' id='section-intro' >

        <div id='intro-cont' > 
         <div> <span id='int-hi' >Hi</span> <span id='int-im' >I'm</span> </div>
            <p id='intro-name' >Ashutoh Yadav</p>
          {/* <div id='boy-svg' ></div> */}

          <div id='me_blob' >
            <div id='me' ></div>
          </div>
          

            <span id='intro-fs' >FullStack Developer</span>
            <div id='intro-loc' >
            <span>Based in </span> <span>Delhi</span>  <span>India</span>
            </div>
         </div>


    

    </div>
  );
}

export default Intro;
