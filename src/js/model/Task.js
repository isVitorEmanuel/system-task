import TaskState from "../utils/TaskState.js";
import Render from "./Render.js";

/*
 * This class represents a Task entity.
 */
class Task {
    m_id;
    m_title;
    m_desc;         
    m_state; 
    m_domTask;
    m_parenteNode;

    /**
     * Constructor for the Task class.
     * Initializes the task with a title, description, and default state.
     * It also assigns a unique ID and references the parent DOM node for tasks.
     * @param {*} title - The title of the task.
     * @param {*} desc - The description of the task.
     */
    constructor(title, desc) {
        this.m_id = `${Date.now()}`;
        this.m_title = title;
        this.m_desc = desc;
        this.m_state = TaskState.PENDING;
        this.m_parenteNode = document.querySelector('#wrapper-tasks');

        this.createDomTask();
    }

    // Getters functions.
    getID() { return this.m_id; }
    getTitle() { return this.m_title; }
    getDesc() { return this.m_desc; }
    getState() { return this.m_state; }
    getTask() { return this.m_domTask; }

    // Setters functions.
    setID(id) { this.m_id = id; }
    setTitle(title) { this.m_title = title; }
    setDesc(desc) { this.m_desc = desc; }
    setDesc(state) { this.m_state = state; }

    /**
     * Creates the DOM representation of the task.
     * It creates the necessary DOM elements (task div, title, content, etc.)
     * and assigns them the appropriate classes and content.
     */
    createDomTask() {
        const taskDiv = document.createElement('div');
        taskDiv.setAttribute('class', 'task');

        const taskTitleDiv = document.createElement('div');
        taskTitleDiv.setAttribute('class', 'task-title');

        const taskTitle = document.createElement('h3');
        taskTitle.textContent = this.m_title;

        const editButton = document.createElement('button');
        editButton.setAttribute('class', 'button-task');
        editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';

        taskTitleDiv.appendChild(taskTitle);
        taskTitleDiv.appendChild(editButton);

        const taskContentDiv = document.createElement('div');
        taskContentDiv.setAttribute('class', 'task-content');
        taskContentDiv.textContent = this.m_desc;

        taskDiv.appendChild(taskTitleDiv);
        taskDiv.appendChild(taskContentDiv);

        this.m_domTask = taskDiv;
    }

    /** 
     * Adds the task to the list of all tasks.
     * @param {Array} allTasks - Array containing all tasks.
     */
    addTask(allTasks) {
        allTasks.push(this);
    }

    /**
     * Renders the task in the parent DOM node.
     * It first clears the task wrapper if there are no tasks and then appends the task DOM element.
     */
    renderTask() {
        if (Render.m_tasks.length == 0) { this.m_parenteNode.innerHTML = ''; }
        this.m_parenteNode.appendChild(this.getTask());
    }
}

export default Task;