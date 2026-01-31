// ========================================
// PRODUCT DATA - 24 Products, 4 Categories
// ========================================

const products = [
    // Electronics
    { name: "Bluetooth Headphones", price: 2499, rating: 4.5, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop" },
    { name: "Smart Watch", price: 8999, rating: 4.8, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop" },
    { name: "Power Bank", price: 1799, rating: 4.3, category: "Electronics", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=200&fit=crop" },
    { name: "USB Charger", price: 899, rating: 4.6, category: "Electronics", image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300&h=200&fit=crop" },
    { name: "Wireless Mouse", price: 799, rating: 4.2, category: "Electronics", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop" },
    { name: "Gaming Keyboard", price: 4499, rating: 4.7, category: "Electronics", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300&h=200&fit=crop" },

    // Clothing
    { name: "Denim Jacket", price: 2299, rating: 4.4, category: "Clothing", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=200&fit=crop" },
    { name: "Cotton T-Shirt", price: 599, rating: 4.1, category: "Clothing", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop" },
    { name: "Chino Pants", price: 1499, rating: 4.3, category: "Clothing", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=200&fit=crop" },
    { name: "Wool Sweater", price: 1999, rating: 4.6, category: "Clothing", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=200&fit=crop" },
    { name: "Running Sneakers", price: 4999, rating: 4.8, category: "Clothing", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop" },
    { name: "Leather Belt", price: 899, rating: 4.2, category: "Clothing", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop" },

    // Home & Kitchen
    { name: "Cookware Set", price: 5499, rating: 4.7, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" },
    { name: "Coffee Maker", price: 2999, rating: 4.4, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=200&fit=crop" },
    { name: "Memory Foam Pillow", price: 1299, rating: 4.5, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=300&h=200&fit=crop" },
    { name: "Frying Pan", price: 849, rating: 4.3, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=300&h=200&fit=crop" },
    { name: "Storage Containers", price: 999, rating: 4.6, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop" },
    { name: "Desk Lamp", price: 1599, rating: 4.4, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=200&fit=crop" },

    // Sports & Outdoors
    { name: "Yoga Mat", price: 799, rating: 4.5, category: "Sports & Outdoors", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=200&fit=crop" },
    { name: "Dumbbells Set", price: 7999, rating: 4.8, category: "Sports & Outdoors", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop" },
    { name: "Camping Tent", price: 5999, rating: 4.6, category: "Sports & Outdoors", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=300&h=200&fit=crop" },
    { name: "Water Bottle", price: 699, rating: 4.4, category: "Sports & Outdoors", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=200&fit=crop" },
    { name: "Resistance Bands", price: 499, rating: 4.3, category: "Sports & Outdoors", image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=300&h=200&fit=crop" },
    { name: "Hiking Backpack", price: 2499, rating: 4.7, category: "Sports & Outdoors", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop" }
];


// ========================================
// GET HTML ELEMENTS
// ========================================

const productsContainer = document.getElementById('products-container');
const categoryFilter = document.getElementById('category-filter');
const sortOptions = document.getElementById('sort-options');


// ========================================
// HELPER FUNCTIONS
// ========================================

// Generate star symbols based on rating
function getStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
            stars += '★';  // Full star
        } else {
            stars += '☆';  // Empty star
        }
    }
    return stars;
}

// Format price in Indian Rupees
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}


// ========================================
// MAIN FUNCTIONS
// ========================================

// 1. Add categories to filter dropdown
function populateCategories() {
    // Get unique categories
    const categories = [];
    for (let i = 0; i < products.length; i++) {
        if (!categories.includes(products[i].category)) {
            categories.push(products[i].category);
        }
    }
    
    // Add each category as an option
    for (let i = 0; i < categories.length; i++) {
        const option = document.createElement('option');
        option.value = categories[i];
        option.textContent = categories[i];
        categoryFilter.appendChild(option);
    }
}


// 2. Create a product card HTML
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <p class="product-category">${product.category}</p>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${formatPrice(product.price)}</p>
            <p class="product-rating">${getStars(product.rating)} (${product.rating})</p>
        </div>
    `;
    
    return card;
}


// 3. Display products on the page
function renderProducts(productList) {
    // Clear existing products
    productsContainer.innerHTML = '';
    
    // Add each product
    for (let i = 0; i < productList.length; i++) {
        const card = createProductCard(productList[i]);
        productsContainer.appendChild(card);
    }
}


// 4. Filter products by category
function filterProducts(productList, category) {
    if (category === 'all') {
        return productList.slice();  // Return copy of all products
    }
    
    const filtered = [];
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].category === category) {
            filtered.push(productList[i]);
        }
    }
    return filtered;
}


// 5. Sort products
function sortProducts(productList, sortBy) {
    // Make a copy so we don't change original
    const sorted = productList.slice();
    
    if (sortBy === 'name-asc') {
        sorted.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });
    }
    else if (sortBy === 'name-desc') {
        sorted.sort(function(a, b) {
            return b.name.localeCompare(a.name);
        });
    }
    else if (sortBy === 'price-asc') {
        sorted.sort(function(a, b) {
            return a.price - b.price;
        });
    }
    else if (sortBy === 'price-desc') {
        sorted.sort(function(a, b) {
            return b.price - a.price;
        });
    }
    else if (sortBy === 'rating-asc') {
        sorted.sort(function(a, b) {
            return a.rating - b.rating;
        });
    }
    else if (sortBy === 'rating-desc') {
        sorted.sort(function(a, b) {
            return b.rating - a.rating;
        });
    }
    
    return sorted;
}


// 6. Update display when filter or sort changes
function updateDisplay() {
    const category = categoryFilter.value;
    const sortBy = sortOptions.value;
    
    // Step 1: Filter
    let result = filterProducts(products, category);
    
    // Step 2: Sort
    result = sortProducts(result, sortBy);
    
    // Step 3: Display
    renderProducts(result);
}


// ========================================
// EVENT LISTENERS
// ========================================

categoryFilter.addEventListener('change', updateDisplay);
sortOptions.addEventListener('change', updateDisplay);


// ========================================
// START THE APP
// ========================================

populateCategories();
renderProducts(products);
