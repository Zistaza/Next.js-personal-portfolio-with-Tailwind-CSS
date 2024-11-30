import React from 'react'
import { HiMail } from "react-icons/hi";
import { BsTelephoneInboundFill } from "react-icons/bs";


const Contact = () => {
  return (
    <div id="contact" className='pt-32 container'>
    <div className='grid md:grid-cols-2 gap-10'>
     <div className='space-y-8'>
        <h2 className='text-5xl' data-aos="flip-right">Get in Touch</h2>
        <p className='text-red-600 text-[18px] pt-2' data-aos="flip-right">
            Contact me by given E-mail and Number or send me message by submitting the form.
        </p>
        <div className='flex gap-2 items-center' data-aos="flip-right">
            <HiMail size={30} /> zistaza@gmail.com
        </div>
        <div className='flex gap-2 items-center' data-aos="flip-right">
            <BsTelephoneInboundFill size={30} /> (+92) 564-00000
        </div>
        
        <a
        href="https://www.linkedin.com/in/zeenat-yameen-0168a829b"
        target="_blank"
        rel="noopener noreferrer"
        className='inline-flex items-center px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-green-600 transition'
        data-aos="flip-right">
        <span>Connect with me on LinkedIn</span>
      </a>
      </div>

        <form className='space-y-8' data-aos="flip-right">
          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Name</label>
            <input type="text" className='h-[40px] bg-transparent border border-accent' id='name' required />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email</label>
            <input type="email" className='h-[40px] bg-transparent border border-accent' id='email' required />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='message'>Message</label>
            <textarea className='bg-transparent border border-accent' id='message' rows={8} required></textarea>
          </div>
          <button type="submit" className='bg-cyan-500 text-black font-bold px-4 py-2 rounded hover:bg-accent-dark transition' data-aos="flip-right">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;


