// Define cartItems at the top of the file
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart items
// Function to display cart items
function displayCartItems() {
    // Clear current cart display
    document.getElementById('cart').innerHTML = '';

    // Load cart items from local storage
    cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Initialize total price
    let totalPrice = 0;

    // Display cart items
    const cartDiv = document.getElementById('cart');
    cartItems.forEach((item, index) => {
        const div = document.createElement('div');
        
        if (item.name === "Salat") {
            div.innerHTML = `
                <p class="mb-4">
                    <div class="flex justify-between">
                        <div class="w-32 h-32 rounded-md overflow-hidden">
                        <img class="scale-125" src="${item.image}" alt="${item.name}">   
                        </div>
                        <div class="flex self-center text-xl"> ${item.name} </div>
                        <button class="removeItem" data-index="${index}">x</button>
                    </div>
                </p>
            `;
            cartDiv.appendChild(div);
        }
        else{
            div.innerHTML = `
                <p class="mb-4">
                    <div class="flex justify-between">
                        <div class="w-32 h-36 rounded-md overflow-hidden">
                        <img class="scale-110" src="${item.image}" alt="${item.name}">   
                        </div>
                        <div class="flex self-center text-xl"> ${item.name} </div>
                        <button class="removeItem" data-index="${index}">x</button>
                    </div>
                </p>
            `;
            cartDiv.appendChild(div);
        }
    });
}





// Call displayCartItems function initially to display any items already in the cart


// Handle click event for each "Add to Cart" button
const addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Get item name, image URL, and price from button's data-item attribute
        const itemData = event.target.getAttribute('data-item').split('|');
        const itemName = itemData[0];
        const itemImage = itemData[1];
        const itemPrice = parseFloat(itemData[2]);

        // Get cart from local storage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add item to cart
        cart.push({ name: itemName, image: itemImage, price: itemPrice });

        // Save cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        
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





displayCartItems();
