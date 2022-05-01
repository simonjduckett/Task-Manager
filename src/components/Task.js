import {
    addTask, removeTask, done, load, loadList
} from '../features/tasksSlice'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const Task = (props) => {
    const dispatch = useDispatch()
    const projectId = useSelector((state) => state.settings.value)

    const removeThisTask = (id) => {
        let x = window.confirm('really delete?');
        if (x) {
            dispatch(removeTask(id))
            dispatch(loadList({ id: projectId.currentProject }))
        }
    }

    return ( 
            <li className='d-flex justify-content-between align-items-center border-bottom py-3'>
                <div>
                    <p className='mb-0' style={props.item.done ? { textDecoration: 'line-through' } : null}>{props.item.name}</p>
                    <small className='text-muted'>{props.item.time ? props.item.time : ''}</small>
                </div>
                <div className='ml-auto'>
                    <span className='px-4' style={{ cursor: 'poiner' }} onClick={() => props.taskDone(props.item.id, !props.item.done)}>
                        {props.item.done ? <FontAwesomeIcon color='green' icon={faCircleCheck} /> : <FontAwesomeIcon color='grey' icon={faCircle} />}
                    </span>
                </div>
                <span className='text-danger' onClick={() => removeThisTask(props.item.id)}><FontAwesomeIcon icon={faTrash} /></span>
            </li>
     );
}
 
export default Task;