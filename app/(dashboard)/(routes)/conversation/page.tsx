"use client"
import { z } from "zod"
import { MessageSquare } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'

import Heading from '@/components/heading'
import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const Conversation = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ''
        },

    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    const isLoading = form.formState.isSubmitting
    return (
        <div>
            <Heading title='Conversation' description='Our most advance conversation model' Icon={MessageSquare} iconColor='text-violet-500' bgColor='bg-violet-500/10' />
            <div className="px-4 lg:px-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
                         <FormField
                            control={form.control}
                            name="prompt"
                            render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-10" >
                                    <FormControl className="m-0 p-0" >
                                        <Input disabled={isLoading} placeholder="How do i calculate radius of circle" className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading} type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
            <div className="space-y-4 m-4">
                <p>messages content</p>
            </div>
        </div>
    )
}

export default Conversation