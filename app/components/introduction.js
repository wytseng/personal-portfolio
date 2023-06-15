import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import fullAvatar from '../../public/sittingAvatar2.png';



export default function Introduction() {

  return (
    <section>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-white font-poppins font-extrabold md:text-6xl">Stephanie <br></br> Tseng</h2>
        <h3 className="text-2xl py-2 md:text-3xl">Front end developor.</h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl">
          Dedicated full-stack web developer leveraging background in marketing and supply chain management to take on diverse tasks including web design and project management. 
          Detail-oriented problem-solver who is passionate about creating user-oriented platforms and always striving to improve and learn.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
      <div className="relative mx-auto w-80 h-80 mt-20 overflow-hidden">
        <Image alt="full body avatar" src={fullAvatar} fill={true} style={{objectFit:'cover'}} />
      </div>
    </section>
  )
}