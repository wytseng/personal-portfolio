"use client"; //this is a client component
import { atom, useAtom } from 'jotai';
import NavBar from './components/navBar';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About'
import Works from  './components/Works/Works';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/scrollToTopIcon';
import { useState, useRef } from 'react';

export const mobileMenu = atom(false)

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useAtom(mobileMenu);
  const home = useRef(null);
  const about = useRef(null);
  const works = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <ScrollToTop />
      <NavBar 
        scrollToSection={scrollToSection} 
        home={home}
        about={about}
        works={works} 
        contact={contact}
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      <main className='snap-y dark:bg-gray-900'>
        <section ref={home} className='min-h-[calc(100vh-84px)] bg-main px-10 md:px-16 lg:px-32 xl:px-40 scroll-mt-28'>
          <Introduction />
        </section>
        <section ref={about} className="about bg-main px-10 md:px-16 lg:px-32 xl:px-40 scroll-mt-28">
          <About />
        </section>
        <section ref={works} className="works bg-mist p-10 md:px-16 lg:px-32 xl:px-40 scroll-mt-28">
          <Works />
        </section>
        <section ref={contact} className="contact bg-forest p-10 md:px-16 lg:px-32 xl:px-40 scroll-mt-28">
          <Contact />
        </section>
      </main>
    </div>
  )
}
