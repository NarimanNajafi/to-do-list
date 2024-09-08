import React, { useState } from 'react'

export const ToDoForm = ({ addToDo }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);

    }

    const handleSubmit = e => {
        e.preventDefault();

        addToDo(value);

    }

    return (
        <form on onSubmit={handleSubmit}>
            <input type="text" className='p-3 rounded-md bg-gray-200 hover:bg-white outline-none' onChange={handleChange} value={value} placeholder='what is task today?' />
            <button type='submit' className='bg-slate-600 text-white rounded-md ml-5 p-2'>Add</button>
        </form>
    )

}

