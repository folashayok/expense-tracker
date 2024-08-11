"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/dbConfig";
import { eq } from "drizzle-orm";

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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUser } from "@clerk/nextjs";
import { Budgets, Expenses } from "@/utils/schema";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { DayPicker } from "react-day-picker";
import { Calendar as CalenderIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

function CreateExpense({refreshData}) {


  const { user } = useUser();
  const [budgetNames, setBudgetNames] = useState([]);
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState(); 
  const [name, setName] = useState(); 
  const [budget, setBudget] = useState(); 
  const [id, setId] = useState();

  useEffect(() => {
    if (user) {
      fillSelectList();
    }
  }, [user]);

  const fillSelectList = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));

    const names = result.map((item) => item.name);
    setBudgetNames(names);

    const IDs = result.map((item) => item.id);
    setId(IDs)
  };

  const onCreateExpense = async() => {
    const result = await db
    .insert(Expenses)
    .values({
      name:name,
      amount:amount,
      budgetId:parseInt(id),
      createdAt:date,
    })

    if(result) {
      refreshData()
      toast('New Budget Created!')
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button
            className="bg-transparent hover:bg-gable-green-300"
            onClick={() => fillSelectList()}
          >
            Create New Expense
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">Create New Expense</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col">
            <section>
              <h3>Name</h3>
              <input
                type="text"
                value={name}
                placeholder="Shopping"
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

            <section>
              <h3>Date</h3>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className={cn(
                      "w-[280px] mt-1 mb-2 justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalenderIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-3">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="rounded-md border"
                  />
                </PopoverContent>
              </Popover>
            </section>

            <section className="mt-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Budgets</SelectLabel>
                    {budgetNames.map((name, index) => (
                      <SelectItem value={name} key={index} onChange={(e) =>setBudget(e.target.value)}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </section>

            <DialogClose asChild>
              <Button
                //  disabled={!(name&&amount)}
                className="rounded-lg bg-gable-green-500 hover:bg-gable-green-300 h-11 my-5 text-xl text-white"
                onClick={()=>onCreateExpense()}
              >
                Add
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateExpense;
