"use client";


import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { Card, CardBody, CardHeader, Checkbox, Textarea } from '@nextui-org/react';
import {Chip} from "@nextui-org/react";



export default function Notepad() {
    return( 
        <Card className='p-2'>
            <Textarea
                // description="You can write all you want here..."
                label="Notepad"
                placeholder='You can write all you want here...'
                maxRows={10}
                minRows={10}
                variant='flat' 
            />
        
        </Card>
    )
}