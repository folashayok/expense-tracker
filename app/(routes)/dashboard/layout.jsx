"use client"
import React, { use, useEffect } from 'react'
import Navbar from './_components/Navbar'
import { db } from '../../../utils/dbConfig'
import { Budgets } from '../../../utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { useRouter } from 'next/navigation'

function DashboardLayout({children}) {

  const {user} = useUser();
  const router = useRouter();

  useEffect(()=>{
    user&&checkUserBudgets();
  },[user])

  const checkUserBudgets=async()=>{
    const result = await db.select()
    .from(Budgets)
    .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))

    console.log(result)
    if(result?.length==0) 
      {
        router.replace('/dashboard/budgets')
    }

    // ^ if user hasn't created a budget yet, automatically reroute to /dashboard/budgets; potential replace later
  }
  
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
      {children}  
      </div>
    </div>
  )
}

export default DashboardLayout