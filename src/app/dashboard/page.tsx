"use client";

import { Button } from '@nextui-org/button';
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import ToDoList from '@/components/ToDoList';
import Notepad from '@/components/Notepad';
import dynamic from 'next/dynamic';

const PDFReader = dynamic((() => import("@/components/PDFReader")), { ssr: false })
const Pomodoro = dynamic((() => import("@/components/Pomodoro")), { ssr: false })
const Clock = dynamic(() => import("@/components/Clock"), { ssr: false })


export default function Dashboard() {

    return (
        <>
            <Navbar isBlurred isBordered>
                <NavbarContent className='' justify='start'>
                    <NavbarItem>Nav</NavbarItem>
                    <NavbarItem>Bar</NavbarItem>
                    <NavbarItem><a href='https://github.com/vishnuprasad2004'>Github</a></NavbarItem>
                </NavbarContent>
                <NavbarContent justify='end'>
                    <NavbarItem><Clock></Clock></NavbarItem>
                    <NavbarItem><Pomodoro></Pomodoro></NavbarItem>
                </NavbarContent>
            </Navbar>
            <main className="overflow-hidden p-5 flex flex-row gap-6 w-full h-full">
                <div className='flex flex-col w-2/6 gap-6'>
                    <Notepad></Notepad>
                    <ToDoList></ToDoList>
                </div>
                <div className=''>
                    <PDFReader></PDFReader>
                </div>
            </main>
        </>
    )
}
