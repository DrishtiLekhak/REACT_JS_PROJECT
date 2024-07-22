import React from 'react'
import {Link} from 'react-router-dom'
const login = () => {
  return (
   

    <div className='h-[90vh] flex justify-center items-center'>
      <div className='border shadow-md rounded-xl p-8 max-w-lg w-full'>
        <h1 className='text-teal-400 font-semibold text-3xl text-center'>Login</h1>

        <form>
            <div className='space-y-2'>
                <label htmlFor='username'> Username </label>
                <input type="text" name="username" id="username"></input>
            </div>
          

            <div className='space-y-1'>
                <label htmlFor='password'> Password </label>
                <input type="password" name="password" id="password"></input>
            </div>

            <button className='bg-teal-500 text-white w-full py-2 rounded-md'>
                Login
            </button>

            <p className='text-sm mt-4'>Doesn't have an account? <Link to='/register'>Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default login
