import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 mx-auto max-w-lg'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' className='border p-3 rounded-lg focus:outline-none' id='username' />
        <input type='email' placeholder='Email' className='border p-3 rounded-lg focus:outline-none' id='email' />
        <input type='password' placeholder='Password' className='border p-3 rounded-lg focus:outline-none' id='password' />
        <button disabled type='submit' className='p-3 rounded-lg bg-slate-900 text-white uppercase disabled:opacity-80'>Submit</button>
        <button type='submit' className='border p-3 rounded-lg bg-red-700 text-white uppercase'>Continue with Google</button>
      </form>
      <div className='flex justify-between mt-5'>
      <div className='flex gap-2'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
      <div >
        <Link to='/reset-password'>
          <span className='text-blue-700'>Forgot Password?</span>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default SignUp