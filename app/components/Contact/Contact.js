import { ContactForm }from './form.js'
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import styles from "./Contact.module.css"

export default function Contact() {

  const fadeUp = {
    offscreen: {y:200, opacity:0},
    onscreen: {
      opacity:1,
      x:0, y:0,
      transition:{
        type:"tween", 
        duration:0.8
      }
    }
  }
  
  const fadeIn = {
    offscreen: {opacity:0},
    onscreen: {
      opacity:1,
      duration:1.5,
    }
  }

  return (
    <motion.div 
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once: true, amount: 0.5}}
      transition={{delay:0.5, staggerChildren:0.8}}
    >
      <motion.div className="text-white pt-10" variants={fadeUp}>
        <h3 className='font-spacegrotesk font-semibold text-mist'>Contact Me</h3>
        <h2 className='flex items-center font-poppins font-bold text-3xl xl:text-4xl drop-shadow-md'>Have a Coffee?</h2>
      </motion.div>
      <div className='md:w-2/3 md:mx-auto xxl:w-1/2'>
        <motion.div className="bg-white rounded-3xl drop-shadow-xl my-4"
          variants={fadeUp}
        >
          <ContactForm />
        </motion.div>
        <motion.div className='flex justify-between gap-4 px-4 md:px-8 h-fit text-white text-sm font-poppins underline'
          variants={fadeIn}
        >
          <a href='https://www.linkedin.com/in/wytseng/' target="_blank" className={`${styles.animateContactButton} w-1/2 border-2 border-white rounded-xl p-3 text-center cursor-pointer`}><FiLinkedin className='inline-block mr-1' />LinkedIn</a>
          <a href='https://github.com/wytseng' target='_blank' className={`${styles.animateContactButton} w-1/2 border-2 border-white rounded-xl p-3 text-center cursor-pointer`}><FiGithub className='inline-block mr-1' />Github</a>
        </motion.div>
      </div>
    </motion.div>
  )
}