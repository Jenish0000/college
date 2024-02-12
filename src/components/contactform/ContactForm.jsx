import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './contactform.css'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const textAreaRef=useRef(null)
  const [val,setVal]=useState("")
  const handleChange=(e)=>{
    setVal(e.target.value)
  }

  useEffect(()=>{
    textAreaRef.current.style.height="auto"
textAreaRef.current.style.height=textAreaRef.current.scrollHeight+"px"
  },[val])






function submitionHandler(){
  const formName=document.querySelector("#formName")
  const formMessage=document.querySelector("#formMessage")
  const formEmail=document.querySelector("#formEmail")
const hiddenLabel=document.querySelector(".hiddenLabel")
const hiddenLabelForMessage=document.querySelector(".hiddenLabelForMessage")
let pattern=/^[a-zA-Z ]*$/;


if(formName.value==""||formName.value.length<=3){
hiddenLabel.innerHTML="This feild must be longer than 3 characters"
}
else if(!formName.value.match(pattern)){
hiddenLabel.innerHTML="Only Characters are allowed"
}
else if(formMessage.value.length<10){
  hiddenLabelForMessage.innerHTML="Message must be longer than 10 characters"
}
else if(formName.value.length>3 && formMessage.value.length>10){
  hiddenLabel.innerHTML=""
  hiddenLabelForMessage.innerHTML=""
 }
}

const form = useRef();

  const sendEmail = (e) => {



    
    e.preventDefault();

    emailjs
    .sendForm(
      'service_uuwj70d', 
      'template_49ocd1n', 
      form.current, 
      'Q0wHPOlHp7AriFAhX'
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload()
      },
       (error) => {
          console.log(error.text);
      });
  };















  return (
<>
<div className="parent" id='Contact'>
  
<div className="parentOfFormFlexed" data-aos="flip-up">
<div className="greetContactFormWrapper">
    <h2>Connect With Us...</h2>
</div>
<div className="formContainerWrapper">
    

    <form className='FormContainer' ref={form}  onSubmit={sendEmail}>
    <div className="nameInputWrapper">
    <label className='labelFor' for="inputForName">Name</label>
    <input   name="user_name"  id='formName' type='text' className='inputForName' placeholder='Enter Your Name' maxLength={30}></input>
     <label htmlFor="hiddenlabel" className="hiddenLabel"></label>
    </div>
        <div className="EmailWrapper">
        <label className='labelFor' for="inputForEmail">Email</label>
        <input required name="user_email" id='formEmail' maxLength={30} type='email' className='inputForEmail' placeholder='Enter Your Email'></input>
        <label htmlFor="hiddenlabel" className="hiddenLabel"></label>
        </div>
      <div className="messageWrapper">
      <label className='labelFor' for="textareaforMessages">Message</label>
      <textarea required name="message" id='formMessage' ref={textAreaRef} value={val} onChange={handleChange} rows="2" maxLength={300} type='text' className='textareaForMessage' placeholder='Enter Message'></textarea>
      <label htmlFor="hiddenlabel" className="hiddenLabelForMessage"></label>
      </div>

        <div className="SendmessagebuttonWrapper">
        <button className='sendmessageButton' onClick={()=>{submitionHandler()}}>Send
        <SendOutlinedIcon  className='contactFormSendIcon'/>
        </button>





        </div>
    </form>
    
    </div>
</div>
</div>
</>


  )
}

export default ContactForm