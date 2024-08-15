import React, { useState } from "react";

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
  DialogClose,
} from "../../../../../@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { eq } from "drizzle-orm";
import { format } from "date-fns";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function BudgetItem({ budget, expense, refreshData }) {
  const router = useRouter();
  const [newName, setNewName] = useState();
  const [newAmount, setNewAmount] = useState();

  const onEditBudget = async () => {
    const result = await db
      .update(Budgets)
      .set({
        name: newName,
        amount: newAmount,
      })
      .where(eq(Budgets.id, budget.id));

    if (result) {
      refreshData();
      toast("Budget Edited!");
    }
  };

  const onDeleteBudget = async () => {

    const result = await db.delete(Expenses)
    .where(eq(Expenses.budgetId, budget.id))

   const result2 = await db.delete(Budgets)
   .where(eq(Budgets.id, budget.id));

    if (result&&result2) {
      refreshData();
      toast("Budget Deleted!");
    }
  };


  const isOverMax = budget.totalSpend >= budget.amount;


  const foundExpense = expense.find(item => item.budgetId === budget.id);

  return (
    <div>
      <Card className="bg-gable-green-500 rounded-md border-slate-600 min-h-52 text-white">
        <CardHeader className="text-center text-lg">{budget.name}</CardHeader>

        <CardDescription>
          <div className="mt-5 px-2 w-full">
            <div className="flex flex-row justify-between">
              <h2 className="text-xs">
                ${budget.totalSpend ? budget.totalSpend : 0} Spent
              </h2>
              <h2 className="text-xs">
                ${budget.amount - budget.totalSpend} Remaining
              </h2>
            </div>
            <div className="w-full bg-slate-300 h-3 rounded-full">
              <div className="w-[40%] bg-blue-400 h-3 rounded-full"></div>
            </div>
          </div>

          <Dialog>
            <DialogTrigger className="self-center w-full flex pt-5">
              <Button
                className="w-full bg-transparent hover:bg-gable-green-400"
              >
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

              <div className="self-center w-full">
                <h1 className="flex w-full justify-center">
                  {budget.totalItem} Items{" "}
                </h1>
              </div>
              <div className="px-2 w-full">
  <div className="flex flex-row justify-between">
    <h2 className="text-xs">
      ${budget.totalSpend ? budget.totalSpend : 0} Spent
    </h2>
    <h2 className="text-xs">
      ${budget.amount - budget.totalSpend} Remaining
    </h2>
  </div>
  <div className="w-full bg-slate-300 h-3 rounded-full">


  {
  isOverMax ? (
    <div
      className="h-3 rounded-full"
      style={{
        width: "100%",
        backgroundColor: "red",
      }}
    ></div>
  ) : (
    <div
      className="h-3 rounded-full"
      style={{
        width: `${(budget.totalSpend / budget.amount) * 100}%`,
        backgroundColor: "blue",
      }}
    ></div>
  )
}


{/**
 * 
    <div
      className="h-3 rounded-full"
      style={{
        width: !isOverMax
          ? `${(budget.totalSpend / budget.amount) * 100}%`
          : "100%",
        backgroundColor: isOverMax ? "blue" : "red",
      }}
    ></div>

*/}





  </div>
</div>

              {/**
               * Set ternary operator if width is above 100%
               *  style = {{}}
               */}


               {foundExpense ? <div>
                <h1 className="font-bold text-xl py-2">Recent Expenses</h1>
                <div className="flex flex-row justify-between">
                  <h1>Name</h1>
                  <h1>Date</h1>
                  <h1>Amount</h1>
                </div>
                <div className="bg-slate-200">
                  {expense.map((item, index) =>
                    item.budgetId === budget.id ? ( // Check condition
                      <div className="flex flex-row justify-between">
                        <h2 key={index}>{item.name}</h2>
                        <h2>{item.createdAt}</h2>
                        <h2>${item.amount}</h2>
                      </div>
                    ) : null // Otherwise, do not render anything
                  )}

                  {/**
                   * Map Expenses for specific budget here
                   * Map all expenses, check if id matches budget.id
                   */}
                </div>
              </div>: null}
              

              <div className="flex flex-row justify-center ">
                {/**
                 * Set Dialog and DialogTriggers for each Button
                 */}
                <Button
                  className="m-2"
                  onClick={() => router.push("/dashboard/expenses")}
                >
                  Add Expense
                </Button>

                <Dialog>
                  <DialogTrigger>
                    <Button className="m-2">Edit Budget</Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-2xl">
                        Edit Budget
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
                          value={newName}
                          placeholder={budget.name}
                          className="bg-gray-200 my-2 rounded-lg w-full h-10 pl-2"
                          onChange={(e) => setNewName(e.target.value)}
                        />
                      </section>

                      <section>
                        <h3>Amount</h3>
                        <input
                          type="number"
                          value={newAmount}
                          placeholder={budget.amount}
                          className="bg-gray-200 my-2 rounded-lg w-full h-10 text-start pl-2"
                          onChange={(e) => setNewAmount(e.target.value)}
                        />
                      </section>

                      <DialogClose asChild>
                        <Button
                          disabled={!(newName && newAmount)}
                          className="rounded-lg bg-gable-green-500 hover:bg-gable-green-300 h-11 mt-5 text-xl text-white"
                          onClick={() => onEditBudget()}
                        >
                          Edit
                        </Button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="m-2 bg-red-600 hover:bg-red-800">
                      Delete Budget
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={()=>onDeleteBudget()} className="bg-red-600 hover:bg-red-800">Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </DialogContent>
          </Dialog>
        </CardDescription>
      </Card>
    </div>
  );
}

export default BudgetItem;
