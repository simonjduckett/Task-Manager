import styles from '../styles/topSection.module.scss'

const TopSection = (props) => {
    return ( 
        <div className={styles.topSection}>
            <form id={props.formid} onSubmit={props.handleAdd} className='my-3'>
                <div className='input-group'>
                    <input className='form-control' required type='text' id='taskName' placeholder='task name' onChange={props.handleChange} />
                    <div className='input-group-append'>
                        <input className='btn btn-primary' type='submit' value='Add Task' />
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default TopSection;