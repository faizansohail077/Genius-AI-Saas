import React from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './mobile-sidebar'

const Navbar = () => {
  return (
    <div className='flex items-center p-4' >
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSwitchSessionUrl='/' />
      </div>
    </div>
  )
}

export default Navbar