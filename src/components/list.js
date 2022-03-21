import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import {
    addTask, removeTask, done, load, loadList
} from '../features/tasksSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

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
        document.getElementById('myform').reset()
        dispatch(loadList({id: projectId.currentProject}))
    }

    const removeThisTask = (id) => {
        dispatch(removeTask(id))
        dispatch(loadList({ id: projectId.currentProject }))
    }

    const taskDone = (id, status) => {
        dispatch(done({ id: id, done: status }))
        dispatch(loadList({ id: projectId.currentProject }))
    }

    const save = () => {
        localStorage.setItem("todolist", JSON.stringify(allTasks));
    }

    return (
        <div id='list' className='d-flex flex-column align-items-center'>
            <div >
                <form id='myform' onSubmit={handleAddTask} className='my-3'>
                    <div className='input-group'>
                        <input className='form-control' required type='text' id='taskName' placeholder='task name' onChange={handleChange} />
                    <div className='input-group-append'>
                        <input className='btn btn-primary' type='submit' value='Add Task'/>
                    </div>
                    </div>
                </form>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <ul className='pl-0'>
                        {tasks.map((item, i) => {
                            return (
                                <li className='d-flex justify-content-between align-items-center border-bottom py-3' key={i}>
                                    <p className='mb-0' style={item.done ? {textDecoration: 'line-through'}: null}>{item.name}</p>
                                    <div>
                                        <span className='px-4' style={{ cursor: 'poiner' }} onClick={() => taskDone(item.id, !item.done)}>
                                            {item.done ? <FontAwesomeIcon color='green' icon={faCircleCheck} /> : <FontAwesomeIcon color='grey' icon={faCircle} />}
                                        </span>
                                        <span className='text-danger' onClick={() => removeThisTask(item.id)}><FontAwesomeIcon icon={faTrash} /></span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
                <div className='d-flex'>

                    <button onClick={() => dispatch(load())} className='btn btn-primary flex-fill mx-4'>LOAD</button>

                    <button onClick={() => save()} className='btn btn-primary flex-fill mx-4'>SAVE</button>
                </div>
        </div>
    )
}