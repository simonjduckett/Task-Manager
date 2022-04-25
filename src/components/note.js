import { useSelector, useDispatch } from 'react-redux'
import styles from '../styles/note.module.scss'
import { loadNotes, removeNote } from '../features/notesSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const Note = (props) => {
    const projectId = useSelector((state) => state.settings.value)
    const dispatch = useDispatch()

    const removeThisNote = (id) => {
        dispatch(removeNote(id))
        dispatch(loadNotes({ id: projectId.currentProject }))
    }

    return ( 
        <div className={styles.note}>
            <p>{props.note}</p>
            <span onClick={() => removeThisNote(props.id)}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </span>
        </div>
     );
}
 
export default Note;