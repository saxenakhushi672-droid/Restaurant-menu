/* =====================================================
   CAFÉ LUMIÈRE — COMPLETE SCRIPT.JS
===================================================== */


/* =====================================================
   MENU DATA — 60 DISHES
===================================================== */

const menuItems = [

    /* ==================== SNACKS ==================== */

    {
        id: 1,
        name: "French Fries",
        price: 129,
        category: "starter",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/2022-05-30%2020%2029%2047%20Freshly-prepared%20home-made%20french%20fries%20in%20the%20Mountainview%20section%20of%20Ewing%20Township%2C%20Mercer%20County%2C%20New%20Jersey.jpg",
        description: "Crispy golden fries served fresh and seasoned to perfection.",
        nutrition: { calories: 312, protein: 4, carbs: 41, fat: 14 },
        ingredients: "Potatoes, cooking oil, salt and seasoning.",
        preparation: "Fresh potatoes are cut into strips and fried until golden and crisp.",
        allergens: "Please ask the café attendant about allergens before ordering."
    },

    {
        id: 2,
        name: "Peri Peri Fries",
        price: 149,
        category: "starter",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Peri%20Peri%20Fries%20%40%20abc.jpg",
        description: "Golden fries tossed with lively peri peri seasoning.",
        nutrition: { calories: 330, protein: 4, carbs: 43, fat: 15 },
        ingredients: "Potatoes, cooking oil, peri peri seasoning and salt.",
        preparation: "Crispy fries are freshly tossed with peri peri seasoning.",
        allergens: "Please ask the café attendant about allergens before ordering."
    },

    {
        id: 3,
        name: "Cheese Fries",
        price: 179,
        category: "starter",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fries%20with%20cheese.jpg",
        description: "Crispy fries topped with creamy melted cheese.",
        nutrition: { calories: 390, protein: 8, carbs: 43, fat: 20 },
        ingredients: "Potatoes, cheese, cooking oil, salt and seasoning.",
        preparation: "Golden fries are topped with warm melted cheese.",
        allergens: "Milk."
    },

    {
        id: 4,
        name: "Garlic Bread",
        price: 159,
        category: "starter",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Garlicbread.jpg",
        description: "Toasted bread flavoured with garlic, herbs and butter.",
        nutrition: { calories: 280, protein: 7, carbs: 35, fat: 12 },
        ingredients: "Bread, butter, garlic, herbs and seasoning.",
        preparation: "Bread is spread with garlic butter and toasted until golden.",
        allergens: "Wheat, milk."
    },

    {
        id: 5,
        name: "Cheese Garlic Bread",
        price: 199,
        category: "starter",
        description: "Garlic bread finished with a generous layer of melted cheese.",
        nutrition: { calories: 350, protein: 10, carbs: 36, fat: 17 },
        ingredients: "Bread, butter, garlic, cheese and herbs.",
        preparation: "Garlic bread is topped with cheese and baked until golden.",
        allergens: "Wheat, milk."
    },

    {
        id: 6,
        name: "Veg Spring Rolls",
        price: 179,
        category: "starter",
        description: "Crispy rolls filled with seasoned vegetables.",
        nutrition: { calories: 260, protein: 6, carbs: 32, fat: 12 },
        ingredients: "Spring roll sheets, cabbage, carrot, capsicum and spices.",
        preparation: "Seasoned vegetables are wrapped and fried until crisp.",
        allergens: "Wheat."
    },

    {
        id: 7,
        name: "Paneer Tikka",
        price: 249,
        category: "starter",
        description: "Marinated paneer grilled with colourful vegetables and spices.",
        nutrition: { calories: 320, protein: 18, carbs: 12, fat: 21 },
        ingredients: "Paneer, capsicum, onion, yogurt and spices.",
        preparation: "Paneer and vegetables are marinated and grilled until lightly charred.",
        allergens: "Milk."
    },

    {
        id: 8,
        name: "Crispy Corn",
        price: 199,
        category: "starter",
        description: "Crunchy corn tossed with herbs and light seasoning.",
        nutrition: { calories: 270, protein: 6, carbs: 35, fat: 11 },
        ingredients: "Sweet corn, flour, cooking oil, spices and herbs.",
        preparation: "Corn is coated and fried until crisp before being seasoned.",
        allergens: "May contain wheat."
    },

    {
        id: 9,
        name: "Veg Nuggets",
        price: 169,
        category: "starter",
        description: "Crispy vegetable nuggets served with a dipping sauce.",
        nutrition: { calories: 290, protein: 7, carbs: 31, fat: 15 },
        ingredients: "Mixed vegetables, potato, breadcrumbs and spices.",
        preparation: "Vegetable mixture is crumb-coated and fried until crisp.",
        allergens: "Wheat."
    },

    {
        id: 10,
        name: "Cheese Balls",
        price: 199,
        category: "starter",
        description: "Crispy golden bites with a warm cheesy centre.",
        nutrition: { calories: 330, protein: 10, carbs: 25, fat: 21 },
        ingredients: "Cheese, potato, breadcrumbs, herbs and spices.",
        preparation: "Cheese mixture is shaped, crumb-coated and fried until golden.",
        allergens: "Milk, wheat."
    },


    /* ==================== PIZZA & PASTA ==================== */

    {
        id: 11,
        name: "Margherita Pizza",
        price: 299,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=85",
        description: "Classic pizza with tomato sauce, mozzarella and herbs.",
        nutrition: { calories: 520, protein: 20, carbs: 63, fat: 21 },
        ingredients: "Pizza dough, tomato sauce, mozzarella and herbs.",
        preparation: "Pizza is topped with sauce and mozzarella before baking.",
        allergens: "Wheat, milk."
    },

    {
        id: 12,
        name: "Farmhouse Pizza",
        price: 399,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
        description: "Loaded pizza with fresh vegetables and melted cheese.",
        nutrition: { calories: 590, protein: 23, carbs: 68, fat: 25 },
        ingredients: "Pizza dough, tomato sauce, cheese, onion, capsicum and corn.",
        preparation: "Fresh vegetable toppings are baked over sauce and cheese.",
        allergens: "Wheat, milk."
    },

    {
        id: 13,
        name: "Paneer Tikka Pizza",
        price: 429,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",
        description: "Indian-inspired pizza topped with paneer tikka and vegetables.",
        nutrition: { calories: 620, protein: 27, carbs: 65, fat: 28 },
        ingredients: "Pizza dough, paneer, cheese, capsicum, tomato sauce and spices.",
        preparation: "Paneer tikka and vegetables are baked with cheese over a pizza base.",
        allergens: "Wheat, milk."
    },

    {
        id: 14,
        name: "Mexican Pizza",
        price: 399,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=900&q=85",
        description: "Spicy pizza with Mexican-style toppings and cheese.",
        nutrition: { calories: 570, protein: 21, carbs: 67, fat: 23 },
        ingredients: "Pizza dough, salsa, cheese, corn, capsicum, beans and spices.",
        preparation: "Mexican-style toppings are layered and baked with cheese.",
        allergens: "Wheat, milk."
    },

    {
        id: 15,
        name: "Cheese Burst Pizza",
        price: 449,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=85",
        description: "Rich pizza with an extra creamy cheese-filled base.",
        nutrition: { calories: 680, protein: 27, carbs: 67, fat: 34 },
        ingredients: "Pizza dough, cheese sauce, mozzarella and tomato sauce.",
        preparation: "A cheese-filled base is topped and baked until golden.",
        allergens: "Wheat, milk."
    },

    {
        id: 16,
        name: "White Sauce Pasta",
        price: 299,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=85",
        description: "Creamy pasta tossed in a smooth white sauce.",
        nutrition: { calories: 510, protein: 16, carbs: 59, fat: 24 },
        ingredients: "Pasta, milk, butter, flour, cheese and herbs.",
        preparation: "Cooked pasta is tossed in freshly prepared creamy white sauce.",
        allergens: "Wheat, milk."
    },

    {
        id: 17,
        name: "Red Sauce Pasta",
        price: 279,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
        description: "Pasta tossed in a rich tomato and herb sauce.",
        nutrition: { calories: 450, protein: 14, carbs: 64, fat: 14 },
        ingredients: "Pasta, tomato, garlic, herbs and olive oil.",
        preparation: "Cooked pasta is tossed with tomato, garlic and herbs.",
        allergens: "Wheat."
    },

    {
        id: 18,
        name: "Pink Sauce Pasta",
        price: 329,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=85",
        description: "Creamy tomato pasta combining rich red and white sauces.",
        nutrition: { calories: 500, protein: 15, carbs: 61, fat: 22 },
        ingredients: "Pasta, tomato sauce, cream, cheese and herbs.",
        preparation: "Tomato sauce and cream are combined and tossed with pasta.",
        allergens: "Wheat, milk."
    },

    {
        id: 19,
        name: "Arrabbiata Pasta",
        price: 299,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=900&q=85",
        description: "Pasta in a spicy tomato, garlic and herb sauce.",
        nutrition: { calories: 440, protein: 13, carbs: 63, fat: 13 },
        ingredients: "Pasta, tomato, garlic, chilli, olive oil and herbs.",
        preparation: "Pasta is tossed with a spicy garlic and tomato sauce.",
        allergens: "Wheat."
    },

    {
        id: 20,
        name: "Alfredo Pasta",
        price: 329,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=85",
        description: "Silky creamy pasta finished with cheese and herbs.",
        nutrition: { calories: 550, protein: 18, carbs: 60, fat: 27 },
        ingredients: "Pasta, cream, butter, parmesan, garlic and herbs.",
        preparation: "Cooked pasta is tossed in a creamy butter and cheese sauce.",
        allergens: "Wheat, milk."
    },


    /* ==================== BURGERS & SANDWICHES ==================== */

    {
        id: 21,
        name: "Classic Veg Burger",
        price: 199,
        category: "burger",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",
        description: "Crispy vegetable patty layered with fresh salad and sauce.",
        nutrition: { calories: 430, protein: 12, carbs: 48, fat: 22 },
        ingredients: "Burger bun, vegetable patty, lettuce, tomato, onion and sauce.",
        preparation: "Vegetable patty is cooked and assembled with fresh toppings.",
        allergens: "Wheat, milk."
    },

    {
        id: 22,
        name: "Cheese Burger",
        price: 229,
        category: "burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
        description: "Classic burger finished with melted cheese.",
        nutrition: { calories: 490, protein: 17, carbs: 49, fat: 27 },
        ingredients: "Burger bun, patty, cheese, lettuce, tomato and sauce.",
        preparation: "The patty is cooked and assembled with melted cheese.",
        allergens: "Wheat, milk."
    },

    {
        id: 23,
        name: "Paneer Burger",
        price: 249,
        category: "burger",
        image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=900&q=85",
        description: "Grilled paneer patty with fresh vegetables and café sauce.",
        nutrition: { calories: 510, protein: 20, carbs: 45, fat: 29 },
        ingredients: "Burger bun, paneer, lettuce, onion, tomato and sauce.",
        preparation: "Seasoned paneer is grilled and assembled in a toasted bun.",
        allergens: "Wheat, milk."
    },

    {
        id: 24,
        name: "Crispy Chicken Burger",
        price: 279,
        category: "burger",
        image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=900&q=85",
        description: "Crispy chicken fillet with lettuce and creamy sauce.",
        nutrition: { calories: 560, protein: 27, carbs: 52, fat: 27 },
        ingredients: "Burger bun, chicken fillet, breadcrumbs, lettuce and sauce.",
        preparation: "Crispy chicken is assembled in a toasted bun with fresh toppings.",
        allergens: "Wheat, egg, milk."
    },

    {
        id: 25,
        name: "Club Sandwich",
        price: 299,
        category: "burger",
        image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=900&q=85",
        description: "Layered sandwich packed with vegetables, cheese and sauces.",
        nutrition: { calories: 520, protein: 19, carbs: 55, fat: 25 },
        ingredients: "Bread, vegetables, cheese, sauces and herbs.",
        preparation: "Toasted bread is layered with fresh fillings and sauces.",
        allergens: "Wheat, milk."
    },

    {
        id: 26,
        name: "Grilled Cheese Sandwich",
        price: 229,
        category: "burger",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
        description: "Toasted sandwich with a warm, melted cheese filling.",
        nutrition: { calories: 420, protein: 15, carbs: 38, fat: 24 },
        ingredients: "Bread, cheese, butter and herbs.",
        preparation: "Cheese-filled bread is grilled with butter until golden.",
        allergens: "Wheat, milk."
    },

    {
        id: 27,
        name: "Paneer Tikka Sandwich",
        price: 249,
        category: "burger",
        image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=900&q=85",
        description: "Toasted sandwich filled with spicy paneer tikka and vegetables.",
        nutrition: { calories: 470, protein: 19, carbs: 45, fat: 24 },
        ingredients: "Bread, paneer, capsicum, onion, yogurt and spices.",
        preparation: "Paneer tikka filling is layered inside bread and toasted.",
        allergens: "Wheat, milk."
    },

    {
        id: 28,
        name: "Veg Grilled Sandwich",
        price: 199,
        category: "burger",
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=85",
        description: "Crisp grilled sandwich filled with seasoned vegetables.",
        nutrition: { calories: 390, protein: 11, carbs: 48, fat: 17 },
        ingredients: "Bread, potato, onion, tomato, capsicum, cheese and spices.",
        preparation: "Fresh vegetable filling is grilled between slices of bread.",
        allergens: "Wheat, milk."
    },

    {
        id: 29,
        name: "Chicken Sandwich",
        price: 279,
        category: "burger",
        image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?auto=format&fit=crop&w=900&q=85",
        description: "Tender chicken filling with fresh vegetables and sauce.",
        nutrition: { calories: 460, protein: 26, carbs: 42, fat: 21 },
        ingredients: "Bread, chicken, lettuce, tomato, mayonnaise and seasoning.",
        preparation: "Seasoned chicken is layered with vegetables inside toasted bread.",
        allergens: "Wheat, egg, milk."
    },

    {
        id: 30,
        name: "Peri Peri Sandwich",
        price: 249,
        category: "burger",
        image: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?auto=format&fit=crop&w=900&q=85",
        description: "Toasted sandwich with a spicy peri peri filling.",
        nutrition: { calories: 440, protein: 15, carbs: 48, fat: 20 },
        ingredients: "Bread, vegetables, cheese, peri peri seasoning and sauce.",
        preparation: "Peri peri filling is layered inside bread and grilled.",
        allergens: "Wheat, milk."
    },


    /* ==================== CHINESE ==================== */

    {
        id: 31,
        name: "Veg Hakka Noodles",
        price: 199,
        category: "chinese",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=85",
        description: "Stir-fried noodles tossed with colourful vegetables.",
        nutrition: { calories: 410, protein: 10, carbs: 61, fat: 14 },
        ingredients: "Noodles, cabbage, carrot, capsicum, onion and sauces.",
        preparation: "Noodles are wok-tossed with vegetables and sauces.",
        allergens: "Wheat, soy."
    },

    {
        id: 32,
        name: "Chicken Hakka Noodles",
        price: 249,
        category: "chinese",
        image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=900&q=85",
        description: "Wok-tossed noodles with tender seasoned chicken.",
        nutrition: { calories: 470, protein: 24, carbs: 58, fat: 16 },
        ingredients: "Noodles, chicken, vegetables, soy sauce and spices.",
        preparation: "Chicken and vegetables are wok-tossed with cooked noodles.",
        allergens: "Wheat, soy."
    },

    {
        id: 33,
        name: "Veg Fried Rice",
        price: 179,
        category: "chinese",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
        description: "Fragrant rice stir-fried with fresh vegetables and sauces.",
        nutrition: { calories: 390, protein: 8, carbs: 59, fat: 13 },
        ingredients: "Rice, carrot, capsicum, peas, onion and soy sauce.",
        preparation: "Cooked rice is wok-fried with vegetables and seasoning.",
        allergens: "Soy."
    },

    {
        id: 34,
        name: "Chicken Fried Rice",
        price: 229,
        category: "chinese",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
        description: "Wok-fried rice with seasoned chicken and vegetables.",
        nutrition: { calories: 450, protein: 22, carbs: 56, fat: 16 },
        ingredients: "Rice, chicken, vegetables, soy sauce and seasoning.",
        preparation: "Chicken and vegetables are stir-fried with cooked rice.",
        allergens: "Soy."
    },

    {
        id: 35,
        name: "Chilli Paneer",
        price: 249,
        category: "chinese",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_900%2Ch_900/FOOD_CATALOG/IMAGES/CMS/2025/12/4/89039271-6ced-4da6-9089-e3d7c7f6c9e4_d83e9c51-c505-4567-9dcd-6b4898f59a19.jpeg",
        description: "Crispy paneer tossed in a spicy chilli sauce.",
        nutrition: { calories: 410, protein: 19, carbs: 29, fat: 25 },
        ingredients: "Paneer, capsicum, onion, chilli sauce and soy sauce.",
        preparation: "Crispy paneer is tossed with vegetables and chilli sauce.",
        allergens: "Milk, soy."
    },

    {
        id: 36,
        name: "Chilli Chicken",
        price: 299,
        category: "chinese",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=85",
        description: "Tender chicken pieces tossed in a spicy chilli glaze.",
        nutrition: { calories: 450, protein: 30, carbs: 27, fat: 24 },
        ingredients: "Chicken, capsicum, onion, chilli sauce and soy sauce.",
        preparation: "Chicken is cooked and tossed with vegetables and chilli sauce.",
        allergens: "Soy."
    },

    {
        id: 37,
        name: "Veg Manchurian",
        price: 229,
        category: "chinese",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_900%2Ch_900/rqppq1avq2i5cdt8pvfg",
        description: "Vegetable dumplings served in a savoury Manchurian sauce.",
        nutrition: { calories: 360, protein: 9, carbs: 39, fat: 19 },
        ingredients: "Mixed vegetables, flour, garlic, ginger and sauces.",
        preparation: "Vegetable balls are fried and tossed in Manchurian sauce.",
        allergens: "Wheat, soy."
    },

    {
        id: 38,
        name: "Honey Chilli Potato",
        price: 219,
        category: "chinese",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_900%2Ch_900/FOOD_CATALOG/IMAGES/CMS/2026/1/28/23074e86-f421-4bd6-a2f0-9a063ae88dc0_9d9c56a6-9743-4fb8-9a2e-84b8a4562bc2.jpeg",
        description: "Crispy potato strips glazed with honey and chilli.",
        nutrition: { calories: 390, protein: 5, carbs: 54, fat: 16 },
        ingredients: "Potatoes, honey, chilli, sesame and sauces.",
        preparation: "Crispy potatoes are tossed in a sweet and spicy glaze.",
        allergens: "Sesame, soy."
    },

    {
        id: 39,
        name: "Schezwan Noodles",
        price: 229,
        category: "chinese",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85",
        description: "Spicy noodles tossed with Schezwan sauce and vegetables.",
        nutrition: { calories: 430, protein: 10, carbs: 62, fat: 16 },
        ingredients: "Noodles, Schezwan sauce, vegetables, garlic and spices.",
        preparation: "Noodles are wok-tossed with vegetables and spicy Schezwan sauce.",
        allergens: "Wheat, soy."
    },

    {
        id: 40,
        name: "Chinese Combo",
        price: 329,
        category: "chinese",
        image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=900&q=85",
        description: "A satisfying combination of popular Chinese café favourites.",
        nutrition: { calories: 620, protein: 20, carbs: 78, fat: 24 },
        ingredients: "Fried rice, noodles, vegetables, sauces and seasoning.",
        preparation: "Chinese favourites are freshly prepared and served together.",
        allergens: "Wheat, soy."
    },
        /* ==================== INDIAN ==================== */

    {
        id: 41,
        name: "Butter Paneer",
        price: 299,
        category: "indian",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
        description: "Soft paneer cooked in a rich tomato and butter gravy.",
        nutrition: { calories: 430, protein: 19, carbs: 18, fat: 31 },
        ingredients: "Paneer, tomato, butter, cream, onion and spices.",
        preparation: "Paneer is simmered in a creamy tomato and butter gravy.",
        allergens: "Milk."
    },

    {
        id: 42,
        name: "Kadhai Paneer",
        price: 299,
        category: "indian",
        image: "https://givukaorkjkksslrzuum.supabase.co/storage/v1/object/public/recipe-images/recipes/kadai-paneer.jpg",
        description: "Paneer cooked with capsicum, onion and aromatic spices.",
        nutrition: { calories: 390, protein: 20, carbs: 17, fat: 27 },
        ingredients: "Paneer, capsicum, onion, tomato and aromatic spices.",
        preparation: "Paneer and vegetables are cooked in a spiced tomato masala.",
        allergens: "Milk."
    },

    {
        id: 43,
        name: "Paneer Butter Masala",
        price: 319,
        category: "indian",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
        description: "Creamy paneer curry with a smooth buttery tomato gravy.",
        nutrition: { calories: 440, protein: 19, carbs: 20, fat: 31 },
        ingredients: "Paneer, tomato, butter, cream and spices.",
        preparation: "Paneer is gently simmered in a rich buttery tomato gravy.",
        allergens: "Milk."
    },

    {
        id: 44,
        name: "Dal Makhani",
        price: 249,
        category: "indian",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
        description: "Slow-cooked black lentils finished with butter and cream.",
        nutrition: { calories: 330, protein: 14, carbs: 37, fat: 15 },
        ingredients: "Black lentils, kidney beans, butter, cream, tomato and spices.",
        preparation: "Lentils are slow-cooked and finished with butter and cream.",
        allergens: "Milk."
    },

    {
        id: 45,
        name: "Chole Bhature",
        price: 229,
        category: "indian",
        image: "https://images.pexels.com/photos/11818239/pexels-photo-11818239.jpeg?auto=compress&cs=tinysrgb&w=900",
        description: "Spiced chickpeas served with fluffy fried bhature.",
        nutrition: { calories: 560, protein: 16, carbs: 76, fat: 21 },
        ingredients: "Chickpeas, flour, spices, cooking oil, onion and tomato.",
        preparation: "Spiced chickpeas are served with freshly fried bhature.",
        allergens: "Wheat."
    },

    {
        id: 46,
        name: "Masala Dosa",
        price: 179,
        category: "indian",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85",
        description: "Crispy dosa filled with spiced potato masala.",
        nutrition: { calories: 330, protein: 7, carbs: 52, fat: 10 },
        ingredients: "Rice, lentils, potato, onion and spices.",
        preparation: "Dosa batter is cooked crisp and filled with potato masala.",
        allergens: "Please ask the café attendant about allergens before ordering."
    },

    {
        id: 47,
        name: "Cheese Masala Dosa",
        price: 229,
        category: "indian",
        image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=900&q=85",
        description: "Crispy masala dosa with a delicious melted cheese layer.",
        nutrition: { calories: 420, protein: 13, carbs: 55, fat: 18 },
        ingredients: "Rice, lentils, potato, cheese, onion and spices.",
        preparation: "Masala dosa is finished with melted cheese.",
        allergens: "Milk."
    },

    {
        id: 48,
        name: "Idli Sambar",
        price: 149,
        category: "indian",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=85",
        description: "Soft steamed idlis served with warm South Indian sambar.",
        nutrition: { calories: 280, protein: 9, carbs: 48, fat: 5 },
        ingredients: "Rice, lentils, vegetables and spices.",
        preparation: "Steamed idlis are served fresh with warm sambar.",
        allergens: "Please ask the café attendant about allergens before ordering."
    },

    {
        id: 49,
        name: "Pav Bhaji",
        price: 199,
        category: "indian",
        image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=900",
        description: "Spiced mashed vegetable bhaji served with buttery toasted pav.",
        nutrition: { calories: 430, protein: 10, carbs: 56, fat: 18 },
        ingredients: "Potato, peas, tomato, cauliflower, pav, butter and spices.",
        preparation: "Spiced vegetable bhaji is served with freshly toasted pav.",
        allergens: "Wheat, milk."
    },

    {
        id: 50,
        name: "Chole Kulche",
        price: 199,
        category: "indian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chole%20Kulche%20%28Indian%20Food%29.jpg",
        description: "Spiced chickpeas paired with soft, toasted kulche.",
        nutrition: { calories: 470, protein: 14, carbs: 67, fat: 15 },
        ingredients: "Chickpeas, kulcha, onion, tomato and spices.",
        preparation: "Spiced chickpeas are served with warm toasted kulche.",
        allergens: "Wheat."
    },


    /* ==================== BEVERAGES ==================== */

    {
        id: 51,
        name: "Cold Coffee",
        price: 149,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
        description: "Chilled creamy coffee blended for a smooth café-style finish.",
        nutrition: { calories: 190, protein: 6, carbs: 24, fat: 8 },
        ingredients: "Coffee, milk, sugar and ice.",
        preparation: "Coffee, milk and ice are blended until smooth and chilled.",
        allergens: "Milk."
    },

    {
        id: 52,
        name: "Chocolate Cold Coffee",
        price: 179,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",
        description: "Cold coffee blended with chocolate for a rich sweet flavour.",
        nutrition: { calories: 240, protein: 7, carbs: 32, fat: 9 },
        ingredients: "Coffee, milk, chocolate, sugar and ice.",
        preparation: "Coffee and chocolate are blended with chilled milk and ice.",
        allergens: "Milk."
    },

    {
        id: 53,
        name: "Café Latte",
        price: 169,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=85",
        description: "Smooth espresso combined with steamed milk.",
        nutrition: { calories: 130, protein: 7, carbs: 10, fat: 7 },
        ingredients: "Espresso and steamed milk.",
        preparation: "Fresh espresso is combined with smooth steamed milk.",
        allergens: "Milk."
    },

    {
        id: 54,
        name: "Cappuccino",
        price: 169,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85",
        description: "Balanced espresso with steamed milk and creamy foam.",
        nutrition: { calories: 120, protein: 6, carbs: 9, fat: 6 },
        ingredients: "Espresso, milk and milk foam.",
        preparation: "Espresso is topped with steamed milk and creamy foam.",
        allergens: "Milk."
    },

    {
        id: 55,
        name: "Hot Chocolate",
        price: 199,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=900&q=85",
        description: "Warm, velvety chocolate drink finished with creamy milk.",
        nutrition: { calories: 250, protein: 8, carbs: 32, fat: 10 },
        ingredients: "Milk, chocolate, cocoa and sugar.",
        preparation: "Chocolate and cocoa are blended into warm milk.",
        allergens: "Milk."
    },

    {
        id: 56,
        name: "Fresh Lime Soda",
        price: 119,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",
        description: "Refreshing lime drink with sparkling soda.",
        nutrition: { calories: 85, protein: 0, carbs: 21, fat: 0 },
        ingredients: "Fresh lime, soda, sugar, salt and ice.",
        preparation: "Fresh lime is mixed with chilled sparkling soda.",
        allergens: "Please ask the café attendant about allergens before ordering."
    },

    {
        id: 57,
        name: "Oreo Shake",
        price: 219,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=900&q=85",
        description: "Thick creamy shake blended with chocolate cookies.",
        nutrition: { calories: 360, protein: 9, carbs: 48, fat: 15 },
        ingredients: "Milk, ice cream, chocolate cookies and sugar.",
        preparation: "Milk, ice cream and cookies are blended until thick and creamy.",
        allergens: "Milk, wheat."
    },

    {
        id: 58,
        name: "Chocolate Shake",
        price: 219,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",
        description: "Rich chocolate milkshake with a smooth creamy texture.",
        nutrition: { calories: 340, protein: 9, carbs: 43, fat: 14 },
        ingredients: "Milk, chocolate, ice cream and sugar.",
        preparation: "Chocolate, milk and ice cream are blended until smooth.",
        allergens: "Milk."
    },


    /* ==================== DESSERTS ==================== */

    {
        id: 59,
        name: "Chocolate Brownie",
        price: 169,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
        description: "Soft, rich chocolate brownie with a fudgy centre.",
        nutrition: { calories: 320, protein: 5, carbs: 42, fat: 15 },
        ingredients: "Flour, cocoa, chocolate, butter, sugar and eggs.",
        preparation: "Chocolate brownie batter is baked until soft and fudgy.",
        allergens: "Wheat, milk, egg."
    },

    {
        id: 60,
        name: "Brownie with Ice Cream",
        price: 249,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=900&q=85",
        description: "Warm chocolate brownie served with creamy ice cream.",
        nutrition: { calories: 450, protein: 8, carbs: 54, fat: 22 },
        ingredients: "Chocolate brownie, ice cream and chocolate sauce.",
        preparation: "A warm brownie is served with a scoop of chilled ice cream.",
        allergens: "Wheat, milk, egg."
    }

];


