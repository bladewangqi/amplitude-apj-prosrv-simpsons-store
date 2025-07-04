// Global Products Data Array
window.PRODUCTS_DATA = [
    {
        sku: 'BP063-0001',
        name: 'Bart Simpsons Toy',
        price: 50,
        description: '5 inch high | Organic Plastic Material',
        image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
        brand: 'Brand Bart',
        category: 'Toys & Games',
        rating: 4.2,
        ratingCount: 5
    },
    {
        sku: 'BP063-0002',
        name: 'Lisa Simpsons Toy',
        price: 99.99,
        description: '5 inch high | Organic Plastic Material',
        image: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png',
        brand: 'Brand Lisa',
        category: 'Toys & Games',
        rating: 4.1,
        ratingCount: 5
    },
    {
        sku: 'BP063-0003',
        name: 'Homer Simpsons Toy',
        price: 150,
        description: '5 inch high | Organic Plastic Material',
        image: 'https://static.onecms.io/wp-content/uploads/sites/6/2010/06/homer-simpson_235.jpg',
        brand: 'Brand Homer',
        category: 'Toys & Games',
        rating: 4.3,
        ratingCount: 5
    },
    {
        sku: 'BP063-0004',
        name: 'Marge Simpsons Toy',
        price: 75,
        description: '5 inch high | Organic Plastic Material',
        image: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png',
        brand: 'Brand Marge',
        category: 'Toys & Games',
        rating: 4.5,
        ratingCount: 5
    },
    {
        sku: 'BP063-0005',
        name: 'Maggie Simpson Toy',
        price: 35,
        description: '3 inch high | Organic Plastic Material | Includes Pacifier',
        image: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png',
        brand: 'Brand Maggie',
        category: 'Toys & Games',
        rating: 4.4,
        ratingCount: 5
    },
    {
        sku: 'BP063-0006',
        name: 'Mr. Burns Toy',
        price: 125,
        description: '6 inch high | Premium Plastic Material | Collectible Edition',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Mr_Burns.png',
        brand: 'Brand Burns',
        category: 'Toys & Games',
        rating: 4.0,
        ratingCount: 5
    },
    {
        sku: 'BP063-0007',
        name: 'Ralph Wiggum Toy',
        price: 45,
        description: '4 inch high | Organic Plastic Material | Super Fun',
        image: 'https://upload.wikimedia.org/wikipedia/en/1/14/Ralph_Wiggum.png',
        brand: 'Brand Ralph',
        category: 'Toys & Games',
        rating: 4.6,
        ratingCount: 5
    },
    {
        sku: 'BP063-0008',
        name: 'Duffman Toy',
        price: 85,
        description: '5 inch high | Premium Plastic Material | Action Figure',
        image: 'https://upload.wikimedia.org/wikipedia/en/3/31/Duffman_%28The_Simpsons%29.png',
        brand: 'Brand Duffman',
        category: 'Toys & Games',
        rating: 4.7,
        ratingCount: 5
    }
];

// Shopping Cart functionality
window.SHOPPING_CART = [];

// Helper function to get product by SKU
window.getProductBySku = function(sku) {
    return window.PRODUCTS_DATA.find(product => product.sku === sku);
};

// Helper function to get all products
window.getAllProducts = function() {
    return window.PRODUCTS_DATA;
};

// Shopping cart functions
window.getCart = function() {
    const savedCart = localStorage.getItem('simpsons_cart');
    if (savedCart) {
        window.SHOPPING_CART = JSON.parse(savedCart);
    }
    return window.SHOPPING_CART;
};

window.saveCart = function() {
    localStorage.setItem('simpsons_cart', JSON.stringify(window.SHOPPING_CART));
};

