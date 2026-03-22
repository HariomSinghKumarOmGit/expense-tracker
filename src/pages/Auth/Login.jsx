import React, { useState } from 'react'
import AuthLayout from '../../components/layout/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../assets/Inputs/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[error, setError] = useState('');


  const navigate = useNavigate('');


  //hanle login form on submil 
  const handleLogin = (e) => {}

  return (
    <AuthLayout>
      <div className = 'lg:w[70%] h-3/4 md:w-full flex flex-col justify-center '>
        <h3 className=" text-3xl font-semibold text-black " >Welcome to login page</h3>
        <p className='text-xl text-gray-800 mt-2  '>Please enter your credentials to login</p>

        <form onSubmit={handleLogin} >
          <Input 
            value={email}
            onChange={({target})=>setEmail(target.value)}  
            lable="Email Address"
            placeholder="4ladle@working.com"
            type="text"
          />
          <Input 
            value={password}
            onChange={({target})=>setPassword(target.value)}  
            lable="Password"
            placeholder="Min 8 characters"
            type="password"
          />

          {error && <p className='text-red text-2xl p-4 '>{error}</p> }

          <button type='submit' className='mt-2 mb-2 w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-500/50 transition-colors ' >
          Login 
          </button>

          <p>
            Dont have account?{"    "}
            <Link to="/signup" className='text-gray-950 hover:text-purple-500  underline decoration-purple-600 ' >Signup</Link>
          </p>
        </form>


      </div>
    </AuthLayout>
    
  )
}

export default Login