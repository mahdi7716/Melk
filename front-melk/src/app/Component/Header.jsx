import React from 'react'
import Wrapper from './Wrapper'
import Create from './Create'
import Image from 'next/image'
import { AiOutlineLogin } from 'react-icons/ai'

const Header = () => {
  return (
    <div className='h-full w-full bg-cyan-100 '>
      <footer className=' relative container mx-auto p-6 '>
        <div className=' flex items-center justify-between  '>
          <div className=' flex items-center space-x-22   '>
            <Image src="/images/Logo.svg" width={60} height={60} className="" />
            <div className='hidden space-x-10 font-bold lg:flex'>
              <a href="#" className='text-gray-600 hover:text-amber-300'>صفحه اصلی </a>
              <a href="#" className='text-gray-600 hover:text-amber-300'> خرید ملک  </a>
              <a href="#" className='text-gray-600 hover:text-amber-300'>فروش ملک </a>
              <a href="#" className='text-gray-600 hover:text-amber-300'>درباره ما </a>
              <a href="#" className='text-gray-600 hover:text-amber-300'>تماس با ما   </a>
            </div>
          </div>
          <div className=' hidden items-center space-x-6 font-bold text-gray-950 lg:flex'>
            <div className='hover:text-gray-700 '>Login</div>
            <a href="" className='px-8 mx-6 py-3 font-bold text-white bg-cyan-500 rounded-full hover:opacity-70 '>Sign Up</a>

          </div>
          <div>




          </div>
        </div>

      </footer>


    </div>


  )
}

export default Header