/* =====================================================
   FINAL IMAGE MAP
   IMPORTANT: DECLARE FIRST, APPLY AFTER
===================================================== */

const correctedImages = {

    /* SNACKS */

    1: "https://commons.wikimedia.org/wiki/Special:Redirect/file/French%20fries.jpeg",

    2: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Peri%20Peri%20French%20Fries%20-%20Mum%27s%20Cafe%2C%20Vadodara%20-%20Gujarat%20-%2001.jpg",

    3: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cheesy%20fries.jpg",

    4: "https://images.unsplash.com/photo-1556008531-57e6eefc7be4?auto=format&fit=crop&w=900&q=85",

    5: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cheese%20Garlic%20Bread.jpg",

    6: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fried%20Spring%20Rolls%20%2854538849838%29.jpg",

    7: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer%20tikka.jpg",

    8: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Crispy%20corn%20made%20by%20me.jpg",

    9: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Veg%20Cheese%20Ball.jpg",

    10: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cheese%20Balls%20-%201.jpg",


    /* PIZZA & PASTA */

    11: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=85",

    12: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",

    13: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer%20Pizza%20and%20Green%20Sauce%20Pasta.jpg",

    14: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=900&q=85",

    15: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=85",

    16: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2025/11/14/ee6f12cd-7f5d-4582-896a-c3726a494c27_9f469afc-2f8e-4833-96d4-d2771a6999cf.jpg",

    17: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Penne%20all%27arrabbiata.jpg",

    18: "https://meghanitup.com/wp-content/uploads/2025/01/Pink-Sauce-Pasta-7-3.jpg",

    19: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Penne%20Arrabbiata.jpg",

    20: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=85",


    /* BURGERS & SANDWICHES */

    21: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",

    22: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",

    23: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=900&q=85",

    24: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=900&q=85",

    25: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Club%20Sandwich.jpg",

    26: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto%2Cq_auto%2Cfl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/23/f9b87be5-eb28-4dce-8fac-9eb6b459a696_1336217.jpg",

    27: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=900&q=85",

    28: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=85",

    29: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?auto=format&fit=crop&w=900&q=85",

    30: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?auto=format&fit=crop&w=900&q=85",


    /* CHINESE */

    31: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=85",

    32: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=900&q=85",

    33: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",

    34: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",

    35: "https://www.manuhar.co.nz/assets/img/try1.jpg",

    36: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=85",

    37: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Manchurian.jpg",

    38: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Honey%20Chilli%20Potatoes.JPG",
    
    39: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85",

    40: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hakka%20noodles%20combo-roadside%20stall-Dacre%27s%20lane-West%20Bengal-01.jpg",


    /* INDIAN */

    41: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",

    42: "https://givukaorkjkksslrzuum.supabase.co/storage/v1/object/public/recipe-images/recipes/kadai-paneer.jpg",

    43: "https://myfoodstory.com/wp-content/uploads/2021/10/Paneer-Butter-Masala-1-2.jpg",

    44: "https://cdn.prod.website-files.com/6410d124f7c566b2f6590ad3/6413c1b01aacf02333ec09ee_Sona%20the%20Indian%20Kitchen%20-4%20compressed.png",

    45: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2025/11/11/3223a132-0274-4010-91af-f80a5f6ebf6f_909a1ffd-8ecb-4333-9305-88c81cba4f40.jpg",

    46: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85",

    47: "https://b.zmtcdn.com/data/pictures/chains/3/21629633/859502283e71d656c90c559ad054c14d.jpg",

    48: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2025/2/16/dde749d2-67b2-42b8-a877-3fc05071dba3_2a5a1119-588e-451b-a939-07c438a97741.jpg",

    49: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=900",

    50: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chole%20Kulche%20%28Indian%20Food%29.jpg",


    /* BEVERAGES */

    51: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",

    52: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",

    53: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=85",

    54: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85",

    55: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=900&q=85",

    56: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",

    57: "https://assets.touch2success.com/static/c5da8c3b32b8cc9fc8d76de87e85ec0a/img/1763397327phpKNHVPV.jpg",

    58: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",


    /* DESSERTS */

    59: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chocolate%20Brownie.jpg",

    60: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Brownie%20with%20chocolate%20ice-cream.jpg"
};


