import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-2 justify-items-center'>
        <div className='grid md:grid-cols-1 gap-2 justify-items-center shadow hover:shadow-lg rounded-lg px-14 py-4'>
          <svg xmlns="http://www.w3.org/2000/svg" alt="Phone" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-orange-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <p className='py-5 text-xl'>+372 500 000 00</p>
        </div>
        <div className='grid md:grid-cols-1 gap-2 justify-items-center shadow hover:shadow-lg rounded-lg px-8 py-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-orange-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <p className='py-5 text-xl'><a href='mailto:madis.mannik@z-bit.ee' target='blank'>info@zeta.ee</a></p>
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