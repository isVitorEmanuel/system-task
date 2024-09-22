import { allTasks } from "../index.js";
import Task from "../model/Task.js";

let interval = null;

/** 
 * Function to set style in the span.
 */
function setSpan(state, fback) {
    if (!state) {
        fback.setAttribute('class', 'feedback-input');
        fback.style.border = '2px solid #F00';
        fback.style.backgroundColor = '#F75252'; 
        fback.innerHTML = 'preencha os campos obrigatórios!';
        
        return;
    }

    fback.setAttribute('class', 'feedback-input');
    fback.style.border = '2px solid #008000 ';
    fback.style.backgroundColor = '#6b8e23'; 
    fback.innerHTML = 'tarefa adicionada!';
}

/**
 * Function to validate the input title.
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
 * Function to validate the input description.
 */
function validateDescription(input) {
    if (input.value == '') { return 'Sem descrição'; }
    return input.value;
};

/**
 * When the add button is clicked, validate the data input and 
 * save it as a new task if the input is valid; otherwise, do not 
 * save it and display an alert message
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