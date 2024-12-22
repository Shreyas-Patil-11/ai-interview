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
    <div className='m-3 flex p-4 items-center justify-between bg-[#E7E5F3] shadow-sm border rounded-xl'>
        <Image 
            src="/logo4.jpeg" 
            width={150} 
            height={0} 
            alt='logo'
            className='bg-transparent cursor-pointer'
            />
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:font-bold  hover:text-primary transition-all cursor-pointer 
                ${path == '/dashboard'&& 'hover:text-primary text-primary font-bold'}`}>Dashboard</li>
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