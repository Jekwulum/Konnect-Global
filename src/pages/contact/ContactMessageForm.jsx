import React from 'react'

const ContactMessageForm = () => {
  return (
    <div className='w-full p-5 m-auto bg-custom-blue/20 pt-10'>
      <div className='flex flex-col justify-center items-center m-auto'>
        <h1 className='text-xl uppercase md:text-4xl text-center'>Leave us a message</h1>
        <div className='w-16 h-[2px] mt-2 md:mt-5 bg-custom-green text-center'></div>
      </div>

      <div className='mt-5 md:mt-10'>
        <div className='grid grid-rows-1 mb-5 md:grid-cols-2 gap-5'>
          <div className='flex flex-col justify-between gap-5 md:gap-0'>
            <input type="text" placeholder='Name' className='w-full h-11 p-2 outline-none text-custom-green' required />
            <input type="email" placeholder='Email' className='w-full h-11 p-2 outline-none text-custom-green' required />
            <input type="tel" placeholder='Phone' className='w-full h-11 p-2 outline-none text-custom-green' required />
          </div>

          <textarea type="text" placeholder='Message' className='w-full h-48 p-2 outline-none text-custom-green' />
        </div>
        <div className='flex justify-center'>
          <button className='w-24 h-12 p-2 text-center transition-all duration-500 ease-in-out text-custom-light bg-custom-green hover:text-custom-green hover:border hover:border-custom-green hover:bg-custom-light'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ContactMessageForm;