import React from 'react'
import AuthLayout from '../../components/layout/AuthLayout'

const Login = () => {
  return (
    <AuthLayout>
      <div className = 'lg:w[70%] h-3/4 md:w-full flex flex-col justify-center '>
        <h3 className=" text-3xl font-semibold text-black " >Welcome to login page</h3>
        <p className='text-xl text-gray-800 mt-2  '>Please enter your credentials to login</p>
      </div>
    </AuthLayout>
    
  )
}

export default Login