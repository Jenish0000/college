import React from 'react'
import './leftphone.css'
import { useState } from 'react'
import { useEffect } from 'react'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Aos from 'aos';
import 'aos/dist/aos.css'
const LeftPhone = () => {











function showBottomInfoHandler(){
var check=document.querySelector(".try")
check.classList.toggle("leftPhoneBottomIconsWrapperShow")
check.classList.remove("leftPhoneBottomIconsWrapper")
}

  const [time,setTime]=useState(new Date())
  useEffect(()=>{
    setInterval(()=>setTime(new Date()),)
  },[])





useEffect(()=>{
  Aos.init({duration:1000});
},[])





  return (
<>


<div className="leftPhoneContainer" data-aos="zoom-in">


  <div className="leftPhoneContent">

<div className="topHeaders">
<div className="leftPhoneTopDesignContainer">
       <div className="timeContainer">
           <h5 className='currentTime'>{time.getHours()}:{time.getMinutes()}</h5>
          </div>


          <div className="leftPhonecameraContainer">
          <div className="leftPhoneCameraline"></div>
          <div className="leftPhoneBlueCamera"></div>
          </div>

          <div className="leftPhonenetworkContainer">

          <div className="leftPhoneIconsWrapper">
          <SignalCellularAltIcon  className='leftPhoneIcons'/>
          </div>
          <div className="leftPhoneIconsWrapper">
          <WifiPasswordIcon  className='leftPhoneIcons'/>
          </div>
          <div className="leftPhoneIconsWrapper">
          <Battery5BarIcon className='leftPhoneIcons'/>
          </div>
          </div>


</div>

<div className="leftPhoneHeaderWrapper">
  <h1>facebook</h1>
</div>
<hr className='linebelowHeading' />

</div>


<div className="leftPhoneInformationContainer">

     <div className="leftPhoneIconsWrapper">
       <div className="leftPhoneInformationIconWrapper">
      <img src="\assets\principal.jpg" className="leftPhoneInformationIcon" />
       </div>
       <div className="informationaboutIcon">
          <h4>Rabin Kumar Dahal</h4>
          <h5>Principal of Bal Kalyan Vidya Mandir</h5>
       </div>
       <div className="leftPhoneThreeDotsIconWrapper" onClick={showBottomInfoHandler}>
         <MoreHorizIcon className='leftPhoneIcons'/>
       </div>
      </div>

<div className="leftPhoneMessageContainer">
  <p>
Dear Parents,<br/>
We beleive that children from all ethnic backgrounds and communities have a right
to quality education. BKVM School will be dilligent in making this quality education accessible to everyone in the 
society. This is our primary goal as an institution and we are determined to work towards it. We hope to see similar 
dilligence and support coming from all of you.
<br/>
<br />  
After the unprecedented time of the global pandemic, things were uncertain and challenging. But from the combined 
effort of our teachers and staffs we were able to overcome the hardships and work towards the smooth operation of
all the aspects of school. Similarly, if any situation or obstacles arrive in the future we are prepared to tackle
them and carry out the process of teaching-learning without much hindrance.
<br/>
<br />
We beleive that the best institutions must provide academic breadth and wide ranging experiences both inside and outside the classroom.
And in our school, we aim to provide these experiences and prepare the kids for not just to earn a living but to
live a life worth living for.
<br/>
<br />
Choosing a school for your child is one of the most challenging decisions you will make in your life but i assure
you here at BKVM we will teach them to dream big. We will offer them a complete range of subjects professional enough 
to ensure that they are taught in a stimulating environment. Our striving commitment towards teaching and learning and a strong
emphasis on the quality of interpersonal relationship between the teachers and the students make us 
stand out among the others.
<br/>
<br />
Looking forward to make this endeavour successfull
  </p>
</div>


<div className="infoaboutPostContainer">

<div className="try leftPhoneBottomIconsWrapper">
       <div className="leftPhoneInformationIconWrapper">
      <img src="\assets\principal.jpg" className="leftPhoneInformationIcon" />
       </div>
       <div className="informationaboutIcon">
          <h4>Rabin Kumar Dahal</h4>
          <h5>Principal of 
            <br />
            Bal Kalyan Vidya Mandir</h5>
       </div>
  
<hr/>


<div className="leftPhoneQuote">
  <h5>Let nobel thoughts come to us from every dimension -Rig Veda</h5>
</div>



  </div>

</div>













</div>





  </div>




</div>

</>

  )
}

export default LeftPhone