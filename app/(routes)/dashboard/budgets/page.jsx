import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../../../@/components/ui/card"
  
import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger, 
} from '../../../../@/components/ui/dialog'

import { Button } from '../../../../components/ui/button'

  
  
function Budgets() {

// need to map list of budget cards 


  return (
    <section className= 'bg-gray-900 text-white'>

        <h1 className='text-5xl pl-10 pt-10'>Budgets</h1>
        
        <div className='p-10 grid grid-cols-4 gap-x-5 gap-y-5 items-center'>

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

           


        </div>

    </section>
  )
}

export default Budgets