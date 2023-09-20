import Image from 'next/image';
import fullAvatar from '../../../public/sittingAvatar2.png';
import avatar from '../../../public/avatar.png';
import styles from './Introduction.module.css';



export default function Introduction() {

  return (
    <div className="pt-8 p-2 md:pt-16 xl:pt-24">
      <div className={`${styles.messageContainer} flex flex-col items-center justify-center md:justify-start xxl:justify-center md:flex-row xxl:flex-col`}>
        <Image alt="avatar" src={avatar} height={55} priority={true} className="block pb-2 md:pr-3 md:block" />
        <h2 className="text-center font-sharetechmono text-sm p-3 md:text-xl rounded-full bg-white">
          <span className={styles.message}>👋🏻 Hi there! I&apos;m Stephanie Tseng.</span> 
        </h2>
      </div>
      <div className={`${styles.introduction} xl:mt-10`}>
        <div className='xxl:text-center'>
          <h1 className="text-4xl py-5 md:py-7 text-white font-poppins font-extrabold drop-shadow-md md:text-6xl">
            <span className='text-forest'>A </span>
              Frontend Developer.
          </h1>
          <p className="text-md py-3 leading-6 md:text-xl">
            I build <span className='font-sharetechmono opacity-0 animate-fade-in text-white'>clean, responsive</span> and <span className='font-sharetechmono opacity-0 animate-fade-in text-white'>effective</span> websites that focus on the user experience.
            As an apsiring developer, I am constantly learning and practicing with new tools.
          </p>
        </div>
        <div className="relative h-60 md:h-80 xl:h-[27rem] mt-5 overflow-hidden">
          <Image alt="full body avatar" src={fullAvatar} sizes='100vw' fill={true} priority={true} style={{objectFit:'contain'}} />
        </div>
      </div>
    </div>
  )
}