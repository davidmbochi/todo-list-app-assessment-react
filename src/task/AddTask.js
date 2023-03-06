import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function AddTask(){
    let navigate = useNavigate();
    const [task, setTask] = useState({
        title: "",
        description: "",
        dueDate: ""
    })

    const {title, description, dueDate, status} = task;

    const onInputChange = (event) => {
        setTask({...task,[event.target.name]:event.target.value})
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await  axios.post("http://localhost:8080/api/v1/task", task);
        navigate("/")
    }


    return(
        <div className="container">
            <div className="row">
               <div className="col-md-6 offset-md-3 border rounded p-4 my-2 shadow">
                   <h2 className="text-center m-4">Create Task</h2>
                   <form onSubmit={(event) => onSubmit(event)}>
                       <div className="mb-3">
                           <label htmlFor="title" className="form-label">Title</label>
                           <input type="text" className="form-control"
                                  aria-describedby="emailHelp"
                                  name="title"
                                  value={title} onChange={(event) => onInputChange(event)}/>

                       </div>
                       <div className="mb-3">
                           <label htmlFor="description" className="form-label">Description</label>
                           <input type="text"
                                  className="form-control"
                                  name="description"
                                  value={description} onChange={(event) => onInputChange(event)}/>
                       </div>
                       <div className="mb-3">
                           <label htmlFor="dueDate" className="form-label">Due Date (future date)</label>
                           <input type="date"
                                  className="form-control"
                                  name="dueDate"
                                  value={dueDate} onChange={(event) => onInputChange(event)}/>
                       </div>

                       <button type="submit" className="btn btn-primary">Submit</button>

                       <Link to="/" className="btn btn-outline-danger mx-2">Cancel</Link>
                   </form>
               </div>
            </div>

        </div>
    )
}