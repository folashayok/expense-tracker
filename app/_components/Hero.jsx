"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'


function Hero() {

    const { user, isSignedIn } = useUser();

  return (
    <section className="bg-gray-900 text-white ">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Manage your expenses.

        <span className="sm:block"> Control your money. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Start budgeting now and save tons of money!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
       


      {isSignedIn ? (
            <Link legacyBehavior href={'/dashboard'}>
            <a
               className="block w-full rounded border border-blue-600 bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-primary/90 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
               href="#"
               >
               Get Started Now
           </a>
      </Link>
           
        ) : (
            <Link legacyBehavior href={'/sign-in'}>
             <a
                className="block w-full rounded border border-blue-600 bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-primary/90 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
                >
                Get Started Now
            </a>
       </Link>
            
        )}
        
      </div>
    </div>
  </div>
  
</section>
  )
}

export default Hero