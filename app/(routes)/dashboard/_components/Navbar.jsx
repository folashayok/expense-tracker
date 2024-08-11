import React from 'react'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'



function Navbar() {

  // need to map redirect pages

  const router = useRouter();

  return (
    <div className='p-6 flex items-center justify-between bg-gable-green-700 text-white'>

      <section className='flex items-center'>
        <Image 
          src={'logo.svg'}
          width={160}
          height={100}
          />
      </section>

      <section className='flex items-center'>
        <button onClick={()=>(router.push('/dashboard'))}>Overview</button>
        <button onClick={()=>(router.push('/dashboard/budgets'))} className='mx-5'>Budgets</button>
        <button onClick={()=>(router.push('/dashboard/expenses'))} className='mr-5'>Expenses</button>
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