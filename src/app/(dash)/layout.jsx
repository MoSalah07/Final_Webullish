import React from 'react'
import Aside from '../components/aside/Aside'
import HeadingContent from '../components/HeadingContent/HeadingContent';

function layout({children}) {
  return (
      <main className='grid grid-cols-6'>
      <Aside />
      <section className='layout_dashboard'>
          <HeadingContent />
          {children}
      </section>
      </main>
  )
}

export default layout;