import { useAtom }from "jotai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { Turn as Hamburger } from "hamburger-react";
// import { useState } from 'react';
import { useEffect, useRef } from "react";
import Image from "next/image";
import { mobileMenu } from "../page";
import avatar from "../../public/avatar.png";
import { scrollToTop } from "./scrollToTopIcon";


const NavBar = ({scrollToSection, home, about, works, contact, darkMode, setDarkMode}) => {
  // const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useAtom(mobileMenu);
  const navMenu = useRef(null);

  useEffect(() => {
    const closeOpenMenu = (e)=>{
      if (navMenu.current && menuOpen && !navMenu.current.contains(e.target)){
        setMenuOpen(false);
      };
    };
    document.addEventListener('mousedown', closeOpenMenu);
    return () => {
      document.removeEventListener('mousedown', closeOpenMenu);
    };
  }, [menuOpen]);

  return (
    <div ref={navMenu} className="z-[1] sticky top-0">
      {/* web menu */}
      <nav className='max-h-28 py-5 flex justify-between items-center bg-forest dark:bg-black px-8 md:px-20 lg:px-40'>
        {/* <div>
          <Image alt="avatar" src={avatar} height={70}  />
        </div> */}
        <h1 className='text-white text-2xl md:text-3xl font-inconsolata font-extrabold p-1'>st.</h1>
        <ul className='font-poppins font-semibold text-white md:text-lg hidden md:flex gap-4 items-center'>
          <li onClick={() => scrollToSection(home)} className="cursor-pointer">Home</li>
          <li onClick={() => scrollToSection(about)} className="cursor-pointer">About Me</li>
          <li onClick={() => scrollToSection(works)} className="cursor-pointer">Works</li>
          <li onClick={() => scrollToSection(contact)} className="cursor-pointer">Contact Me</li>
          {/* <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
          </li> */}
          {/* <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li> */}
        </ul>
        <div className="md:hidden">
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={25} color="#FEFFFF" direction="right" rounded />
        </div>
      </nav>
      {/* mobile menu */}
      <div className={`${menuOpen ? "block animate-open-hamburger" : "hidden"} absolute left-0 right-0 text-center origin-top`}>
        <nav className="mobile-menu bg-white pb-2 drop-shadow-md">
          <a onClick={() => scrollToSection(home)} className="block relative text-center p-2 cursor-pointer">Home</a>
          <a onClick={() => scrollToSection(about)} className="block relative text-center p-2 cursor-pointer">About Me</a>
          <a onClick={() => scrollToSection(works)} className="block relative text-center p-2 cursor-pointer">My Work</a>
          <a onClick={() => scrollToSection(contact)} className="block relative text-center p-2 cursor-pointer">Contact Me</a>
        </nav>
      </div>
    </div>
  )
}

export default NavBar;