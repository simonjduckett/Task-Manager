import './App.css';
import List from './components/list'
import Notes from './components/notes';
import Projects from './components/projects'
import Toolbar from './components/toolbar/Toolbar';

function App() {

  return (
    <div className="App">
      <div className='container-fluid'>
        <h2 style={{marginTop: '10px'}}>Task Manager</h2>
        <hr style={{backgroundColor: '#333'}} />
        <Toolbar />
        <div className='row'>
          <div id='projectsCol' className='col-2 border-right'>
            <Projects />
          </div>
          <div className='col'>
            <List />
          </div>
          <div className='col'>
            <Notes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
