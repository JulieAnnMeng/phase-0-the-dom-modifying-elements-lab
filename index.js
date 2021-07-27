document.querySelector('main').remove();

const newHeader = document.createElement('h1'); 
const myName = 'Julie';

document.body.appendChild(newHeader); 
newHeader.id = 'victory';
newHeader.textContent = myName +" is the champion";