import React from 'react';
import Image from 'next/image';

function WelcomeLogin() {
  return (
      <div className=' w-full sm:w-[60%]'>
          <div className='flex items-center justify-center sm:justify-stretch'>
              <h3 className=' text-xl sm:text-3xl tracking-wider font-medium text-primary-text'>Welcome back!</h3>
              <Image src={`/assets/images/login/hand.svg`} alt='logo' height={40} width={40}/>
          </div>
          <p className=' text-text-light mt-2 text-center sm:text-left text-sm sm:text-lg'>Start managing your app better.</p>
    </div>
  )
}

export default WelcomeLogin;