import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function UpdateTask(){

    let navigate = useNavigate();
    const {id} = useParams();

    const [task, setTask] = useState({
        title: "",
        description: "",
        dueDate: "",
        status: ""
    })

    const  {title, description, dueDate, status} = task;

    const  onInputChange = (event) => {
        setTask({...task, [event.target.name]: event.target.value});
    }

    useEffect(() => {
        getTask();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.put(`http://localhost:8080/api/v1/task/${id}`, task);
        navigate("/")
    }

    const getTask = async () => {
        const task = await axios.get(`http://localhost:8080/api/v1/task/${id}`);
        setTask(task.data);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Update Task</h2>
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
                            <label htmlFor="status" className="form-label">status (ACTIVE || COMPLETED)</label>
                            <input type="text"
                                   className="form-control"
                                   name="status"
                                   value={status} onChange={(event) => onInputChange(event)}/>
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