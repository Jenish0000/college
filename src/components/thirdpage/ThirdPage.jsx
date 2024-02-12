import React from 'react'
import './thirdpage.css';
import LeftPhone from '../leftphone/LeftPhone'
const ThirdPage = () => {
  return (
   <>
   <div className="thirdpageDesign">
<div className="thirdpageTextWrapper">
  <div className="thirdpageBigHeading">
  <h3>Message from the</h3>
    <h1>Principal</h1>
  </div>
    <div className="line"></div>

<div className="thirdpageImageWrapper">
    <img src="\assets\principal.jpg" className="thirdpageImage" />
</div>

</div>

   <LeftPhone/>
   </div>
   </>
  )
}

export default ThirdPage