import React, { useState } from 'react'
function Todo() {
    const [task,setTask] = useState([]);
    const [newTask, setNewTask] = useState("")

    const addNewTask = () =>{
        setTask(...task, newTask)
        
    }
// e ==> event
    
  return (
    <div>
        
        <input type="text" placeholder='Enter Your Task' onChange={(e)=>{setNewTask(e.target.value)}}/>
        <button onClick={addNewTask}>Add</button>
        
        {/* {console.log(setNewTask)} */}
        
        <ul>
            {task.map((task)=>{
                return <li>{task}</li>
            })}
        </ul>
    </div>
  )
}

export default Todo