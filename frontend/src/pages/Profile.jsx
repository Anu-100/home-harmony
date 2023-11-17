import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { currentUser } = useSelector(state => state.user)
  return (
    <div className='mx-auto max-w-lg p-3'>
      <h1 className='text-3xl text-center font-semibold my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img className='rounded-full h-20 w-20 self-center object-cover mt-3' src={currentUser.avatar} alt='profile' />
        <input type='text' placeholder='Username' id='Username' className='border rounded-lg p-3 focus:outline-none'/>
        <input type='email' placeholder='Email' id='Email' className='border rounded-lg p-3 focus:outline-none'/>
        <button className='bg-blue-800 text-white p-3 rounded-lg'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700'>Delete Account</span>
        <span className='text-blue-800'>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile