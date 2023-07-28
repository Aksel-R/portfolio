"use client"

import React, {useState, useRef } from 'react'
import NavBar from '../navBar/page';
import Footer from '../Footer/page';
import BackG from '@/background/page';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';

function Loader(){
  return(
    <div className="frame">
  
  
 
  <div className="center"></div>
  <div className="inner"></div>
  <div className="middle"></div>
  <div className="outer"></div>
  
 
  <div className="loader" id="inner"></div>
  <div className="loader" id="middle"></div>
  <div className="loader" id="outer"></div>
  <div className="text">Loading... </div>
  </div>
  

  )
}

function Contact() {
  const [submitted, setStatus]=useState(false)
  const [success, setsucc]=useState(false)
  const [error, seterr]=useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(true)
    emailjs.sendForm('service_sbu7eex', 'template_lopy8po', form.current, '203i3NXhdsi3v8XGQ')
      .then((result) => {
        setStatus(false)
        setsucc(true)
          console.log(result)
         
      }, (error) => {
          console.log(error);
          setStatus(false)
          seterr(true)
      });
  };


  return (
    <div>
      {submitted?null:( <div> <BackG/>
      <NavBar/>
     
      <div className="flex max-w-md flex-col gap-4">
      <div>
        
   </div> 
 
    </div>
   
   <div className='generalInputDiv'>
   <form ref={form} onSubmit={sendEmail} className="container">
      <h1>Get in touch</h1>
      <div className="email block">
        <label htmlFor="frm-email">Email</label>
        <input
          id="frm-email"
          type="email"
          name="user_email"
          autoComplete="email"
          required
          style={{ color: "black" }}
          
        />
      </div>
  
      <div className="name block">
        <div>
          <label htmlFor="frm-first">Full Name</label>
          <input
            id="frm-first"
            type="text"
           
            autoComplete="given-name"
            required
            style={{ color: "black" }}
            name="user_name"
          />
        </div>
   
      </div>
      <div className="message block">
        <label htmlFor="frm-message">Message</label>
        <textarea id="frm-message" rows={6} name="message"  style={{ color: "black" }} ></textarea>
      </div>
      <div className="button block">
        <button type="submit" value="Send">Submit</button>
      </div>
      {error?<Alert severity="error">Apologies an error has occurred</Alert>:null}
      {success?<Alert severity="success">Message delivered</Alert>:null}
    </form>

    <div className='Cfooter'>
    
    {submitted? null:<div className='contactF'> <Footer/> </div> }
    </div>

   </div> 
   </div> )}
  {submitted? <Loader/>:null}
    </div> 
  )
}

export default Contact