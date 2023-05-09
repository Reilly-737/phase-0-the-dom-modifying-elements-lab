// Get the <main> element with id 'main'
const mainElement = document.querySelector('main#main');

// Remove the <main> element from the page
mainElement.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the text content of the <h1> element
newHeader.textContent = 'My New Header Text';

// Append the <h1> element to the body
document.body.appendChild(newHeader);

// Set the text content of the <h1> element
newHeader.textContent = 'My New Header Text';

// Set the id of the <h1> element to "victory"
newHeader.setAttribute('id', 'victory');

// Append the <h1> element to the body
document.body.appendChild(newHeader);

// Set the text content of the <h1> element
newHeader.textContent = 'My New Header Text';

// Set the id of the <h1> element to "victory"
newHeader.setAttribute('id', 'victory');

// Add the text "is the champion" to the <h1> element
newHeader.textContent = 'New Header is the champion';

// Append the <h1> element to the body
document.body.appendChild(newHeader);