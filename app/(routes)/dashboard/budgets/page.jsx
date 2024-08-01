import React from "react";

import BudgetList from "./_components/BudgetList";
import CreateBudget from "./_components/CreateBudget";


function Budgets() {
  // need to map list of budget cards

  return (
    <div className="bg-gray-900 text-white">
      <h2 className="font-bold text-3xl ml-10">My Budgets</h2>
      <BudgetList/>
      <CreateBudget/>
    </div>
  );
}

export default Budgets;


/* 
<section className="bg-gray-900 text-white">
      <h1 className="text-5xl pl-10 pt-10">Budgets</h1>

      <div className="p-10 grid grid-cols-4 gap-x-5 gap-y-5 items-center">
        {/* 
        <Card className='bg-primary rounded-lg min-h-64 text-white'>
                <CardHeader>
                    Create new budget
                </CardHeader>

                <CardDescription>
                    <Dialog>

                        <DialogTrigger>
                            <Button>+</Button>
                        </DialogTrigger>

                        <DialogContent>
                            <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                            </DialogHeader>
                        </DialogContent>

                    </Dialog>
                </CardDescription>

            </Card>
            //}

        

        

        //    </div>
         //   </section>
*/
