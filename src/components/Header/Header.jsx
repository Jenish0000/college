import React, { useState } from 'react'
import './header.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom"
 const Header=()=>{
  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener('resize', function(event){
    setWidth(window.innerWidth)
  })
window.addEventListener('scroll',function(){
  var headerWrapper=document.querySelector('.headerWrapper')
  headerWrapper.classList.toggle("stickyHeader",window.scrollY>0)

  var iconsWrapper=document.querySelector('.iconsWrapper')
  iconsWrapper.classList.toggle("stickyIcons",window.scrollY>0)
})



 const [openNavbar,setOpenNavbar]=useState(false)
 
const handleClick=()=>{
  setOpenNavbar(!openNavbar)
  if(openNavbar==true){
    document.body.style.overflow="auto"
  }
  else{
    document.body.style.overflow="hidden"
  }
}





  return (
    <>
<div className="headerWrapper">

<div className="headerContainer">



    <div className="leftInformation">
   <img src="./assets/l1.png" alt="" className='headerlogo'/>
   </div>


<div className="flexedHeader">
  
<div className="middleInformation">

<div className={openNavbar===false?"hrefsWrapper":"showhrefsWrapper"}>


   
         <div className="links">
        <a href="#FrontPage" className='href'>Home</a>
          <a href="#SecondPage" className='href'>About</a>
         <a href="#FifthPage" className='href'>Faculties</a>
         <a href="#Gallery" className='href'>Gallery</a>
         <a href="#Contact" className='href'>Contact</a>
         </div>

      </div>   
    </div>



   <div className="rightInformation">
     <div className="infoWrapper">
                

        <Link to="/registration">
        <div className="button">
           <span className='btnText'>Register Now</span>
            <ArrowRightAltIcon/>
           </div>
        </Link>
    
     </div>
    </div>

    
</div>
<div className="wrap">
  
<div className="iconsWrapper">
    
    <div className={openNavbar===false?"barsIconWrapper":"hideBarsIconWrapper"} onClick={()=>{handleClick()}}>
    <MenuIcon style={{ fontSize: '35px',marginRight:'1rem'}} className='barsIcon'/>
    </div>
    
    <div className={openNavbar===false?"closeIconWrapper":"showcloseIconWrapper"} onClick={()=>{handleClick()}}>
    <CloseIcon style={{ fontSize: '35px',marginRight:'1rem'}}  className='closeIcon'/>
    </div>
    
    </div>
    
</div>

</div>

</div>



    </>
  )
}

export default Header