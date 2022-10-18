import React from 'react'

const Service = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-2'>
        <div className='grid md:grid-cols-1 gap-2 justify-items-center'>
          <img src="/server.png" class="h-12" alt="Phone" />
          <h1 className='text-2xl font-bold text-center p-4'>Serverimajutus ja seadmete paigaldus (IaaS)</h1>
          <p className='py-5 text-xl'>Paigaldame ja haldame füüsilisi- ning virtuaalseid servereid. Võimalus hoida andmeid ja tarkvara enda kontoris või meie Eestis asuvas pilveserveris. Spetsiaalselt serverimajutuseks ehitatud moodne hoone, valmis 2015 sügisel.</p>
        </div>
        <div className='grid md:grid-cols-1 gap-2 justify-items-center'>
          <img src="/display.png" class="h-12" alt="Phone" />
          <h2 className='text-2xl font-bold text-center p-4'>DuskCMS sisuhaldus ja e-kaubamaja (SaaS)</h2>
          <p className='py-5 text-xl'>Kohe valmis kasutamiseks veebilehed ja e-pood mis põhinevad kodukootud DuskCMS platvormil. Teie visioon on Internetis vähem kui kahe nädalaga. Loe lähemalt teenuse eelistest ja võimekusest <a href='https://duskcms.com/' target='blank'>DuskCMS.com</a></p>
        </div>
        <div className='grid md:grid-cols-1 gap-2 justify-items-center'>
          <img src="/branch.png" class="h-12" alt="Phone" />
          <h2 className='text-2xl font-bold text-center p-4'>Tarkvaraarendus</h2>
          <p className='py-5 text-xl'>Programmeerime erilahendusena rakendusi veebi- ja nutiseadmetele. Ole oma toote peremees - võimalus leppida kokku hoolduse üksikasjades ning intellektuaalse omandi õigustes. Meeskond töötab põhiliselt React, Yii2 ja Node tehnoloogiatega</p>
        </div>
      </div>
    </div>
  )
}

export default Service