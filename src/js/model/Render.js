/**
 * Render class responsible for managing and rendering tasks in the DOM.
 * 
 * The class contains static methods and properties that allow setting a list of tasks 
 * and rendering them to the page. If no tasks are available, it shows a message 
 * indicating that no tasks were found.
 */

class Render {
    static m_tasks = [];
    
    /**
     * Static method to set new tasks.
     * @param {Array} newTasks - Array of tasks to be assigned.
     */
    static setTasks(newTasks) {
        this.m_tasks = newTasks
    }
    
    /**
     * Static method to render tasks in the DOM.
     * If there are tasks in the list, each task is rendered.
     * If no tasks exist, a message indicating "No tasks found" is displayed.
     */
    static renderTasks() {
        if (this.m_tasks.length != 0) {
            this.m_tasks.forEach((task) => {
                task.renderTask();
            });
            return;
        }
    
        if (this.m_tasks.length == 0) {
            const wrapperTasks = document.querySelector('#wrapper-tasks');
        
            const divNothing = document.createElement('div');
            divNothing.setAttribute('class', '__nothing');
            divNothing.textContent = 'Não foram encontradas tarefas!';
        
            wrapperTasks.appendChild(divNothing);
        }
    }
}

export default Render;