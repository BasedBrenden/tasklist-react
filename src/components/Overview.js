import React from "react";
import './Overview.css'



const Overview = ({tasks, renderAllTasks})=>{

    const removeTask =(selectedTask) =>{
            localStorage.removeItem(selectedTask.id)
            renderAllTasks();
    }

    const editTask = (selectedTask) =>{
        const previousTitle = document.getElementById(selectedTask.id)
        
        const editDiv = document.createElement('div');
        const newTitle = document.createElement('input')
        newTitle.type = 'text';
        const editSubmitBtn = document.createElement('button');
        editSubmitBtn.type = 'button'
        editSubmitBtn.innerHTML = "submit";


        editSubmitBtn.addEventListener('click',()=>{
            const updatedTask ={
                name: newTitle.value,
                id: selectedTask.id

            }
            localStorage.setItem(updatedTask.id, JSON.stringify(updatedTask))
            previousTitle.innerHTML = updatedTask.name;
            renderAllTasks();
            editDiv.remove();
        })



        editDiv.appendChild(newTitle);
        editDiv.appendChild(editSubmitBtn);
        previousTitle.parentNode.appendChild(editDiv);
        
    }

    return(

        
        <div id="holder">
         {tasks.map((poke)=>   
                <div className="taskDiv" key={poke.id}> 
                    <input type="checkbox"  onChange={() => removeTask(poke)}></input>
                <p id={poke.id} onClick={() => editTask(poke)}>{poke.name}</p>
                </div>
         )}
        </div>
        
    );
}

export default Overview