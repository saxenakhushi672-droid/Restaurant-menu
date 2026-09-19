const menuItems = [
    // FAT LOSS MEALS
    {
        id: 1,
        name: "Grilled Paneer Salad",
        price: 249,
        category: "fat-loss",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
        description: "Grilled paneer with crisp greens, cucumber, tomato and a light dressing.",
        nutrition: { calories: 310, protein: 20, carbs: 18, fat: 17 },
        ingredients: "Paneer, lettuce, cucumber, tomato, capsicum, herbs and light dressing.",
        preparation: "Paneer is lightly grilled and served over fresh vegetables with a simple herb dressing.",
        allergens: "Contains milk."
    },
    {
        id: 2,
        name: "Protein Veg Bowl",
        price: 269,
        category: "fat-loss",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
        description: "A colourful bowl of vegetables, chickpeas and greens for a balanced meal.",
        nutrition: { calories: 340, protein: 16, carbs: 42, fat: 11 },
        ingredients: "Chickpeas, cucumber, tomato, lettuce, carrot, capsicum, lemon and herbs.",
        preparation: "Fresh vegetables and chickpeas are tossed together with lemon and herbs.",
        allergens: "Please ask the café team about allergens."
    },
    {
        id: 3,
        name: "Sprouts & Chickpea Chaat",
        price: 199,
        category: "fat-loss",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
        description: "Fresh sprouts and chickpeas tossed with vegetables, lemon and Indian spices.",
        nutrition: { calories: 280, protein: 15, carbs: 41, fat: 6 },
        ingredients: "Mixed sprouts, chickpeas, onion, tomato, cucumber, coriander, lemon and spices.",
        preparation: "Sprouts and chickpeas are mixed fresh with chopped vegetables, lemon and seasoning.",
        allergens: "Please ask the café team about allergens."
    },
    {
        id: 4,
        name: "Veggie Oats Bowl",
        price: 219,
        category: "fat-loss",
        image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=900&q=85",
        description: "Savory oats cooked with colourful vegetables and gentle Indian seasoning.",
        nutrition: { calories: 290, protein: 11, carbs: 43, fat: 8 },
        ingredients: "Oats, carrot, peas, capsicum, onion, tomato and herbs.",
        preparation: "Oats are cooked with fresh vegetables and lightly seasoned for a warm, filling bowl.",
        allergens: "Contains oats. Please check with the café team for gluten-related requirements."
    },

    // MUSCLE GAIN MEALS
    {
        id: 5,
        name: "High Protein Paneer Bowl",
        price: 329,
        category: "muscle-gain",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=85",
        description: "Grilled paneer, vegetables and rice combined into a satisfying protein-focused bowl.",
        nutrition: { calories: 560, protein: 32, carbs: 52, fat: 24 },
        ingredients: "Paneer, rice, capsicum, broccoli, carrot, herbs and spices.",
        preparation: "Paneer is grilled and served with seasoned rice and sautéed vegetables.",
        allergens: "Contains milk."
    },
    {
        id: 6,
        name: "Paneer Rice Power Bowl",
        price: 319,
        category: "muscle-gain",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
        description: "A hearty combination of paneer, rice and vegetables made for a substantial meal.",
        nutrition: { calories: 610, protein: 30, carbs: 67, fat: 25 },
        ingredients: "Paneer, rice, corn, capsicum, carrot, onion and spices.",
        preparation: "Seasoned paneer and vegetables are served over warm rice.",
        allergens: "Contains milk."
    },
    {
        id: 7,
        name: "Soya Protein Bowl",
        price: 279,
        category: "muscle-gain",
        image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&w=900&q=85",
        description: "Protein-rich soya chunks paired with rice and vegetables in a wholesome bowl.",
        nutrition: { calories: 520, protein: 34, carbs: 63, fat: 14 },
        ingredients: "Soya chunks, rice, capsicum, onion, carrot, tomato and spices.",
        preparation: "Soya chunks are seasoned and cooked with vegetables, then paired with rice.",
        allergens: "Contains soy."
    },
    {
        id: 8,
        name: "Paneer Protein Wrap",
        price: 279,
        category: "muscle-gain",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
        description: "Grilled paneer and crunchy vegetables wrapped into an easy protein-packed meal.",
        nutrition: { calories: 490, protein: 27, carbs: 46, fat: 22 },
        ingredients: "Paneer, whole-wheat wrap, lettuce, capsicum, onion, tomato and yogurt dressing.",
        preparation: "Grilled paneer and fresh vegetables are rolled into a warm whole-wheat wrap.",
        allergens: "Contains wheat and milk."
    },

    // CRAVE & INDULGE
    {
        id: 9,
        name: "Farmhouse Pizza",
        price: 399,
        category: "crave",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
        description: "A loaded café pizza with colourful vegetables and plenty of melted cheese.",
        nutrition: { calories: 590, protein: 23, carbs: 68, fat: 25 },
        ingredients: "Pizza base, tomato sauce, mozzarella, onion, capsicum, tomato and corn.",
        preparation: "Vegetables and cheese are layered over a sauced pizza base and baked until golden.",
        allergens: "Contains wheat and milk."
    },
    {
        id: 10,
        name: "Paneer Burger",
        price: 249,
        category: "crave",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
        description: "A toasted burger stacked with paneer, fresh vegetables and creamy sauce.",
        nutrition: { calories: 510, protein: 20, carbs: 45, fat: 29 },
        ingredients: "Burger bun, paneer, lettuce, onion, tomato, cheese and sauce.",
        preparation: "Seasoned paneer is cooked and layered inside a toasted bun with fresh toppings.",
        allergens: "Contains wheat and milk."
    },
    {
        id: 11,
        name: "White Sauce Pasta",
        price: 299,
        category: "crave",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
        description: "Creamy pasta tossed in a smooth white sauce with vegetables and herbs.",
        nutrition: { calories: 540, protein: 17, carbs: 61, fat: 26 },
        ingredients: "Pasta, milk, butter, cheese, vegetables and herbs.",
        preparation: "Pasta is cooked until tender and tossed in freshly prepared creamy white sauce.",
        allergens: "Contains wheat and milk."
    },
    {
        id: 12,
        name: "Honey Chilli Potato",
        price: 219,
        category: "crave",
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85",
        description: "Crispy potato strips tossed in a glossy sweet and spicy chilli glaze.",
        nutrition: { calories: 410, protein: 6, carbs: 57, fat: 18 },
        ingredients: "Potato, honey, chilli sauce, sesame, spring onion and soy sauce.",
        preparation: "Crispy potato strips are quickly tossed with honey, chilli and sesame.",
        allergens: "Contains soy and sesame."
    }
];

