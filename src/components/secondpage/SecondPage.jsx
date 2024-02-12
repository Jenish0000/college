import React from 'react'
import './secondpage.css'
import Left from '../secondpageleft/Left'
const SecondPage = () => {


  
  return (
  <>
<div id="SecondPage">
<div className="headingForSecondPageWrapper">
    <h2 className='headingForSecondPage'>
      Highlight's of our organization
    </h2>
    </div>
  <div className="secondpageWrapper">
<div className="leftWrap">
<Left/>
</div>
  </div>
</div>
  </>
  )
}

export default SecondPage