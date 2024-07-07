"use client"
import { cn } from '@/lib/utils'
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-500"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-500"
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500"
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-500"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
        color: ""
    },
]

const Sidebar = () => {
    return (
        <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white' >
            <div className="px-3 py-2 flex-1">
                <Link href={"/dashboard"} className='flex items-center pl-3 mb-14' >

                    <h1 className='text-2xl font-bold' >Genius</h1>
                </Link>
                <div className="space-y-1">
                    {routes?.map((route, index) => {
                        return (
                            <Link href={route.href} className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition" key={route.href} >
                                <div className="flex items-center flex-1">
                                    <route.icon className={cn(`w-6 h-6 mr-3`,route.color)} />
                                    {route.label}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar