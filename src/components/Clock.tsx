"use client";

import { Card } from "@nextui-org/react";
import { useEffect, useState } from "react";


export default function Clock() {

    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Card
            className="p-2 rounded-lg min-w-fit font-mono"
        >{currentTime}
        </Card>
    )

}