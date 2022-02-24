import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import {
    addTask, removeTask, done
} from '../features/tasksSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function List() {
    const tasks = useSelector((state) => state.tasks.value)
    const dispatch = useDispatch()

    const [taskVal, setTaskVal] = useState('')

    const handleChange = e => {
        setTaskVal(e.target.value)
    }

    const handleAddTask = (e) => {
        e.preventDefault()

        dispatch(addTask({ id: uuid(), name: taskVal, done: false }))
        document.getElementById('myform').reset()
    }

    return (
        <div>
            <div >
                <form id='myform' onSubmit={handleAddTask} className='my-3'>
                    <div className='input-group'>
                        <input required type='text' id='taskName' placeholder='task name' onChange={handleChange} />
                    <div className='input-group-append'>
                        <input className='btn btn-primary' type='submit' value='Add Task'/>
                    </div>
                    </div>
                </form>
            </div>
            <ul className='pl-0'>
                {tasks.map((item, i) => {
                    return (
                        <li className='d-flex justify-content-between align-items-center border-bottom py-3' key={i}>
                            <p className='mb-0' style={item.done ? {textDecoration: 'line-through'}: null}>{item.name}</p>
                            <div>
                                <span className='px-4' style={{ cursor: 'poiner' }} onClick={() => dispatch(done({ id: item.id, done: !item.done }))}>
                                    {item.done ? <FontAwesomeIcon color='green' icon={faCircleCheck} /> : <FontAwesomeIcon color='grey' icon={faCircleCheck} />}
                                </span>
                                <span className='text-danger' onClick={() => dispatch(removeTask(item.id))}><FontAwesomeIcon icon={faTrash} /></span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}