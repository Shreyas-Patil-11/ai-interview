"use client"

import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Header = () => {

    const router = useRouter()
    const { user, isLoaded, isSignedIn } = useUser();
    const [isScrolled, setIsScrolled] = useState(false);


    const path = usePathname();
    useEffect(() => {
        console.log(path)
    }, [])

    const onDashboard = () => {
        router.push("/dashboard")
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className={`fixed top-0 left-0 right-0 m-3 z-50 flex p-4 items-center justify-between 
            ${isScrolled ? 'bg-opacity-70 backdrop-blur-md' : 'bg-[#dcd8f7]'} 
            shadow-sm border-b rounded-b-xl transition-all duration-300 bg-[#dcd8f7]`}>
            <Image
                src="/logo4.jpeg"
                width={150}
                height={0}
                alt='logo'
                className='bg-black cursor-pointer hover: bg-transparent border rounded-full'
                onClick={onDashboard}
            />
            <ul className='hidden md:flex gap-6'>
                <li className={`hover:font-bold  hover:text-primary transition-all cursor-pointer 
                ${path == '/dashboard' && 'hover:text-primary text-primary font-bold'}`}
                    onClick={onDashboard}>Dashboard</li>
                <li className={`hover:font-bold  hover:text-primary transition-all cursor-pointer 
                ${path == '/dashboard/questions' && 'hover:text-primary font-bold'}`}>Questions</li>
                <li className={`hover:font-bold  hover:text-primary transition-all cursor-pointer 
                ${path == '/dashboard/upgrade' && 'hover:text-primary font-bold'}`}>Upgrade</li>
                <li className={`hover:font-bold  hover:text-primary transition-all cursor-pointer 
                ${path == '/dashboard/working' && 'hover:text-primary font-bold'}`}>How it works?</li>
            </ul>

            {
                isSignedIn ? <UserButton /> :
                    <div>
                        <div className='flex gap-4'>
                            <Button
                                size='sm'
                                variant='outline'
                                className='w-full'
                                onClick={onDashboard}
                            >
                                Sign In
                            </Button>
                            <Button
                                size='sm'
                                className='w-full'
                                onClick={onDashboard}
                            >
                                Login
                            </Button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Header