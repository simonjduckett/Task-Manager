import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import {
    addTask, removeTask, done, load, loadList
} from '../features/tasksSlice'
import TopSection from './TopSection';
import Task from './Task';

export default function List() {
    const tasks = useSelector((state) => state.tasks.value)
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

    

    const taskDone = (id, status) => {
        dispatch(done({ id: id, done: status }))
        dispatch(loadList({ id: projectId.currentProject }))
    }

    return (
        <div id='list' className='d-flex flex-column align-items-center'>
            <TopSection 
                formid='addform' 
                handleAdd={handleAddTask} 
                handleChange={handleChange}
                placeholder='Add Task'
                inputid='taskName'
            />
            <div className='card'>
                <div className='card-body'>
                    <ul className='pl-0'>
                        {tasks.map((item, i) => {
                            return (
                                <Task
                                    key={i}
                                    done={item.done}
                                    name={item.name}
                                    itemid={item.id}
                                    taskDone={taskDone}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}