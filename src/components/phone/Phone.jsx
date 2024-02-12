import React, { useState } from 'react'
import { useEffect } from 'react';
import './phone.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import TripOriginOutlinedIcon from '@mui/icons-material/TripOriginOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CloseIcon from '@mui/icons-material/Close';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Phone = () => {
  useEffect(()=>{
    Aos.refresh()
  },[])
  

  const [changeClass,setchangeClass]=useState(true);

function pastEventHandler(){
var pastEventContent=document.querySelector(".pastEventContent")

pastEventContent.classList.toggle("pastEventContentShow")

}

  function frontEventHandler(){
    var contentThree=document.querySelector(".contentThree")
    var contentTwo=document.querySelector(".contentTwo")
    var contentOne=document.querySelector(".contentOne")
    var pastEventContent=document.querySelector(".pastEventContent")


    

pastEventContent.classList.remove("pastEventContentShow")






    contentTwo.style.zIndex="-1"
    contentThree.style.zIndex="-2"
  contentOne.style.zIndex="10"
  if(contentOne.style.zIndex=="1"){
    contentTwo.style.zIndex="10"
  }
  }


function handleClassname(){
  var contentThree=document.querySelector(".contentThree")
  var contentTwo=document.querySelector(".contentTwo")
  var pastEventContent=document.querySelector(".pastEventContent")
  pastEventContent.classList.remove("pastEventContentShow")
setchangeClass(!changeClass);
if(changeClass==true){
  contentTwo.style.zIndex="1"
}

else{
  contentThree.style.zIndex="2"
}
}


    const setDarkMode=()=>{
        document.querySelector(".outlineOne").setAttribute('dark-theme','dark')
    }
    const setLightMode=()=>{
        document.querySelector(".outlineOne").setAttribute('dark-theme','light')
    }

   const toggleTheme=e=>{
    if(e.target.checked) setDarkMode();
    else setLightMode()
   }

   


   function popupShowHandler(){
  var phoneInfoPopUpDivContent=document.querySelector(".phoneInfoPopUpDivContent")
  var phoneInfoPopUpDivContents=document.querySelector(".phoneInfoPopUpDivContentSecond")
  phoneInfoPopUpDivContent.classList.toggle("phoneInfoPopUpDivContentShow")
   phoneInfoPopUpDivContents.classList.remove("phoneInfoPopUpDivContentSecondShow")
   }
   function popupShowHandlerSecond(){
    var phoneInfoPopUpDivContent=document.querySelector(".phoneInfoPopUpDivContent")
    var phoneInfoPopUpDivContents=document.querySelector(".phoneInfoPopUpDivContentSecond")
    phoneInfoPopUpDivContents.classList.toggle("phoneInfoPopUpDivContentSecondShow")
    phoneInfoPopUpDivContent.classList.remove("phoneInfoPopUpDivContentShow")


     }
  return (
    <>

<div className="leftFrontPageContentWrapper" data-aos="fade-right" data-aos-once="true">

  <div className="leftFrontPageContent">
  <div className="bigheadingWrapper">
  <h1 className='frontpagebigHeading'>We give our students wings <br/>
    and a platform to fly high.
    </h1>
  </div>

<div className="frontpageButtonsWrapper">
<div className="frontpageButtonOne" onClick={()=>{popupShowHandler()}}>

<h4 className='frontpageHeading'>
Class | Grades
</h4>

<h5 className='frontpagesmallHeadding'>
 Nursery
<div className="frontpageButtonWrapper"><ArrowRightAltIcon className='frontpagebtn'/></div>
 XII
</h5>


         <div className="phoneInfoPopUpDivContentWrapper">
              <div className="phoneInfoPopUpDivContent">
              <div className="triangleforphoneInfoPopUp"></div>
                    <div className="flexedPopupheading">
                    <h3>What We Offer?</h3>
                   <div className="wrappedPopupCloseIcon">
                   <CloseIcon className='popupCloseIcon'/>
                   </div>
                    </div>
                    <h5>We have a motive..</h5>
                    <p className='popupinfoText'>We started our organization with a motive to offer small childrens quality education helping them 
                      create a great foundation to help them succeed in each aspect of their life.  
                    </p>
              </div>
         </div>


 </div>



<div className="frontpageButtonOne" onClick={()=>{popupShowHandlerSecond()}}>
<h4 className="frontpageHeading">
Enrolled Students
<h5 className="small">3285+</h5>
</h4>



<div className="phoneInfoPopUpDivContentWrapperSecond">
              <div className="phoneInfoPopUpDivContentSecond">
              <div className="triangleforphoneInfoPopUp"></div>
              <div className="flexedPopupheading">
                    <h3>What We Provide?</h3>
                   <div className="wrappedPopupCloseIcon">
                   <CloseIcon className='popupCloseIcon'/>
                   </div>
                    </div>
                    <h5 className='smallpopUptext'>We carry a vision..</h5>
                    <p className='popupinfoText'>Our platform gives our students a wide variety of options to shape their carrer 
                      and a guide with proper walk through in each step of their school life with us.
                    </p>
              </div>
         </div>

</div>


</div>







  </div>
  
</div>





<div className="frontpageContainer">



<div className="modesButtonContainer">
       <input className='modeInput' type="checkbox" id='darkmode-toggle' 
        onChange={toggleTheme}/>
       <label className='label' htmlFor="darkmode-toggle">
        <WbSunnyIcon fontSize='8px' className='sun'/>
        <ModeNightIcon fontSize='8px' className='moon'/>    
       </label>
    </div>
    

<div className="firstPhoneContainer">
    <div className="cameraDesign">
        <div className="cameraCircle"></div>
    </div>




<div className="pastEventContainer">
      <div className="pastEventContent">
      <div className="cameraDesign">
        <div className="cameraCircle"></div>
    </div>

<div className="flex">
<div className="eventOne">
        <div className="introHeading">
           <h6>Introduction of</h6>
           <h5>B.K.V.M</h5>
           </div>
<div className="wrapForintro">
<h5 className='headingforintro'>
      
      <div className="firstBorder">
      YOUR<br/>
      </div>
            FUTURE<br/>
            STARTS<br/>
            <div className="lastBorder">
            HERE<br/>
            </div>
            </h5> 
</div>
        </div>
        <div className="eventTwo">
<div className="eventTwoimgWrapper">
<img src="\assets\b2.jpg" className='imgforEventtwo' />
</div>
        </div>

        
</div>
<div className="wrapthisDivEventThree">

<div className="eventThree">
        <div className="introHeading">
           <h6>Introduction of</h6>
           <h5>B.K.V.M</h5>
           </div>
           <p className="eventThreeParagraph">
           Bal Kalyan Vidya Mandir School, established in 2040 BS, 
is located in the heart of Biratnagar and has currently enrolled 3285 students.
           </p>
        </div>

</div>
      </div>
</div>










    <div className="outlineOne">
             
                  
<div className="contentOne">
      <div className="introHeading">
      <h4 className='introText'>Introduction of</h4>
   <h1 className='name'>
       B<div className="redBox"></div>
        K<div className="redBox"></div>
          V<div className="redBox"></div>
             M<div className="redBox"></div>
      </h1>

        <div className="line"></div>
      </div>

<div className="homepageGreetingText">
<h1 className='greetText'>
<div className="borderTop">
YOUR<br/> 
</div>
FUTURE<br/>
STARTS <br/>
<div className="borderBottom">
HERE<br/>
</div>
</h1>
</div>

<div className="phoneButtonsContainer">



<button className='phonebackBtn btn' onClick={pastEventHandler}><ViewWeekIcon className='barsIcon'/></button>
<button className='phonecircleBtn btn' onClick={frontEventHandler}><TripOriginOutlinedIcon className='circleIcon'/></button>
<button className='phoneforwardBtn btn' onClick={handleClassname}><ArrowRightIcon className='phoneRightIcon'/></button>



</div>

</div>


<div className="contentTwo">

<div className="cameraDesign">
        <div className="cameraCircle"></div>
    </div>

<div className="introHeadingContentTwo">
      <h4 className='introText'>Introduction of</h4>
   <h1 className='nameContentTwo'>
       B<div className="redBoxcontentTwo"></div>
        K<div className="redBoxcontentTwo"></div>
          V<div className="redBoxcontentTwo"></div>
             M<div className="redBoxcontentTwo"></div>
      </h1>

        <div className="lineContentTwo"></div>
      </div>
<div className="contentTwoImageWrapper">
  <img src="\assets\b2.jpg" className='contentTwoImage' />
</div>

</div>


<div className="contentThree">
<div className="cameraDesign">
        <div className="cameraCircle"></div>
    </div>
<div className="introHeading">
      <h4 className='introText'>Introduction of</h4>
   <h1 className='name'>
       B<div className="redBox"></div>
        K<div className="redBox"></div>
          V<div className="redBox"></div>
             M<div className="redBox"></div>
      </h1>

        <div className="line"></div>
      </div>
  <div className="contentThreeParagraphWrapper">
   <p className="contentThreeParagraph">Bal Kalyan Vidya Mandir School, established in 2040 BS, 
is located in the heart of Biratnagar and has currently enrolled 3285 students.
 The school, also known as B.K.V.M, is known as the centre for quality education has maintained
  a great reputation since the year of its establishment. 
  It has been adding glory to its history by often being awarded with regional and national prizes .
  
  </p>
</div>
</div>

     
    </div>




    <div className="outlineTwo"></div>

</div>

    </div>


    
    </>
  )
}

export default Phone