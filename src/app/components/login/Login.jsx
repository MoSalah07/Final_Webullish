import React from 'react'
import DetailsLogin from './deatils_login/Details_Login'
import BackGroundLogin from './BackGround_Login'

function Login() {
  return (
      <div className='grid grid-cols-2 h-screen w-full'>
      <DetailsLogin />
      <div className='hidden lg:block'>
          <BackGroundLogin />
      </div>
    </div>
  )
}

export default Login