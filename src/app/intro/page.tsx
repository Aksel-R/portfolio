"use client"
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import '../globals.css';
import NavBar from '../navBar/page';
import { useRouter } from 'next/navigation'
import Footer from "../Footer/page";
import BackG from '@/background/page';
import resume from "../../../public/resume/resume.pdf"

export default function Intro() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/about');
  };

  return (

    <div className='body' >
    <div  className="backgroundImage2 body">
      <BackG/>
          <NavBar/>

    <div className='intro ' >
    
        <div className='typewriter body'>
      <Typewriter
  options={{
    strings: ["Welcome, I'm Yassin a FullStack developer", "Bienvenue, je suis Yassin un développeur Full Stack", "ようこそ、私はフルスタック開発者のヤシンです", " مرحبًا ، أنا ياسين مطور متكامل ", "Willkommen, ich bin Yassin, ein Full-Stack-Entwickler"],
    autoStart: true,
    loop: true,
  }}
/></div>
        <Image
          className="profile"
          style={{ borderRadius: "50px" }}
          width={250}
          height={250}
          src="/retouch_1688430472397.JPEG"
          alt="Profile Image"
        />
      </div>
      <div className='introB '>
      <div className='button-container2' >
  <div className="btn btn-two ">
    <a
     href={resume}
     download="Yassin's resume"
     target="_blank"
     rel="none"
    >
    <span>My resume</span>
    </a>
  </div>

<div className="box-3">
  <div className="btn btn-two">
   <a href="/about"> <span style={{fontSize:"30px"}}>About me !</span></a>
  </div>
  </div>
  </div>
</div>
    </div>
    <div className='introFooter '>
    <Footer/>
    </div>

    </div>
  );
}
