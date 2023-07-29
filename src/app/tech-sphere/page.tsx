"use client"
import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud"; 
import "../globals.css";
import { log } from "console";

const TextSphere: React.FC = () => { 
  const [r, setR]=useState(0)


  


 
  
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "Negotiation",
      "Fast learning",
      "Problem-solving",
      "Research skills",
      "Management",
      "SCRUM methadology",
      "Team player",
      "consistency",
      "commitment",
      
    ];






console.log(window.navigator.userAgent);

const options = {
  radius: window.navigator.userAgent.includes("Mobile") ? 150 : 250,
  maxSpeed: "fast",
  initSpeed: "normal",
  keep: true,
};

    TagCloud(container, texts, options);
  }, []);

  return (
    <div className="soft">
      <span  className="tagcloud" />
    </div>
  );
};

export default TextSphere;
