import React, { useState } from 'react'
import AuthLayout from '../../components/layout/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../assets/Inputs/Input';
import { validateEmail } from '../../utils/helper';

const Signup = () => {

  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    
  }


  return (
    <AuthLayout>
      <div className='lg:w-full h-auto flex flex-col justify-center  md:h-full md:mt-0 '>
        <h3 className='font-semibold text-2xl '>Create an account</h3>
        <p className='text-gray-500  text-sm'>
          Join us today by entering your details below 
        </p>

        <form onSubmit={handleSignUp}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input 
              type="text"
              value={fullName}
              lable="Full Name"
              onChange = {({target}) => setFullName(target.value)}
              placeholder='Madhu '
            />
            <Input 
              value={email}
              onChange={({target})=>setEmail(target.value)}  
              lable="Email Address"
              placeholder="4ladle@working.com"
              type="text"
            />
            <div className='col-span-2'>
              <Input 
                value={password}
                onChange={({target})=>setPassword(target.value)}  
                lable="Password"
                placeholder="Min 8 characters"
                type="password"
              />
            </div>

            
          </div>
        </form>
      </div>
      
    </AuthLayout>
  )
}

export default Signup














