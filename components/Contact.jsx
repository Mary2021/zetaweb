import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-2 justify-items-center'>
      <div className='grid md:grid-cols-1 gap-2 justify-items-center'>
        <img src="/phone.png" class="h-8" alt="Phone" />
        <p className='py-5 text-xl'>+372 580 427 42</p>
        </div>
        <div className='grid md:grid-cols-1 gap-2 justify-items-center'>
        <img src="/email.png" class="h-8" alt="E-mail" />
        <p className='py-5 text-xl'><a href='mailto:madis.mannik@z-bit.ee' target='blank'>madis.mannik@z-bit.ee</a></p>
        </div>
      </div>
    </div>
  )
}


    // <div className='max-w-[1240px] m-auto p-4 h-screen'>
    //     <h1 className='text-2xl font-bold text-center p-4'>Let's work together</h1>
    //     <form className='max-w-[600px] m-auto'>
    //         <div className='grid grid-cols-2 gap-2'>
    //             <input className='border shadow-lg p-3' type="text" placeholder='Name' />
    //             <input className='border shadow-lg p-3' type="email" placeholder='Email' />
    //         </div>
    //         <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
    //         <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
    //         <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
    //     </form>
    // </div>

export default Contact