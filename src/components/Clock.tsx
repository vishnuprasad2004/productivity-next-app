"use client";

import { Card } from "@nextui-org/react";
import { useEffect, useState } from "react";


export default function Clock() {
    
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const timerId = setInterval(() => setDate(new Date()),1000)
        return function cleanup() {
            clearInterval(timerId)
        }
    },[])

    return(
        <Card
            className="p-2 rounded-lg min-w-fit font-mono"    
        >{date.toLocaleTimeString()}</Card>
    )

}