/* =====================================================
   APPLY IMAGE MAP
   IMPORTANT — THIS RUNS ONLY AFTER correctedImages EXISTS
===================================================== */

menuItems.forEach(item => {

    if (correctedImages[item.id]) {
        item.image = correctedImages[item.id];
    }

});
/* =====================================================
   CAFÉ LUMIÈRE — FUNCTIONALITY
===================================================== */

let cart = [];


/* =====================================================
   DISPLAY MENU
===================================================== */

function displayMenu(items) {

    const foodGrid = document.getElementById("foodGrid");

    if (!foodGrid) return;

    foodGrid.innerHTML = "";

    if (items.length === 0) {
        foodGrid.innerHTML = `
            <div class="no-results">
                <h3>No dishes found</h3>
                <p>Try another search or category.</p>
            </div>
        `;
        return;
    }

    items.forEach(item => {

        const card = document.createElement("div");
        card.className = "food-card";

        card.innerHTML = `
            <div class="food-image"
                 onclick="showDishDetails(${item.id})">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    loading="lazy"
                >

            </div>

            <div class="food-info">

                <h3 onclick="showDishDetails(${item.id})">
                    ${item.name}
                </h3>

                <strong>₹${item.price}</strong>

                <button
                    type="button"
                    onclick="addToCartById(${item.id})">
                    Add to Cart
                </button>

            </div>
        `;

        foodGrid.appendChild(card);
    });
}


