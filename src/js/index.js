import actButton from "./components/ActionButton.js";
import Task from "./model/Task.js";

let allTasks = [];

if (JSON.parse(localStorage.getItem('values')) != null) {
    for (let taskJSON of JSON.parse(localStorage.getItem('values'))) {
        const task = new Task(taskJSON.m_title, taskJSON.m_desc);
        task.setID(taskJSON.m_id);
        task.addTask(allTasks);
    }
} else {
    
}

export { allTasks };