// ===============================
// CART DATA
// ===============================

let cart = [];


// ===============================
// ADD TO CART
// ===============================

function addToCart(itemName, price) {

    const existingItem = cart.find(function(item) {
        return item.name === itemName;
    });

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: itemName,
            price: price,
            quantity: 1
        });

    }

    // Cart update hoga
    // Cart automatically OPEN nahi hoga
    renderCart();
}


// ===============================
// RENDER CART
// ===============================

function renderCart() {

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;
    let itemCount = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

    }


    cart.forEach(function(item, index) {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;
        itemCount += item.quantity;


        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `
            <div>

                <h3>${item.name}</h3>

                <p>₹${item.price} × ${item.quantity}</p>

                <div class="quantity-controls">

                    <button onclick="changeQuantity(${index}, -1)">
                        −
                    </button>

                    <span>${item.quantity}</span>

                    <button onclick="changeQuantity(${index}, 1)">
                        +
                    </button>

                </div>

            </div>

            <strong>₹${itemTotal}</strong>
        `;


        cartItems.appendChild(cartItem);

    });


    cartCount.textContent = itemCount;
    cartTotal.textContent = total;

}


// ===============================
// CHANGE QUANTITY
// ===============================

function changeQuantity(index, amount) {

    cart[index].quantity += amount;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    renderCart();

}


// ===============================
// OPEN CART
// ===============================

function openCart() {

    const cartPanel =
        document.getElementById("cartPanel");

    cartPanel.classList.add("open");

}


// ===============================
// CLOSE CART
// ===============================

function closeCart() {

    const cartPanel =
        document.getElementById("cartPanel");

    cartPanel.classList.remove("open");

}


// ===============================
// PLACE ORDER
// ===============================

function placeOrder() {

    const customerName =
        document.getElementById("customerName").value.trim();

    const tableNumber =
        document.getElementById("tableNumber").value.trim();

    const phoneNumber =
        document.getElementById("phoneNumber").value.trim();


    if (customerName === "") {

        alert("Please enter your name.");
        return;

    }


    if (tableNumber === "") {

        alert("Please enter your table number.");
        return;

    }


    if (phoneNumber === "") {

        alert("Please enter your phone number.");
        return;

    }


    if (cart.length === 0) {

        alert("Your cart is empty!");
        return;

    }


    let orderMessage =
        "🍽️ NEW RESTAURANT ORDER\n\n";


    orderMessage +=
        "Customer: " +
        customerName +
        "\n";


    orderMessage +=
        "Table: " +
        tableNumber +
        "\n";


    orderMessage +=
        "Phone: " +
        phoneNumber +
        "\n\n";


    orderMessage +=
        "ORDER ITEMS:\n";


    let total = 0;


    cart.forEach(function(item) {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        orderMessage +=
            item.name +
            " x " +
            item.quantity +
            " = ₹" +
            itemTotal +
            "\n";

    });


    orderMessage +=
        "\nTOTAL: ₹" +
        total;


    // WhatsApp number
    // Baad mein restaurant owner ka number yahan daalna

    const whatsappNumber =
        "919876543210";


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(orderMessage);


    window.open(
        whatsappURL,
        "_blank"
    );

}


// ===============================
// CATEGORY FILTER
// ===============================

function filterMenu(category) {

    const cards =
        document.querySelectorAll(".food-card");

    const buttons =
        document.querySelectorAll(".category-btn");


    cards.forEach(function(card) {

        const cardCategory =
            card.getAttribute("data-category");


        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });


    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    buttons.forEach(function(button) {

        const buttonText =
            button.getAttribute("onclick");


        if (
            buttonText &&
            buttonText.includes("'" + category + "'")
        ) {

            button.classList.add("active");

        }

    });

}


// ===============================
// SEARCH FOOD
// ===============================

const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function() {

            const searchText =
                searchInput.value
                .toLowerCase()
                .trim();


            const cards =
                document.querySelectorAll(".food-card");


            cards.forEach(function(card) {

                const foodName =
                    card.querySelector("h3")
                    .textContent
                    .toLowerCase();


                const foodDescription =
                    card.querySelector("p")
                    .textContent
                    .toLowerCase();


                if (
                    foodName.includes(searchText) ||
                    foodDescription.includes(searchText)
                ) {

                    card.style.display = "flex";

                } else {

                    card.style.display = "none";

                }

            });

        }
    );

}
