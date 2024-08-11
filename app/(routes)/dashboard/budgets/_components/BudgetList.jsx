"use client"
import React, { useState, useEffect } from 'react'
import CreateBudget, {refresg} from './CreateBudget'
import { db } from '@/utils/dbConfig';
import { Budgets, Expenses } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm'
import { index } from 'drizzle-orm/mysql-core';
import { toast } from 'sonner';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "../../../../../@/components/ui/dialog";
import BudgetItem from './BudgetItem';



function BudgetList() {

  const [budgetList, setBudgetList] = useState([])
  const {user} = useUser();

  useEffect(()=>{
    user&&getBudgetList();
  }, [user])
  /**
   * used to get budget list
   */
    const getBudgetList=async()=> {

      const result = await db.select({
        ...getTableColumns(Budgets),
        totalSpend:sql `sum(${Expenses.amount})`.mapWith(Number),
        totalItem: sql `count(${Expenses.id})`.mapWith(Number)
      }).from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
      .groupBy(Budgets.id)
      .orderBy(desc(Budgets.id))

      setBudgetList(result)
    }


  return (
    <div className="p-10 grid grid-cols-4 gap-x-5 gap-y-5 items-center">
      <CreateBudget 
        refreshData={()=>getBudgetList()}
      />
      {budgetList?.length>0? budgetList.map((budget, index) => (
            <BudgetItem budget={budget}/>
      ))
    : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
      <div key={index} className='w-full bg-gable-green-400 rounded-lg h-[13rem] animate-pulse'>

      </div>
    ))
    }
        <button>Clear all</button>
    </div>
  )
}

export default BudgetList
