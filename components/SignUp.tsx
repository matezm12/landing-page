import { InputAdornment, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded'
import Head from "next/head";
import LeftSide from '../components/LeftSide'
import PasswordInput from '../components/PasswordInput'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import SectionTitle from "../components/SectionTitle";
import googleLogo from '../assets/google-logo.png'
import { useState } from 'react'

export interface ILogo {
  //   image: HTMLImageElement;
  src: string;

}




const SignUp = () => {
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const handleSubmit = (e: any): void => {
    e.preventDefault()
    navigate('/login')
  }

  return (
    <div className='grid grid-cols-2'>
      <LeftSide />
      <section className='min-ipad:relative'>
        <form className='max-w-md m-auto h-max absolute top-0 bottom-0 left-0 right-0' onSubmit={handleSubmit}>
          <header className='px-3'>
            <h1 className='text-[28px] font-bold'>Create an account</h1>
            <p className='text-slate-400 text-base'>Lets get started with 30-day free trial.</p>
          </header>
          <section className='mt-4 px-3'>
            <label className='font-medium'>Username</label>
            <TextField
              type='text'
              size='small'
              margin='dense'
              InputProps={{
                endAdornment: <InputAdornment position='end'><PersonRoundedIcon /></InputAdornment>
              }}
              fullWidth
            />
            <label className='font-medium'>Email</label>
            <TextField
              type='email'
              size='small'
              margin='dense'
              InputProps={{
                endAdornment: <InputAdornment position='end'><AlternateEmailRoundedIcon /></InputAdornment>
              }}
              fullWidth
            />
            <label className='font-medium'>Password</label>
            <PasswordInput
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </section>
          <section className='px-3 mt-2'>
            <button type='submit' className='mt-2 bg-blue-400 w-full py-[6px] text-lg rounded-md text-white font-medium'>Sign Up</button>
            <div className='border border-solid border-slate-400 mt-2 rounded-md px-3 py-[6px] flex justify-center items-center cursor-pointer hover:border-slate-700'>

              <div className='text-black text-base ml-2 font-medium'>Sign Up with Google</div>
            </div>
          </section>
          <div className='mt-5 mb-3 text-center text-sm text-gray-400'>Already have an account? <Link to='/login' className='text-blue-400 no-underline hover:underline'>Sign In</Link></div>
        </form>
      </section>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>SignUp | Theometrics</title>
      </Head>
      <main>
        <SignUp />
      </main>
    </>
  );
}
