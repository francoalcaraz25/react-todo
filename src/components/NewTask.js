import { useRef } from "react";

const NewTask = ({onAddNewTask}) => {
    const text = useRef();

    const handleAddButton = () => {
        if (!text.current.value) return null
        onAddNewTask(text.current.value);
        text.current.value = "";
    }

    return (
        <div className="new-task">
            <input className="new-task-text" id="new-task-text" name="new-task-text"
                ref={text}
                placeholder="Write a new task..."
            />
            <button className="new-task-add" id="new-task-add"
                onClick={handleAddButton}
            >
                +
            </button>
        </div>
    );
}

export default NewTask;