"use client"
import React, { useCallback } from "react";
import Particles, { Container, Engine } from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../../../particles-config";
import NavBar from "../navBar/page";
import Tech from "../front-tech/page";
import Cards from "../cards/page";
import { frontend, backEnd, databases, tools } from "../../../constants";
import '../globals.css';

export default function About() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <div>
      <div className="backgroundImage2">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        />
        <NavBar />
        <h1 className="title">Make it work, make it right, make it fast!</h1>

        <p className="bio">
          Hi, I'm a Full Stack JavaScript Developer who specializes in building dynamic and responsive web applications. With a
          passion for coding and problem-solving, I graduated with honors from RebootKamp (RBK), a renowned coding bootcamp.
          I worked on various projects on various platforms from concept to completion. My expertise lies in developing robust
          and scalable web applications using cutting-edge technologies.
          I'm proficient in a range of programming languages including JavaScript, HTML, CSS, and have a deep understanding of
          modern frameworks and libraries such as React.js and Node.js and many more. I'm skilled in database management, utilizing
          technologies like MongoDB and MySQL to ensure efficient data storage and retrieval.

          In addition to my technical skills, I'm a collaborative team player, known for my effective communication and adaptability
          in fast-paced environments. I thrive on working in cross-functional teams, bringing together diverse perspectives to achieve
          outstanding results.

          My portfolio showcases a selection of my notable projects, highlighting my proficiency in front-end and back-end development.
          From crafting intuitive user interfaces to implementing complex functionality, I consistently deliver high-quality solutions
          that exceed client expectations.

          Passionate, driven, and dedicated, I'm poised to make a significant impact in the world of web development. Whether it's
          building scalable applications, optimizing performance, or solving intricate coding challenges, I'm committed to delivering
          excellence in every project I undertake.
        </p>

        <div className="aboutDiv1">
          <h1 className="info">3000+</h1>
          <h1 className="infoDis">Hours of coding</h1>
        </div>
        <div className="aboutDiv2">
          <h1 id="ten" className="info">10+</h1>
          <h1 className="infoDis">multi-platform projects</h1>
        </div>

        <div className="skills">
          <h1>SKILLS</h1>
        </div>

        <div className="sphereDiv">
          <div className="sphere">
            <div className="frontDiv">
              <Tech />
            </div>

            <div id="frontDiv">
              <h1 id="front">Front-End</h1>
            </div>

            <div id="techGrades" className="mt-20 grid grid-cols-4 gap-20">
              {frontend.map((tech, index) => (
                <div key={tech.name}>
                  <Cards index={index} {...tech} />
                </div>
              ))}
            </div>

            <div id="backDiv">
              <h1 id="front">Back-End</h1>
              <div id="techGrades2" className="mt-20 grid grid-cols-4 gap-20">
                {backEnd.map((tech, index) => (
                  <div key={tech.name}>
                    <Cards index={index} {...tech} />
                  </div>
                ))}
              </div>
            </div>
            <div className="bases">
              <h1>DataBases</h1>
             
            </div>
            <div className='databasesIcons'>
              {databases.map((tech, index) => (
                  <div key={tech.name}>
                    <Cards index={index} {...tech} />
                  </div>
                ))}
              </div>

              <div className="Mtools" >
                <h1>Management tools</h1>
              </div>
              <div className="toolsIcons" >
              {tools.map((tech, index) => (
                  <div key={tech.name}>
                    <Cards index={index} {...tech} />
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
