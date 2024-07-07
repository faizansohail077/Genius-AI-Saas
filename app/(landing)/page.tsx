"use client"
import { Button } from '@/components/ui/button'
import { useAuth, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div>LandingPage

      <div className="flex items-center gap-5">
        <Link href="/sign-in">
          <Button>Sign In</Button>
        </Link>
      </div>


    </div>
  )
}

export default LandingPage