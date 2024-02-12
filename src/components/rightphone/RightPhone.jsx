import React from 'react'
import './rightphone.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const RightPhone = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (

<div className="parentForRightPhone">
<div className="rightPhonecardWrapper" data-aos="zoom-in-left">
<div className="card">
        <div className="cover">
            <img src="\assets\Free_Sample_By_Wix.jpg" className='rightPhoneImage' />
        <div className="backfaceTextWrapper">
            <h1>Vision</h1>
            <p className='rightphoneText'>Here, we beleive that academic acheivement is important but so is the driving desire to learn something new.</p>
        </div>
        </div>
        <div className="content">
            <h1>Mission</h1>
        <p className='rightphoneText'>We embrace the student's dreams as our own and hence aim to produce socially responsible and globally competent citizens with the help of the excellent faculty and important resources.</p>
        </div>
  </div>

</div>
</div>

  )
}

export default RightPhone