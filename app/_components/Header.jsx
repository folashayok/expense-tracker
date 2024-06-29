import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='p-5 flex justify-between items-center bg-gray-900'>
        <Image src={'./logo.svg'}
        alt='logo'
        width={160}
        height={100}
         />

         <Button>Get started</Button>
    </div>
  )
}

export default Header