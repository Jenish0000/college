import React from 'react'
import './footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import emailjs from '@emailjs/browser';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
  const [time,setTime]=useState(new Date())
  useEffect(()=>{
    setInterval(()=>setTime(new Date()),)
  },[])



  const formForEmail = useRef();

  const sendUserEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_rthtl6p', 
      'template_sl1gkh7', 
      formForEmail.current, 
      'dv_b_Sxbw2Ujh59Ee')
      .then((result) => {
          console.log(result.text);
          window.location.reload()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
   <div className="footerContainer">
       <div className="footerContent">
     <div className="footerleftContent">
                      <div className="footerleftDesign">
                      <div className="footerlogoWrapper">
        <img src="\assets\l1.png" alt="footerlogo" className='footerLogo'/>
      </div>
      <div className="footerTextWrapper">
        <h3>We give our students wings <br/>
        and a platform to fly high
        </h3>
      </div>
                      </div>
     </div>
     <div className="wrappedFlex">
<div className="footerMiddleContent">
      <h3>Wish to know more about BKVM admissions 
        <br/>
        and updates? Subscribe now!</h3>



<form  ref={formForEmail} onSubmit={sendUserEmail}>
 <div className="flexedSubmit">
 <input type="email" name="user_email" className="subscribeemail" required placeholder='YOUR E-MAIL'/>
 <button className='subscribeBtn'>SUBSCRIBE</button>
 </div>
 </form>    








     </div>
     <div className="footerRightContent">
       <div className="footerFollowLogos">
       <h3>Follow Us</h3>
<div className="flexedFooter">
       <a className='footerLinkStyle' href="https://m.facebook.com/bkvmschool">
       <div className="footerIconWrap">
         <FacebookOutlinedIcon className='footerIconFollow'/>
         </div>
       </a>
         <div className="footerIconWrap">
         <InstagramIcon className='footerIconFollow'/>
         </div>
         <div className="footerIconWrap">
         <TwitterIcon className='footerIconFollow'/>
         </div> 
</div>
       </div>
     </div>
     <div className="callUsWrapper">
      <h3>Call Us</h3>
      <h4>021-474560</h4>
     </div>
    </div>






     </div>
     <div className="copyrightContainer">
<p>
  <CopyrightIcon className='copyrightFooterIcon'/>
  {time.getFullYear()} Bal Kalyan Vidya Mandir, Biratnagar Nepal. All Rights Reserved
  </p>
       <h5>    #NOTE: Developed by Jenish Karki & Akshata Karki</h5>
     </br>
</div>
    </div>
      
    </>
  )
}

export default Footer
