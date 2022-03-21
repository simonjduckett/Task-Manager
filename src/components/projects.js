import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import {
    addProject, removeProject, loadProject
} from '../features/projectsSlice'
import { setProjectId } from '../features/settingsSlice'
import {loadList} from '../features/tasksSlice'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
    const projects = useSelector((state) => state.projects.value)
    const projectId = useSelector((state) => state.settings.value)
    const dispatch = useDispatch()

    const [pname, setpName] = useState('')

    const handleChange = e => {
        setpName(e.target.value)
    }

    const handleAddProject = (e) => {
        e.preventDefault()

        dispatch(addProject({ id: uuid(), name: pname }))
        document.getElementById('myform').reset()
    }

    const handleLoadList = (project) => {
        dispatch(setProjectId(project))
        dispatch(loadList(project))
    }
    return (
        <div className='d-flex flex-column align-items-center'>
            <div >
                <form id='myform' onSubmit={handleAddProject} className='my-3'>
                    <div className='input-group'>
                        <input className='form-control' required type='text' id='projectName' placeholder='Project name' onChange={handleChange} />
                        <div className='input-group-append'>
                            <input className='btn btn-primary' type='submit' value='Add Project' />
                        </div>
                    </div>
                </form>
                
            </div>
            {projects.map((project, i) => {
                return (
                    <div onClick={() => handleLoadList(project)} key={i} className='card my-2 project' style={{maxWidth: '100px'}}>
                        <div className='card-body'>
                            {project.name}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}