const categoryInfo = {
    "fat-loss": {
        label: "LIGHT & BALANCED",
        title: "Fat Loss Meals",
        description: "Fresh, portion-conscious meals built around vegetables, protein and balanced ingredients.",
        search: "Search Fat Loss Meals..."
    },

    "muscle-gain": {
        label: "PROTEIN & POWER",
        title: "Muscle Gain Meals",
        description: "Protein-focused and satisfying meals for when you want something more substantial.",
        search: "Search Muscle Gain Meals..."
    },

    "crave": {
        label: "YOUR FAVOURITES",
        title: "Crave & Indulge",
        description: "Comfort-food favourites for the days when cravings win.",
        search: "Search Crave & Indulge..."
    }
};

let currentCategory = null;


/* ENTER MENU */

function enterMenu() {
    const welcomeScreen = document.getElementById("welcomeScreen");
    const mainWebsite = document.getElementById("mainWebsite");

    if (welcomeScreen) {
        welcomeScreen.style.display = "none";
    }

    if (mainWebsite) {
        mainWebsite.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* OPEN CATEGORY */

function openCategory(category) {
    currentCategory = category;

    const info = categoryInfo[category];

    if (!info) return;

    const categoryScreen = document.getElementById("categoryScreen");
    const dishScreen = document.getElementById("dishScreen");
    const categoryLabel = document.getElementById("categoryLabel");
    const categoryTitle = document.getElementById("categoryTitle");
    const categoryDescription = document.getElementById("categoryDescription");
    const searchInput = document.getElementById("searchInput");

    if (categoryScreen) {
        categoryScreen.style.display = "none";
    }

    if (dishScreen) {
        dishScreen.classList.add("active");
    }

    if (categoryLabel) {
        categoryLabel.textContent = info.label;
    }

    if (categoryTitle) {
        categoryTitle.textContent = info.title;
    }

    if (categoryDescription) {
        categoryDescription.textContent = info.description;
    }

    if (searchInput) {
        searchInput.value = "";
        searchInput.placeholder = info.search;
    }

    const dishes = menuItems.filter(
        item => item.category === category
    );

    displayMenu(dishes);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* DISPLAY DISHES */

function displayMenu(items) {
    const foodGrid = document.getElementById("foodGrid");

    if (!foodGrid) return;

    if (items.length === 0) {
        foodGrid.innerHTML = `
            <div class="no-results">
                <h3>No dishes found</h3>
                <p>Try searching for another dish.</p>
            </div>
        `;
        return;
    }

    foodGrid.innerHTML = items.map(item => `
        <article
            class="food-card"
            onclick="showDishDetails(${item.id})"
        >
            <div class="food-image">
                <img
                    src="${item.image}"
                    alt="${item.name}"
                    loading="lazy"
                >
            </div>

            <div class="food-info">
                <div class="food-top">
                    <h3>${item.name}</h3>

                    <span class="food-price">
                        ₹${item.price}
                    </span>
                </div>

                <p class="food-description">
                    ${item.description}
                </p>

                <div class="food-meta">
                    <span>
                        ${item.nutrition.protein}g protein
                    </span>

                    <span>
                        View details →
                    </span>
                </div>
            </div>
        </article>
    `).join("");
}


/* SEARCH */

function searchCurrentCategory() {
    if (!currentCategory) return;

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    const searchValue =
        searchInput.value.trim().toLowerCase();

    const filteredItems = menuItems.filter(item => {
        const sameCategory =
            item.category === currentCategory;

        const matchesSearch =
            item.name.toLowerCase().includes(searchValue) ||
            item.description.toLowerCase().includes(searchValue);

        return sameCategory && matchesSearch;
    });

    displayMenu(filteredItems);
}


/* GO HOME */

function goHome() {
    currentCategory = null;

    const categoryScreen = document.getElementById("categoryScreen");
    const dishScreen = document.getElementById("dishScreen");
    const searchInput = document.getElementById("searchInput");

    if (dishScreen) {
        dishScreen.classList.remove("active");
    }

    if (categoryScreen) {
        categoryScreen.style.display = "";
    }

    if (searchInput) {
        searchInput.value = "";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* DISH DETAILS */

function showDishDetails(id) {
    const item = menuItems.find(
        dish => dish.id === id
    );

    if (!item) return;

    const info = categoryInfo[item.category];
    const modal = document.getElementById("dishModal");

    if (!modal) return;

    document.getElementById("detailImage").src = item.image;
    document.getElementById("detailImage").alt = item.name;

    document.getElementById("detailCategory").textContent =
        info ? info.title : "HP Cafe";

    document.getElementById("detailName").textContent =
        item.name;

    document.getElementById("detailPrice").textContent =
        `₹${item.price}`;

    document.getElementById("detailDescription").textContent =
        item.description;

    document.getElementById("detailCalories").textContent =
        item.nutrition.calories;

    document.getElementById("detailProtein").textContent =
        `${item.nutrition.protein}g`;

    document.getElementById("detailCarbs").textContent =
        `${item.nutrition.carbs}g`;

    document.getElementById("detailFat").textContent =
        `${item.nutrition.fat}g`;

    document.getElementById("detailIngredients").textContent =
        item.ingredients;

    document.getElementById("detailPreparation").textContent =
        item.preparation;

    document.getElementById("detailAllergens").textContent =
        item.allergens;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* CLOSE DETAILS */

function closeDishDetails() {
    const modal = document.getElementById("dishModal");

    if (!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


function closeDishFromBackground(event) {
    if (event.target && event.target.id === "dishModal") {
        closeDishDetails();
    }
}


/* OFFERS */

function openOffers() {
    const panel = document.getElementById("offersPanel");
    const overlay = document.getElementById("offersOverlay");

    if (panel) {
        panel.classList.add("active");
    }

    if (overlay) {
        overlay.classList.add("active");
    }

    document.body.style.overflow = "hidden";
}


function closeOffers() {
    const panel = document.getElementById("offersPanel");
    const overlay = document.getElementById("offersOverlay");

    if (panel) {
        panel.classList.remove("active");
    }

    if (overlay) {
        overlay.classList.remove("active");
    }

    document.body.style.overflow = "";
}


/* ESCAPE KEY */

document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;

    const dishModal = document.getElementById("dishModal");
    const offersPanel = document.getElementById("offersPanel");

    if (
        dishModal &&
        dishModal.classList.contains("active")
    ) {
        closeDishDetails();
        return;
    }

    if (
        offersPanel &&
        offersPanel.classList.contains("active")
    ) {
        closeOffers();
    }
});