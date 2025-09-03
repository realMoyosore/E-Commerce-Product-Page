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

// Prevent closing cart when clicking inside it
cartWindow.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Cart functionality

const cart = [];

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

function updateCart() {
    // Update cart UI
    console.log('Cart updated:', cart);
}

// Product addition
function addProductsToCart() {
    addToCart({ id: 1, name: 'Product 1', price: 100 });
    addToCart({ id: 2, name: 'Product 2', price: 150 });
    addToCart({ id: 3, name: 'Product 3', price: 200 });

    removeFromCart(2);
}
