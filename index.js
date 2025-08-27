const cartIcon = document.getElementById('cart-icon');
const cartWindow = document.querySelector('.cart-window');

cartIcon.addEventListener('click', () => {
    cartWindow.classList.toggle('visible');
});

const closeCartBtn = document.getElementById('close-cart');
closeCartBtn.addEventListener('click', () => {
    cartWindow.classList.remove('visible');
});

const overlay = document.getElementById('overlay');
overlay.addEventListener('click', () => {
    cartWindow.classList.remove('visible');
});

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartWindow.classList.add('visible');
    });
});
