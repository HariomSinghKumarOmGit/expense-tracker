import React, { useState } from 'react'
import AuthLayout from '../../components/layout/AuthLayout'
import { useNavigate } from 'react-router-dom';
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

        </form>


      </div>
    </AuthLayout>
    
  )
}

export default Login