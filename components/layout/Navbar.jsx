import Link from 'next/link'
import React from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { useAuthContext } from '../../ctx/authContext'
import { useCartContext } from '../../ctx/cartContext'
import Cart from '../cart/Cart'

const Navbar = () => {
    const { isCartOpen, toggleCart, cartItems } = useCartContext()
    const {user} = useAuthContext()
    
    return (
        <div className='bg-emerald-500 text-[#efefef] h-[60px] w-full py-2 px-6 flex justify-center'>
            <div className='h-full w-10/12 my-auto flex justify-between items-center'>
                <h2 className='text-3xl'>
                    <Link href='/' className='font-bold'>Sneaker Store</Link>
                </h2>
                <ul className='flex justify-center items-center gap-6 text-[#efefef] text-[18px]'>
                    <Link href="/" className='cursor-pointer transition-all hover:text-[#efefefe6]'>Home</Link>
                    <Link href="/#categories" className='cursor-pointer transition-all hover:text-[#efefefe6]'>Categories</Link>
                    <Link href="/#featured" className='cursor-pointer transition-all hover:text-[#efefefe6]'>Featured</Link>
                    {/* <Link href="/about_us" className='cursor-pointer transition-all hover:text-[#efefefe6]'>About Us</Link> */}
                </ul>
                <div className='flex items-center gap-6'>
                    <div className='relative'>
                        <AiOutlineShoppingCart size={25} onClick={toggleCart} />
                        <span className='absolute -top-3 -right-4 px-2 rounded-full bg-white text-[#222]'>
                            {cartItems?.length}
                        </span>
                        <div className="absolute top-4 -right-16 z-10">
                            {isCartOpen && <Cart />}
                        </div>
                    </div>
                    <span>{user?.username}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar