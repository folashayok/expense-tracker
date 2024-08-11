'use client'
import React from 'react'
import { useState } from 'react';

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
  
import { Button } from "../../../../../components/ui/button";
import { Budgets } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { toast } from 'sonner';
import { db } from '@/utils/dbConfig'; 
import {listUserBudgets} from './BudgetList';


function CreateBudget({refreshData}) {

    const [amount, setAmount] = useState(); 
    const [name, setName] = useState(); 
    const {user}=useUser();

    /**
     * Used to create new budget
     */

    const onCreateBudget=async()=>{

      const result=await db.insert(Budgets)
      .values({
        name:name,
        amount:amount,
        createdBy:user?.primaryEmailAddress?.emailAddress
      }).returning({insertedId:Budgets.id})

      

      if(result) {
        refreshData()
        toast('New Budget Created!')
      }
    }


  return (
    <div>
        <Card className=" bg-gable-green-500 rounded-md border-slate-600 min-h-52 text-white">
          <CardHeader className="text-center text-lg">Create New Budget</CardHeader>

          <CardDescription>
            <Dialog>
              <DialogTrigger>
                <Button className="bg-transparent hover:bg-gable-green-300">
                    +
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    Create New Budget
                </DialogTitle>
                  {/* 
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                  */}
                </DialogHeader>

                 <div className="flex flex-col">
                    <section>
                        <h3>Name</h3>
                        <input 
                        type="text" 
                        value={name} 
                        placeholder="Travel" 
                        className="bg-gray-200 my-2 rounded-lg w-full h-10 pl-2" 
                        onChange={(e) => setName(e.target.value)}
                        />
                    </section>
                    
                    <section>
                        <h3>Amount</h3>
                        <input 
                        type="number" 
                        value={amount}
                        placeholder="0.00" 
                        className="bg-gray-200 my-2 rounded-lg w-full h-10 text-start pl-2"
                        onChange={(e) => setAmount(e.target.value)}
                        />
                    </section>     

                    <DialogClose asChild>
                      <Button 
                      disabled={!(name&&amount)}
                      className="rounded-lg bg-gable-green-500 hover:bg-gable-green-300 h-11 mt-5 text-xl text-white" 
                      onClick={()=>onCreateBudget()}>
                          Add
                      </Button>   
                    </DialogClose>
                           

                      {/* Try to implement adding new budget from database into BudgetList 1:51:24 */}

                </div>   

                    {/*
                    <DialogFooter>
                        <button type="submit">Add</button>
                    </DialogFooter>
                    */}

              </DialogContent>
            </Dialog>
          </CardDescription>
        </Card>
    </div>
  )
}

export default CreateBudget