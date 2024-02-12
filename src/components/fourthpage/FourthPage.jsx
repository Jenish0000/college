import React, { useState } from 'react'
import './fourthpage.css'
import RightPhone from '../rightphone/RightPhone'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
const FourthPage = () => {


   const [counterOn,setCounterOn]=useState(false)
   useEffect(()=>{
      Aos.init({duration:1000});
    },[])
    
  
  return (
   <>
<div className="fourthpageDesign" data-aos="zoom-in">

<div className="fourthpageContentWrapper">

 <div className="fourthpageHeadingWrapper">
    <h1>Our family with vision</h1>
 </div>




<div className="fourthpageboxesWrapper">
<div className="one" data-aos="zoom-in-left">
<div className="infoBoxOne">
<ScrollTrigger 
onEnter={()=>setCounterOn(true)} 
onExit={()=>setCounterOn(false)}>
<h3 className="fourthpagesmallHeading">
   {counterOn
    && 
    <CountUp 
    start={0} 
    end={40} 
    duration={3} 
    delay={0}/> }
   <span className='alignmentTop'>+</span></h3>
            <h4>Years of Excellence</h4> 
</ScrollTrigger>
     </div>
     <div className="infoBoxOne">
     <ScrollTrigger 
     onEnter={()=>setCounterOn(true)}
     onExit={()=>setCounterOn(false)}>
<h3 className="fourthpagesmallHeading">
   {counterOn 
   && 
   <CountUp 
   start={0} 
   end={3285} 
   duration={3} 
   delay={0}/> }

   <span className='alignmentTop'>+</span></h3>
            <h4>Enrolled Students</h4> 
</ScrollTrigger>
     </div>
</div>
<br />
<div className="two" data-aos="zoom-out-right">
<div className="infoBoxOne">
<ScrollTrigger 
onEnter={()=>setCounterOn(true)} 
onExit={()=>setCounterOn(false)}>
<h3 className="fourthpagesmallHeading">
   {counterOn 
   && 
   <CountUp 
   start={0} 
   end={90} 
   duration={3} 
   delay={0}/> }
   <span className='alignmentTop'>+</span></h3>
            <h4>Qualified Staffs</h4> 
</ScrollTrigger>
     </div>
     <div className="infoBoxOne">
     <ScrollTrigger 
     onEnter={()=>setCounterOn(true)} 
     onExit={()=>setCounterOn(false)}>
<h3 className="fourthpagesmallHeading">
   {counterOn 
   && 
   <CountUp 
   start={0} 
   end={5} 
   duration={3} 
   delay={0}/> }
   <span className='alignmentTop'>+</span></h3>
            <h4>Top-ranked in the eastern region</h4> 
</ScrollTrigger>
     </div>
</div>
</div>






</div>
</div>
   </>
  )
}

export default FourthPage