import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import {
    addProject, removeProject, loadProject
} from '../features/projectsSlice'
import { setProjectId } from '../features/settingsSlice'
import { loadList, removeProjectTasks } from '../features/tasksSlice'
import { removeProjectNotes } from '../features/notesSlice'
import { loadNotes } from '../features/notesSlice'
import TopSection from './TopSection';
import Project from './Project';

export default function Projects() {
    let projects = useSelector((state) => state.projects.value)

    const projectId = useSelector((state) => state.settings.value)
    const dispatch = useDispatch()

    const [pname, setpName] = useState('')

    const handleChange = e => {
        setpName(e.target.value)
    }

    const handleAddProject = (e) => {
        e.preventDefault()
        let genId = uuid()

        dispatch(addProject({ id: genId, name: pname }))
        document.getElementById('myform').reset()
        document.getElementById('taskName').focus()
        handleLoadList({id: genId})
    }

    const handleLoadList = (project) => {
        dispatch(setProjectId(project))
        dispatch(loadList(project))
        dispatch(loadNotes(project))
        document.getElementById('taskName').focus()
    }
    const remove = (project) => {
        let x = window.confirm('really delete?');
        if (x) {
            dispatch(removeProject(project))
            dispatch(removeProjectTasks(project))
            dispatch(removeProjectNotes(project))
        }
    }

    
    return (
        <div className='d-flex flex-column align-items-start'>
            <TopSection 
                formid='myform' 
                handleAdd={handleAddProject} 
                handleChange={handleChange} 
                placeholder='Project name' 
            />
            {projects.map((project, i) => {
                let active = {}
                project.id == projectId.currentProject ? active = { backgroundColor: '#333'} : null;
                return (
                    <Project 
                        key={i} 
                        active={active} 
                        project={project}
                        handleLoadList={handleLoadList}
                        name={project.name}
                        remove={remove}
                    />
                )
            })}
        </div>
    )
}