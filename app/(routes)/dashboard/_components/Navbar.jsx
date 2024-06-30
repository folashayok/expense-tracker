import React from 'react'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'



function Navbar() {
  return (
    <div className='p-6 flex items-center justify-between bg-gray-900 text-white'>

      <section className='flex items-center'>
        <Image 
          src={'logo.svg'}
          width={140}
          height={100}
          />
      </section>

      <section className='flex items-center'>
        <h3>Overview</h3>
        <h3 className='mx-5'>Budgets</h3>
        <h3 className='mr-5'>Expenses</h3>
        <h3>Settings</h3>
      </section>

      <section className='flex items-center'>
        <h3 className='mr-3'>Folashayo Kehinde</h3>
        <UserButton className='' />
      </section>

    </div>
  )
}

export default Navbar