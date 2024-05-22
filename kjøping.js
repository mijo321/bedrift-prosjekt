// Handle click event for each "Add to Cart" button
const addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Get item name and image URL from button's data-item attribute
        const itemData = event.target.getAttribute('data-item').split('|');
        const itemName = itemData[0];
        const itemImage = itemData[1];

        // Get cart from local storage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add item to cart
        cart.push({ name: itemName, image: itemImage });

        // Save cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Display updated cart items
        displayCartItems();
    });
});

