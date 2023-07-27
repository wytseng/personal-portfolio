import { ContactForm }from './form.js'
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import "./Contact.css"

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
      <motion.div className="text-white" variants={fadeUp}>
        <h2 className='font-poppins font-bold text-3xl pt-10 drop-shadow-md'>Contact Me</h2>
      </motion.div>
      <motion.div className="bg-white rounded-lg drop-shadow-xl my-4"
        variants={fadeUp}
      >
        <ContactForm />
      </motion.div>
      <motion.div className='flex justify-between gap-4 px-4 text-white text-sm font-poppins underline'
        variants={fadeIn}
      >
        <a className='animateContactButton w-1/2 border-2 rounded p-2 text-center cursor-pointer'><FiLinkedin color='white' className='inline-block mr-1' />LinkedIn</a>
        <a className='animateContactButton w-1/2 border-2 rounded p-2 text-center cursor-pointer'><FiGithub color='white' className='inline-block mr-1' />Github</a>
        {/* <p className='border-2 rounded p-2'><FiLinkedin color='white' className='inline-block mr-1' />LinkedIn</p> */}
      </motion.div>
    </motion.div>
  )
}