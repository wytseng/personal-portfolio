import { motion } from 'framer-motion';
import { PiPaintBrushHouseholdBold, PiFileSql } from "react-icons/pi";
import { FaCode } from  "react-icons/fa";
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoNodejs, BiLogoTypescript, BiLogoGithub } from "react-icons/bi";
import { SiRubyonrails } from "react-icons/si";
import './about.css';

export default function About() {

  const fadeUp = {
    offscreen: {y:75, opacity:0},
    onscreen: {
      opacity:1,
      x:0, y:0,
      transition:{
        type:"tween", 
        duration:0.8
      }
    }
  }

  return (
    <div className="pb-12 p-4">
      <motion.div className="mb-6"
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={fadeUp}
        viewport={{once: false}}
      >
        <h2 className="flex py-2 font-poppins text-2xl md:text-3xl text-white font-bold">Design<PiPaintBrushHouseholdBold className="ml-2"/></h2>
        <p className="text-sm md:text-base">
          Not your typical UI designer that creates flow charts and mock designs, but I have work experience with graphic design. 
        </p>
        <p className="text-sm md:text-base pt-2">
          Given the experience, I often contemplate with the best font styles, button sizes, and element spacing, etc...
        </p>
      </motion.div>
      <motion.div className="mb-6"
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={fadeUp}
        viewport={{once: false, amount: 0.5}}
      >
        <h2 className="flex py-2 font-poppins text-2xl md:text-3xl text-white font-bold">Engineering<FaCode className="ml-2"/></h2>
        <p className="text-sm md:text-base mb-4">As an inspiring web developer, I learned how to code and developed a passion for coding through my junior developer internship at a web startup company. Since then I have been practicing coding and improving in this field. </p>
        <div className="mt-4 p-3 md:p-4 border-2 border-forest rounded-lg">
          <h3 className="font-poppins text-xl md:text-2xl text-white font-bold">Tools I Use: </h3>
          <ul className="grid grid-cols-1 text-center sm:grid-cols-2 p-3 md:p-4 font-sharetechmono text-sm md:text-base text-darkgreen">
            <li className="flex items-center md:text-lg"><BiLogoJavascript className="toolIcons" />JavaScript</li>
            <li className="flex items-center md:text-lg"><BiLogoHtml5 className="toolIcons" />HTML5/CSS</li>
            <li className="flex items-center md:text-lg"><BiLogoCss3 className="toolIcons" />ReactJS</li>
            <li className="flex items-center md:text-lg"><BiLogoNodejs className="toolIcons" />NodeJS</li>
            <li className="flex items-center md:text-lg"><BiLogoTypescript className="toolIcons" />TypeScript</li>
            <li className="flex items-center md:text-lg"><SiRubyonrails className="toolIcons" />Ruby on Rails</li>
            <li className="flex items-center md:text-lg"><PiFileSql className="toolIcons" />SQL</li>
            <li className="flex items-center md:text-lg"><BiLogoGithub className="toolIcons" />Git</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}