import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">
                        Todo App
                    </a>

                    <Link className="btn btn-outline-info" to="/addtask">Add Task</Link>

                </div>
            </nav>
        </div>
    )
}