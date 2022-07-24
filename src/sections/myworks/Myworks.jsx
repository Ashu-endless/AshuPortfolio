import './MyWorks.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


function MyWorks() {
  return (
   <div className='section' id='section-myworks'>
 <Swiper
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className='slider-div' >
        <div className="slider-img" ></div>
          <div className='slider-details' >
          <p className='slider-appname' >BOOKWORMS</p>
          <p className='slider-subtitle' >About</p>
          <p>A simple webapp to track progress of your books.Add notes,bookmarks and track total times read,current page reading with a heart soothening ui</p>
          <p className='slider-subtitle' >Tech Used</p>
          <div className='slider-tech' ><span tech-icon="heroku"></span> <span tech-icon="react" ></span> </div>
          </div>
          <a  target={"_blank"} href='https://ashu-endless.github.io/Bookworms/' rel="noreferrer" >Vist BookWorms</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    {/* <div id='Myworks-main-div' >
      <span className='arrow'style={{right:"0",transform:"rotate(180deg)"}}  ></span>
      <span className='arrow' style={{left:"0"}}></span>
      <div className='blur' ></div>
      <div id='Myworks-main-body' ></div>
      <div className='blur' style={{right:"0"}} > </div>
    </div> */}

   </div>
  );
}

export default MyWorks;