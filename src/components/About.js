import React from 'react'
import './About.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Navigation,Autoplay} from 'swiper'
import { SliderData } from './Data'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const About = () => {
  return (
    <div className='a-container'>
      <Swiper
      modules={[Navigation,Autoplay]}
      loopFillGroupWithBlank={true}
      navigation={true}
      autoplay={true}
       className='myswiper'

       slidesPerView={2}
       slidesPerGroup={1}
       spaceBetween={-60}
       loop={true}
      >
        {
          SliderData.map((slide,i)=>(
            <SwiperSlide>
            <div>
              <img src={slide.img} alt="" className='imagecont' />
            </div>
          </SwiperSlide>
          ))
        }
       
       
      </Swiper>
    </div>
  )
}

export default About