/* =====================================================
   CATEGORY LABEL
===================================================== */

function getCategoryLabel(category) {

    const labels = {
        starter: "Snacks",
        pizza: "Pizza & Pasta",
        burger: "Burgers & Sandwiches",
        chinese: "Chinese",
        indian: "Indian",
        drinks: "Beverages",
        dessert: "Desserts"
    };

    return labels[category] || "Café Special";
}


/* =====================================================
   DISH DETAILS
===================================================== */

function showDishDetails(id) {

    const item = menuItems.find(food => food.id === id);

    if (!item) return;

    const modal = document.getElementById("dishModal");

    if (!modal) return;

    const detailImage = document.getElementById("detailImage");
    const detailCategory = document.getElementById("detailCategory");
    const detailName = document.getElementById("detailName");
    const detailPrice = document.getElementById("detailPrice");
    const detailDescription = document.getElementById("detailDescription");
    const detailCalories = document.getElementById("detailCalories");
    const detailProtein = document.getElementById("detailProtein");
    const detailCarbs = document.getElementById("detailCarbs");
    const detailFat = document.getElementById("detailFat");
    const detailIngredients = document.getElementById("detailIngredients");
    const detailPreparation = document.getElementById("detailPreparation");
    const detailAllergens = document.getElementById("detailAllergens");
    const detailAddButton = document.getElementById("detailAddButton");

    if (detailImage) {
        detailImage.src = item.image;
        detailImage.alt = item.name;
    }

    if (detailCategory) {
        detailCategory.textContent = getCategoryLabel(item.category);
    }

    if (detailName) {
        detailName.textContent = item.name;
    }

    if (detailPrice) {
        detailPrice.textContent = `₹${item.price}`;
    }

    if (detailDescription) {
        detailDescription.textContent = item.description;
    }

    if (detailCalories) {
        detailCalories.textContent = item.nutrition.calories;
    }

    if (detailProtein) {
        detailProtein.textContent = `${item.nutrition.protein}g`;
    }

    if (detailCarbs) {
        detailCarbs.textContent = `${item.nutrition.carbs}g`;
    }

    if (detailFat) {
        detailFat.textContent = `${item.nutrition.fat}g`;
    }

    if (detailIngredients) {
        detailIngredients.textContent = item.ingredients;
    }

    if (detailPreparation) {
        detailPreparation.textContent = item.preparation;
    }

    if (detailAllergens) {
        detailAllergens.textContent = item.allergens;
    }

    if (detailAddButton) {

        detailAddButton.onclick = function () {

            addToCartById(item.id);
            closeDishDetails();

        };
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}


/* =====================================================
   CLOSE DISH DETAILS
===================================================== */

function closeDishDetails() {

    const modal = document.getElementById("dishModal");

    if (!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCartById(id) {

    const menuItem =
        menuItems.find(item => item.id === id);

    if (!menuItem) return;

    const existingItem =
        cart.find(item => item.id === id);

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1
        });
    }

    renderCart();

    showAddedMessage(menuItem.name);
}


