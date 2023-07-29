"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "../globals.css";


function Item({year=""}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <div className="item" ref={ref}>
      <figure className="progress">
        <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollYProgress }}
          />
        </svg><div id="years">{year}</div>
      </figure>
    </div>
  );
}

function Details() {
  return (
    <>
    <div className="mt-20">
   
     <h1 id="institut"> Hannibal high school Ariana </h1>
     <Item  year={"2020"} /> 
     <p id="des" >Obtained Baccalaureate degree in science of technology </p>
     </div>
     <div className="mt-20">
     <h1  id="institut"> Superior institute of technology ISET </h1>
     <Item  year={"2021"}  /> 
     <p id="des"> Studied electical engineering </p>
     </div>
     <div className="mt-20">
     <h1  id="institut"> Concentrix Corporation</h1>
     <Item   year={"2022"} /> 
     <p id="des">Worked as a quality analyst</p>
     </div>
     <div className="mt-20">
     <h1  id="institut"> RebootKamp (RBK)  </h1>
     <Item   year={"2023"} /> 
     <p id="des">Obtained the certificate of a Full-Stack JavaScript developer</p>
     </div>
    </>
  );
}

function Experiences() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <>
    <div>
      <motion.div className="progressbar" style={{ scaleX:scrollYProgress }} />

      <div ref={ref}>
       
      

        <Details />
      </div>
      </div>
    </>
  );
}

export default Experiences;
