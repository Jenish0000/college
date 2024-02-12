import React from 'react'
import './home.css'
import Contact from '../../components/contact/Contact';
import Header from '../../components/Header/Header';
import Frontpage from '../../components/frontpage/Frontpage'
import SecondPage from '../../components/secondpage/SecondPage';
import ThirdPage from '../../components/thirdpage/ThirdPage';
import FourthPage from '../../components/fourthpage/FourthPage';
import FifthPage from '../../components/fifthpage/FifthPage';
import Acheivements from '../../components/acheivements/Acheivements';
import Message from '../../components/message/Message';
import Members from '../../components/members/Members';
import FacultyMembers from '../../components/facultymembers/FacultyMembers';
import Curricular from '../../components/curricular/Curricular';
import ContactForm from '../../components/contactform/ContactForm';
import RightPhone from '../../components/rightphone/RightPhone';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/Footer/Footer';

// import {useLocation,useNavigate} from "react-router-dom"

const Home = () => {
  // const location=useLocation()
  return (
  <>
  <Contact/>
  <Header/>
  <Frontpage/>
  <SecondPage/>
  <ThirdPage/>
  <FourthPage/>
  <RightPhone/>
  <FifthPage/>
  <Acheivements/>
  <Message/>
  <Members/>
  <FacultyMembers/>
  <Curricular/>
  <Gallery/>
  <ContactForm/>
  <Footer/>
  </>
  )
}

export default Home