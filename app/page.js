"use client"; //this is a client component
import { atom, useAtom } from 'jotai';
import Image from 'next/image';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import NavBar from './components/navBar';
import Introduction from './components/Introduction/Introduction';
import ScrollToTop from './components/scrollToTop';
// import {BsFillMoonStarsFill} from 'react-icons/bs';
import { useState, useRef } from 'react';

export const mobileMenu = atom(false)

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useAtom(mobileMenu);
  const services = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <ScrollToTop />
      <NavBar 
        scrollToSection={scrollToSection} 
        services={services} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      <main className='bg-main px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen '>
          <Introduction />
        </section>
        <section ref={services} className="services">
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I have started my developer journey as a 
              <span className="text-teal-500"> full-stack developer </span> at Givsum. 
              I have experience working with React.js, TypeScript, Ruby on Rails, ...
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I am passionate about improve my own skill set and always open to learning new skills!
            </p>
          </div>
          <div className='md:flex gap-10'>
            <div className='bg-white text-center shadow-lg p-10 rounded-xl my-10 basis-60'>
              <Image alt="design" src={design} width={100} height={100} style={{margin:'auto'}} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant design suited for you rneeds follwing core design theory </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='bg-white text-center shadow-lg p-10 rounded-xl my-10 basis-60'>
              <Image alt="design" src={consulting} width={100} height={100} style={{margin:'auto'}} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant design suited for you rneeds follwing core design theory </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='bg-white text-center shadow-lg p-10 rounded-xl my-10 basis-60'>
              <Image alt="design" src={code} width={100} height={100} style={{margin:'auto'}} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant design suited for you rneeds follwing core design theory </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>
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
