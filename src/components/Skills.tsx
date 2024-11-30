import React from 'react';
import { BiLogoTypescript } from "react-icons/bi";
import { RiNodejsLine } from 'react-icons/ri';
import { RiNextjsFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";





const Skills = () => {
  return (
    <div id="skills" className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl' data-aos="flip-right">Technology I work with</h2>
          <p className='text-green-500 pt-5' data-aos="flip-right">
            I am a web designer, specializing in HTML, CSS, TypeScript, JavaScript, and Next.js. 
            I am also proficient in Tailwind CSS for uniqueness in styling and design. 
            Focusing on crafting user experiences and design systems for software, web, and mobile products.
            I am passionate about applying consumer psychology for an interaction science-backed approach.
          </p>
        </div>
        <div className='grid grid-cols-3 text-accent text-1xl sm:text-4xl text-pink-400' data-aos="flip-left">
          <div className='space-y-2'>
            <h2><BiLogoTypescript/></h2>
            <h2><RiNodejsLine /></h2>
            <h2><RiNextjsFill /></h2>
              </div>

              <div className='space-y-2'>
            <h2><TiHtml5 /></h2>
            <h2><IoLogoCss3 /></h2>
            <h2><SiTailwindcss /></h2>
              </div>
              </div>
              </div>
               </div>
  );
};

export default Skills;
