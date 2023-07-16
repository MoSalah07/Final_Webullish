import React from 'react';
import Image from 'next/image';

function TeamCard({name, position, description, image}) {
  return (
    <div className='border-2 border-border-color'>
      <div className='w-full'>
        <Image src={image} alt={name} width={310} height={230} priority className='w-full'/>
      </div>
      <div className='p-4 flex flex-col justify-center gap-3 mt-4'>
        <h4 className='text-xl font-semibold'>{name}</h4>
        <span className='text-text-dark'>{position}</span>
        <p className='text-text-light'>{description}</p>
      </div>
      <div className='flex items-center justify-between p-4'>
        <button className='py-[6px] px-5 rounded-primary-rounded capitalize bg-transparent text-secondary-blue text-sm border-secondary-blue  border'>update</button>
        <button className='py-[6px] px-5 rounded-primary-rounded capitalize text-sm bg-primary-red text-primary-white'>delete</button>
      </div>
    </div>
  )
}

export default TeamCard