// onClick send u to the welcome page
const tictac = document.getElementById('TicTacToe');
const shoppingCart = document.getElementById('shopping-cart-img');
const creditCard = document.getElementById('credit-card-img');
const pageBuilder = document.getElementById('page-builder');
const snake = document.getElementById('snake');
const toDo = document.getElementById('to-do');


tictac.addEventListener('click', () => {
    window.location.href = "https://alblash.github.io/tictactoe_welcome/"
});

shoppingCart.addEventListener('click', () => {
    window.location.href = 'https://alblash.github.io/Shopping-cart_welcome/'
});

creditCard.addEventListener('click', () => {
    window.location.href = 'https://alblash.github.io/credit-card_welcome/'
});

pageBuilder.addEventListener('click', () => {
    window.location.href = 'https://alblash.github.io/PageBuilder_welcome/'
});

snake.addEventListener('click', () => {
    window.location.href = 'https://alblash.github.io/snake-welcome-js/'
});

toDo.addEventListener('click', () => {
    window.location.href = 'https://alblash.github.io/ToDo_wel_js/'
})