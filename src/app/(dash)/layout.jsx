import React from 'react'
import Aside from '../components/aside/Aside'
import HeadingContent from '../components/HeadingContent/HeadingContent';


export const metadata = {
  title: "Dashboard_Webullish",
  description: "Generated by Webulish",
};

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