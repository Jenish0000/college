import React from 'react'
import "./members.css"
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Members = () => {
     useEffect(()=>{
          Aos.init({duration:1000});
        },[])
  return (
<>
<div className="membersContainerWrapper">
  <div className="membersContainer">
             <div className="greetMembersHeading" data-aos="zoom-in-left">
                <h3>Faculty Members of</h3>
                <h1 className='memebersInstitute'>B.K.V.M</h1>
                <div className="line"></div>
             </div>


<div className="membersContentWrapper" data-aos="flip-up">
<div className="styledWrapForContent">
       <div className="membersContentOneWrapper">
       <div className="styledMembersContent">
             <div className="membersContentOne">
                  <h2 className='subjectHeader'>Physics</h2>
             <div className="teachersNameContainer">
                <h4>Prof. Dr. Indu Shekhar Jha</h4>
                  <h4>Mr. Birendra Kumar Jha</h4>
                  <h4>Mr. Binay Bhagat</h4>
                  <h4>Mr. Niroj Shrestha</h4>
                  <h4>Mr. Bindeshwor Pandit</h4>
                  <h4>Mr. Arun Kumar Karna</h4>
             </div>
             </div>
       </div>
       </div>
       <div className="membersContentOneWrapper">
       <div className="styledMembersContent">
             <div className="membersContentOne">
                  <h2 className='subjectHeader'>Biology</h2>
             <div className="teachersNameContainer">
             <h4>Prof. Dr. Tilak Gautam</h4>
                  <h4>Mr. Pradip Niroula</h4>
                  <h4>Mr. Bijay Sharma</h4>
                  <h4>Mrs. Anjali Dahal</h4>
             </div>
             </div>
       </div>
       </div>
       <div className="membersContentOneWrapper">
       <div className="styledMembersContent">
             <div className="membersContentOne">
                  <h2 className='subjectHeader'>Mathematics</h2>
             <div className="teachersNameContainer">
             <h4>Dr. Pawan Karna</h4>
                  <h4>Mr. Sudeep Bhattarai</h4>
                  <h4>Mr. Bechan Mahato</h4>
                  <h4>Mr. Yogendra Das</h4>
                  <h4>Mr. Rajan Dahal</h4>
             </div>
             </div>
       </div>
       </div>
       <div className="membersContentOneWrapper">
       <div className="styledMembersContent">
             <div className="membersContentOne">
                  <h2 className='subjectHeader'>Chemistry</h2>
             <div className="teachersNameContainer">
             <h4>Mr. Sanjay Kumar Thakur</h4>
                  <h4>Mr. Yuv Raj Singh</h4>
                  <h4>Mr. Shiv Kumar Yadav</h4>
                  <h4>Mr. Bhola Luitel</h4>
                  <h4>Mr. Rakesh Yadav</h4>
               </div>
             </div>
       </div>
       </div>
       <div className="membersContentOneWrapper">
       <div className="styledMembersContent">
             <div className="membersContentOne">
                  <h2 className='subjectHeader'>Accounts</h2>
             <div className="teachersNameContainer">
             <h4>Mr. Abhishek Gupta</h4>
                  <h4>Mr. Saroj Pokhrel</h4>
                  <h4>Mr. Shiv Kumar Yadav</h4>
               </div>
             </div>
       </div>
       </div>
       <div className="membersContentOneWrapper">
       <div className="styledMembersContent">
             <div className="membersContentOne">
                  <h2 className='subjectHeader'>Computer Science</h2>
             <div className="teachersNameContainer">
             <h4>Mr. Kishor Giri</h4>
                  <h4>Mr. Bishal Shiva Pariyar</h4>
                  <h4>Mr. Bishesh Shakya</h4>
               </div>
             </div>
       </div>
       </div>
       <div className="membersContentOneWrapper">
       <div className="styledMembersContent">
             <div className="membersContentOne">
                  <h2 className='subjectHeader'>English</h2>
             <div className="teachersNameContainer">
             <h4>Mr. Bidhyamani Acharya</h4>
                  <h4>Mr. Niraj Pokhrel</h4>
                  <h4>Mr. Binod Khadka</h4>
               </div>
             </div>
       </div>
       </div>
       <div className="membersContentOneWrapper">
       <div className="styledMembersContent">
             <div className="membersContentOne">
                  <h2 className='subjectHeader'>Nepali</h2>
             <div className="teachersNameContainer">
             <h4>Mr. Somnath Timalsena</h4>
             <h4>Mr. Ramesh Niroula</h4>
               </div>
             </div>
       </div>
       </div>
       <div className="membersContentOneWrapper">
       <div className="styledMembersContent">
             <div className="membersContentOne">
                  <h2 className='subjectHeader'>Social Studies</h2>
             <div className="teachersNameContainer">
             <h4>Mr. Ronil Bikram Adhikari</h4>

               </div>
             </div>
       </div>
       </div>
       <div className="membersContentOneWrapper">
       <div className="styledMembersContent">
             <div className="membersContentOne">
                  <h2 className='subjectHeader'>Economics</h2>
             <div className="teachersNameContainer">
             <h4>Mr. Ganesh Dahal</h4>

               </div>
             </div>
       </div>
       </div>
</div>
</div>


  </div>

</div>
</>
  )
}

export default Members