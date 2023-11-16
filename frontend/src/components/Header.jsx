import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const { currentUser } = useSelector(state => state.user)
  console.log(currentUser)
  return (
    <header className='bg-slate-300 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
              <h1 className='font-bold text-sm sm:text-2xl  flex flex-wrap'>
                  <span className='text-slate-500'>Real</span>
                  <span className='text-slate-900'>EstateX</span>
              </h1>
            </Link>
            <form action='' className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type='text' placeholder='Search here' className='bg-transparent focus: outline-none w-24 sm:w-64' />
                <FaSearch className='text-slate-700' />
            </form>
            <ul className='flex gap-4'>
              <Link to='/'><li className='hidden sm:inline hover:underline hover:text-blue-800'>Home</li></Link>
              <Link to='/about'><li className='hidden sm:inline hover:underline hover:text-blue-800'>About</li></Link>
              <Link to='/profile'>{ currentUser ? 
              (<img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile'/>):
              (<li className='hover:underline hover:text-blue-800'>Sign In</li>)}</Link>
            </ul>
        </div>
    </header>
  )
}

export default Header