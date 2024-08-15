import React from 'react'

function ExpenseItem( expense ) {
  return (
    <div className="flex flex-row justify-between">
        <h1>{expense.name}</h1>
        <h1>{expense.createdAt}</h1>
        <h1>{expense.amount}</h1>
    </div>
  )
}

export default ExpenseItem