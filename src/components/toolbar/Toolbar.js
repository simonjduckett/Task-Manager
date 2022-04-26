import {Row, Col} from 'react-bootstrap'
import HideProjects from './HideProjects';
import styles from '../../styles/toolbar.module.scss';

const Toolbar = () => {
    return ( 
        <section className={styles.toolbar}>
            <Row>
                <Col>
                    <HideProjects />
                </Col>
            </Row>
        </section>
     );
}
 
export default Toolbar;