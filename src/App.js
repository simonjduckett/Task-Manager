import './App.css';
import List from './components/list'
import Notes from './components/notes';
import Projects from './components/projects'

function App() {

  return (
    <div className="App">
      <div className='container-fluid'>
        <h2>To do</h2>
        <hr style={{backgroundColor: '#333'}} />
        <div className='row'>
          <div className='col-3 border-right'>
            <Projects />
          </div>
          <div className='col-6'>
            <List />
          </div>
          <div className='col-3'>
            <Notes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
