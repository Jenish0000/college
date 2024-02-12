import React from 'react'
import './registration.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Contact from '../contact/Contact'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom"
import WestIcon from '@mui/icons-material/West';
import RegistrationForm from '../registrationForm.jsx/RegistrationForm';
const Registration = () => {



  return (
 <>
<div className="bug">
<Contact/>
 <Header/>
</div>


<div className="wrappedBackBtnToHome">
<Link to="/">
        <div className="buttonTwo">
        <WestIcon className='backToHome'/>
           <span className='btnText'>Go Back</span>

           </div>
</Link>
</div>



<div className="overflowWrapped">
  


<div className="registrationformWrapper">
<div className="successMessagePopUp">
<div className="popUpIconWrapped">
<NotificationsIcon className='popUpIconNotify'/>
</div>
     <h3>Successfully registered your information</h3>
     <h4>We will contact you soon</h4>
</div>

          <div className="wrappedFirst">
          <div className="registrationForm">
                       <div className="greetRegistration">
                          <h2 className='greetTextRegistration'>Bal Kalyan Vidya Mandir</h2>
                          <h4 className='greetTextRegistration'>Biratnagar-11, Morang</h4>
                          <h2 className='greetTextRegistration'>Online Registration Form</h2>

                          <div className="registrationLogoWrapper">
                               <img src="\assets\l1.png" alt="registerLogo" className="registrationLogo" />
                          </div>
                       </div>




             <RegistrationForm/>



             </div>
          </div>


      </div>

</div>
      <Footer/>
 </>
  )
}

export default Registration