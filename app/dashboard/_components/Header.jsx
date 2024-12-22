"use client"

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {

    const path = usePathname();
    useEffect(() =>{
        console.log(path)
    },[])


  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Image 
            src={'./logo.svg'} 
            width={160} 
            height={100} 
            alt='logo'
            />
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:font-bold  hover:text-primary transition-all cursor-pointer 
                ${path == '/dashboard'&& 'hover:text-primary font-bold'}`}>Dashboard</li>
            <li className={`hover:font-bold  hover:text-primary transition-all cursor-pointer 
                ${path == '/dashboard/questions'&& 'hover:text-primary font-bold'}`}>Questions</li>
            <li className={`hover:font-bold  hover:text-primary transition-all cursor-pointer 
                ${path == '/dashboard/upgrade'&& 'hover:text-primary font-bold'}`}>Upgrade</li>
            <li className={`hover:font-bold  hover:text-primary transition-all cursor-pointer 
                ${path == '/dashboard/working'&& 'hover:text-primary font-bold'}`}>How it works?</li>
        </ul>
        <UserButton />
    </div>
  )
}

export default Header