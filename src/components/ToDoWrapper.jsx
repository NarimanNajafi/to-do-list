import React, { useState } from 'react'
import { ToDoForm } from './ToDoForm'
import { v4 as uuidv4 } from 'uuid'
uuidv4();

export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addToDo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])

        console.log(todos);

    }

    return (
        <div className=' bg-gray-500 p-6 m-auto w-2/3 rounded-lg mt-5 flex items-center justify-center' >
            <ToDoForm addToDo={addToDo} />
        </div>

    )
}
