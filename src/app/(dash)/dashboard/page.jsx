'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Dashboard() {

  const {push} = useRouter();


  return (
    <section className='bg-secondary-white h-screen overflow-y-auto'>
        dashboard
    </section>
  )
}
