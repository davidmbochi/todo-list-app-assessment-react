import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import TaskStatus from "./TaskStatus";


const TaskList = () => {
    const [tasks, setTask] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getTasks();
    },[])

    const getTasks = async () =>{
        const tasks = await axios.get("http://localhost:8080/api/v1/task/all");
        setTask(tasks.data);

    }

    const deleteTask = async (id) => {
        const doDelete = window.confirm(`Are you sure you want to delete this task?`);

        if(doDelete){
            await axios.delete(`http://localhost:8080/api/v1/task/${id}`);
            getTasks();
        }

    }

    return(
       tasks.map((task, index) => (
           <div key={index} className="card text-center" >
               <div className="card-header ">
                   <h2>{task.title}</h2>
               </div>
               <div className="card-body">
                   <h5 className="card-title"></h5>
                   <p className="card-text">{task.description}</p>
                   <TaskStatus status={task.status}></TaskStatus>
               </div>
               <div className="card-footer text-muted">
                   <b>Created At:</b> {task.createdAt} <b>Due Date:</b> {task.dueDate}
                 <div>
                     <Link to={`/edittask/${task.taskId}`} href="#" className="btn btn-primary mx-2">Edit</Link>
                     <button onClick={() => deleteTask(task.taskId)} className="btn btn-danger mx-2">Delete</button>
                 </div>
               </div>
           </div>
       ))
    )
}
export default TaskList;