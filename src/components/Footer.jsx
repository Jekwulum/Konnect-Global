import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='h-auto pt-8 md:px-0 pl-5 text-white bg-[#0c1239]/90 md:mb-0 font-Montserrat'>
      <div className="flex flex-col w-full m-auto text-sm md:items-center md:justify-center">
        <p className="text-4xl font-bold font-Montez">Konnect <span className='text-custom-green'>Global</span></p>

        <div className="flex my-3 space-x-4 text-xs md:text-lg">
          <a href="/" className="transition-all duration-500 ease-in-out hover:text-custom-green">Home</a>
          <a href="/" className="transition-all duration-500 ease-in-out hover:text-custom-green">Services</a>
          <a href="/" className="transition-all duration-500 ease-in-out hover:text-custom-green">About Us</a>
          <a href="/" className="transition-all duration-500 ease-in-out hover:text-custom-green">Contact</a>
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

        <div className='items-center text-xs w-full h-10 py-3 text-center bg-[#0c1239]'>Copyright &copy; {currentYear} KonnectGlobal, All Rights Reserved</div>
      </div>
    </footer>
  )
}

export default Footer;