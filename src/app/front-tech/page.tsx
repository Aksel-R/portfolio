"use client"
import React from "react";

import BallCanvas from "../BallCanvas/page";
import '../globals.css';
import { layers} from "../../../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {layers.map((technology) => (
        
        <div className='w-28 h-28' key={technology.name}>
         
          <BallCanvas icon={technology.icon.src} />
          <p className="techNames" >{technology.name}</p> 
        </div>
      ))}
    </div>
  );
};

export default Tech