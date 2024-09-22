import actButton from "./components/ActionButton.js";
import Task from "./model/Task.js";

let allTasks = [ ];

function addTask(task) {
    allTasks.push(task);
    console.log(allTasks);
}

export default addTask;