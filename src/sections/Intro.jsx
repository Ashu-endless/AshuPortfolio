import './Intro.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import React, { useState, useEffect } from 'react';

function Intro() {



  const ShowSection = {

    "activesection":function(actv_sec){
      // var all_Sec = document.querySelectorAll('.mng');
      [...document.querySelectorAll('.mng')].forEach(el => {
        el.classList.remove('active-section')
      })
      actv_sec.classList.add('active-section')
    }
    ,
    "myworks": function(e){
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
      ShowSection.activesection(e.target)
    },
    "home": function(e){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      ShowSection.activesection(e.target)
    },
    "contactme": function(e){
      window.scrollTo({
        top: 2 * window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
      ShowSection.activesection(e.target)
    },
  }
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


    <div id='sxio' >
      <div className='mng' onClick={ShowSection.home} >Home</div>
      <div className='mng' onClick={ShowSection.myworks} >My Works</div>
      <div className='mng' onClick={ShowSection.contactme} > Contact Me </div>
    </div>

    </div>
  );
}

export default Intro;
