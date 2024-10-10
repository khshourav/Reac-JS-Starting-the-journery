import { useState } from "react";
import './todolist.css';

const Basic14 = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [done, setDone] = useState([]);


    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const add = () =>{
        setTasks([...tasks, task]);
        setTask('');
    }

    const Delete = (index)=>{
        const newTasks = tasks.filter((_, i)=> i !== index);
        setTasks(newTasks);
    }

    const DeleteDone = (index)=>{
        const newDone = done.filter((_, i)=> i !== index);
        setDone(newDone);
    }

    const Done = (index)=>{
        const newDone = tasks.filter((_, i)=> i === index);
        setDone([...done, newDone]);
        Delete(index);
    }

    const NotDone = (index)=>{
        const notDone = done.filter((_, i)=> i === index);
        setTasks([...tasks, notDone])  
        DeleteDone(index);
    }

    return ( 
    <>
    <div className="sec Basic14">
        <h1>Makeshift To Do List</h1>

        <input value={task} onChange={handleChange} type="text" />
    <button onClick={add}>Add Task</button>

    <div className="min-box-3">
        {/* Task List Box */}
        <div className="tasks">
            <h1> Task List </h1>
            <div className="list">
                {/* New Task box */}
                {tasks.map((tasks, index)=>(
                <table>
                    <tr key = {index}>
                    <td><button onClick={()=>{Delete(index)}}>Del</button></td>
                        <td><h2>{tasks}</h2></td>
                        <td><button onClick={()=>{Done(index)}}>Done</button></td>
                    </tr>
                    
                </table>
                ))}

            </div>
        </div>
        

        
        {/* Done task Box */}
        <div className="done-tasks">
            <h1> Tasks Done</h1>
                <div className="box">
                    
                    {done.map((done, index)=> (
                        <table>
                            <tr key ={index}>
                                <td><button onClick={()=>{DeleteDone(index)}}>Del</button></td>
                                <td><h2> {done} </h2></td>
                                <td><button onClick={()=>{NotDone(index)}}>Not Done</button></td>
                            </tr>
                        </table>
                    ))}
                </div>

        </div>

    </div>

    </div>

    </> );
}
 
export default Basic14;