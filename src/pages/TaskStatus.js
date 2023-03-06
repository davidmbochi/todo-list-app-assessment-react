const TaskStatus = ({status}) => {
    if (status === "PENDING"){
        return(
            <a className="btn btn-info">{status}</a>
        )
    }else if (status === "ACTIVE"){
        return (
            <a className="btn btn-success">{status}</a>
        )
    }
    else if (status === "COMPLETED"){
        return (
            <a className="btn btn-danger">{status}</a>
        )
    }

}
export default TaskStatus;