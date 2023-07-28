import React from 'react'
// Components
import SearchHeading from './searchHeading/SearchHeading'
import NotifcationHeading from './notifcationHeading/NotifcationHeading'

function HeadingContent() {
  return (
      <nav className='flex items-stretch sm:items-center justify-between flex-col gap-6 sm:gap-0 sm:flex-row min-h-[6vh] mb-10 shadow-md px-3 py-4 rounded-primary-rounded'>
          <SearchHeading />
          <NotifcationHeading />
    </nav>
  )
}

export default HeadingContent