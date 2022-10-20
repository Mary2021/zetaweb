import React from 'react'

const Service = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-2'>
        <div className='grid md:grid-cols-1 gap-2 justify-items-center shadow hover:shadow-lg rounded-lg px-8 py-4'>
          <svg xmlns="http://www.w3.org/2000/svg" alt="Server" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class='w-14 h-14 stroke-orange-500'>
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
          </svg>
          <h1 className='text-2xl font-bold text-start p-4'>Serverimajutus ja seadmete paigaldus (IaaS)</h1>
          <p className='py-5 text-xl'>Paigaldame ja haldame füüsilisi- ning virtuaalseid servereid. Võimalus hoida andmeid ja tarkvara enda kontoris või meie Eestis asuvas pilveserveris. Spetsiaalselt serverimajutuseks ehitatud moodne hoone, valmis 2015 sügisel.</p>
        </div>
        <div className='grid md:grid-cols-1 gap-2 justify-items-center shadow hover:shadow-lg rounded-lg px-8 py-4'>
          <svg xmlns="http://www.w3.org/2000/svg" alt="Display" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 stroke-orange-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          <h2 className='text-2xl font-bold text-center p-4'>DuskCMS sisuhaldus ja e-kaubamaja (SaaS)</h2>
          <p className='py-5 text-xl'>Kohe valmis kasutamiseks veebilehed ja e-pood mis põhinevad kodukootud DuskCMS platvormil. Teie visioon on Internetis vähem kui kahe nädalaga. Loe lähemalt teenuse eelistest ja võimekusest <a href='https://duskcms.com/' target='blank'>DuskCMS.com</a></p>
        </div>
        <div className='grid md:grid-cols-1 gap-2 justify-items-center shadow hover:shadow-lg rounded-lg px-8 py-4'>
          <svg xmlns="http://www.w3.org/2000/svg" alt="Code bracket" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 stroke-orange-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
          <h2 className='text-2xl font-bold text-center p-4'>Tarkvaraarendus</h2>
          <p className='py-5 text-xl'>Programmeerime erilahendusena rakendusi veebi- ja nutiseadmetele. Ole oma toote peremees - võimalus leppida kokku hoolduse üksikasjades ning intellektuaalse omandi õigustes. Meeskond töötab põhiliselt React, Yii2 ja Node tehnoloogiatega.</p>
        </div>
      </div>
    </div>
  )
}

export default Service