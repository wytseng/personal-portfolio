"use client"; //this is a client component
import { atom, useAtom } from 'jotai';
import Image from 'next/image';
import NavBar from './components/navBar';
import Introduction from './components/Introduction/Introduction';
import Works from  './components/Works/Works';
import ScrollToTop from './components/scrollToTopIcon';
// import {BsFillMoonStarsFill} from 'react-icons/bs';
import { useState, useRef } from 'react';

export const mobileMenu = atom(false)

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useAtom(mobileMenu);
  const home = useRef(null);
  const works = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <ScrollToTop />
      <NavBar 
        scrollToSection={scrollToSection} 
        home={home}
        works={works} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      <main className='snap-y dark:bg-gray-900'>
        <section ref={home} className='min-h-screen bg-main px-10 md:px-20 lg:px-40 scroll-mt-28'>
          <Introduction />
        </section>
        <section ref={works} className="works bg-mist p-10 md:px-20 lg:px-40 scroll-mt-28">
          <Works />
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I have started my developer journey as a 
              <span className="text-teal-500"> full-stack developer </span> at Givsum. 
              I have experience working with React.js, TypeScript, Ruby on Rails, ...
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I am passionate about improve my own skill set and always open to learning new skills!
            </p>
          </div>
          <div>
            {/* <div><Image src= /></div> */}
          </div>
        </section>
      </main>
    </div>
  )
}
