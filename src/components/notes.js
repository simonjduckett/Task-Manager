import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import { loadNotes, addNote, removeNote } from '../features/notesSlice'
import styles from '../styles/notes.module.scss'
import Note from './note';

const Notes = () => {
    const notes = useSelector((state) => state.notes.projectNotes)
    const projectId = useSelector((state) => state.settings.value)
    const dispatch = useDispatch()

    const [notesVal, setNoteVal] = useState({})

    const handleChange = e => {
        setNoteVal(e.target.value)
    }

    const handleAddNote = (e) => {
        e.preventDefault()

        dispatch(addNote({ id: uuid(), projectId: projectId.currentProject, note: notesVal }))
        dispatch(loadNotes({ id: projectId.currentProject }))
        document.getElementById('addnoteform').reset()
        document.getElementById('Note').focus()
    }

    return ( 
        <section className={styles.notes}>
            <div className='topSection'>
                <form id='addnoteform' onSubmit={handleAddNote} className='my-3'>
                    <div className='input-group'>
                        <input className='form-control' required type='text' id='Note' placeholder='note' onChange={handleChange} />
                        <div className='input-group-append'>
                            <input className='btn btn-primary' type='submit' value='Add Note' />
                        </div>
                    </div>
                </form>
            </div>
            <div className={styles.projectNotes}>
                {notes.map((note, i) => {
                    return (
                        <Note key={i} note={note.note} id={note.id} />
                    )
                })}
            </div>
        </section>
     );
}
 
export default Notes;

//state for note objects that are linked to each project
//need component that represents each note made
//