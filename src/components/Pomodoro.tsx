"use client";

import { useState } from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";



export default function Pomodoro() {

    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    }

    const [currentTime, setCurrentTime] = useState(getCurrentTime());
    const [isBreak, setIsBreak] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} className="p-8">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center text-2xl">This is your <span className="text-rose-700 text-6xl">5</span> minute break.</ModalHeader>
                            
                           
                        </>
                    )}
                </ModalContent>
            </Modal>

            <Card
                className="p-0"
            >
                <CardBody className="p-0">
                    <Button onPress={onOpen} className="font-mono text-md">{"Pomodoro Clock"}</Button>
                </CardBody>
            </Card>
        </>
    )
}

