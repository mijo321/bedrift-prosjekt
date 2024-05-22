// Define cartItems at the top of the file
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart items
function displayCartItems() {
    // Clear current cart display
    document.getElementById('cart').innerHTML = '';

    // Load cart items from local storage
    cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Display cart items
    const cartDiv = document.getElementById('cart');
    cartItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${item.name} <img src="${item.image}" alt="${item.name}" width="50"> <button class="removeItem" data-index="${index}">x</button></p>
        `;
        cartDiv.appendChild(div);
    });
}

// Call displayCartItems function initially to display any items already in the cart
displayCartItems();

// Handle click event for each "Add to Cart" button
const addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Get item name and image URL from button's data-item attribute
        const itemData = event.target.getAttribute('data-item').split('|');
        const itemName = itemData[0];
        const itemImage = itemData[1];

        // Get cart from local storage
        cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Add item to cart
        cartItems.push({ name: itemName, image: itemImage });

        // Save cart to local storage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Display updated cart items
        displayCartItems();
    });
});

// Handle click event for "Clear Cart" button
document.getElementById('clearCart').addEventListener('click', function() {
    // Clear cart from local storage
    localStorage.removeItem('cart');

    // Clear cart display
    document.getElementById('cart').innerHTML = '';

    // Clear cartItems array
    cartItems = [];
});

// Handle click event for each "Remove" button
document.getElementById('cart').addEventListener('click', function(event) {
    if (event.target.classList.contains('removeItem')) {
        // Get item index from button's data-index attribute
        const itemIndex = event.target.getAttribute('data-index');

        // Remove item from cart
        cartItems.splice(itemIndex, 1);

        // Save updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Display updated cart items
        displayCartItems();
    }
});
