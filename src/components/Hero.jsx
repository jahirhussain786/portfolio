import React from 'react';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section id='home' className='relative w-full h-screen mx-auto overflow-hidden'>
      {/* Content Container */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-teal-500' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-teal-500 ' />
        </div>
        <div className='w-[60%] lg:max-2xl:w-[55%] lg:max-lp:w-[45%] ms:max-md:w-[75%] xs:max-md:w-[80%]' >
          <h1 className={`${styles.heroHeadText} lg:max-2xl:text-[35px] xs:max-md:text-[35px] sm:max-lg:text-[35px]`}>
            Hi, I'm <span className='text-teal-500 pl-2' > Jahir Hussain</span>
          </h1>
          <p className={`${styles.heroSubText} text-[#B9DBDB] font-light lg:max-2xl:mt-0 lg:max-2xl:text-[20px] ms:max-1ms:text-sm mt-2 1ms:max-md:text-[15px] xs:max-md:text-[15px] sm:max-md:text-[18px] md:max-lg:text-[20px] :max-2xl:text-[18px] lg:max-xl:text-[18px] text-wrap`}>
          Full Stack Web Developer | HTML, CSS, JavaScript, Tailwind, React | Building Dynamic, Scalable Web Solutions | Open to Full-Time Opportunities
          </p>
        </div>
      </div>
      
      {/* Canvas Component */}
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
