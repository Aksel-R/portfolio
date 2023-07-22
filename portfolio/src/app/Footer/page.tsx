import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import "../globals.css";
import { relative } from 'path';

export default function Footer({style=""}) {
  // Define an array of social media links with their URLs
  const socialMediaLinks = [
    { icon: <LinkedInIcon style={{ fontSize: 60 }} />, url: 'https://www.linkedin.com/in/yassin-rezgui-364960193/' },
    { icon: <GitHubIcon style={{ fontSize: 60 }} />, url: 'https://github.com/Aksel-R' },
    { icon: <FacebookIcon style={{ fontSize: 60 }} />, url: 'https://www.facebook.com/yassin.rezgui.714?mibextid=ZbWKwL' },
    { icon: <EmailIcon style={{ fontSize: 60 }} />, url: '/' }, 
  ];

  return (
    <div>
      <footer className={style}>
        <p style={{ color: "white", fontSize: "90"}}>© 2022 Aksel-R. This site is protected by divine laws</p>

        <nav>
          <div>
            {socialMediaLinks.map((item, index) => (
              <a key={index} href={item.url} target="_blank">
                {item.icon}
              </a>
            ))}
          </div>
        </nav>
      </footer>
    </div>
  );
}
