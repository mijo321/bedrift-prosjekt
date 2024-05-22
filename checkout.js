// Get cart from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display cart items
cart.forEach(itemName => {
    // Create a new paragraph element for each item
    const p = document.createElement('p');
    p.textContent = itemName;

    // Append the paragraph to the checkout form
    document.getElementById('checkoutForm').appendChild(p);
});
