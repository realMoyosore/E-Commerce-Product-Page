const cartIcon = document.getElementById('cart-icon');
const cartWindow = document.querySelector('.cart-window');

cartIcon.addEventListener('click', () => {
    cartWindow.classList.toggle('visible');
});

const closeCartBtn = document.getElementById('close-cart');

closeCartBtn.addEventListener('click', () => {
    cartWindow.classList.remove('visible');
});

// Close cart when clicking outside of it
document.addEventListener('click', (event) => {
    if (!cartIcon.contains(event.target) && !cartWindow.contains(event.target)) {
        cartWindow.classList.remove('visible');
    }
});