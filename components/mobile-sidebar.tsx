"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from './Sidebar'


const MobileSidebar = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <Button variant={"ghost"} size={"icon"} className='md:hidden' >
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side={"left"} className='p-0'>
                    <Sidebar />
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default MobileSidebar