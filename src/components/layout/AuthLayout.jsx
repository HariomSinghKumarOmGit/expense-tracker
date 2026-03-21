import React from 'react'
import card2 from '../../assets/images/card2.png'
import { LuTrendingUpDown } from 'react-icons/lu'

const AuthLayout = ( { children } ) => {
  return ( 
    <div className='flex'>

      <div className='w-screen h-screen md:[60vh] pd-2 px-12  '>
        <h1 className='font-medium text-2xl text-gray-900  '>
          Expence tracker
        </h1>
          {children}
      </div>

      <div className='hidden md:block w-[40vw] h-screen bg-auth-bg-img bg-violet-50 bg-no-repeat bg-cover bg-center overflow-hidden relative pd-8 '>
        <div className='w-48 h-48 bg-purple-500 rounded-2xl absolute -top-7 -left-7 ' />
        <div className='w-48 h-48  border-8 border-fuchsia-500 rounded-2xl absolute top-8 -right-8 ' />
        <div className='w-48 h-48 bg-violet-500 rounded-2xl absolute -bottom-7 -left-7 ' />
    
        <div className='grid grid-cols-1 z-20 '>
          <StatsInfoCard 
            icon={<LuTrendingUpDown />}
            label="Track your Income & Expenses"
            value="435,980"
            color="bg-primary"
          />
        </div>

        <img 
          className='w-64 lg:w-[90vw] absolute bottom-10 shadow-lg shadow-blue-400/15 '
          src={card2}
        />
      </div>
    </div>
  )
}

export default AuthLayout

const StatsInfoCard = ( {icon, label, value, color}) => {
  return (
    <div className='z-10 flex gap-6 bg-white p-4 shadow-md shadow-purple-500/15 drop-shadow-xl rounded-2xl border border-gray-200/5 '>
      <div className={` w-12 h-12 flex items-center justify-center text-2xl text-white ${color} rounded-full drop-shadow-xl `}>
    {icon}
    </div>
    <div>
      <h6 className='text-gray-500 text-sm mb-1 font-medium '>{label}</h6>
      <span className='text-gray-900 text-2xl font-bold '>${value}</span>
    </div>
    </div>
  )
  

}