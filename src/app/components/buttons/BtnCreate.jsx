import React from 'react';
import Image from 'next/image';

function BtnCreate({ setIsCreated }) {
  return (
    <button onClick={() => setIsCreated(true)} className='bg-primary-btn text-primary-white flex items-center justify-center gap-2 sm:gap-4 w-28 sm:w-40 py-2 rounded-primary-rounded'>
      <p className='w-[15px] h-[15px]'>
      <Image src={`/assets/images/btns/add.svg`} alt='btn-create' width={15} height={15} priority className='w-full h-full'/>
      </p>
      <span className='uppercase font-normal tracking-wider text-sm'>create</span>
    </button>
  )
}

export default BtnCreate