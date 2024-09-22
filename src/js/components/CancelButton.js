/**
 * Function to handle the cancel button click.
 * When the cancel button is clicked, it removes the popup from the DOM.
 * @param {HTMLElement} wrapperPopup - The wrapper div that contains the popup.
 */
const handleCancel = (wrapperPopup) => {
    wrapperPopup.remove();
};

export default handleCancel;