/* =====================================================
   COMPATIBILITY ADD TO CART
===================================================== */

function addToCart(name, price) {

    const menuItem =
        menuItems.find(item => item.name === name);

    if (menuItem) {

        addToCartById(menuItem.id);

        return;
    }

    const existingItem =
        cart.find(item => item.name === name);

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            id: Date.now(),
            name: name,
            price: price,
            quantity: 1
        });
    }

    renderCart();
}


/* =====================================================
   ADDED TO CART MESSAGE
===================================================== */

function showAddedMessage(name) {

    let toast =
        document.getElementById("cartToast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "cartToast";

        toast.style.position = "fixed";
        toast.style.left = "50%";
        toast.style.bottom = "30px";

        toast.style.transform =
            "translateX(-50%) translateY(15px)";

        toast.style.padding = "12px 20px";
        toast.style.borderRadius = "30px";
        toast.style.background = "#34251e";
        toast.style.color = "#fffaf2";
        toast.style.fontSize = "13px";
        toast.style.fontWeight = "600";

        toast.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.2)";

        toast.style.zIndex = "9999";
        toast.style.opacity = "0";
        toast.style.pointerEvents = "none";

        toast.style.transition =
            "all 0.25s ease";

        document.body.appendChild(toast);
    }

    toast.textContent =
        `${name} added to cart`;

    requestAnimationFrame(function () {

        toast.style.opacity = "1";

        toast.style.transform =
            "translateX(-50%) translateY(0)";
    });

    clearTimeout(window.cafeToastTimer);

    window.cafeToastTimer =
        setTimeout(function () {

            toast.style.opacity = "0";

            toast.style.transform =
                "translateX(-50%) translateY(15px)";

        }, 1600);
}


