import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import { loadNotes, addNote, removeNote } from '../features/notesSlice'
import styles from '../styles/notes.module.scss'
import Note from './note';
import TopSection from './TopSection';

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
            <TopSection handleAdd={handleAddNote} handleChange={handleChange} />
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