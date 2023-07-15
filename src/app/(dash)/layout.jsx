import React from 'react'
import Aside from '../components/aside/Aside'

function layout({children}) {
  return (
      <main className='grid grid-cols-6'>
      <Aside />
      <section className='col-span-5 h-screen bg-secondary-white'> 
          {children}
      </section>
      </main>
  )
}

export default layout