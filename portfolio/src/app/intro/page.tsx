"use client"
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import '../globals.css';

export default function Intro() {
 

  return (
    <div className="backgroundImage">
    <div className="introContainer">
    
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
    </div>
  );
}
