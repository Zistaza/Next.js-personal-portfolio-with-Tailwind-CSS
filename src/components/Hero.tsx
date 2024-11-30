import React from 'react'
import Navbar from './Navbar'



const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/Layer3.png)] bg-cover'
         style={{ backgroundSize: "35%", backgroundPosition: 'left 10px top 120px'}}>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>

        <div className='text-[40px] sm:text-[80px] md:text-[60px] lg:text-[90px] font-bold leading-tight flex justify-center items-center text-rgb(2, 253, 253)'>
          <div>
            <p data-aos="flip-right">I am</p>
            <p data-aos="flip-right">Zeenat</p>
            <p data-aos="flip-right">Yameen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
