import React from "react";
import './Overview.css'



const Overview = ({tasks, renderAllTasks})=>{

    const removeTask =(selectedTask) =>{

            localStorage.removeItem(selectedTask.name)
            renderAllTasks();
    }

    return(

        
        <div id="holder">
         {tasks.map((poke)=>   
                <div className="taskDiv" key={poke.id}> 
                    <input type="checkbox" id={poke.id} onChange={() => removeTask(poke)}></input>
                <p>{poke.name}</p>
                </div>
         )}
        </div>
        
    );
}

export default Overview