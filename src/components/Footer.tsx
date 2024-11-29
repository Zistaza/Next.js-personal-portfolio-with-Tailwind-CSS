import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="text-white py-10">

    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
      <div className="flex space-x-4">
    <Link href="https://facebook.com/zeenat.yameen.7" target="_blank">
      <BsFacebook size={25} className='text-blue-800 hover:-translate-y-1.5 duration-300' />
    </Link>
    <Link href="https://github.com/Zistaza" target="_blank">
        <BsGithub size={25} className='text-gray-700 hover:-translate-y-1.5 duration-300' />
      </Link>
      <Link href="https://www.linkedin.com/in/zeenat-yameen-0168a829b" target="_blank">
        <BsLinkedin size={25} className='text-blue-800 hover:-translate-y-1.5 duration-300' />
      </Link>
      </div>
      </div>
    </footer>
  )
}

export default Footer