"use client"
import React from 'react';

import { usePathname } from 'next/navigation';

// Define NavLinkProps type
interface NavLinkProps {
  href: string;
  title: string;
  className?: string;
}

// NavLink component
const NavLink: React.FC<NavLinkProps> = ({ href, title, className }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <a className={`relative group ${className}`} href={href}>
      <span
        className={`h-[1px] inline-block bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-width ease duration-300 ${
          isActive ? 'w-full' : 'w-0'
        }`}
      />
      {title}
    </a>
  );
};


function SideNav(){
  return (
    <div>

    <div className='flex flex-col sideN'>
        <div className='pb-4'>
         <NavLink href="/" title="Home" className="my-4" />
         </div>
         <div className='pb-4'>
         <NavLink href="/about" title="About" className="my-4" />
         </div>
         <div className='pb-4'>
         <NavLink href="/projects" title="Projects" className="my-4" />
         </div>
         <div className='pb-4'>
         <NavLink href="/articles" title="Articles" className="my-4" />
         </div>
         <div className='pb-4'>
         <NavLink href="/contact" title="Contact" className="my-4" />
         </div>
         

    </div>
    </div>
  );
};

export default SideNav;
