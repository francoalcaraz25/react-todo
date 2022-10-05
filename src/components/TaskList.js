import Task from "./Task.js";

const TaskList = ({tasks, onCompleteTask, onDeleteTask}) => {
  return (
    <div className="task-list" id="task-list">
        {tasks.map((task, index) => 
            <Task checked={task.checked} text={task.text}
              key={index} id={index}
              onCompleteTask={onCompleteTask}
              onDeleteTask={onDeleteTask}
            />
        )}
    </div>
  );
}

export default TaskList;