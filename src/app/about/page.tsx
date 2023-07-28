"use client";
import React, { useCallback } from "react";

import NavBar from "../navBar/page";
// import Tech from "../front-tech/page";
import Cards from "../cards/page";
import { frontend, backEnd, databases, tools } from "../../../constants";
import "../globals.css";
import Experiences from "../experiences/page";
import TextSphere from "../tech-sphere/page";
import Footer from "../Footer/page";
import BackG from "@/background/page";

export default function About() {
  return (
    <div>
      <div className="backgroundImage2">
        <BackG />
        <div className="navAbout">
          <NavBar />
        </div>
        <div className="aboutTDiv">
          <h1 className="title">Make it work, Make it right, Make it fast!</h1>

          <p className="bio ">
            Hi, I'm a Full Stack JavaScript Developer who specializes in
            building dynamic and responsive web applications. With a passion for
            coding and problem-solving, I graduated with honors from RebootKamp
            (RBK), a renowned coding bootcamp. I worked on various projects on
            various platforms from concept to completion. My expertise lies in
            developing robust and scalable web applications using cutting-edge
            technologies. I'm proficient in a range of programming languages
            including JavaScript, HTML, CSS, and have a deep understanding of
            modern frameworks and libraries such as React.js and Node.js and
            many more. I'm skilled in database management, utilizing
            technologies like MongoDB and MySQL to ensure efficient data storage
            and retrieval. In addition to my technical skills, I'm a
            collaborative team player, known for my effective communication and
            adaptability in fast-paced environments. I thrive on working in
            cross-functional teams, bringing together diverse perspectives to
            achieve outstanding results. My portfolio showcases a selection of
            my notable projects, highlighting my proficiency in front-end and
            back-end development. From crafting intuitive user interfaces to
            implementing complex functionality, I consistently deliver
            high-quality solutions that exceed client expectations. Passionate,
            driven, and dedicated, I'm poised to make a significant impact in
            the world of web development. Whether it's building scalable
            applications, optimizing performance, or solving intricate coding
            challenges, I'm committed to delivering excellence in every project
            I undertake.
          </p>
        </div>
        <div className="aboutDiv1 mt-20">
          <h1 className="info">3000+</h1>
          <h1 className="infoDis">Hours of coding</h1>
        </div>
        <div className="aboutDiv2 mt-20 ">
          <h1 id="ten" className="info">
            10+
          </h1>
          <h1 className="infoDis">multi-platform projects</h1>
        </div>

        <div className="skills ">
          <h1>SKILLS</h1>
        </div>

        <div className="sphereDiv">
          <div className="sphere">
            {/* <div className="frontDiv">
              <Tech />
            </div> */}

            <div id="frontDiv">
              <h1 id="front">Front-End</h1>
            </div>

            <div id="techGrades" className="mt-20 grid grid-cols-3 gap-10">
              {frontend.map((tech, index) => (
                <div key={tech.name}>
                  <Cards index={index} name={tech.name} icon={tech.icon} />
                </div>
              ))}
            </div>

            <div className="mt-20" id="backDiv">
              <h1 id="front">Back-End</h1>
              <div id="techGrades2" className="mt-20 grid grid-cols-3 gap-10">
                {backEnd.map((tech, index) => (
                  <div key={tech.name}>
                    <Cards index={index} name={tech.name} icon={tech.icon} />
                  </div>
                ))}
              </div>
            </div>
            <div className="bases mt-20">
              <h1>DataBases</h1>
            </div>
            <div className="mt-20 grid grid-cols-3 gap-10">
              {databases.map((tech, index) => (
                <div key={tech.name}>
                  <Cards index={index} {...tech} />
                </div>
              ))}
            </div>

            <div className="Mtools mt-20">
              <h1>Management tools</h1>
            </div>
            <div className="mt-20 grid grid-cols-3 gap-10">
              {tools.map((tech, index) => (
                <div key={tech.name}>
                  <Cards index={index} {...tech} />
                </div>
              ))}
            </div>
            <div id="soft" className="education mt-20">
              {" "}
              <h1>Soft Skills</h1>
            </div>
            <div className="spheres mt-20  mb-20 ">
              <TextSphere />
            </div>
            <div className="education ">
              <h1>Education & Experiences</h1>
            </div>
            <div>
              <Experiences />
            </div>
            <div className=" firstB">
              <div className="btn btn-two">
                <a href="/Projects">
                  {" "}
                  <span style={{ fontSize: "20px" }}>
                    Check out my projects
                  </span>
                </a>
              </div>
            </div>
            <div className="box-2">
              <div className="btn btn-two">
                <a href="/Contact" target="_blank">
                  <span style={{ fontSize: "20px" }}>Hire me !</span>
                </a>
              </div>
            </div>
            <div>
              <Footer style="footer-style" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
