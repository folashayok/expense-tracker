"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '../../components/ui/button'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'

function Header() {

    const { user, isSignedIn } = useUser();

  return (
    <div className='p-x-5 flex justify-between items-center bg-gray-900'>
        <Image src={'./logo.svg'}
        alt='logo'
        width={160}
        height={100}
         />

        {isSignedIn ? (
            <UserButton />
        ) : (
            <Link href={"/sign-in"}>
                <Button>Get started</Button>
            </Link>
        )}

        
         
    </div>
  )
}

export default Header