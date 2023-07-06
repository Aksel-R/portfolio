"use client"
import React from "react";
import NavBar from "../navBar/page";
import '../globals.css';
import Image from "next/image";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";
import particlesConfig from "../../../particles-config"
import TextShpere from "../tech-sphere/page";
export default function About(){
    
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
    
      
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (

        <div className="backgroundImage2" >
         
       <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
    />
           <NavBar/>
        
        <h1 className="title" >Make it work, make it right, make it fast !</h1>

        <p className="bio" >Hi, I'm a Full Stack JavaScript Developer who specializes in building dynamic and responsive web applications. With a passion for coding and problem-solving, I graduated with honors from RebootKamp (RBK), a renowned coding bootcamp.

 I worked on various projects on various platforms from concept to completion. My expertise lies in developing robust and scalable web applications using cutting-edge technologies.

I'm proficient in a range of programming languages including JavaScript, HTML, CSS, and has a deep understanding of modern frameworks and libraries such as React.js and Node.js and many more. I'm skilled in database management, utilizing technologies like MongoDB and MySQL to ensure efficient data storage and retrieval.





In addition to my technical skills, I'm a collaborative team player, known for my effective communication and adaptability in fast-paced environments. I thrives on working in cross-functional teams, bringing together diverse perspectives to achieve outstanding results.

My portfolio showcases a selection of my notable projects, highlighting my proficiency in front-end and back-end development. From crafting intuitive user interfaces to implementing complex functionality, I consistently delivers high-quality solutions that exceed client expectations.

Passionate, driven, and dedicated, I'm poised to make a significant impact in the world of web development. Whether it's building scalable applications, optimizing performance, or solving intricate coding challenges, I'm committed to delivering excellence in every project he undertakes.</p>

<div className="aboutDiv1">
<h1 className="info">3000+ </h1>
<h1 className="infoDis">Hours of coding</h1>
</div>
<div className="aboutDiv2">
<h1 id="ten" className="info">10+</h1>
<h1  className="infoDis">multi-platform projects</h1>
</div>

<div className="skills">
    <h1>SKILLS</h1>
</div>
<div className="sphereDiv">
<div className="sphere">
    <TextShpere/>
</div>
</div>
        </div>
        
    )

}