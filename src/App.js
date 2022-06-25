import './App.css';
import Overview from './components/Overview';
import {useState} from'react';



function App() {
  const [first, setfirst] = useState([])

  window.onload =()=>{
    renderAllTasks();
  }

  const addTask =() =>{
    const taskName = document.querySelector('#inputField').value;
    let taskObj ={
      name: taskName,
      id: first.length
    }
    setfirst(newTask => [...newTask, taskObj])
    localStorage.setItem(taskObj.name, JSON.stringify(taskObj));
  }


  const renderAllTasks =()=>{

    let tempTaskArr = [];
    for( let i=0; i <localStorage.length; i++){
      tempTaskArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    setfirst([...tempTaskArr])
  }

  return (
    <div className="App">
      
      <input id="inputField" type="text" placeholder="Enter Task Here"></input>
      <button type="submit" onClick={addTask}>Submit</button>
      <Overview tasks={first} renderAllTasks={renderAllTasks} />
    </div>
  );
}

export default App;
