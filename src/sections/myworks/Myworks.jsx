import './MyWorks.css';



function MyWorks() {
  return (
   <div className='section' id='section-myworks'>

    <div id='Myworks-main-div' >
      <span className='arrow'style={{right:"0",transform:"rotate(180deg)"}}  ></span>
      <span className='arrow' style={{left:"0"}}></span>
      <div className='blur' ></div>
      <div id='Myworks-main-body' ></div>
      <div className='blur' style={{right:"0"}} > </div>
    </div>

   </div>
  );
}

export default MyWorks;