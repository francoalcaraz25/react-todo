import { useState } from "react";

const NewTask = ({onAddNewTask}) => {
    const [text, setText] = useState("");

    const handleAddButton = () => {
        if (!text) return null
        onAddNewTask(text);
        setText("");
    }

    return (
        <div className="new-task">
            <input className="new-task-text" id="new-task-text"
                value={text}
                onChange={ev => setText(ev.target.value)}
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