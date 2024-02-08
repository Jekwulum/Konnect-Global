import React from 'react'

import ContactMessageForm from './ContactMessageForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactPhoto from '../../assets/img/contact-photo.jpg';

const Contact = () => {
  return (
    <div>
      <Header />

      <div className='mt-20 md:mt-24 font-Montserrat'>

        <div style={{ backgroundImage: `url(${ContactPhoto})` }} className='flex items-center justify-center m-auto text-center img-bg font-Montserrat'>
          <p className='flex items-center justify-center w-full h-full mt-5 text-4xl text-center md:text-5xl text-custom-light bg-black/50'>Contact Us</p>
        </div>

        <ContactMessageForm />

      </div>

      <Footer />
    </div>
  )
}

export default Contact;