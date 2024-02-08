import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', link: '/' },
    { name: 'SERVICES', link: '/services' },
    { name: 'ABOUT', link: '/about' },
    { name: 'CONTACT', link: '/contact' },
  ];

  return (
    <div className='fixed top-0 left-0 w-full shadow-md bg-custom-light shadow-custom-green/50 font-Montserrat z-[100]'>
      <div className='flex items-center justify-between m-4'>
        <div>
          <NavLink to="/" className='flex items-center space-x-4'>
            {/* <img className='w-20 h-10' src={LogoImg} alt="Logo" /> */}
            <h1 className='text-4xl font-Montez text-custom-green'>Konnect Global</h1>
          </NavLink>
        </div>

        <div className='hidden md:flex'>
          <ul className='flex space-x-5'>
            {navLinks.map((navLink) => (
              <li className='transition-all duration-500 hover:text-custom-green' key={navLink.name}>
                <NavLink to={navLink.link}>{navLink.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <span className='items-center justify-center hidden my-2 space-x-5 text-2xl transition-all duration-500 md:flex'>
          <a href="/"><i className="fa-solid fa-envelope text-custom-green"></i></a>
          <a href="/"><i className="fa-solid fa-phone-volume text-custom-green"></i></a>
          <a href="/"><i class="fa-brands fa-facebook text-custom-green"></i></a>
        </span>

        <span onClick={() => setIsOpen(prev => !prev)} className='transition-all duration-300 ease-in-out md:hidden hover:cursor-pointer hover:text-custom-green/90'>
          <i className={`fa-xl fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </span>
      </div>

      <div className={`absolute border-t border-t-custom-green left-0 w-full bg-custom-bgColor md:hidden z-[-1]  pl-7 transition-all duration-500 ease-in ${isOpen ? 'top-[70px]' : 'top-[-490px]'}`}>
        <div className=''>
          <ul className=''>
            {navLinks.map((link) => (
              <li className='my-4 transition-all duration-500 hover:text-custom-green' key={link.name}>
                <NavLink to={link.link}>{link.name}</NavLink>
              </li>
            ))}
          </ul>

          <div>

            <span className='flex items-center mt-5 mb-10 space-x-5 text-2xl transition-all duration-500 '>
              <a href="/"><i className="fa-solid fa-envelope text-custom-green"></i></a>
              <a href="/"><i className="fa-solid fa-phone-volume text-custom-green"></i></a>
              <a href="/"><i class="fa-brands fa-facebook text-custom-green"></i></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;