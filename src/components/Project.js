import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Project = (props) => {
    return ( 
        <div onClick={() => props.handleLoadList(props.project)} className='card my-2 project w-100' style={props.active}>
            <div className='card-body d-flex'>
                {props.name}
                <div className='ml-auto'><span onClick={() => props.remove(props.project)}><FontAwesomeIcon icon={faTrash} /></span></div>
            </div>
        </div>
     );
}
 
export default Project;