window.addItemToCart = function(sku, quantity = 1) {
    const product = window.getProductBySku(sku);
    if (!product) {
        console.error('Product not found:', sku);
        return false;
    }

    const existingItem = window.SHOPPING_CART.find(item => item.sku === sku);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        window.SHOPPING_CART.push({
            sku: sku,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    window.saveCart();
    window.updateCartBadge();
    return true;
};

window.removeItemFromCart = function(sku) {
    window.SHOPPING_CART = window.SHOPPING_CART.filter(item => item.sku !== sku);
    window.saveCart();
    window.updateCartBadge();
};

window.updateItemQuantity = function(sku, quantity) {
    const item = window.SHOPPING_CART.find(item => item.sku === sku);
    if (item) {
        if (quantity <= 0) {
            window.removeItemFromCart(sku);
        } else {
            item.quantity = quantity;
            window.saveCart();
            window.updateCartBadge();
        }
    }
};

window.getCartItemCount = function() {
    return window.SHOPPING_CART.reduce((total, item) => total + item.quantity, 0);
};

window.getCartTotal = function() {
    return window.SHOPPING_CART.reduce((total, item) => total + (item.price * item.quantity), 0);
};

window.clearCart = function() {
    window.SHOPPING_CART = [];
    window.saveCart();
    window.updateCartBadge();
};

window.updateCartBadge = function() {
    const badge = document.getElementById('cart-badge');
    const count = window.getCartItemCount();
    if (badge) {
        badge.textContent = count;
        if (count > 0) {
            badge.classList.add('show');
        } else {
            badge.classList.remove('show');
        }
    }
};

// Helper function to generate product HTML for listing
window.generateProductListHTML = function(product) {
    return `
        <li class="list-group-item">
            <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                <div class="media-body order-2 order-lg-1">
                    <h5 class="mt-0 font-weight-bold mb-2">${product.name}</h5>
                    <p class="font-italic text-muted mb-0 small">${product.description}</p>
                    <div class="d-flex align-items-center justify-content-between mt-1">
                        <h6 class="font-weight-bold my-2">$${product.price}</h6>
                        <ul class="list-inline small">
                            ${generateStarRating(product.rating)}
                        </ul>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary" onclick="addToCart('${product.sku}')">Add to cart</button>
                    </div>
                </div>
                <img src="${product.image}" onclick="viewProductDetail('${product.sku}')" alt="${product.name}" width="200" class="ml-lg-5 order-1 order-lg-2" style="cursor: pointer;">
            </div>
        </li>
    `;
};

// Helper function to generate star rating HTML
window.generateStarRating = function(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>';
        } else {
            stars += '<li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>';
        }
    }
    return stars;
};

// Universal function to add item to cart
window.addToCart = function(sku) {
    const success = window.addItemToCart(sku, 1);
    if (success) {
        // Show a brief success message
        const product = window.getProductBySku(sku);
        if (product) {
            alert(`${product.name} added to cart!`);
        }
    }
};

// Universal function to handle product detail view navigation
window.viewProductDetail = function(sku) {
    const href = window.location.href;
    const newHref = href.replace(/\/[^\/]*\.html.*$/, '/product.html?sku=' + sku);
    window.location.href = newHref;
};

// Universal function to buy now
window.buyNow = function(sku) {
    // Add item to cart
    const success = window.addItemToCart(sku, 1);
    if (success) {
        // Redirect to checkout page
        window.location.href = 'checkout.html';
    }
};

// Function to load product details on product page
window.loadProductDetails = function(sku) {
    const product = window.getProductBySku(sku);
    if (!product) {
        console.error('Product not found:', sku);
        return;
    }

    // Update product details on the page
    const nameElement = document.getElementById("product-name");
    const priceElement = document.getElementById("price-value");
    const thumbImageElement = document.getElementById("thumb-image");
    const bigImageElement = document.getElementById("big-image");

    if (nameElement) nameElement.innerHTML = product.name;
    if (priceElement) priceElement.innerHTML = '$' + product.price;
    if (thumbImageElement) thumbImageElement.src = product.image;
    if (bigImageElement) bigImageElement.src = product.image;
};

// Function to render all products in a container
window.renderProductList = function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }

    const products = window.getAllProducts();
    const productsHTML = products.map(product => window.generateProductListHTML(product)).join('');
    container.innerHTML = productsHTML;
};

// Initialize cart on page load
window.addEventListener('load', function() {
    window.getCart(); // Load cart from localStorage
    window.updateCartBadge(); // Update badge display
}); 