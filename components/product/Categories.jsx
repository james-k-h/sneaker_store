import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img1 from '../../public/assets/nike_grey_trainer_1.jpg'
import img2 from '../../public/assets/asics_womens.jpg'
import img3 from '../../public/assets/nike_kids.jpg'

const Categories = () => {
  return (
    <div id="categories" className='h-[300px] w-full flex justify-center font-bold'>
      <div className='h-full w-10/12'>
        <h2 className='mb-8 text-3xl text-[#333] text-emerald-500' >Categories</h2>
        <div className='h-full w-full flex items-center justify-between'>
          <Link href='/category/Mens' className="h-[325px] w-[325px] relative">
            <Image src={img1} alt="test" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-emerald-500 px-6 py-2 text-white">Mens</span>
          </Link>
          <Link href='/category/Womens' className="h-[325px] w-[325px] relative">
            <Image src={img2} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-emerald-500 px-6 py-2 text-white">Womens</span>
          </Link>
          <Link href='/category/Children' className="h-[325px] w-[325px] relative" >
            <Image src={img3} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-emerald-500 px-6 py-2 text-white">Children</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories