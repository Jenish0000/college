import React from 'react'
import { useState } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './gallery.css'
import {EffectCoverflow,Pagination,Navigation} from 'swiper/modules'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
const Gallery = () => {
  return (
   <>


<div className="galleryContainer" id='Gallery'>
<div className="greetGalleryHeading">
    <h1>Glimpse of us...</h1>
    </div>
<Swiper
effect={'coverflow'}
grabCursor={true}
centeredSlides={true}
loop={true}
slidesPerView={'auto'}
coverflowEffect={{
    rotate:0,
    stretch:0,
    depth:100,
    modifier:2.5,
}}
pagination={{el:'.swiper-pagination',clickable:true}}
navigation={{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
    clickable:true,
}}
modules={[EffectCoverflow,Pagination,Navigation]}
className='swiper_container'
>
<SwiperSlide>
    <img src='\assets\pOne.jpg' alt="slideImage" className='galleryImage'/>
</SwiperSlide>
<SwiperSlide>
    <img src='\assets\pTwo.jpg' alt="slideImage" className='galleryImage'/>
</SwiperSlide>

<SwiperSlide>
    <img src='\assets\pThree.jpg' alt="slideImage" className='galleryImage'/>
</SwiperSlide>

<SwiperSlide>
    <img src='\assets\pFour.jpg' alt="slideImage" className='galleryImage'/>
</SwiperSlide>

<SwiperSlide>
    <img src='\assets\pFive.jpg' alt="slideImage" className='galleryImage'/>
</SwiperSlide>

<SwiperSlide>
    <img src='\assets\pSix.jpg' alt="slideImage" className='galleryImage'/>
</SwiperSlide>

<SwiperSlide>
    <img src='\assets\pSeven.jpg'alt="slideImage" className='galleryImage'/>
</SwiperSlide>
<SwiperSlide>
    <img src='\assets\pEight.jpg' alt="slideImage" className='galleryImage'/>
</SwiperSlide>

<div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <WestIcon className='prevBtnIcon'/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <EastIcon className='nextBtnIcon'/>
          </div>
          <div className="swiper-pagination"></div>
        </div>

</Swiper>
</div>
   </>
  )
}

export default Gallery