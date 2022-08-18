// Get value of an input field
function getInputFielValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    if (inputFieldValue <= 0 || isNaN(inputFieldValue)) {
        alert('Error!!!');
        return 0;
    }
    return inputFieldValue;
}
// Get inner Text from an element
function getElementInnerTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}

// Set Element InnerText By id
function setElementInnerTextById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}