/* =====================================================
   RENDER CART
===================================================== */

function renderCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");

    const cartCount =
        document.getElementById("cartCount");

    const headerCartCount =
        document.getElementById("headerCartCount");

    let total = 0;
    let totalQuantity = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;
        totalQuantity += item.quantity;

    });

    if (cartCount) {
        cartCount.textContent = totalQuantity;
    }

    if (headerCartCount) {
        headerCartCount.textContent = totalQuantity;
    }

    if (cartTotal) {
        cartTotal.textContent = `₹${total}`;
    }

    if (!cartItems) return;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty.</p>
                <span>Add dishes from the menu to get started.</span>
            </div>
        `;

        return;
    }

    cartItems.innerHTML = "";

    cart.forEach(item => {

        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <div class="cart-item-info">

                <h4>${item.name}</h4>

                <span>₹${item.price}</span>

            </div>

            <div class="cart-item-controls">

                <button
                    type="button"
                    onclick="decreaseQuantity(${item.id})">
                    −
                </button>

                <span>${item.quantity}</span>

                <button
                    type="button"
                    onclick="increaseQuantity(${item.id})">
                    +
                </button>

                <button
                    type="button"
                    class="remove-item"
                    onclick="removeFromCart(${item.id})">
                    ×
                </button>

            </div>
        `;

        cartItems.appendChild(cartItem);
    });
}


