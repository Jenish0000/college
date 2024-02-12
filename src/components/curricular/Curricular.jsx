import React from 'react'
import './curricular.css'
const Curricular = () => {
  return (
   <>
      <div className="extraActivitiesContainerWrapper">
<div className="greetForCurricularContainer" data-aos="zoom-in-right">
    <h2 className='bigHeadingForCurricular'>
        Facilities provided by<br/>
        B.K.V.M
        <div className="line"></div>
    </h2>
</div>


           <div className="extraactivitiesContainer" data-aos="flip-up">
              <div className="extraactivitiesContent">
           <div className="flexedCurricular">
           <div className="extraactivitiesimageWrapper">
                      <img src="\assets\pexels-alax-matias-17042317.jpg" alt="guitar" className="extraactivitiesImage" />
                  </div>
                  <div className="curricularInfoText">
                    <h3>Extra Curricular Activities</h3>
                    <p className='curricularTextInfo'>
                        Extra-Curricular Activities not only play a vital role in the development of students
                        but also help develop rigour and discipline which are important values to learn in your youth.
                        Sometimes our students find their passion in sports and also end up choosing it as their main career.
                        So, keepking that in mind we have promoted sports such as dance competitions,debate competitions and 
                        quiz competitions in our school on a very regular basis.
                    </p>
                  </div>
           </div>
        <div className="flexedCurricularSecond">
        <div className="hostelInfo">
                <h3>Hostel</h3>
                    <p className='curricularTextInfo'>We have a well facilitated boys and girls hostel to care for the students and provide them a healthy environment to prosper
                        in spite of being away from home, specially for the guardians and students outside of Biratnagar, who trust BKVM to send their kids here.
                    </p>
                </div>

                <div className="transportationInfo">
                <h3>Transportation</h3>
                    <p className='curricularTextInfo'>To provide the conveneince of transportation, our school buses go around the city to bring students of different age groups safely to the school compound.</p>
                </div>
        </div>
              </div>
           </div>
      </div>
   </>
  )
}

export default Curricular