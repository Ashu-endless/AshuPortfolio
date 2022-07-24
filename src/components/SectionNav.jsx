import './SectionNav.css'

function SectionNav() {

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

    return ( <>
    <div id='sxio' >
      <div className='mng active-section' onClick={ShowSection.home} >Home</div>
      <div className='mng' onClick={ShowSection.myworks} >My Works</div>
      <div className='mng' onClick={ShowSection.contactme} > Contact Me </div>
    </div>
    </> );
}

export default SectionNav;