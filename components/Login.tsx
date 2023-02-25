import { Link, useNavigate } from 'react-router-dom'

import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import InputAdornment from '@mui/material/InputAdornment'
import LeftSide from './LeftSide'
import PasswordInput from './PasswordInput'
import { TextField } from '@mui/material'
import googleLogo from '../assets/google-logo.png'
import { useState } from 'react'

function Login() {
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const handleSubmit = (e: any): void => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className='grid grid-cols-2'>
      <LeftSide />
      <section className='min-ipad:relative'>
        <form className='max-w-md m-auto h-max absolute top-0 bottom-0 left-0 right-0' onSubmit={handleSubmit}>
          <header className='px-3'>
            <h1 className='text-[28px] font-bold'>Welcome Back</h1>
            <p className='text-slate-400 text-base'>Please enter your credentials</p>
          </header>
          <div className='mt-4 px-3'>
            <label className='font-medium'>Email</label>
            <TextField
              type='email'
              size='small'
              margin='dense'
              InputProps={{
                endAdornment: <InputAdornment position='end'><AlternateEmailOutlinedIcon /></InputAdornment>
              }}
              fullWidth
            />
            <label className='font-medium'>Password</label>
            <PasswordInput
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <div className='flex justify-end my-1'>
              <Link to='/forget-password' className='text-sm text-blue-400 cursor-pointer no-underline hover:underline'>Forget Password?</Link>
            </div>
          </div>
          <section className='px-3'>
            <button type='submit' className='mt-2 bg-blue-400 w-full py-[6px] text-lg rounded-md text-white font-medium'>Login</button>
            <div className='border border-solid border-slate-400 mt-2 rounded-md px-3 py-[6px] flex justify-center items-center cursor-pointer hover:border-slate-700'>

              <div className='text-black text-base ml-2 font-medium'>Sign In with Google</div>
            </div>
          </section>
          <div className='mt-5 mb-3 text-center text-sm text-gray-400'>Don't have an account? <Link to='/signup' className='text-blue-400 no-underline hover:underline'>Sign Up</Link></div>
        </form>
      </section>
    </div>
  )
}

export default Login
