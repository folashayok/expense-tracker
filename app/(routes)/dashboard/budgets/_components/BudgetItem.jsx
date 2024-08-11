import React from 'react'

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

  import { Button } from '@/components/ui/button';

function BudgetItem({budget}) {
  return (
    <div>
        <Card className="bg-gable-green-500 rounded-md border-slate-600 min-h-52 text-white"> 
            <CardHeader className="text-center text-lg">{budget.name}</CardHeader>
        
            <CardDescription>

            <div className='mt-5 px-2 w-full'>
                <div className='flex flex-row justify-between'>
                    <h2 className='text-xs'>${budget.totalSpend?budget.totalSpend:0} Spent</h2>
                    <h2 className='text-xs'>${budget.amount-budget.totalSpend} Remaining</h2>
                </div>
                <div className='w-full bg-slate-300 h-3 rounded-full'>
                    <div className='w-[40%] bg-blue-400 h-3 rounded-full'>

                    </div>
                </div>
            </div>

            <Dialog>
              <DialogTrigger className='self-center w-full flex pt-5'>
                        <Button className="bg-transparent hover:bg-gable-green-300">
                            Details
                        </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl m-2 flex flex-row justify-between align-baseline">
                    <h1>{budget.name}</h1>
                    <h1>${budget.amount}</h1>
                </DialogTitle>
                  
                </DialogHeader>

                <div className='self-center w-full m-2'>
                    <h1 className='flex flex-row justify-center'> {budget.totalItem} Items </h1>
                </div>

                <div className='px-2 w-full'>
                <div className='flex flex-row justify-between'>
                    <h2 className='text-xs'>${budget.totalSpend?budget.totalSpend:0} Spent</h2>
                    <h2 className='text-xs'>${budget.amount-budget.totalSpend} Remaining</h2>
                </div>
                <div className='w-full bg-slate-300 h-3 rounded-full'>
                    <div className='w-[40%] bg-blue-400 h-3 rounded-full'>

                    </div>
                </div>
            </div>

              </DialogContent>
            </Dialog>

            
          </CardDescription>
        </Card>
    </div>
  )
}

export default BudgetItem