/* =====================================================
   INCREASE QUANTITY
===================================================== */

function increaseQuantity(id) {

    const item =
        cart.find(cartItem => cartItem.id === id);

    if (!item) return;

    item.quantity += 1;

    renderCart();
}


/* =====================================================
   DECREASE QUANTITY
===================================================== */

function decreaseQuantity(id) {

    const item =
        cart.find(cartItem => cartItem.id === id);

    if (!item) return;

    item.quantity -= 1;

    if (item.quantity <= 0) {

        cart =
            cart.filter(cartItem =>
                cartItem.id !== id
            );
    }

    renderCart();
}


/* =====================================================
   REMOVE ITEM
===================================================== */

function removeFromCart(id) {

    cart =
        cart.filter(item =>
            item.id !== id
        );

    renderCart();
}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    const cartPanel =
        document.getElementById("cartPanel");

    const cartOverlay =
        document.getElementById("cartOverlay");

    if (cartPanel) {
        cartPanel.classList.add("active");
    }

    if (cartOverlay) {
        cartOverlay.classList.add("active");
    }

    document.body.style.overflow = "hidden";

    renderCart();
}


/* =====================================================
   CLOSE CART
===================================================== */

function closeCart() {

    const cartPanel =
        document.getElementById("cartPanel");

    const cartOverlay =
        document.getElementById("cartOverlay");

    if (cartPanel) {
        cartPanel.classList.remove("active");
    }

    if (cartOverlay) {
        cartOverlay.classList.remove("active");
    }

    document.body.style.overflow = "";
}


