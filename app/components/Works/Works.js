import Image from "next/image";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { FiGithub } from "react-icons/fi";
import { works }from "./projectList";
import { Carousel } from "@material-tailwind/react";
import './works.css';

export default function Works() {

  useEffect(() => {
    // Disable scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const rightAnimate = {
    offscreen: {x:350, opacity:0},
    onscreen: {
      opacity:1,
      x:0, y:0,
      transition:{
        type:"spring", 
        duration:1.5
      }
    }
  }

  const leftAnimate = {
    offscreen: {x:-350, opacity:0},
    onscreen: {
      opacity:1,
      x:0,
      transition:{
        type:"spring", 
        duration:1.5
      }
    }
  }

  const textAnimate = {
    offscreen: {opacity:0, y:50},
    onscreen: {
      opacity:1, y:0,
      transition: {
        type: "tween",
        duration: 1,
      }
    }
  }

  const WorkCard = ({ direction, alt, img, title, description, demo, github}) => {
    return (
      <motion.div className="work py-6 text-center flex md:flex-row md:gap-4"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once: true, amount: 1}}
        transition={{delay:1, staggerChildren:0.5}}
      > 
        <motion.div 
          className="py-4 px-2 drop-shadow-xl md:w-1/2"
          variants={direction ? leftAnimate : rightAnimate}
        >
          <Image className={`m-auto rounded-t-lg border-4 border-forest ${direction ? "skew-y-2" : "-skew-y-2"}`} alt={alt} src={img} />
          <h3 className={`-mt-1 p-3 rounded-b-lg font-poppins font-bold text-white bg-forest ${direction ? "skew-y-2" : "-skew-y-2"}`}>{title}</h3>
        </motion.div>
        <div className="md:w-1/2 md:m-auto">
          <motion.p className="py-4 text-sm md:text-base" 
          variants={textAnimate}
          >
            {description}
          </motion.p>
          {demo ? (
            <motion.div className="flex gap-2 px-6" variants={textAnimate}>
              <a href={demo} target="_blank" className="animateWorkButton font-poppins font-semibold w-1/2 bg-mist border-3 p-2 border-forest rounded-lg">
                <button>Demo</button>
              </a>
              <a href={github} target="_blank" className="animateWorkButton font-poppins font-semibold w-1/2 bg-mist border-3 p-2 border-forest rounded-lg">
                <button><FiGithub style={{display: 'inline'}}/> GitHub</button>
              </a>
            </motion.div>
          ):(
            <motion.div className="flex gap-2 px-6" variants={textAnimate}>
              <a href={github} target="_blank" className="animateWorkButton font-poppins font-semibold w-full bg-mist border-3 p-2 border-forest rounded-lg">
                <button><FiGithub style={{display: 'inline'}}/> GitHub</button>
              </a>
            </motion.div>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <div>
      <h2 className='font-poppins font-bold text-forest text-3xl pt-10 mb-5 drop-shadow-md'>My Work</h2>
      {works.map((work, index) => (
        <motion.div className="md:hidden bg-white mb-5 p-3 rounded-xl drop-shadow-xl" key={index}
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
        >
          <WorkCard direction={work.direction} alt={work.alt} img={work.img} title={work.title} description={work.description} demo={work.demo} github={work.github} />
        </motion.div>
      ))}
      <Carousel
        className="hidden md:flex rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {works.map((work, index) => (
          <div className="mb-5 px-14 rounded-xl" key={index}>
            <WorkCard direction={work.direction} alt={work.alt} img={work.img} title={work.title} description={work.description} demo={work.demo} github={work.github} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}