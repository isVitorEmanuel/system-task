import handleAdd from "./AddButton.js";
import handleCancel from "./CancelButton.js";

const actButton = document.querySelector('#actButton');

/*
 * Main button configuration.
 * When clicked, it opens a popup form for adding a new task.
 */
actButton.addEventListener('click', (e) => {
    const body = document.body;

    const wrapperPopup = document.createElement('div');
    wrapperPopup.setAttribute('class', 'wrapper-popup');

    const popup = document.createElement('div');
    popup.setAttribute('class', 'pop-up');
    wrapperPopup.appendChild(popup)

    const title = document.createElement('h1');
    title.innerHTML = 'Nova Tarefa';
    popup.appendChild(title);

    const feedbackInput = document.createElement('span');
    feedbackInput.setAttribute('id', 'feedback-input');
    popup.appendChild(feedbackInput);

    const form = document.createElement('form');
    popup.appendChild(form);

    /* Configure the first input. */
    const inputFieldOne = document.createElement('div');
    inputFieldOne.setAttribute('class', 'input-field');

    const labelOne = document.createElement('label');
    labelOne.setAttribute('for', 'title-input')
    labelOne.innerHTML = 'Título: ';

    const input = document.createElement('input');
    input.setAttribute('class', 'input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'title-input');
    input.setAttribute('id', 'title-input');
    input.setAttribute('required', true);
    input.setAttribute('maxlength', 24);

    inputFieldOne.appendChild(labelOne);
    inputFieldOne.appendChild(input);
    form.appendChild(inputFieldOne);

    /* Configure the second input. */
    const inputFieldTwo = document.createElement('div');
    inputFieldTwo.setAttribute('class', 'input-field');

    const labelTwo = document.createElement('label');
    labelTwo.setAttribute('for', 'desc-input')
    labelTwo.innerHTML = 'Descrição: ';

    const textArea = document.createElement('textarea');
    textArea.setAttribute('class', 'input');
    textArea.setAttribute('name', 'desc-input');
    textArea.setAttribute('id', 'desc-input');

    inputFieldTwo.appendChild(labelTwo);
    inputFieldTwo.appendChild(textArea);
    form.appendChild(inputFieldTwo);

    /* Configure the button's section. */
    const buttonsField = document.createElement('div');
    buttonsField.setAttribute('class', 'input-field button-field');
    
    const buttonCan  = document.createElement('button');
    buttonCan.setAttribute('type', 'button');
    buttonCan.setAttribute('id', 'btnCan');
    buttonCan.setAttribute('class', 'task-button');
    buttonCan.innerHTML = 'Cancelar';
    buttonCan.addEventListener('click', (e) => {
        handleCancel(wrapperPopup);
    });

    const buttonAdd  = document.createElement('button');
    buttonAdd.setAttribute('type', 'submit');
    buttonAdd.setAttribute('id', 'btnAdd');
    buttonAdd.setAttribute('class', 'task-button');
    buttonAdd.innerHTML = 'Adicionar';
    buttonAdd.addEventListener('click', (e) => {
        handleAdd(e);
    });

    buttonsField.appendChild(buttonCan);
    buttonsField.appendChild(buttonAdd);
    form.appendChild(buttonsField);

    body.prepend(wrapperPopup);
});

export default actButton;