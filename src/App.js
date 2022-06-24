import logo from './logo.svg';
import './App.css';
import Overview from './components/Overview';
import {useState} from'react';



function App() {
  const [first, setfirst] = useState([])
  const addTask =() =>{
    const taskName = document.querySelector('#inputField').value;
    setfirst(newTask => [...newTask, taskName])
  }

  return (
    <div className="App">
      
      <input id="inputField" type="text" placeholder="Enter Task Here"></input>
      <button type="submit" onClick={addTask}>Submit</button>
      <Overview key= {first.length} tasks={first}/>
    </div>
  );
}

export default App;
