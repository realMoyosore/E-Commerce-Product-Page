const cartIcon = document.getElementById('cart-icon');
const cartWindow = document.querySelector('.cart-window');

cartIcon.addEventListener('click', () => {
    cartWindow.classList.toggle('visible');
});

const closeCartBtn = document.getElementById('close-cart');

closeCartBtn.addEventListener('click', () => {
    cartWindow.classList.remove('visible');
});
