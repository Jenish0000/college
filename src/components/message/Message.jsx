import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import'./message.css'

const Message = () => {


    function scrollToFirst(){
        var messageContentWrapper=document.querySelector(".messageContentWrapper")
        messageContentWrapper.scrollTo({
          top:0,
          behaviour:"smooth"
        })
    }
function scrollToDiv(){
    var messageContentWrapper=document.querySelector(".messageContentWrapper")
    messageContentWrapper.scrollTo({
      top:440,
      behaviour:"smooth"
    })
}
function scrollToLast(){
    var messageContentWrapper=document.querySelector(".messageContentWrapper")
    messageContentWrapper.scrollTo({
       top:800,
      behaviour:"smooth"
    })
}



    const [time,setTime]=useState(new Date())
    useEffect(()=>{
      setInterval(()=>setTime(new Date()),)
    },[])

  return (
  <>
<div className="parentForMessage">

<div className="parentForMessageContainer" data-aos="flip-up">
<div className="greetInMessageHeading" data-aos="zoom-in">
   <h3>Message from the</h3>
   <h1>Toppers</h1>
   <div className="line"></div>
</div>
<div className="messageContainerWrapper">


        <div className="messageContainer">


              <div className="messageheaderContainer">
                    <div className="messageProfiLeOne" onClick={()=>scrollToFirst()}>
                        <img src="\assets\studentOne.png" className="smallProfileImage" />
                        <h5 className='smallbelow'>Prefen Yadav</h5>
                    </div>
                    <div className="messageProfiLeOne" onClick={()=>scrollToDiv()}>
                        <img src="\assets\studentTwo.png" className="smallProfileImage" />
                        <h5 className='smallbelow'>Aditya Sharma</h5>
                    </div>
                    <div className="messageProfiLeOne" onClick={()=>scrollToLast()}>
                        <img src="\assets\studentThree.png" className="smallProfileImage" />
                        <h5 className='smallbelow'>Utsav Raj Shrestha</h5>
                    </div>


              </div>

             <div className="messageContentWrapper">
<div className="messageContent">
            <div className="postOne">
            <div className="messageContentHeader">
                           <img src="\assets\studentOne.png" className="smallProfileImage" />
               <div className="nameAndPost">
               <div className="postName">
                   <h4>Prefen Yadav</h4>
                   </div>
                           <div className="timeWrap">
     <h5 className='currentTime'>{time.getHours()}:{time.getMinutes()} Today</h5>
                           </div>          
                           </div>
                          </div>

                           <div className="messageTextWrappper">
                            <p>When I joined BKVM in as a teenager full of aspirations, In the begining, I was a little
                                confused about which career path to take but I did have an inclination towards biology, BKVM had 
                                an experienced team of biology teachers who guided me towards this pursuit. Furthermore, it was a big 
                                plus point to have the teching team of NAME from kathmandu who came to guide us closely
                                and prepare for the entrance examination in Biratnagar. I would like to recommend BKVM to every student who has big aspirations. Your ambitions are boundless and
                                BKVM will help you acheive each of them.</p>
                                <div className="postedBy">
                                    <h6 className='fontBig'>2nd Rank
                                        <br/>
                                        Medical Education Common Entrance Examination-UG 2023 (MBBS).
                                    </h6>
                                   <q>Prefen Yadav</q>
                                </div>
                           </div>
            </div>
            <div className="postOne">
            <div className="messageContentHeader">
                           <img src="\assets\studentTwo.png" className="smallProfileImage" />
               <div className="nameAndPost">
               <div className="postName">
                   <h4>Aditya Sharma</h4>
                   </div>
                           <div className="timeWrap">
                                      <h5 className='currentTime'>{time.getHours()}:{time.getMinutes()} Today</h5>
                           </div>          
                           </div>
                          </div>

                           <div className="messageTextWrappper">
                            <p>
                                Among numerous colleges in Biratnagar I chose BKVM to be a part of its glorious history.
                                I was eager to join BKVM since early classes but my dream came true only after I passed my SEE. BKVM teachers and visiting lectures of NAME brought remarkable change in my life 
                                helping me enroll in MBBS class standing 5th in its entrance examination I will be indebted to BKVM and its endeavours for my career ahead. 
                            </p>
                            <div className="postedBy">
                                <h6 className='fontBig'>5th Rank
                                    <br/>
                                    Medical Education Common Entrance Examination-UG 2023 (MBBS).
                                </h6>
                                   <q>Aditya Sharma</q>
                                </div>
                           </div>
            </div>
            <div className="postOne">
            <div className="messageContentHeader">
                           <img src="\assets\studentThree.png" className="smallProfileImage" />
               <div className="nameAndPost">
               <div className="postName">
                   <h4>Utsav Raj Shrestha</h4>
                   </div>
                           <div className="timeWrap">
                                      <h5 className='currentTime'>{time.getHours()}:{time.getMinutes()} Today</h5>
                           </div>          
                           </div>
                          </div>

                           <div className="messageTextWrappper">
                            <p>
                I got enrolled in B.K.V.M as a 4th grader. I was co-operated  by my teachers. As a 11th grader, I found its faculty members highly experienced and dedicated to their profession. I thank school management
                for providing Engineering preparation classes and my parents for choosing the best platform for quality education.

                            </p>
                            <div className="postedBy">
                         
                                   <q>Utsav Raj Shrestha</q><br />
                                   <h6>IOE, Pulchowk</h6>
                                </div>
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

export default Message