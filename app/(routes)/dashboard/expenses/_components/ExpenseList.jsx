"use client"
import React from 'react'
import CreateExpense from './CreateExpense'

function ExpenseList() {
  
  return (
    <div>
      <CreateExpense
      refreshData={()=>null}
      />
    </div>
  )
}

export default ExpenseList