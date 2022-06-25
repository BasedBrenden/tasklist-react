import './App.css';
import Overview from './components/Overview';
import {useState} from'react';



function App() {
  const [taskList, settaskList] = useState([])

  window.onload =()=>{
    renderAllTasks();
  }

  const addTask =() =>{
    const taskName = document.querySelector('#inputField').value;
    let taskObj ={
      name: taskName,
      id: taskList.length
    }
    settaskList(newTask => [...newTask, taskObj])
    localStorage.setItem(taskObj.id, JSON.stringify(taskObj));
  }


  const renderAllTasks =()=>{

    let tempTaskArr = [];
    for( let i=0; i <localStorage.length; i++){
      tempTaskArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    settaskList([...tempTaskArr])
  }

  return (
    <div className="App">
      
      <input id="inputField" type="text" placeholder="Enter Task Here"></input>
      <button type="submit" onClick={addTask}>Submit</button>
      <Overview tasks={taskList} renderAllTasks={renderAllTasks} />
    </div>
  );
}

export default App;
