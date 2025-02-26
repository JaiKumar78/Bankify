"use client";

import React from 'react'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const MobileNavBar = ({ user }: MobileNavProps) => {
  const pathName = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
        <SheetTrigger>
          <Image src='/icons/hamburger.svg' width={30} height={30} alt='menu-icon'/>
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-white'>
          <SheetTitle>
          <Link href='/' className='cursor-pointer flex items-center gap-1 px-4'>
            <Image src='./icons/logo.svg' alt='logo' width={34} height={34} />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
          </Link>
          </SheetTitle>
          <div className='mobilenav-sheet'>
            <SheetClose asChild>
              <nav className='flex h-full flex-col text-white gap-6 pt-16'>
                {sidebarLinks.map((item) => {
                  const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close', {'bg-bank-gradient': isActive})}>
                              <Image 
                              className={cn({'brightness-[3] invert-0': isActive})}
                              src={item.imgURL}
                              alt={item.label}
                              width={20}
                              height={20}
                              />
                          <p className={cn('text-16 font-semibold text-black-2', {'text-white': isActive})}>{ item.label }</p>
                      </Link>
                    </SheetClose> 
                  )
                })}
                USER
              </nav>
            </SheetClose>
            USER
          </div>
        </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNavBar