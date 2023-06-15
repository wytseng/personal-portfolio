import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const ScrollToTop = () => {
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

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      {showScrollTopButton && 
        <div className="fixed bottom-5 right-6 drop-shadow-md">
          <FaAngleUp onClick={scrollTop} size={30} className='rounded-full p-1 cursor-pointer' />
        </div>
      }
    </div>
  )
}

export default ScrollToTop;