import TaskState from "../utils/TaskState.js";

/*
 *
 */
class Task {
    m_id;
    m_title;
    m_desc;
    m_state;
    m_domTask;
    m_parenteNode;

    constructor(title, desc) {
        this.m_id = `${Date.now()}`;
        this.m_title = title;
        this.m_desc = desc;
        this.m_state = TaskState.PENDING;
        this.m_parenteNode = document.querySelector('#wrapper-tasks');

        this.createDomTask();
    }

    getID() { return this.m_id; }
    getTitle() { return this.m_title; }
    getDesc() { return this.m_desc; }
    getState() { return this.m_state; }
    getTask() { return this.m_domTask; }

    setID(id) { this.m_id = id; }
    setTitle(title) { this.m_title = title; }
    setDesc(desc) { this.m_desc = desc; }
    setDesc(state) { this.m_state = state; }

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
    * 
    */
    addTask(allTasks) {
        this.m_parenteNode.appendChild(this.getTask());
        allTasks.push(this);
    }
}

export default Task;