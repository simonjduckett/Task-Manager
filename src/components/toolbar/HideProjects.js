import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HideProjects = () => {
    const slideAway = () => {
        document.getElementById('projectsCol').classList.toggle('moveleft')
    }
    return (<FontAwesomeIcon onClick={slideAway} icon={faBars} /> );
}
 
export default HideProjects;