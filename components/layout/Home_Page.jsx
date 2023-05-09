import React from 'react'
import Image from 'next/image'
import running_img from '../../public/assets/sneaker_store.jpg'
import { Button, Link } from '@chakra-ui/react'

const Home_Page = () => {

  return (
    <div className='h-[300px] w-full flex justify-center mt-16 mb-[20rem]'>
      <div className='relative h-[500px] w-11/12 mx-auto'>
        <Image className='h-[500px] object-cover rounded-xl w-full' src={running_img} alt="" />
        <div className='absolute top-[10rem] left-[2.5rem] flex flex-col items-center gap-4'>
          <span className='text-white text-4xl'>Get yourself <span className='text-emerald-500'>a pair of the most cutting edge</span></span>
          <span className='text-[#efefefe8] text-3xl'>running shoes to perform at your best.</span>
          <span className='text-[#efefefe8] text-3xl text-emerald-500'>By runners, for runners.</span>
          <Link href="#featured" className='mt-6 bg-emerald-500 text-[#efefef] px-8 py-2 rounded-xl text-[18px]
          transition-all hover:bg-emerald-600'>See now</Link>
        </div>
      </div>
    </div>
  )
}

export default Home_Page