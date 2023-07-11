import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


//!\\ you need to add clickable links for each technologie
const Skill = ({ url="", x="", y="", width=60 ,height=60}) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 5 }}
    >
      <Image
        style={{ borderRadius: "50px" }}
        width={width}
        height={height}
        src={url}
        alt="Profile Image"
      />
     
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
      {/* <motion.div
        className="flex items-center justify-center rounded-full cursor-pointer"
        whileHover={{ scale: 1.05 }}
      
      >
        <Image
          style={{ borderRadius: "0px" }}
          width={60}
          height={60}
          src="/yuxa9EAfarIcX9EK8Ei1JSjwRnP7e0-metaanMtdHMuanBn-.jpg"
          alt="Profile Image"
        />
      </motion.div> */}
      <Skill
        url="/070f2aba-d9d6-4699-b887-9a0f29015b1b.png"
        x="3.5vw"
        y="-10vw"
      />
       <Skill
        url="/1631026680-logo-react-native.png"
        x="10vw"
        y="21.2vw"
        width="90"
      />
       <Skill
        url="/download (1).png"
        x="15vw"
        y="-6vw"
        width="60"
      />
        <Skill
        url="/Rlogical-Blog-Images-thumbnail.webp"
        x="-5vw"
        y="-20vw"
        width="60"
      />
        <Skill
        url="/CSS3_logo.svg.png"
        x="-5vw"
        y="4vw"
        width="60"
      />
       <Skill
        url="/yuxa9EAfarIcX9EK8Ei1JSjwRnP7e0-metaanMtdHMuanBn-.jpg"
        x="-1vw"
        y="0vw"
        width="60"
      />
      <Skill
        url="/Vue.js_Logo_2.svg.png"
        x="28.3vw"
        y="-0vw"
        width="60"
      />
       <Skill
        url="/png-transparent-jquery-hd-logo.png"
        x="11.5vw"
        y="-5vw"
        width="60"
      />
      <Skill
        url="/Bootstrap_logo.svg.png"
        x="5vw"
        y="-17.7vw"
        width="60"
      />
       <Skill
        url="/1_gvlV5stc45hkSpxD9cCC-g.png"
        x="-49.7vw"
        y="0vw"
        width="60"
      />
      <Skill
        url="/6447779-middle.png"
        x="5vw"
        y="13vw"
        width="60"
      />
    </div>
  );
}
