import React, { useState } from 'react';
import LogoImg from '../assets/img/logo-img.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', link: '/' },
    { name: 'SERVICES', link: '/services' },
    { name: 'ABOUT', link: '/about' },
    { name: 'CONTACT', link: '/contact' },
  ];

  return (
    <div className='fixed top-0 left-0 w-full shadow-md bg-custom-light shadow-custom-green/50 font-Montserrat'>
      <div className='flex justify-between items-center m-4'>
        <div>
          <a href="/" className='flex items-center space-x-4'>
            {/* <img className='h-10 w-20' src={LogoImg} alt="Logo" /> */}
            <h1 className='font-Montez text-4xl text-custom-green'>Konnect Global</h1>
          </a>
        </div>

        <div className='hidden md:flex'>
          <ul className='flex space-x-5'>
            {navLinks.map((navLink) => (
              <li className='hover:text-custom-green transition-all duration-500' key={navLink.name}>
                <a href={navLink.link}>{navLink.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <button className='hidden md:flex items-center justify-center bg-custom-green text-custom-light w-32 h-10 my-2 transition-all duration-500 hover:bg-custom-light hover:text-custom-green hover:border-2 hover:border-custom-green'>Get a Quote</button>

        <span onClick={() => setIsOpen(prev => !prev)} className='transition-all duration-300 ease-in-out md:hidden hover:cursor-pointer hover:text-custom-green/90'>
          <i className={`fa-xl fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </span>
      </div>

      <div className={`absolute border-t border-t-custom-green left-0 w-full bg-custom-bgColor md:hidden z-[-1]  pl-7 transition-all duration-500 ease-in ${isOpen ? 'top-[70px]' : 'top-[-490px]'}`}>
        <div className=''>
          <ul className=''>
            {navLinks.map((link) => (
              <li className='my-2 hover:text-custom-green transition-all duration-500'>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>

          <div>
            {/* social icons here */}

            <button className='bg-custom-green text-custom-light w-32 h-10 my-2 mb-10 transition-all duration-500 hover:bg-custom-light hover:text-custom-green hover:border-2 hover:border-custom-green'>Get a Quote</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;