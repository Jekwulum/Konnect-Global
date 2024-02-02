import React from 'react';
import Header from '../../components/Header';
import BackgroundImageSlider from '../../components/BackgroundImageSlider';

import planeImg from '../../assets/img/plane.jpg';

const Home = () => {
  return (
    <div>
      <Header />

      <div className='mt-20 md:mt-24'>
        <BackgroundImageSlider />

        <div className='my-16 text-center font-Montserrat'>
          <h2 className='py-3 my-3 text-3xl font-bold uppercase'>Welcome to Konnect <span className='text-custom-green'>Global</span></h2>
          <div className='w-16 mb-6 h-[2px] m-auto bg-custom-green'></div>
          <p>Konnect Global, your gateway to seamless logistics solutions. </p>
          <p>Our paramount goal is to ensure that your valuable goods reach their intended destination promptly, without fail, each and every time.</p>
        </div>

        <div className='flex flex-col items-center gap-5 mx-4 mb-28 md:flex-row font-Montserrat'>
          <div className='flex flex-col justify-center h-64 m-auto text-center border md:w-1/3 gap-7 border-custom-green'>
            <i className="text-[60px] fa-solid fa-truck text-custom-green"></i>
            <h2 className='text-xl transition-all duration-500 hover:cursor-pointer hover:text-custom-green'>Road Freight Forwarding</h2>
            <p className='mx-5 text-sm'>Efficient overland solutions for your cargo, ensuring timely and secure transportation through road freight services.</p>
          </div>

          <div className='flex flex-col justify-center h-64 m-auto text-center border md:w-1/3 gap-7 border-custom-green'>
            <i className="text-[60px] fa-solid fa-plane text-custom-green"></i>
            <h4 className='text-xl transition-all duration-500 hover:cursor-pointer hover:text-custom-green'>Air Freight Forwarding</h4>
            <p className='mx-5 text-sm'>Seamless global shipping via our ocean freight services, connecting continents and delivering your cargo with reliability across the vast expanse of the seas.</p>
          </div>

          <div className='flex flex-col justify-center h-64 m-auto text-center border md:w-1/3 gap-7 border-custom-green'>
            <i className="text-[60px] fa-solid fa-ship text-custom-green"></i>
            <h4 className='text-xl transition-all duration-500 hover:cursor-pointer hover:text-custom-green'>Ocean Freight Forwarding</h4>
            <p className='mx-5 text-sm'>Swift and reliable air freight solutions for your cargo, ensuring rapid transportation with the efficiency and speed of air travel.</p>
          </div>
        </div>

        <div className='bg-[#b8655f] font-Montserrat text-custom-light pb-10'>

          <div className='flex flex-col justify-between p-10 pt-20 md:space-x-5 md:flex-row'>
            <h1 className='text-3xl font-bold uppercase'>Our special services</h1>
            <span className='p-2 pl-5 border-l-2 border-l-custom-green'>Experience the wonders of our exclusive services, meticulously crafted with you in mind. Prepare to be captivated by the sheer brilliance of our extraordinary offerings, which transcend all expectations. </span>
          </div>

          <div className='mx-5'>
            <div className='flex flex-col items-center justify-between gap-5 mb-5 md:flex-row'>
              <div className='group flex p-5 items-center justify-center h-64 m-auto space-x-2 border border-gray-300 w-[1/3] hover:border-custom-green transition-all duration-500 ease-in-out'>
                <i className="text-5xl transition-all duration-500 ease-in-out fa-solid fa-link group-hover:text-custom-green"></i>
                <span>
                  <h3 className='px-2 mb-3 capitalize'>Cold chain logistics</h3>
                  <p className='px-2 text-sm'>We help and support you in achieving your various logistics objectives with our high-quality Cold Chain Logistics services.</p>
                </span>
              </div>

              <div className='group flex p-5 items-center justify-center h-64 m-auto space-x-2 border border-gray-300 w-[1/3] hover:border-custom-green transition-all duration-500 ease-in-out'>
                <i className="text-5xl transition-all duration-500 ease-in-out fa-solid fa-boxes-packing group-hover:text-custom-green"></i>
                <span>
                  <h3 className='px-2 mb-3 capitalize'>Packaging and storage</h3>
                  <p className='px-2 text-sm'>Our Packaging and Storage solutions provide a reliable foundation for your goods, ensuring safety at every step.</p>
                </span>
              </div>

              <div className='group flex p-5 items-center justify-center h-64 m-auto space-x-2 border border-gray-300 w-[1/3] hover:border-custom-green transition-all duration-500 ease-in-out'>
                <i className="text-5xl transition-all duration-500 ease-in-out fa-solid fa-truck-fast group-hover:text-custom-green"></i>
                <span>
                  <h3 className='px-2 mb-3 capitalize'>E-commerce logistics</h3>
                  <p className='px-2 text-sm'>Optimise your end-to-end e-commerce logistics with order fulfilment, last-mile and cross-border delivery</p>
                </span>
              </div>
            </div>
          </div>

          <div className='mx-5'>
            <div className='flex flex-col items-center justify-between gap-5 mb-10 md:flex-row'>
              <div className='group flex p-5 items-center justify-center h-64 m-auto space-x-2 border border-gray-300 w-[1/3] hover:border-custom-green transition-all duration-500 ease-in-out'>
                <i className="text-5xl transition-all duration-500 ease-in-out fa-solid fa-parachute-box group-hover:text-custom-green"></i>
                <span>
                  <h3 className='px-2 mb-3 capitalize'>Supply chain development</h3>
                  <p className='px-2 text-sm'>Our supply chain experts help you identify key areas of improvement, thus creating a more efficient and cost effective logistics network.</p>
                </span>
              </div>

              <div className='group flex p-5 items-center justify-center h-64 m-auto space-x-2 border border-gray-300 w-[1/3] hover:border-custom-green transition-all duration-500 ease-in-out'>
                <i className="text-5xl transition-all duration-500 ease-in-out fa-solid fa-box-open group-hover:text-custom-green"></i>
                <span>
                  <h3 className='px-2 mb-3 capitalize'>Lead Logistics</h3>
                  <p className='px-2 text-sm'> Optimise, protect, and simplify your supply chain with our end-to-end logistics services, a growing suite of digital solutions, and a global delivery network.</p>
                </span>
              </div>

              <div className='group flex p-5 items-center justify-center h-64 m-auto space-x-2 border border-gray-300 w-[1/3] hover:border-custom-green transition-all duration-500 ease-in-out'>
                <i className="text-5xl transition-all duration-500 ease-in-out fa-solid fa-warehouse group-hover:text-custom-green"></i>
                <span>
                  <h3 className='px-2 mb-3 capitalize'>Warehousing</h3>
                  <p className='px-2 text-sm'>Our Warehousing services offer secure and accessible spaces, tailored to meet your specific storage needs, ensuring smooth operations and timely deliveries.</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <section style={{ backgroundImage: `url(${planeImg})`, backgroundSize: 'cover' }} className='md:w-full h-[750px] text-center m-auto flex justify-center items-center img-bg1'>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ut iste autem odit temporibus earum debitis tenetur ipsa quo animi!</p>
        </section>

        <div className='flex flex-col justify-between w-auto px-10 m-auto mb-10 md:mt-10 md:flex-row font-Montserrat'>
          <div className='p-5 '>

            <div>
              <h1 className='text-4xl uppercase'>Why Choose us?</h1>
              <div className='w-16 h-[2px] mt-5 bg-custom-green'></div>
            </div>

            <div className='group flex items-center my-7 space-x-7 w-full md:w-[470px]'>
              <div className='w-16 h-16 p-4 text-center transition-all duration-500 ease-in-out border rounded-full group-hover:bg-custom-green'>
                <i class="fa-solid fa-globe text-3xl group-hover:text-custom-light duration-500 ease-in-out transition-all"></i>
              </div>

              <div className='space-y-2'>
                <h1 className='text-xl capitalize'>Global supply chain solutions</h1>
                <p className='text-sm'>Seamlessly connect you to markets worldwide, providing efficient and tailored logistics solutions to fuel your global success.</p>
              </div>
            </div>

            <div className='group flex items-center my-7 space-x-7  w-full md:w-[470px]'>
              <div className='w-16 h-16 p-4 text-center transition-all duration-500 ease-in-out border rounded-full group-hover:bg-custom-green'>
                <i class="fa-regular fa-clock text-3xl group-hover:text-custom-light duration-500 ease-in-out transition-all"></i>
              </div>

              <div className='space-y-2'>
                <h1 className='text-xl capitalize'>24 Hours - Technical Support</h1>
                <p className='text-sm'>Ensuring your logistics run smoothly, providing timely assistance and solutions whenever you need them.</p>
              </div>
            </div>

            <div className='group flex items-center my-7 space-x-7  w-full md:w-[470px]'>
              <div className='w-16 h-16 p-4 text-center transition-all duration-500 ease-in-out border rounded-full group-hover:bg-custom-green'>
                <i class="fa-solid fa-people-carry-box text-3xl group-hover:text-custom-light duration-500 ease-in-out transition-all"></i>
              </div>

              <div className='space-y-2'>
                <h1 className='text-xl capitalize'>Careful Handling of Valuable Goods</h1>
                <p className='text-sm'>Careful handling of valuable goods ensures that your most precious cargo is transported with the utmost attention to detail and safety.</p>
              </div>
            </div>

            <div className='group flex items-center my-7 space-x-7  w-full md:w-[470px]'>
              <div className='w-16 h-16 p-4 text-center transition-all duration-500 ease-in-out border rounded-full group-hover:bg-custom-green'>
                <i class="fa-solid fa-person-military-pointing text-3xl group-hover:text-custom-light duration-500 ease-in-out transition-all"></i>
              </div>

              <div className='space-y-2'>
                <h1 className='text-xl capitalize'>Customs Expertise for Smooth Clearance</h1>
                <p className='text-sm'>Smooth clearance for your shipments, minimizing delays and ensuring compliance with regulations for hassle-free international trade</p>
              </div>
            </div>
          </div>

          <div className='bg-[#b8655f]/30 w-full p-5'>
            <div>
              <h1 className='text-xl uppercase md:text-4xl'>Leave us a message</h1>
              <div className='w-16 h-[2px] mt-2 md:mt-5 bg-custom-green'></div>
            </div>

            <div className='mt-5 md:mt-10'>
              <div className='flex justify-between mb-5 space-x-5'>
                <input type="text" placeholder='Name' className='w-full h-8 p-2 outline-none text-custom-green' />
                <input type="email" placeholder='Email' className='w-full h-8 p-2 outline-none text-custom-green' />
              </div>

              <textarea type="text" placeholder='Message' className='w-full h-64 p-2 outline-none text-custom-green' />

              <button className='w-24 h-12 p-2 mt-5 text-center transition-all duration-500 ease-in-out text-custom-light bg-custom-green hover:text-custom-green hover:bg-custom-light'>Submit</button>
            </div>
          </div>
        </div>

        <footer className='mb-96 md:hidden'></footer>
      </div>
    </div>
  )
}

export default Home;