import './App.css';
import List from './components/list'
import Projects from './components/projects'

function App() {

  return (
    <div className="App">
      <div className='container-fluid'>
        <h2>FMX To do</h2>
        <hr style={{backgroundColor: '#333'}} />
        <div className='row'>
          <div className='col-3 border-right'>
            <Projects />
          </div>
          <div className='col-6'>
            <List />
          </div>
          <div className='col-3'>
            <div className='topSection'></div>
            <textarea rows="20" cols="50" style={{ backgroundColor: '#1F1F1F', color: '#fff', padding: '20px', borderRadius: '5px'}} placeholder='notes'></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
