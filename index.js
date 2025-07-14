const cartIcon = document.getElementById('cart-icon');
const cartWindow = document.getElementsByClassName('cart-window');

cartIcon.addEventListener('click', () => {
    cartWindow.classList.toggle('hidden');
});
