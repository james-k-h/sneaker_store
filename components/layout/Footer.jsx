import React from 'react'
import { Text, VStack } from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer id="footer" className='h-full w-full flex justify-center mt-[10rem] pb-12'>
      <div className='h-full w-10/12 grid grid-cols-2 justify-between'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-emerald-600 font-bold'>FAQ</h2>
<Text className='font-bold text-emerald-600'>Legal Notice </Text>
          <Text>This site is not intended to retail goods, it merely exists to serve 
            as a demonstration of programming aptitude. The creator accepts no responsibility or liability whatsoever with regard to the content on this site.
          </Text>

          <Text className='font-bold text-emerald-600'>Refund policy</Text>
          <Text>We have a 30-day full refund guarantee. You can call our toll free number, 1-800-SNEAKERS for more information.</Text>
        </div>
        <div className='flex flex-col gap-4 px-4'>
          <h2 className='text-2xl mb-8 text-emerald-600 font-bold'>Privacy Policy</h2>
          <Text whiteSpace="break-spaces">
          All information collected is used solely to process orders successfully. Your privacy is important to us; we take precautions to ensure 
          your data is stored safely and securely. 
          <br/>
          <br/>
          For general privacy inquiries, contact us via Email.
          <br/>
          <br/>
          <b>Email </b>: Sneaker.Store@Sneakers.com
          </Text>
        </div>
      </div>
    </footer>
  )
}

export default Footer