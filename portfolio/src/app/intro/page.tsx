"use client"
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import '../globals.css';
import NavBar from '../navBar/page';
import { useRouter } from 'next/navigation'
import Footer from "../Footer/page";
export default function Intro() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/about');
  };

  return (

    <div >
    <div  className="backgroundImage">
          <NavBar/>

    <div className='intro' >
    
        <div className='typewriter'>
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
      <div className='button-container' >
  <div className="btn btn-two ">
    <span>My resume</span>
  </div>

<div className="box-2">
  <div className="btn btn-two">
    <span>Hire me !</span>
  </div>
  </div>
</div>
    </div>
  
    </div>
  );
}
