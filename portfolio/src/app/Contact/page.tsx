"use client"

import React, {useState, useRef } from 'react'
import NavBar from '../navBar/page';
import Footer from '../Footer/page';
import BackG from '@/background/page';
import emailjs from '@emailjs/browser';

function Contact() {
  // const [user_name,setName]=useState("")
  // const [user_email,setemail]=useState("")
  // const [user_message,setmessage]=useState("")

  // const forms ={
  //   user_name:user_name,
  //   user_email:user_email,
  //   user_message:user_message
  // }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sbu7eex', 'template_lopy8po', form.current, '203i3NXhdsi3v8XGQ')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
  };


  return (
    <div>
      <BackG/>
      <NavBar/>
      {/* <h1>please fill the following</h1> */}
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
      {/* <div className="block phone">
        <label htmlFor="frm-phone">Phone</label>
        <input
          id="frm-phone"
          type="text"
          name="phone"
          autoComplete="tel"
          required
          style={{ color: "black" }}
        />
      </div> */}
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
        {/* <div>
          <label htmlFor="frm-last">Last Name</label>
          <input
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            required
          />
        </div> */}
      </div>
      <div className="message block">
        <label htmlFor="frm-message">Message</label>
        <textarea id="frm-message" rows={6} name="message"  style={{ color: "black" }} ></textarea>
      </div>
      <div className="button block">
        <button type="submit" value="Send">Submit</button>
      </div>
    </form>
    <Footer/>
   </div>
  
    </div> 
  )
}

export default Contact