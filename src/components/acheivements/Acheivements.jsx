import React from 'react'
import './acheivements.css'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import CloseIcon from '@mui/icons-material/Close';
const Acheivements = () => {
   useEffect(()=>{
      Aos.init({duration:1000});
    },[])




    function showpastAcheivementHandler(){
      var pastAchivementsContainer=document.querySelector(".pastAchivementsContainer")
     document.body.style.overflow="hidden"
      pastAchivementsContainer.classList.add("pastAchivementsContainerShown")
    }
    function hidepastAchivementsHandler(){
      var pastAchivementsContainer=document.querySelector(".pastAchivementsContainer")
      document.body.style.overflow="auto"
       pastAchivementsContainer.classList.remove("pastAchivementsContainerShown")
    }
  return (
<>


<div className="pastAchivementsContainer">
   <div className="pastAcheivementWrapper">
     <div className="acheivementHeadingWrapperRight" data-aos="zoom-out-left">
       <div className="acheivementlHeadingPast">
    <h2>OUR ACHEIVEMENTS</h2>
     <h1>IN 2077/78</h1>
       </div>

     </div>
     
<div className="closeButtonWrapper" onClick={()=>{hidepastAchivementsHandler()}}>
    <CloseIcon className='pastAcheivementCloseIcon'/>
</div>


     <div className="acheivementHeadingWrapperCenter" data-aos="flip-up">
       <div className="acheivementlHeadingCenter">
         <div className="leftsharpEdge"></div>
    <h2>Class XII Board Exam-2077 Toppers</h2>
    <div className="rightsharpEdge"></div>
       </div>
     </div>
     
     <div className="startingAchivement">
                   <div className="acheivementOneWrapper" 
      data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                           <div className="acheivementimageWrapper">
                              <img src="\assets\studentOne.png" className="acheivementImage" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiver">Aditya Sharma</h4>
                            <h4 className="topperIn">Science Topper</h4>
                            <h4 className="adress">Koshi Province</h4>
                           </div>
                   </div>
                   <div className="acheivementOneWrapper" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                           <div className="acheivementimageWrapper">
                              <img src="\assets\studentTwo.png" className="acheivementImage" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiver">Aayam Kattel</h4>
                            <h4 className="topperIn">Science Topper</h4>
                            <h4 className="adress">Koshi Province</h4>
                           </div>
                   </div>
                   <div className="acheivementOneWrapper" 
                   data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                           <div className="acheivementimageWrapper">
                              <img src="\assets\studentThree.png" className="acheivementImage" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiver">Sujan Niroula</h4>
                            <h4 className="topperIn">Science Topper</h4>
                            <h4 className="adress">Koshi Province</h4>
                           </div>
                   </div>
     </div>  

     <div className="flexedRight">
   
   <div className="acheivementlHeadingforBoxpastAcheivement" data-aos="flip-up">

       <h2 className='leftfacultytopperHead'>MBBS</h2>

       <h4 className='smallleftfacultytopperHeading'>IOM Full Scholarship</h4>
          </div>
   
   <div className="rightAchivement">
   
                      <div className="acheivementOneWrapperSmall"
                       data-aos="flip-left"
                       data-aos-easing="ease-out-cubic"
                       data-aos-duration="2000">
                              <div className="acheivementimageWrapperSmall">
                                 <img src="\assets\studentOne.png" className="acheivementImageSmall" />
                              </div>
                              <div className="infoAboutAcheivement">
                               <h4 className="nameofAcheiverSmall">Aditya Sharma</h4>
                               <h5 className="topperInSmall">Science Topper</h5>
                               <h5 className="adressSmall">Koshi Province</h5>
                              </div>
                      </div>
                      <div className="acheivementOneWrapperSmall"
                       data-aos="flip-right"
                       data-aos-easing="ease-out-cubic"
                       data-aos-duration="2000">
                              <div className="acheivementimageWrapperSmall">
                                 <img src="\assets\studentTwo.png" className="acheivementImageSmall" />
                              </div>
                              <div className="infoAboutAcheivement">
                               <h4 className="nameofAcheiverSmall">Aayam Kattel</h4>
                               <h5 className="topperInSmall">Science Topper</h5>
                               <h5 className="adressSmall">Koshi Province</h5>
                              </div>
                      </div>
                      <div className="acheivementOneWrapperSmall"
                       data-aos="flip-left"
                       data-aos-easing="ease-out-cubic"
                       data-aos-duration="2000">
                              <div className="acheivementimageWrapperSmall">
                                 <img src="\assets\studentThree.png" className="acheivementImageSmall" />
                              </div>
                              <div className="infoAboutAcheivement">
                               <h4 className="nameofAcheiverSmall">Sujan Niroula</h4>
                               <h5 className="topperInSmall">Science Topper</h5>
                               <h5 className="adressSmall">Koshi Province</h5>
                              </div>
                      </div>

   </div>

   <div className="singleAcheivement">
   <div className="acheivementOneWrapperSmall"
                       data-aos="flip-left"
                       data-aos-easing="ease-out-cubic"
                       data-aos-duration="2000">
                              <div className="acheivementimageWrapperSmall">
                                 <img src="\assets\studentOne.png" className="acheivementImageSmall" />
                              </div>
                              <div className="infoAboutAcheivement">
                               <h4 className="nameofAcheiverSmall">Aditya Sharma</h4>
                               <h5 className="topperInSmall">Science Topper</h5>
                               <h5 className="adressSmall">Koshi Province</h5>
                              </div>
                      </div>
   </div>
   <div className="flexed">
<div className="acheivementlHeadingforBox" data-aos="flip-up">
         <div className="leftsharpEdge"></div>
    <h2 className='leftfacultytopperHead'>ENGINEERING</h2>
    <div className="rightsharpEdge"></div>
    <h4 className='smallleftfacultytopperHeading'>IOE Full Scholarship</h4>
       </div>

<div className="leftAchivement">
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentOne.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Aditya Sharma</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                   >
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentTwo.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Aayam Kattel</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentThree.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Sujan Niroula</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall" 
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentOne.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Aditya Sharma</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentTwo.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Aayam Kattel</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentThree.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Sujan Niroula</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
               </div>
               <div className="acheivementOneWrapperSmallLast">
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentThree.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Sujan Niroula</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   </div>
</div>

  </div>


   </div>
</div>




<div className="ourAcheivementsContainer">
   
<div className="acheivementHeadingWrapperRight" data-aos="zoom-out-left">
       <div className="acheivementlHeading">
    <h2>OUR ACHEIVEMENTS</h2>
     <h1>IN 2078/79</h1>
       </div>
<br/>
       <div className="pastAcheivementsWrapper">
           <div className="pastDivert" onClick={()=>showpastAcheivementHandler()}>See last year's acheivements</div>
       </div>
</div>

<div className="acheivementHeadingWrapperCenter" data-aos="flip-up">
       <div className="acheivementlHeadingCenter">
         <div className="leftsharpEdge"></div>
    <h2>Class XII Board Exam-2078 Toppers</h2>
    <div className="rightsharpEdge"></div>
       </div>
</div>

<div className="acheivementContainer">
          <div className="acheivementContent">
             <div className="startingAchivement">
                   <div className="acheivementOneWrapper" 
      data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                           <div className="acheivementimageWrapper">
                              <img src="\assets\studentOne.png" className="acheivementImage" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiver">Aditya Sharma</h4>
                            <h4 className="topperIn">Science Topper</h4>
                            <h4 className="adress">Koshi Province</h4>
                           </div>
                   </div>
                   <div className="acheivementOneWrapper" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                           <div className="acheivementimageWrapper">
                              <img src="\assets\studentTwo.png" className="acheivementImage" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiver">Aayam Kattel</h4>
                            <h4 className="topperIn">Science Topper</h4>
                            <h4 className="adress">Koshi Province</h4>
                           </div>
                   </div>
                   <div className="acheivementOneWrapper" 
                   data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                           <div className="acheivementimageWrapper">
                              <img src="\assets\studentThree.png" className="acheivementImage" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiver">Sujan Niroula</h4>
                            <h4 className="topperIn">Science Topper</h4>
                            <h4 className="adress">Koshi Province</h4>
                           </div>
                   </div>
                </div>  






      <div className="leftAcheivementWrapper">

     <div className="leftAcheivementContent">
    <div className="wrapStartingLeft">
        
    <div className="startingTextForLeftAcheivementContent" data-aos="flip-up">
            <div className="outlined">
            </div>
           <p>
           Our students secure top position in
           MBBS, ENGINEERING, CHATERED ACCOUNTANT and Other Diverse Professions.
           </p>   
         </div>
    </div>

   <div className="leftfacultyToppersContent">





<div className="flexedWrapper">
   

   <div className="flexed">
<div className="acheivementlHeadingforBox" data-aos="flip-up">
         <div className="leftsharpEdge"></div>
    <h2 className='leftfacultytopperHead'>ENGINEERING</h2>
    <div className="rightsharpEdge"></div>
    <h4 className='smallleftfacultytopperHead'>IOE Full Scholarship</h4>
       </div>

<div className="leftAchivement">
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentOne.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Aditya Sharma</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                   >
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentTwo.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Aayam Kattel</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentThree.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Sujan Niroula</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall" 
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentOne.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Aditya Sharma</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentTwo.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Aayam Kattel</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentThree.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Sujan Niroula</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   
</div>  
</div>

<div className="flexedRight">
   
<div className="acheivementlHeadingforBox" data-aos="flip-up">
         <div className="leftsharpEdge"></div>
    <h2 className='leftfacultytopperHead'>MBBS</h2>
    <div className="rightsharpEdge"></div>
    <h4 className='smallleftfacultytopperHead'>IOM Full Scholarship</h4>
       </div>

<div className="rightAchivement">

                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentOne.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Aditya Sharma</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentTwo.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Aayam Kattel</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentThree.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Sujan Niroula</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                   <div className="acheivementimageWrapperSmall"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                              <img src="\assets\studentOne.png" className="acheivementImageSmall" />
                   </div>
                   <div className="infoAboutAcheivement"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                            <h4 className="nameofAcheiverSmall">Aditya Sharma</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                   </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentTwo.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Aayam Kattel</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentThree.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Sujan Niroula</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentOne.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Aditya Sharma</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentTwo.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Aayam Kattel</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
                   <div className="acheivementOneWrapperSmall"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentThree.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Sujan Niroula</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
                   </div>
</div>  

</div>






</div>




             
<div className="leftoversContentWrapper">
      <div className="leftoverContent">
      <div className="wrapStartingLeft" data-aos="flip-up">
        
        <div className="startingTextForLeftAcheivementContent">
                <div className="outlined">
                </div>
               <p>
               IOE or The Institute of Engineering entrance examination conducted by the Tribhuvan University, 
                  Institute of Engineering (IOE) 2023.
               </p>   
             </div>
        </div>
        <div className="wrapStartingLeft" data-aos="flip-up">
        
        <div className="startingTextForLeftAcheivementContent">
                <div className="outlined">
                </div>
               <p>
               Medical Education Common Entrance Examination-UG (MBBS) 2023.
               </p>   
             </div>
        </div>


        
            <div className="acheivementOneWrapperSmall" data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                           <div className="acheivementimageWrapperSmall">
                              <img src="\assets\studentOne.png" className="acheivementImageSmall" />
                           </div>
                           <div className="infoAboutAcheivement">
                            <h4 className="nameofAcheiverSmall">Aditya Sharma</h4>
                            <h5 className="topperInSmall">Science Topper</h5>
                            <h5 className="adressSmall">Koshi Province</h5>
                           </div>
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

export default Acheivements