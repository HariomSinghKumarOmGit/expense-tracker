import { FaRegEye, FaRegEyeSlash} from "react-icons/fa6";
import React, { useState } from 'react'

const Input = ({value, onChange, lable, placeholder, type}) => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }




  return (
    <div> 
      <label className='text-xs text-slate-800 ' >{lable} </label>
      <div className="input-box">

        <input
          type={type=='password' ? showPassword ? 'text' : 'password' : type }
          value={value}
          onChange={(e)=>onChange(e)}
          placeholder={placeholder}
          className='w-full bg-transparent focus:outline-none'
          />

        {type === 'password' && (
          <>
          {showPassword ?
          <FaRegEyeSlash 
          size={22}
          className="text-primary cursor-pointer"
          onClick={togglePassword} />
          : 
          <FaRegEye 
          size={22}
          className="text-primary cursor-pointer"
          onClick={togglePassword} />
        }  
          </>
        )}
      </div>
    </div>
    
  )
}

export default Input