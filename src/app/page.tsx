"use client";

import Image from 'next/image'
import {Button, Link} from '@nextui-org/react'; 
import { useState } from 'react';
import { Card, CardBody, CardHeader, Checkbox, Input } from '@nextui-org/react';


export default function Home() {
  
  const [loading, setLoading] = useState(false)

  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <Button
      href="/dashboard"
      as={Link}
      className='bg-emerald-500'
      showAnchorIcon
      variant="solid"
    >
      Button Link
    </Button>
    </main>
  )
}
