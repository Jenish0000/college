import React from 'react'
import './fifthpage.css'
import BiotechIcon from '@mui/icons-material/Biotech';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
const FifthPage = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
<>
 


<div className="fifthpageContainer" id='FifthPage'>


<div className="pageHeadingWrapper" data-aos="zoom-in-right">
<div className="fifthpageBigHeadingWrapper">
     <h3>Programmes</h3>
     <h1>Offered by us</h1>
     <div className="line"></div>
   </div>

   </div>
 <div className="fifthpageContent" data-aos="zoom-in-right">

 <div className="fifthpageFlexOne">
  
<div className="greadesWrapper">
            <h1>
            GRADE <br />
            XI-XII
            </h1>
            <h3>UNDER (NEB)</h3>
</div>
<div className="fieldOne">

<h2 className="feildHeading">
<div className="fifthIconwrapper">
<BiotechIcon className='scopeIcon'/>
</div>
SCIENCE</h2>
 <h3>-Physical (Engeneering) Group</h3>
 <h3>-Biology (Medical) Group</h3>
 <h3>-Computer Science (IT) Group</h3>
</div>

<div className="fieldTwo">
<h2 className="feildHeading">
<div className="fifthIconwrapper">
  <BusinessCenterIcon className='bagIcon'/>
</div>
  MANAGEMENT</h2>
<h3>-Business Studies Group</h3>
<h3>-Computer Science (IT) Group</h3>
</div>
 </div>

   <div className="fifthpageImageOneWrapper">
    <img src="\assets\pOne.jpg" className="fifthpageImageOne" />
   </div>




 </div>









 <div className="fifthpageDownContent" data-aos="zoom-in-left">

 <div className="fifthpageImageOneWrapper">
    <img src="\assets\pFour.jpg" className="fifthpageImageOne" />
   </div>


<div className="fifthpageTextsWrapper" data-aos="zoom-in-right">
    <h3>Who Can Apply?</h3>
    <p>
      In order to be eligible to be admitted in <span className="alignmentbottom">+2</span> Science programme
      at B.K.V.M. all prospective students must have passed the Secondary Education Examination (SEE)
      or an equivalent examination with a minimum gpa of <span className="alignmentbottom">2.4</span> or grade C+ in Science , Compulsory Mathematics
      and Adiitional Mathematics in aggregate.Candidates seeking admission in Management Stream must have a 
      minimum of a <span className="alignmentbottom">2.0</span> GPA with no less than D+ in any subjects.
    </p>
</div>

 </div>



</div>

</>
  )
}

export default FifthPage