/* =====================================================
   CALL ATTENDANT
===================================================== */

function callAttendant() {

    if (cart.length === 0) {

        alert(
            "Please add at least one dish to your cart first."
        );

        return;
    }

    let orderSummary = "";

    let total = 0;

    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        orderSummary +=
            `${item.name} × ${item.quantity} — ₹${itemTotal}\n`;
    });

    alert(
        `Your Selection\n\n${orderSummary}\nTotal: ₹${total}\n\nPlease show this cart to the café attendant to place your order.`
    );
}


/* =====================================================
   FILTER MENU
===================================================== */

function filterMenu(category, button) {

    let filteredItems;

    if (category === "all") {

        filteredItems = menuItems;

    } else {

        filteredItems =
            menuItems.filter(item =>
                item.category === category
            );
    }

    displayMenu(filteredItems);

    const categoryButtons =
        document.querySelectorAll(".category-btn");

    categoryButtons.forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    const searchInput =
        document.getElementById("searchInput");

    if (searchInput) {
        searchInput.value = "";
    }
}


/* =====================================================
   SEARCH MENU
===================================================== */

function searchMenu() {

    const searchInput =
        document.getElementById("searchInput");

    if (!searchInput) return;

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();

    const filteredItems =
        menuItems.filter(item => {

            const name =
                item.name.toLowerCase();

            const category =
                getCategoryLabel(item.category)
                    .toLowerCase();

            const description =
                item.description.toLowerCase();

            return (
                name.includes(searchTerm) ||
                category.includes(searchTerm) ||
                description.includes(searchTerm)
            );
        });

    displayMenu(filteredItems);
}


/* =====================================================
   SEARCH INPUT EVENT
===================================================== */

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchMenu
    );
}


/* =====================================================
   CLOSE MODAL WHEN BACKGROUND CLICKED
===================================================== */

const dishModal =
    document.getElementById("dishModal");

if (dishModal) {

    dishModal.addEventListener(
        "click",
        function (event) {

            if (event.target === dishModal) {
                closeDishDetails();
            }

        }
    );
}


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeDishDetails();
            closeCart();

        }
    }
);


/* =====================================================
   CART BUTTONS
===================================================== */

const cartButton =
    document.getElementById("cartButton");

if (cartButton) {

    cartButton.addEventListener(
        "click",
        openCart
    );
}


const headerCartButton =
    document.getElementById("headerCartButton");

if (headerCartButton) {

    headerCartButton.addEventListener(
        "click",
        openCart
    );
}


/* =====================================================
   CART OVERLAY
===================================================== */

const cartOverlay =
    document.getElementById("cartOverlay");

if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCart
    );
}


/* =====================================================
   INITIAL PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayMenu(menuItems);

        renderCart();

    }
);