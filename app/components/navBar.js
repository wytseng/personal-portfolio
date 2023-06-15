import { useAtom }from "jotai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi"
// import { useState } from 'react';
import { useEffect, useRef } from "react";
import Image from "next/image";
import { mobileMenu } from "../page";
import avatar from "../../public/avatar.png";


const NavBar = ({scrollToSection, services, darkMode, setDarkMode}) => {
  // const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useAtom(mobileMenu);
  const catMenu = useRef(null);

  const closeOpenMenu = (e)=>{
    if(catMenu.current && menuOpen && !catMenu.current.contains(e.target)){
      setMenuOpen(false)
    };
  }

  useEffect(() => {
    document.addEventListener('mousedown', closeOpenMenu)
  });

  return (
    <div className="sticky top-0">
      <nav className='max-h-28 py-2 flex justify-between items-center bg-forest dark:bg-black px-10 md:px-20 lg:px-40'>
        <div>
          <Image alt="avatar" src={avatar} height={70}  />
        </div>
        {/* <h1 className='text-xl font-poppins'>Stephanie Tseng</h1> */}
        <ul className='hidden md:flex gap-2 items-center'>
          <li>home</li>
          <li>about me</li>
          <li onClick={() => scrollToSection(services)}>services</li>
          <li>projects</li>
          <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
          </li>
          {/* <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li> */}
        </ul>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}><FiMenu size={30} /></button>
        </div>
      </nav>
      <div ref={catMenu} className={`${menuOpen ? "block animate-open-hamburger" : "hidden"} absolute left-0 right-0 text-center origin-top`}>
        <nav className="mobile-menu bg-white pb-2">
          <a className="block relative text-center p-2 cursor-pointer">Home</a>
          <a className="block relative text-center p-2 cursor-pointer">About Me</a>
          <a onClick={() => scrollToSection(services)} className="block relative text-center p-2 cursor-pointer">Service</a>
        </nav>
      </div>
    </div>
  )
}

export default NavBar;