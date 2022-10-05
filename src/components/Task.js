
const Task = ({checked, text, id, onCompleteTask, onDeleteTask}) => {
    return (
        <div className="task">
            <input className="task-checkbox" type="checkbox" checked={checked}
                onChange={() => onCompleteTask(id)}
            />
            <label className={`task-text ${checked ? "completed" : ""}`}>{text}</label>
            <button className="task-delete"
                onClick={() => onDeleteTask(id)}
            >
                &times;
            </button>
        </div>
    );
}

export default Task;