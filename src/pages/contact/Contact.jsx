import React from 'react'

import ContactMessageForm from './ContactMessageForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactPhoto from '../../assets/img/contact-photo.jpg';

const Contact = () => {
  const workingHours = [
    { day: 'Monday', time: '8:00 am - 6:00 pm' },
    { day: 'Tuesday', time: '8:00 am - 6:00 pm' },
    { day: 'Wednesday', time: '8:00 am - 6:00 pm' },
    { day: 'Thursday', time: '8:00 am - 6:00 pm' },
    { day: 'Friday', time: '8:00 am - 6:00 pm' },
    { day: 'Saturday', time: '10:00 am - 6:00 pm' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <div>
      <Header />

      <div className='mt-20 md:mt-24 font-Montserrat'>

        <div style={{ backgroundImage: `url(${ContactPhoto})` }} className='flex items-center justify-center m-auto text-center img-bg font-Montserrat'>
          <p className='flex items-center justify-center w-full h-full pt-5 text-4xl text-center md:text-5xl text-custom-light bg-black/50'>Contact Us</p>
        </div>

        <div className='mx-3 my-10 md:px-10 md:grid md:grid-cols-3 gap-5'>
          <div className='col-span-2'>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-2xl uppercase font-bold'>Contact Details</h1>
              <div className='w-16 h-[2px] mt-4 bg-custom-green'></div>
            </div>

            <p className='leading-6 my-10'>
              To obtain assistance or seek clarification, kindly utilize the contact details provided below. We are readily available to address any inquiries or requests you may have.
            </p>

            <div className='grid md:grid-cols-2 gap-5 grid-rows-2'>
              {/* contains 4 divs */}
              <div className='flex my-3 gap-5 items-start'>
                <i className="fa-solid fa-location-dot text-3xl text-custom-green"></i>
                <div className='space-y-4'>
                  <h1 className='text-xl'>We are here</h1>
                  <p>17 Wespan Avenue, St. Lucia</p>
                </div>
              </div>

              <div className='flex my-3 gap-5 items-start'>
                <i className="fa-solid fa-phone-volume text-3xl text-custom-green"></i>
                <div className='space-y-4'>
                  <h1 className='text-xl'>Ring us at</h1>
                  <p><a href="+123456789">Hot-line: +123456789</a></p>
                </div>
              </div>

              <div className='flex my-3 gap-5 items-start'>
                <i className="fa-solid fa-envelope text-3xl text-custom-green"></i>
                <div className='space-y-4'>
                  <h1 className='text-xl'>Send us a mail</h1>
                  <p><a href="mailto:info@konnectglobal.com">info@konnectglobal.com</a></p>
                </div>
              </div>

              <div className='flex my-3 gap-5 items-start'>
                <i className="fa-solid fa-share-nodes text-3xl text-custom-green"></i>
                <div className='space-y-4'>
                  <h1 className='text-xl'>Our handles</h1>
                  <div className='flex gap-5 justify-between'>
                    <a href="/"><i class="fa-brands fa-facebook text-custom-green text-2xl"></i></a>
                    <a href="/"><i class="fa-brands fa-x-twitter text-custom-green text-2xl"></i></a>
                    <a href="/"><i class="fa-brands fa-google-plus-g text-custom-green text-2xl"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-1 mt-7 border-2 p-7'>
            <h1 className='uppercase font-bold text-2xl'>Working hours</h1>
            <p className='my-5 text-sm'>
              Learn about our working hours and contact us during certain times to receive timely help and support.
            </p>

            {workingHours.map((workingHour, index) => (
              <div>
                <div className='flex items-center justify-between text-sm leading-6 my-2'>
                  <div>{workingHour.day}</div>
                  <div>{workingHour.time}</div>
                </div>
                {index !== workingHours.length - 1 && <hr className="border-gray-300 w-full my-2" />}
              </div>
            ))}
          </div>
        </div>

        <ContactMessageForm />

      </div>

      <Footer />
    </div>
  )
}

export default Contact;