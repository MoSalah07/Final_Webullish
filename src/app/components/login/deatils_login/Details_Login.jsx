import React from 'react'
import Logo from '../deatils_login/Logo';
import WelcomeLogin from './Welcome_Login';
import LoginForm from './Login_Form';

function DetailsLogin() {
  return (
    <div className=' col-span-2 lg:col-span-1 p-10 flex flex-col gap-6 sm:gap-8 items-center justify-center w-full h-full'>
      <Logo />
      <WelcomeLogin />
      <LoginForm />
    </div>
  )
}

export default DetailsLogin;