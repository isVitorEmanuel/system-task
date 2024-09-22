import actButton from "./components/ActionButton.js";
import Task from "./model/Task.js";
import  Render from './model/Render.js';

let allTasks = [];

// Load from LocalStorage all tasks.
if (JSON.parse(localStorage.getItem('values')) != null) {
    for (let taskJSON of JSON.parse(localStorage.getItem('values'))) {
        const task = new Task(taskJSON.m_title, taskJSON.m_desc);
        task.setID(taskJSON.m_id);
        task.addTask(allTasks);
    }
}

// Render initial tasks.
Render.setTasks(allTasks);
Render.renderTasks();

export { allTasks };