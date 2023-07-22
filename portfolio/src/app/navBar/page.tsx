"use client"
import '../globals.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { BrowserView, MobileView } from 'react-device-detect';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
interface NavLinkProps {
  href: string;
  title: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, className }) => {
  const pathname = usePathname();
  return (
    <a className={`${className} relative group`} href={href}>
      <span className={`h-[1px] inline-block  bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-width ease duration-300 ${pathname===href ? "w-full" : "w-0"}`}>&nbsp;</span>
      {title}
    </a>
  );
};

export default function NavBar() {

  return (
    <header className="bg-dark w-full px-32 py-8 flex items-center justify-between">
      <nav>
        <NavLink href="/" title="Home" className="mx-4" />
        <NavLink href="/about" title="About" className="mx-4" />
        <NavLink href="/Projects" title="Projects" className="mx-4" />
        <NavLink href="/Articles" title="Articles" className="mx-4" />
      </nav>
      <div className="absolute left-[50%] top-5 transform -translate-x-1/2">
        <Image src={require("../../../public/1688400073569.png")} alt="Description of the image" width={
          80} height={
          80} />
      </div>
      <nav>
   <div className="justify-between">
        <a  href="https://www.linkedin.com/in/yassin-rezgui-364960193/" target="_blank"> <LinkedInIcon style={{ fontSize: 60 }}/></a>
        <a href="https://github.com/Aksel-R" target="_blank"><GitHubIcon style={{ fontSize: 60 }}/></a>
        <a href="https://www.facebook.com/yassin.rezgui.714?mibextid=ZbWKwL" target="_blank"><FacebookIcon style={{ fontSize: 60 }}/></a>
        <a href="/" target="_blank"><EmailIcon style={{ fontSize: 60 }}/></a>
        </div>
      </nav>
    </header>
  );
}
