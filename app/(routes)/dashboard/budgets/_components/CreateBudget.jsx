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
  } from "../../../../../@/components/ui/dialog";
  
  import { Button } from "../../../../../components/ui/button";
  import { DialogClose } from "@radix-ui/react-dialog";

function CreateBudget() {

    const [amount, setAmount] = useState(); 
    const [name, setName] = useState(); 
    const [onCreateBudget, setOnCreateBudget] = useState();



  return (
    <div className="p-10 grid grid-cols-4 gap-x-5 gap-y-5 items-center">
        <Card className=" bg-slate-800 rounded-lg min-h-40 text-white">
          <CardHeader className="text-center text-lg">Create new budget</CardHeader>

          <CardDescription>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
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

                    <Button 
                    disabled={!(name&&amount)}
                    className="rounded-lg bg-primary h-11 mt-5 text-xl text-white" 
                    onClick={()=>onCreateBudget()}>
                        Add
                    </Button>          
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