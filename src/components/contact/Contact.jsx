import React, { useState } from 'react'
import './contact.css'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';


const Contact = () => {
  window.addEventListener('scroll',function(){
    var contactWrapper=document.querySelector('.contactWrapper')
    contactWrapper.classList.toggle("hidecontactWrapper",window.scrollY>0)
  })


  const setDarkModeWholePage=()=>{
    document.querySelector("body").setAttribute('dark-themes','darkPage')
    document.querySelector("body").removeAttribute('light-themes','lightPage')
}
const setLightModeWholePage=()=>{
  document.querySelector("body").removeAttribute('dark-themes','darkPage')
    document.querySelector("body").setAttribute('light-themes','lightPage')
   
}

const toggleThemeWholePage=e=>{
if(e.target.checked) setDarkModeWholePage();
else setLightModeWholePage()
}


  

  return (
   <>
 <div className="contactWrapper">
 <div className="leftInfrmationContainer">
       <div className="informationWrapper">
        <PhoneIcon className='icon'/><span className="info">021-77548</span>
        <EmailIcon className='icon'/><span className="info">info@bkvm.edu.np</span>
        <LocationOnIcon className='icon'/><span className="info">Biratnagar-11, Morang</span>
       </div>
   </div>

   <div className="rightInformationContainer">
             <div className="iconWrapper">
<a href="https://m.facebook.com/bkvmschool" className='fbLink'>
<div className="facebookbuttonWrapper">
<FacebookIcon id="facebookBtn" className='rightIcon'/>
</div>
</a>
       </div>
         
         <div className="daynightModeContainer">
      
<div className="modesButtonContainerContact">
       <input className='modeInputContact' type="checkbox" id='darkmode-toggleWholepage' 
        onChange={toggleThemeWholePage}/>
       <label className='labelContact' htmlFor="darkmode-toggleWholepage">
        <Brightness5Icon fontSize='8px' className='brightnessFull'/>
        <Brightness6Icon fontSize='8px' className='brightnessHalf'/>    
       </label>
    </div>
    
         </div>

   </div>
 </div>
   </>
  )
}

export default Contact