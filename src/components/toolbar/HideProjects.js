import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const HideProjects = () => {
    const slideAway = () => {
        document.getElementById('projectsCol').classList.toggle('moveleft')
    }
    return (<FontAwesomeIcon onClick={slideAway} icon={faArrowLeft} /> );
}
 
export default HideProjects;