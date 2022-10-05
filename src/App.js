import Header from "./components/Header.js";
import NewTask from "./components/NewTask.js";
import TaskList from "./components/TaskList.js";
import { useState, useEffect } from "react";

export default function App() {
  
  const [title, setTitle] = useState(() => loadFromStorage("title") || "Your To Do List");
  const [color, setColor] = useState(() => loadFromStorage("color") || "#000000");
  const [tasks, setTasks] = useState(() => loadFromStorage("tasks") ||
    [
      {
        checked: false,
        text: "Try Adding a new task."
      },
      {
        checked: true,
        text: "Also try deleting completed tasks."
      }
    ]
  );

  useEffect(() => {
    loadFromStorage();
  }, []);


  //--Handiling Local Storage------------------------
  function loadFromStorage(stateElement) { //--returns desired state element
    let savedState = localStorage.getItem("savedState");
    if (!savedState) return null

    const state = JSON.parse(savedState);
    return state[stateElement];
  }
  

  const saveToStorage = () => {
    const state = {
      title: title,
      color: color,
      tasks: tasks
    }
    localStorage.setItem("savedState", JSON.stringify(state));
  }

  useEffect(() => {
    saveToStorage();
  });


  //--Actions------------------------------------
  const completeTask = index => {
    const completedTask = tasks[index];
    completedTask.checked = !completedTask.checked;
    setTasks(prevTasks => {
      prevTasks[index] = completedTask;
      return [...prevTasks];
    });
  }

  const deleteTask = index => {
    setTasks(prevTasks => {
      const newTasks = prevTasks.filter((_task, i) => i !== index);
      return newTasks;
    })
  }

  const addNewTask = text => {
    const newTask = {
      checked: false,
      text: text
    }
    setTasks(prevTasks => {
      const newTasks = [...prevTasks, newTask];
      return newTasks;
    });
  }

  const onChangeTitle = newTitle => setTitle(newTitle);

  const onChangeColor = newColor => setColor(newColor);

  return (
    <div className="app-container">
      <Header title={title} color={color}
        onChangeTitle={onChangeTitle}
        onChangeColor={onChangeColor}
      />
      <TaskList tasks={tasks}
        onCompleteTask={completeTask}
        onDeleteTask={deleteTask}
      />
      <NewTask onAddNewTask={addNewTask}/>
    </div>
  );
}
