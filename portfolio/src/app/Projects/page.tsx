"use client"
import React from 'react';
import NavBar from '../navBar/page';
import Footer from '../Footer/page';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../../../utils/motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../globals.css';
import { projects } from '../../../constants';
import AnimatedTextWord from '../animatedText';
import BackG from '@/background/page';
import Image from 'next/image';

type card = {
 
  image: string;
  index: number;
};

function Cards({
  index=0 ,
  name = "",
  description = "",
  tags = [],
  image = "",
  source_code_link = "",
}) {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 15,
          scale: 1.02,
          speed: 300,
          perspective: 1000,
          transition: true,
        }}
        className="bg-tertiary p-5 rounded-xl sm:w-[480px] w-full bg-gray-500 rounded-lg"
      >
        <div className="relative w-full h-[230px] rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
            layout="fill"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <GitHubIcon style={{ fontSize: 30, color: "#fff", backgroundColor:"#000", borderRadius:"100%" }} />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-xl">{name}</h3>
          <p className="mt-2 text-secondary text-sm">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <p
              key={`${name}-${tag.name}-${idx}`}
              className={`text-sm ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

function Projects() {
 

  return (
    <div>
    
      <div>
      <BackG/>

        <NavBar />
      </div>
      <div className='AniText'>
      <AnimatedTextWord text={"Featured projects"}/>
      </div>
      <div className="center-container">
      <div className="container mx-auto px-4 sm:px-6 mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <Cards key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      </div>
      <div className='PFooter'>
      <Footer style="footer-styleP"/>
      </div>
    
    </div>
  );
}

export default Projects;

