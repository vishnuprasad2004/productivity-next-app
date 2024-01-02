"use client"

import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { Card, CardBody, CardHeader, Checkbox, Input } from '@nextui-org/react';
import { Chip } from "@nextui-org/react";


export default function ToDoList() {

    const [input, setInput] = useState("");
    const [priority, setPriority] = useState(false)
    const [completedTasks, setCompletedTasks] = useState(0)
    const [todos, setTodos] = useState([{
        id: 0,
        task: "",
        completed: false,
        hasPriority: false
    }])
    const [loading, setLoading] = useState(false)

    function add() {
        const id = todos.length + 1
        if(input.includes("-p")) {
            // alert("ddkdjkd")
            setPriority(true)
            setInput(input.replace("-p",""))
        }
        setTodos((prev) => [
            ...prev,
            {
                id: id,
                task: input,
                completed: false,
                hasPriority: priority
            },
        ])
        setInput("")
    }


    function deleteAll() {
        setTodos([])
    }

    return (

        <Card className=''>
            <CardHeader className='mb-0 pb-0'>
                <h1>Add your Todos</h1>
            </CardHeader>
            <CardBody>
                <div className='flex gap-2'>
                    <Input
                        value={input}
                        onKeyDown={(e) => { if(e.key == "Enter") add() }}
                        onChange={(e) => setInput(e.target.value)}
                        size='sm'
                        labelPlacement='outside-left'
                        label="Add Here"
                        className='pb-2 pt-0 w-max'
                        fullWidth
                        description="Add '-p' to the text for a priority badge &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    />
                    <Button
                        // color='secondary'
                        isIconOnly
                        onClick={add}
                        size='sm'
                        className='mr-2 pl-0 pr-0 bg-yellow-300 hover:bg-yellow-400'
                        aria-label='add'
                    >+</Button>
                    <Button
                        size='sm'
                        // color='danger'
                        // variant='ghost'
                        className='bg-rose-500 hover:bg-rose-600'
                        aria-label='clear all'
                        onClick={deleteAll}
                    >Clear All
                    </Button>
                </div>
                <div id='checkboxes' className='flex flex-col gap-2'>
                    {todos.map((todo) => {
                        if (todo.id === 0 || todo.task === "") return (<></>)
                        return (
                            <>
                                <Checkbox
                                // isSelected={todo.completed} onValueChange={setTodos()}
                                onValueChange={e => setCompletedTasks(completedTasks+1)}
                                >
                                    {todo.task}
                                    {todo.hasPriority ? <Chip size='sm' color='secondary' className='ml-1 p-1 text-xs'>priority</Chip>:<></>}
                                </Checkbox>
                            </>
                        )
                    })}

                </div>
            </CardBody>
        </Card>

    )

}