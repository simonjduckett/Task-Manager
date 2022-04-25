import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import {
    addTask, removeTask, done, load, loadList
} from '../features/tasksSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import TopSection from './TopSection';

export default function List() {
    const tasks = useSelector((state) => state.tasks.value)
    const allTasks = useSelector((state) => state.tasks.allTasks)
    const projectId = useSelector((state) => state.settings.value)
    const dispatch = useDispatch()

    const [taskVal, setTaskVal] = useState('')

    const handleChange = e => {
        setTaskVal(e.target.value)
    }

    const handleAddTask = (e) => {
        e.preventDefault()

        dispatch(addTask({ id: uuid(), projectId: projectId.currentProject, name: taskVal, done: false }))
        document.getElementById('addform').reset()
        dispatch(loadList({id: projectId.currentProject}))
    }

    const removeThisTask = (id) => {
        let x = window.confirm('really delete?');
        if (x) {
            dispatch(removeTask(id))
            dispatch(loadList({ id: projectId.currentProject }))
        }
    }

    const taskDone = (id, status) => {
        dispatch(done({ id: id, done: status }))
        dispatch(loadList({ id: projectId.currentProject }))
    }

    return (
        <div id='list' className='d-flex flex-column align-items-center'>
            <TopSection handleAdd={handleAddTask} handleChange={handleChange} />
            <div className='card'>
                <div className='card-body'>
                    <ul className='pl-0'>
                        {tasks.map((item, i) => {
                            return (
                                <li className='d-flex justify-content-between align-items-center border-bottom py-3' key={i}>
                                    <p className='mb-0' style={item.done ? {textDecoration: 'line-through'}: null}>{item.name}</p>
                                    <div className='ml-auto'>
                                        <span className='px-4' style={{ cursor: 'poiner' }} onClick={() => taskDone(item.id, !item.done)}>
                                            {item.done ? <FontAwesomeIcon color='green' icon={faCircleCheck} /> : <FontAwesomeIcon color='grey' icon={faCircle} />}
                                        </span>
                                    </div>
                                    <span className='text-danger' onClick={() => removeThisTask(item.id)}><FontAwesomeIcon icon={faTrash} /></span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}