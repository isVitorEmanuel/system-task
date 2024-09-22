import { allTasks } from "../index.js";
import Task from "../model/Task.js";

let interval = null;

/** 
 * Function to set styles in the feedback span.
 * It changes the border, background color, and text based on validation state.
 * @param {boolean} state - The validation state (true for valid, false for invalid).
 * @param {HTMLElement} fback - The feedback span element.
 */
function setSpan(state, fback) {
    if (!state) {
        // Set style for invalid input
        fback.setAttribute('class', 'feedback-input');
        fback.style.border = '2px solid #F00';
        fback.style.backgroundColor = '#F75252'; 
        fback.innerHTML = 'preencha os campos obrigatórios!';
        
        return;
    }

    // Set style for valid input
    fback.setAttribute('class', 'feedback-input');
    fback.style.border = '2px solid #008000 ';
    fback.style.backgroundColor = '#6b8e23'; 
    fback.innerHTML = 'tarefa adicionada!';
}

/**
 * Function to validate the title input field.
 * Checks whether the input is missing a value and calls setSpan based on validity.
 * @param {HTMLElement} input - The title input field element.
 * @param {HTMLElement} fback - The feedback span element.
 * @returns {boolean} - True if the title is valid, false otherwise.
 */
function validateTitle(input, fback) {
    const stateValidation = input.validity;

    if (stateValidation.valueMissing) {
        setSpan(false, fback);
        return false;
    } 
    
    return true;
};

/** 
 * Function to validate the description input field.
 * If the description is empty, it returns a default message.
 * @param {HTMLElement} input - The description input field element.
 * @returns {string} - The description value or a default message.
 */
function validateDescription(input) {
    if (input.value == '') { return 'Sem descrição'; }
    return input.value;
};

/**
 * Event handler for the Add button.
 * When the Add button is clicked, this function validates the title input
 * and, if valid, creates and saves a new task. It also provides feedback
 * via the feedback span and temporarily displays a success or error message.
 * @param {Event} e - The event triggered by clicking the Add button.
 */
const handleAdd = (e) => {
    e.preventDefault();
    const feedbackInput = document.querySelector('#feedback-input');
    
    const titleField = document.querySelector('#title-input');
    const descField = document.querySelector('#desc-input');

    const isValidTitle = validateTitle(titleField, feedbackInput);
    
    if (isValidTitle) {
        setSpan(true, feedbackInput);

        const descValue = validateDescription(descField);
        const titleValue = titleField.value;

        let task = new Task(titleValue, descValue);
        task.renderTask();
        task.addTask(allTasks);

        localStorage.clear();
        localStorage.setItem('values', JSON.stringify(allTasks));
    } 

    if (interval) { clearTimeout(interval); }

    // "Remove" the span.
    interval = setTimeout(() => {
        feedbackInput.setAttribute('class', '');
        feedbackInput.style.border = '';
        feedbackInput.style.backgroundColor = '';
        feedbackInput.innerHTML = '';
    }, 4000);
};

export default handleAdd;