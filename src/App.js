import './App.css';
import List from './components/list'
import Projects from './components/projects'

function App() {

  return (
    <div className="App">
      <div className='container'>
        <h2 className='text-center'>FMX To do</h2>
        <div className='row'>
          <div className='col-4'>
            <Projects />
          </div>
          <div className='col-8'>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
