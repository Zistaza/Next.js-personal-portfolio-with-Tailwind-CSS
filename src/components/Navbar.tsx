import React from 'react'
import { CgMenuOreos } from "react-icons/cg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <div className='container pt-5 bg-gray-800 p-4'>
        <div className='flex justify-between items-center place-item-center'>
            <div className='text-xl font-medium' data-aos="flip-right">Personal-Portfolio</div>
            <ul className="flex space-x-4 ml-auto gap-10 lg:gap-16 hidden font-bold md:flex ${menuOpen ? 'block' : 'hidden'} md:flex font-bold`}>">
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#projects'>Projects</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>
            
            <button aria-label="Menu" className='md:hidden' onClick={toggleMenu}>
          <CgMenuOreos size={40} />
        </button>

           </div>
           {menuOpen && (
        <ul className="flex flex-col mt-4 md:hidden font-bold">
          <li className='menuLink'><a href='#hero'>Home</a></li>
          <li className='menuLink'><a href='#about'>About</a></li>
          <li className='menuLink'><a href='#projects'>Projects</a></li>
          <li className='menuLink'><a href='#skills'>Skills</a></li>
          <li className='menuLink'><a href='#contact'>Contact</a></li>
        </ul>
)}
</div>
);
};


export default Navbar
