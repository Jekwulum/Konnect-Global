import React from 'react';

const HomeMessageForm = () => {
  return (
    <div className='w-full p-5 m-auto bg-custom-blue/20'>
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
  )
}

export default HomeMessageForm;