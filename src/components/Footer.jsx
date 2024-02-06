import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <footer className='h-auto pt-8 md:px-0 text-white bg-custom-blue/90 md:mb-0 font-Montserrat'>
      <div className="flex flex-col w-full pl-5 m-auto text-sm md:items-center md:justify-center">
        <p className="text-4xl font-bold font-Montez">Konnect <span className='text-custom-green'>Global</span></p>

        <div className="flex my-3 space-x-4 text-xs md:text-lg">
          {navLinks.map(navLink => (
            <a href={navLink.link} className='transition-all duration-500 ease-in-out hover:text-custom-green'>{navLink.name}</a>
          ))}
        </div>

        <span className='flex flex-col justify-center my-2 space-y-2 text-xs md:items-center md:space-x-10 md:flex-row'>
          <a href="/" className='flex items-center space-x-2'>
            <i className="text-3xl transition-all duration-500 ease-in-out fa-solid fa-envelope text-custom-green hover:text-custom-light"></i>
            <p>info@konnectglobal.com</p>
          </a>
          <a href="/" className='flex items-center space-x-2'>
            <i className="text-3xl transition-all duration-500 ease-in-out fa-solid fa-phone-volume text-custom-green hover:text-custom-light"></i>
            <p>+12345567890</p>
          </a>
          <a href="/" className='flex items-center space-x-2'>
            <i class="fa-solid text-3xl fa-location-dot transition-all duration-500 ease-in-out text-custom-green hover:text-custom-light"></i>
            <p>17 Wespan Avenue, St. Lucia</p>
          </a>
        </span>
      </div>
      
      <div className='items-center text-xs w-full h-10 py-3 text-center bg-custom-blue'>Copyright &copy; {currentYear} KonnectGlobal, All Rights Reserved</div>
    </footer>
  )
}

export default Footer;