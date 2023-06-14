const userName = prompt("Tell me your name, stranger!").trim();
const mainHeading = document.querySelector('.header__heading');

mainHeading.textContent = `Hello, ${userName}, what brings you to this land?`;

console.log(userName);


