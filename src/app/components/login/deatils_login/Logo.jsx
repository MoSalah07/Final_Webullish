import React from 'react';
import Image from 'next/image';

function Logo() {
  return (
      <section className=''>
          <Image src={`/assets/images/login/webullish-newnew-logo_1.svg`} alt='Logo_Login' height={250} width={250} priority/>
    </section>
  )
}

export default Logo