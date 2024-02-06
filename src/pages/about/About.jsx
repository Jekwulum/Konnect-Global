import React from 'react'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OwnersPhoto from '../../assets/img/ceo-photo.png';

const About = () => {
  return (
    <div>
      <Header />

      <div className='mt-20 md:mt-24 font-Montserrat'>
        <div className='flex flex-col items-start justify-center gap-5 px-4 mb-4 md:flex-row'>
          <div className='w-64 bg-custom-green h-72 md:w-full text-custom-light'>
            <img src={OwnersPhoto} alt="" className='w-full h-48' loading='lazy' />
            <p className='pt-4 text-sm text-center'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorem.</p>
          </div>

          <div className='h-full'>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-4xl font-bold uppercase'>Who we are</h1>
              <div className='w-16 h-[2px] mt-5 bg-custom-green'></div>
            </div>

            <p className='mt-5 mb-3'>
              KonnectGlobal is the driving force behind global logistics. With an unwavering dedication to excellence, efficiency, and reliability, we adeptly navigate the intricacies of transportation to provide seamless solutions for businesses across the globe. Our team embodies unparalleled expertise, unwavering dedication, and an unyielding determination to surpass expectations.
              
              <p className='mt-2'>We ensure that every shipment, every client, and every milestone is met with utmost precision and meticulous care.</p>
            </p>

            <p className='text-3xl font-GreatVibes'>John Doe</p>
          </div>
        </div>

        <div className='bg-custom-blue md:h-64 md:py-10'>
          <div className='flex flex-col px-5 py-10 space-y-6 md:space-y-0 md:flex-row text-custom-light'>
            <div className='flex gap-5'>
              <span className='flex items-center justify-center w-[100px] h-[50px] text-[20px] text-center border md:h-12 md:w-44 border-custom-light/30 text-custom-green'>M</span>

              <div className='space-y-2'>
                <h1 className='text-xl'>Our Mission</h1>
                <p className='w-full text-sm text-custom-light/70'>Revolutionizing global businesses through seamless logistics, we empower success by connecting markets with efficiency and tailored excellence.</p>
              </div>
            </div>

            <div className='flex gap-5'>
              <span className='flex items-center justify-center w-[100px] h-[50px] text-[20px] text-center border md:h-12 md:w-44 border-custom-light/30 text-custom-green'>V</span>

              <div className='space-y-2'>
                <h1 className='text-xl'>Our Vision</h1>
                <p className='w-full text-sm text-custom-light/70'>Aspires to be the unrivaled leader, constantly innovating and setting new benchmarks to enhance clients' global competitiveness.</p>
              </div>
            </div>

            <div className='flex gap-5'>
              <span className='flex items-center justify-center w-[100px] h-[50px] text-[20px] text-center border md:h-12 md:w-44 border-custom-light/30 text-custom-green'>C</span>

              <div className='space-y-2'>
                <h1 className='text-xl'>Core Values</h1>
                <p className='text-sm text-custom-light/70'>Dedicated to customer-centric excellence, unwavering integrity, and the paramount importance of safety and responsibility in all actions.</p>
              </div>
            </div>
          </div>
        </div>

        <section className='px-0 mt-10 text-center md:px-5'>
          {/* why choose us */}
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold uppercase'>Why Choose us?</h1>
            <div className='w-16 h-[2px] mt-5 bg-custom-green'></div>
          </div>

          <div className='flex flex-col justify-center md:flex-row'>
            <div className='group flex flex-col items-center my-7 space-y-5 w-full md:w-[470px]'>
              <div className='w-16 h-16 p-4 text-center transition-all duration-500 ease-in-out border rounded-full group-hover:bg-custom-green'>
                <i class="fa-solid fa-globe text-3xl group-hover:text-custom-light duration-500 ease-in-out transition-all"></i>
              </div>

              <div className='space-y-2'>
                <h1 className='text-xl capitalize'>Global supply chain solutions</h1>
                <p className='text-sm'>Seamlessly connect you to markets worldwide, providing efficient and tailored logistics solutions to fuel your global success.</p>
              </div>
            </div>

            <div className='group space-y-5 flex-col flex items-center my-7 space-x-7  w-full md:w-[470px]'>
              <div className='w-16 h-16 p-4 text-center transition-all duration-1000 ease-in-out border rounded-full group-hover:bg-custom-green'>
                <i class="fa-regular fa-clock text-3xl group-hover:text-custom-light ease-in-out transition-all duration-1000"></i>
              </div>

              <div className='space-y-2'>
                <h1 className='text-xl capitalize'>24 Hours - Technical Support</h1>
                <p className='text-sm'>Ensuring your logistics run smoothly, providing timely assistance and solutions whenever you need them.</p>
              </div>
            </div>

            <div className='group space-y-5 flex-col flex items-center my-7 space-x-7  w-full md:w-[470px]'>
              <div className='w-16 h-16 p-4 text-center transition-all duration-1000 ease-in-out border rounded-full group-hover:bg-custom-green'>
                <i class="fa-solid fa-people-carry-box text-3xl group-hover:text-custom-light duration-500 ease-in-out transition-all"></i>
              </div>

              <div className='space-y-2'>
                <h1 className='text-xl capitalize'>Careful Handling of Valuable Goods</h1>
                <p className='text-sm'>Careful handling of valuable goods ensures that your most precious cargo is transported with the utmost attention to detail and safety.</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center md:flex-row'>
            <div className='group space-y-5 flex-col flex items-center my-7 space-x-7  w-full md:w-[470px]'>
              <div className='w-16 h-16 p-4 text-center transition-all duration-1000 ease-in-out border rounded-full group-hover:bg-custom-green'>
                <i class="fa-solid fa-people-carry-box text-3xl group-hover:text-custom-light duration-500 ease-in-out transition-all"></i>
              </div>

              <div className='space-y-2'>
                <h1 className='text-xl capitalize'>Careful Handling of Valuable Goods</h1>
                <p className='text-sm'>Careful handling of valuable goods ensures that your most precious cargo is transported with the utmost attention to detail and safety.</p>
              </div>
            </div>

            <div className='group space-y-5 flex-col flex items-center my-7 space-x-7  w-full md:w-[470px]'>
              <div className='w-16 h-16 p-4 text-center transition-all duration-1000 ease-in-out border rounded-full group-hover:bg-custom-green'>
                <i class="fa-solid fa-person-military-pointing text-3xl group-hover:text-custom-light duration-500 ease-in-out transition-all"></i>
              </div>

              <div className='space-y-2'>
                <h1 className='text-xl capitalize'>Customs Expertise for Smooth Clearance</h1>
                <p className='text-sm'>Smooth clearance for your shipments, minimizing delays and ensuring compliance with regulations for hassle-free international trade</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default About;