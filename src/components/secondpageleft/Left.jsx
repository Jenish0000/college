import React from 'react'
import './left.css'
import { useEffect } from 'react'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Left = () => {


  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  
  




  return (
    
<div className="leftInformationforSecondPageContainer" data-aos="zoom-in">


<div className="leftInformationforSecondPageContent leftContainer">
  <div className="leftLogoWrapper">
  <AccessibilityNewIcon className='lefticonDesign'/>
  </div>
  <div className="textBox">


    <div className="boxOneHeadingContainer">
    <h2>Kindergarden</h2>
   <div className="boxOneIconWrapper">
    <AccessibilityNewIcon className='boxlogo'/>
   </div>
    </div>

<div className="boxOneInfoContainer">
  <p>Well-established institution in the field of early 
    childhood education. Children are exposed to a nurturing 
    environment that fosters learning through play and exploration. 
    Highly qualified and experienced teachers are in early childhood 
    education. </p>
</div>




<div className="leftContainerArrow"></div>
  </div>

  </div>
  <div className="leftInformationforSecondPageContent rightContainer">
  <div className="leftLogoWrapper">
   <AccountBalanceIcon className='lefticonDesign'/>
  </div>
  <div className="textBox">
    <div className="boxOneHeadingContainer">
    <h2>Basic Level</h2>
   <div className="boxOneIconWrapper">
    <AccountBalanceIcon className='boxlogo'/>
   </div>
    </div>

<div className="boxOneInfoContainer">
  <p>The Basic Level program at Bal Kalyan Vidhya Mandir College is 
    designed to provide students with a strong foundation in various academic
     subjects and essential life skills. This level serves as the initial 
     building block for students’ educational journey,
     nurturing their intellectual, emotional, and social development. </p>
</div>

  </div>
<div className="rightContainerArrow">
</div>
  </div>
  <div className="leftInformationforSecondPageContent leftContainer">
  <div className="leftLogoWrapper">
    <SchoolIcon className='lefticonDesign'/>
  </div>
  <div className="textBox">
    <div className="boxOneHeadingContainer">
    <h2>Secondary Level</h2>
   <div className="boxOneIconWrapper">
    <SchoolIcon className='boxlogo'/>
   </div>
    </div>

<div className="boxOneInfoContainer">
  <p>The Secondary Level program at Bal Kalyan Vidhya Mandir College 
    is a pivotal stage in a student’s educational journey. 
    This level builds upon the strong foundation laid in the earlier 
    years and 
    prepares students for higher academic challenges
    while focusing on character development and life skills.</p>
</div>
  </div>


  <div className="wrapborder">
  <div className="leftContainerArrow"></div>
  </div>
</div>


</div>




  )
}

export default Left