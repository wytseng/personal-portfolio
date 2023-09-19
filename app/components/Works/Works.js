import Image from "next/image";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { FiGithub } from "react-icons/fi";
import { works }from "./projectList";
import { Carousel } from "@material-tailwind/react";
import styles from './Works.module.css';

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
      <>
        <motion.div 
          className="py-4 px-2 drop-shadow-xl md:w-1/2"
          variants={direction ? leftAnimate : rightAnimate}
        >
          <Image className={`m-auto rounded-t-xl border-4 border-forest ${direction ? "skew-y-2" : "-skew-y-2"}`} alt={alt} src={img} />
          <h3 className={`-mt-1 p-3 rounded-b-xl font-poppins font-bold text-white bg-forest ${direction ? "skew-y-2" : "-skew-y-2"}`}>{title}</h3>
        </motion.div>
        <div className="md:w-1/2 md:m-auto">
          <motion.p className="py-4 text-sm md:text-base" 
          variants={textAnimate}
          >
            {description}
          </motion.p>
          {demo ? (
            <motion.div className="flex gap-2 px-6 md:px-3" variants={textAnimate}>
              <a href={demo} target="_blank" className={`${styles.animateWorkButton} font-poppins font-semibold w-1/2 bg-mist border-3 p-2 border-forest rounded-xl`}>
                <button>Demo</button>
              </a>
              <a href={github} target="_blank" className={`${styles.animateWorkButton} font-poppins font-semibold w-1/2 bg-mist border-3 p-2 border-forest rounded-xl`}>
                <button><FiGithub style={{display: 'inline'}}/> GitHub</button>
              </a>
            </motion.div>
          ):(
            <motion.div className="flex gap-2 px-6 md:px-3" variants={textAnimate}>
              <a href={github} target="_blank" className={`${styles.animateWorkButton} font-poppins font-semibold w-full bg-mist border-3 p-2 border-forest rounded-xl`}>
                <button><FiGithub style={{display: 'inline'}}/> GitHub</button>
              </a>
            </motion.div>
          )}
        </div>
      </>
    )
  }

  return (
    <div>
      <h3 className="font-spacegrotesk font-semibold text-forest pt-10">Work</h3>
      <h2 className='font-poppins font-bold text-forest text-3xl xl:text-4xl mb-5 drop-shadow-md'>My Projects</h2>
      {works.map((work, index) => (
        <motion.div className="md:hidden bg-white mb-5 p-3 rounded-3xl drop-shadow-xl" key={index}
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
        >
          <motion.div className="work py-6 text-center flex flex-col md:flex-row md:gap-4"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once: true, amount: 1}}
            transition={{delay:1, staggerChildren:0.5}}
          > 
            <WorkCard direction={work.direction} alt={work.alt} img={work.img} title={work.title} description={work.description} demo={work.demo} github={work.github} />
          </motion.div>
        </motion.div>
      ))}
      <Carousel
        className="hidden md:flex"
        transition={{duration:1}}
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
          <div className="work px-14 pt-6 pb-10 text-center flex flex-col md:flex-row md:gap-4" key={index} > 
            <WorkCard direction={work.direction} alt={work.alt} img={work.img} title={work.title} description={work.description} demo={work.demo} github={work.github} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}