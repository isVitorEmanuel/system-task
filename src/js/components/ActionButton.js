import { handleAdd, handleCancel } from "./Buttons.js";

const actButton = document.querySelector('#actButton');

/*
 * Configuration of the main button.
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

    const errorInput = document.createElement('span');
    errorInput.setAttribute('class', 'error-input');
    popup.appendChild(errorInput);

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

    inputFieldOne.appendChild(labelOne);
    inputFieldOne.appendChild(input);
    popup.appendChild(inputFieldOne);

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
    popup.appendChild(inputFieldTwo);

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
    buttonAdd.setAttribute('type', 'button');
    buttonAdd.setAttribute('id', 'btnAdd');
    buttonAdd.setAttribute('class', 'task-button');
    buttonAdd.innerHTML = 'Adicionar';
    buttonAdd.addEventListener('click', handleAdd);

    buttonsField.appendChild(buttonCan);
    buttonsField.appendChild(buttonAdd);
    popup.appendChild(buttonsField);

    body.prepend(wrapperPopup);
});

export default actButton;