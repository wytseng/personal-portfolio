import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';


export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const ScrollToTopIcon = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    })
  },[]);

  return (
    <div>
      {showScrollTopButton && 
        <div className="z-10 fixed bottom-8 right-8 drop-shadow-md bg-mist rounded-full">
          <FaAngleUp onClick={scrollToTop} size={30} className='rounded-full p-1 cursor-pointer' />
        </div>
      }
    </div>
  )
}

export default ScrollToTopIcon;