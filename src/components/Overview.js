import React from "react";
import './Overview.css'



const Overview = ({tasks})=>{


    return(

        
        <div id="holder">
        <ul>
         {tasks.map((poke)=>   
                <div className="taskDiv"> 
                    <input type="checkbox" ></input>
                <p>{poke}</p>
                </div>
         )}
        </ul>   
        </div>
        
    );
}

export default Overview