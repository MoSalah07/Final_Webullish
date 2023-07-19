import React from 'react'
import LogoAside from './logo_aside/LogoAside'
import Aside_List from './aside_list/AsideList'
import SwitchSetting from './switchSetting/SwitchSetting'

function Aside() {
  return (
      <aside className='bg-primary-white flex items-center flex-col lg:overflow-y-auto col-span-1 p-2 md:p-4'>
      <LogoAside />
      <Aside_List />
      <SwitchSetting />
    </aside>
  )
}

export default Aside