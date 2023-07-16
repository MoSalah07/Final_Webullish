import React from 'react';
import Image from 'next/image';

function NotifcationHeading() {
  return (
    <div className='flex items-center justify-between sm:justify-stretch sm:gap-6 order-[-1] sm:order-[1]'>
      <div>
        <Image src={`/assets/images/heading/notifcation.svg`} alt='notifcation' width={24} height={24} priority/>
      </div>
      <div className='flex items-center gap-2 sm:gap-4'>
        <Image src={`/assets/images/heading/imageProfile.svg`} alt='image_profile' width={30} height={30}/>
        <div>
          <h5 className='capitalize text-sm sm:text-base text-primary-text'>jhone smith</h5>
          <p className='text-text-light text-xs'>jhone@gmail.com</p>
          </div>
      </div>
    </div>
  )
}

export default NotifcationHeading