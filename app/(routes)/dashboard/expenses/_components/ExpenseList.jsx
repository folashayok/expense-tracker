"use client"
import CreateExpense from './CreateExpense'
import React, { useState, useEffect } from 'react'
import { db } from '@/utils/dbConfig';
import { Budgets, Expenses } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm'
import { index } from 'drizzle-orm/mysql-core';
import { toast } from 'sonner';
import ExpenseItem from './ExpenseItem';

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
import BudgetItem from '../../budgets/_components/BudgetItem';
import { get } from 'https';

function ExpenseList() {

  const [budgetList, setBudgetList] = useState([])
  const [allExpenseList, setAllExpenseList] = useState([])
  const {user} = useUser();

  useEffect(()=>{
    user&&getBothList();
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

    const getExpenseList=async()=> {
      
      const result = await db.select({
        ...getTableColumns(Expenses),
      }).from(Budgets, Expenses)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.id, Expenses.budgetId))

      setAllExpenseList(result)
    }

    const getBothList = async() => {
      getExpenseList()
      getBudgetList()
    }
  
  return (
    <div>
      <CreateExpense
      refreshData={getBothList()}
      />

      {/**
       * 
       */}

      {allExpenseList?.length>0? allExpenseList.map((expense, index) => (
        <div className="flex flex-row justify-between p-5 hover:bg-slate-500">
          <h1>{expense.name}</h1>
          <h1>{expense.createdAt}</h1>
          <h1>${expense.amount}</h1>
        </div>
      ))
    : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
      <div key={index} className='w-full bg-gable-green-400 rounded-lg h-[13rem] animate-pulse'>

      </div>
    ))
    }
    </div>
  )
}

export default ExpenseList