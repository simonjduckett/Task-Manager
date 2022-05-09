const ToggleTheme = () => {
    const toggleTheme = () => {
        document.body.classList.toggle('light')
    }

    return ( 
        <button onClick={toggleTheme}>Dark</button>
     );
}
 
export default ToggleTheme;