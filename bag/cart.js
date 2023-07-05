// Sample data for the cart
const cartItems = [
    {
        id: 1,
        name: "Product 1",
        price: 10,
        quantity: 2,
    },
    {
        id: 2,
        name: "Product 2",
        price: 15,
        quantity: 1,
    },
    {
        id: 3,
        name: "Product 3",
        price: 50,
        quantity: 3,
    },
];

// Function to calculate the total items in the cart
function calculateTotalItems(items) {
    let totalItems = 0;
    for (const item of items) {
        totalItems += item.quantity;
    }
    return totalItems;
}

// Function to calculate the total amount in the cart
function calculateTotalAmount(items) {
    let totalAmount = 0;
    for (const item of items) {
        totalAmount += item.price * item.quantity;
    }
    return totalAmount;
}

// Function to update the cart information in the HTML
function updateCartInformation() {
    const totalItemsElement = document.getElementById("totalItems");
    const totalAmountElement = document.getElementById("totalAmount");

    const totalItems = calculateTotalItems(cartItems);
    const totalAmount = calculateTotalAmount(cartItems);

    totalItemsElement.textContent = totalItems;
    totalAmountElement.textContent = `$${totalAmount}`;
}

// Function to remove the item from the cart
function removeCartItem(itemId) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1);
        renderCartItems();
        updateCartInformation();
    }
}

// Function to apply the coupon code
function applyCoupon() {
    const couponCodeElement = document.getElementById("couponCode");
    const couponCode = couponCodeElement.value;

    // Apply coupon code logic here
    if (couponCode === "Masai15") {
        const totalAmount = calculateTotalAmount(cartItems);
        const discountedAmount = totalAmount - (totalAmount * 0.15); // 15% discount

        // Update the bill amount in the HTML
        const billAmountElement = document.getElementById("billAmount");
        billAmountElement.textContent = `$${discountedAmount}`;
    }
}

// Function to render the cart items in the HTML
function renderCartItems() {
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.innerHTML = ""; // Clear the existing cart items

    for (const item of cartItems) {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("cart-item");

        const itemNameElement = document.createElement("p");
        itemNameElement.textContent = item.name;

        const itemPriceElement = document.createElement("p");
        itemPriceElement.textContent = `$${item.price}`;

        const itemQuantityElement = document.createElement("p");
        itemQuantityElement.textContent = `Quantity: ${item.quantity}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            removeCartItem(item.id); // Call the function to remove the item from the cart
        });

        cartItemElement.appendChild(itemNameElement);
        cartItemElement.appendChild(itemPriceElement);
        cartItemElement.appendChild(itemQuantityElement);
        cartItemElement.appendChild(removeButton);

        cartContainer.appendChild(cartItemElement);
    }
    
    function proceedToPayment() {
        // Perform any necessary payment-related logic here

        // Redirect to the payment page
        window.location.href = "payment.html";
    }

    // Add an event listener to the "Proceed to Payment" button
    const proceedButton = document.getElementById("proceedPaymentButton");
    proceedButton.addEventListener("click", proceedToPayment);

    
}


// Event listener for the apply coupon button
const applyCouponButton = document.getElementById("applyCoupon");
applyCouponButton.addEventListener("click", applyCoupon);

// Call the initial rendering functions
renderCartItems();
updateCartInformation();
