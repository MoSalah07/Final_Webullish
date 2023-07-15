'use client';
import { useRouter } from 'next/navigation';
// Components
import Login from './components/login/Login';


export default function LoginScreen() {

  const {push} = useRouter();


  return (
    <section className='bg-primary-white max-h-[90vh] '>
      <Login />
    </section>
  )
}
