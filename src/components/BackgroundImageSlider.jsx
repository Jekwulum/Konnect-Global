import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bg1 from '../assets/img/bg-1.jpg';
import bg2 from '../assets/img/bg-2.jpg';
import bg3 from '../assets/img/bg-3.jpg';

const BackgroundImageSlider = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [bg1, bg2, bg3];
  const texts = {
    0: { h1: 'Efficient Logistics', h3: 'We specialize in swift, secure, and on-time deliveries tailored to your business needs.' },
    1: { h1: 'Seamless Deliveries', h3: 'Trust us to navigate the logistics, so you can focus on what matters most.' },
    2: { h1: 'Dedicated Services', h3: ' Explore a world of reliable cargo services with us' },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <div className='overflow-hidden h-[430px] md:h-screen font-Montserrat'>
        <img src={images[currentImageIndex]} className='object-cover w-full h-full md:h-full' alt="" />

        <div className="absolute w-[300px] flex flex-col h-72 gap-5 md:gap-10 m-auto text-white transform -translate-x-1/2 -translate-y-1/2 md:w-[650px] items-start p-5 bg-black/30 top-1/2 left-1/2">
          <h1 className='text-3xl font-bold uppercase md:text-5xl'>{texts[currentImageIndex].h1}</h1>
          <h3 className='md:text-2xl'>{texts[currentImageIndex].h3}</h3>

          <span className='space-x-6'>
            <button onClick={() => navigate('/about-us')}
              className='h-10 text-center transition-all border duration-400 w-28 border-custom-light hover:bg-custom-green'>About Us</button>

            <button onClick={() => navigate('/contact-us')}
              className='h-10 text-center transition-all border duration-400 w-28 border-custom-light hover:bg-custom-green'>Contact Us</button>
          </span>
        </div>
      </div>
      <div className={`bg-[url('assets/img/bg-1.jpg')]`}></div>
    </>
  )
}

export default BackgroundImageSlider;