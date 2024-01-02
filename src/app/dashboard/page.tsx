"use client";

import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { Input, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import ToDoList from '@/components/ToDoList';
import Notepad from '@/components/Notepad';
import Link from 'next/link';
import Clock from '@/components/Clock';
import PDFReader from '@/components/PDFReader';

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
                </NavbarContent>
            </Navbar>
            <main className="overflow-hidden p-5 w-full h-full flex flex-row gap-6">
                <div className='flex flex-col w-2/6 gap-6'>
                    <Notepad></Notepad>
                    <ToDoList></ToDoList>
                    <Input
                        type="file"
                    />
                </div>
                <div className=''>
                    <PDFReader></PDFReader>
                </div>
            </main>
        </>
    )
}
