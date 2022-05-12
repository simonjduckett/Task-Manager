import styles from '../../styles/toggleSlider.module.scss'

const ToggleTheme = () => {
    const toggleTheme = () => {
        document.body.classList.toggle('light')
    }

    return ( 
        // <button onClick={toggleTheme}>Dark</button>
        <div style={{height: '0px'}}>
            {/* <button onClick={toggleTheme}>Theme</button> */}
            <input onClick={toggleTheme} type="checkbox" id="toggle" class={styles.toggle_checkbox} />
            <label for="toggle" class={styles.toggle_label}>
                <span class="toggle--label-background"></span>
            </label>
        </div>
     );
}
 
export default ToggleTheme;